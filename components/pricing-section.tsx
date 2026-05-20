'use client'

import React from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

import { OfferCountdown } from '@/components/offer-countdown'

type Service = {
  key: string
  name: string
  description: string
}

const services: Service[] = [
  {
    key: 'fullstack_dev',
    name: 'Fullstack Development',
    description: 'Custom web applications and complex systems.',
  },
  {
    key: 'crm_management',
    name: 'CRM Management',
    description: 'Ongoing management and optimization of your CRM.',
  },
  {
    key: 'website_management',
    name: 'Website Management',
    description: 'Maintenance, updates, and support for existing sites.',
  },
  {
    key: 'systems_creation',
    name: 'Systems Creation',
    description: 'Building custom automated systems for your business.',
  },
]

function ServiceList({
  included,
}: {
  included: Set<string> | 'all' | 'custom'
}) {
  return (
    <ul className="space-y-4 text-p-small">
      {services.map((s) => {
        const isIncluded =
          included === 'all'
            ? true
            : included instanceof Set
              ? included.has(s.key)
              : false

        if (included === 'custom' && !['fullstack_dev', 'systems_creation'].includes(s.key)) return null;
        if (included !== 'all' && included !== 'custom' && !included.has(s.key)) return null;

        return (
          <li key={s.key} className="flex gap-4">
            <span className="text-accent mt-[2px]">✓</span>
            <span>
              <span className="text-foreground font-light">{s.name}</span>
              <span className="block text-muted text-sm mt-1">
                {s.description}
              </span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}

function PlanCard({
  title,
  price,
  badge,
  description,
  included,
  cta,
  note,
}: {
  title: string
  price: string
  badge?: string
  description: string
  included: Set<string> | 'all' | 'custom'
  cta: string
  note?: string
}) {
  return (
    <div
      className="group border-[0.5px] border-[#C6A85A]/25 p-10 relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,168,90,0.18)_0%,_transparent_55%),linear-gradient(to_bottom,rgba(31,58,52,0.85),rgba(15,26,23,0.95))] shadow-[0_0_0_1px_rgba(198,168,90,0.08),0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_0_1px_rgba(198,168,90,0.2),0_40px_100px_rgba(198,168,90,0.2)] flex flex-col h-full"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(198,168,90,0.25)_0%,transparent_55%),radial-gradient(circle_at_85%_30%,rgba(15,26,23,0)_0%,rgba(198,168,90,0.1)_50%,transparent_75%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-px bg-gradient-to-br from-[#C6A85A]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {badge && (
        <div className="absolute top-6 right-6 bg-[#C6A85A]/20 border border-[#C6A85A]/40 text-accent text-[10px] uppercase tracking-widest px-3 py-2 font-semibold backdrop-blur shadow-[0_0_15px_rgba(198,168,90,0.2)] group-hover:shadow-[0_0_25px_rgba(198,168,90,0.4)] transition-shadow duration-500">
          {badge}
        </div>
      )}

      <h3 className="relative z-10 section-card-title group-hover:text-white transition-colors mb-6">
        {title}
      </h3>
      <div className="relative z-10 flex items-baseline gap-3 mb-6">
        <div className="text-foreground text-5xl font-serif font-medium tracking-tighter drop-shadow-[0_0_10px_rgba(198,168,90,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(198,168,90,0.3)] transition-all">
          {price}
        </div>
        {price !== 'Custom' && (
          <div className="text-label-muted">
            USD / month
          </div>
        )}
      </div>
      <p className="relative z-10 text-p-small mb-6">
        {description}
      </p>

      {note && (
        <p className="relative z-10 text-accent text-sm leading-relaxed font-light mb-6 italic">
          {note}
        </p>
      )}

      <div className="relative z-10 mt-auto pt-10">
        <div className="text-label mb-6">
          Focus Areas
        </div>
        
        <ServiceList
          included={included}
        />
      </div>

      <div className="relative z-10 mt-10">
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-button-cta text-[#EDE8D0] px-8 py-4 rounded-none btn-text hover:bg-[#E0C878] transition-colors duration-500 w-full ring-1 ring-[#C6A85A]/35 hover:ring-[#C6A85A]/55"
        >
          {cta}
        </a>
      </div>
    </div>
  )
}

export function PricingSection({ showTitle = true, showBorder = true }: { showTitle?: boolean, showBorder?: boolean }) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 })
  const crmManagementIncluded = new Set(['crm_management'])
  const websiteManagementIncluded = new Set(['website_management'])

  return (
    <section
      id="pricing"
      ref={ref}
      className={`relative section-spacing px-4 md:px-8 scroll-mt-24 overflow-hidden ${showBorder ? 'border-t-[0.5px] border-border' : ''}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.18)_0%,transparent_55%),radial-gradient(circle_at_0%_55%,rgba(15,26,23,0)_0%,rgba(198,168,90,0.1)_45%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        {showTitle && (
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-4 mb-8">
                <div className="h-[1px] w-16 bg-[#C6A85A]/40" />
                <h2 className="section-title">
                  Monthly Retainers & Custom Systems
                </h2>
              </div>
              <p className="text-p">
                Professional management for your existing assets, and custom-built systems for your future growth.
              </p>
            </div>
            
            <div className="max-w-xs space-y-4">
              <p className="text-label-muted leading-relaxed">
                We focus on fullstack development and creating integrated systems that work for you.
              </p>
              <div className="h-[0.5px] w-full bg-border" />
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <PlanCard
            title="CRM Management"
            price="$150"
            description="Complete oversight and optimization of your CRM systems."
            included={crmManagementIncluded}
            cta="Start CRM Retainer"
          />
          <PlanCard
            title="Website Management"
            price="$100"
            badge="For Existing Sites"
            description="Reliable maintenance and updates for your current web presence."
            included={websiteManagementIncluded}
            cta="Start Website Retainer"
          />
          <PlanCard
            title="Custom Systems"
            price="Custom"
            description="Fullstack development, website creation, and CRM builds."
            included="custom"
            cta="Book Discovery Call"
            note="Price based on work volume and timeline. Faster delivery or higher complexity will adjust the investment."
          />
        </div>
      </div>
    </section>
  )
}

