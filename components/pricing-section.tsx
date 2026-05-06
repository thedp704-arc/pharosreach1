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
    key: 'website_creation',
    name: 'Website creation',
    description: 'Design + development for a modern, fast website.',
  },
  {
    key: 'website_maintenance',
    name: 'Website maintenance',
    description: 'Updates, fixes, and ongoing support.',
  },
  {
    key: 'crm_setup',
    name: 'CRM setup',
    description: 'Configure CRM to capture and manage leads.',
  },
  {
    key: 'ecommerce_building',
    name: 'E-commerce building',
    description: 'Build your storefront and connect key integrations.',
  },
  {
    key: 'data_handling',
    name: 'Data handling',
    description: 'Set up data flows and analytics readiness.',
  },
  {
    key: 'payment_gateway_setup',
    name: 'Payment gateway setup',
    description: 'Integrate and test payment gateways safely.',
  },
]

function ServiceList({
  included,
  highlightMaintenanceNote,
}: {
  included: Set<string> | 'any2' | 'any4' | 'all'
  highlightMaintenanceNote?: boolean
}) {
  return (
    <ul className="space-y-3 text-[#8FA39B] font-light">
      {services.map((s) => {
        const isSelectionMode = included === 'any2' || included === 'any4'
        const isIncluded =
          included === 'all'
            ? true
            : included instanceof Set
              ? included.has(s.key)
              : false

        return (
          <li key={s.key} className="flex gap-3">
            <span
              className={
                isSelectionMode
                  ? 'text-[#C6A85A]/70 mt-[2px]'
                  : isIncluded
                    ? 'text-accent mt-[2px]'
                    : 'text-[#C6A85A]/40 mt-[2px]'
              }
            >
              ✓
            </span>
            <span className={isSelectionMode ? 'text-[#8FA39B]' : ''}>
              <span className="text-foreground font-light">{s.name}</span>
              <span className="block text-[#8FA39B] text-sm mt-1">
                {s.description}
              </span>
              {highlightMaintenanceNote && s.key === 'website_maintenance' && (
                <span className="block text-sm mt-2 text-accent">
                  Next month maintenance is $100/month.
                </span>
              )}
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
  highlightMaintenanceNote,
}: {
  title: string
  price: string
  badge?: string
  description: string
  included: Set<string> | 'any2' | 'any4' | 'all'
  cta: string
  note?: string
  highlightMaintenanceNote?: boolean
}) {
  return (
    <div
      className="group border-[0.5px] border-[#C6A85A]/25 p-8 relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,168,90,0.18)_0%,_transparent_55%),linear-gradient(to_bottom,rgba(31,58,52,0.85),rgba(15,26,23,0.95))] shadow-[0_0_0_1px_rgba(198,168,90,0.08),0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_0_1px_rgba(198,168,90,0.2),0_40px_100px_rgba(198,168,90,0.2)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(198,168,90,0.25)_0%,transparent_55%),radial-gradient(circle_at_85%_30%,rgba(15,26,23,0)_0%,rgba(198,168,90,0.1)_50%,transparent_75%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-px bg-gradient-to-br from-[#C6A85A]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {badge && (
        <div className="absolute top-5 right-5 bg-[#C6A85A]/20 border border-[#C6A85A]/40 text-accent text-xs uppercase tracking-widest px-3 py-2 font-semibold backdrop-blur shadow-[0_0_15px_rgba(198,168,90,0.2)] group-hover:shadow-[0_0_25px_rgba(198,168,90,0.4)] transition-shadow duration-500">
          {badge}
        </div>
      )}

      <h3 className="relative z-10 font-serif text-foreground text-2xl font-medium tracking-tighter group-hover:text-white transition-colors">
        {title}
      </h3>
      <div className="relative z-10 mt-4 flex items-baseline gap-3">
        <div className="text-foreground text-4xl font-serif font-medium tracking-tighter drop-shadow-[0_0_10px_rgba(198,168,90,0.15)] group-hover:drop-shadow-[0_0_20px_rgba(198,168,90,0.3)] transition-all">
          {price}
        </div>
        <div className="text-[#8FA39B] text-sm font-light uppercase tracking-[0.15em]">
          USD
        </div>
      </div>
      <p className="relative z-10 text-[#8FA39B] text-base leading-relaxed font-light mt-4">
        {description}
      </p>

      {note && (
        <p className="relative z-10 text-accent text-sm leading-relaxed font-light mt-4">
          {note}
        </p>
      )}

      <div className="relative z-10 mt-8">
        <div className="text-[#8FA39B] text-xs uppercase tracking-[0.15em] font-semibold mb-4">
          Services
        </div>
        {included === 'any2' && (
          <p className="text-[#8FA39B] text-sm font-light mb-4">
            Choose any <span className="text-foreground font-light">2</span> of the
            following services.
          </p>
        )}
        {included === 'any4' && (
          <p className="text-[#8FA39B] text-sm font-light mb-4">
            Choose any <span className="text-foreground font-light">4</span> of
            the following services.
          </p>
        )}
        {included === 'all' && (
          <p className="text-[#8FA39B] text-sm font-light mb-4">
            Includes <span className="text-foreground font-light">all 6</span>{" "}
            services.
          </p>
        )}

        {/* For selection modes, we still list all services (muted) so clients can see options. */}
        <ServiceList
          included={included === 'all' ? 'all' : included}
          highlightMaintenanceNote={highlightMaintenanceNote}
        />
      </div>

      <div className="relative z-10 mt-8">
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-button-cta text-[#EDE8D0] px-6 py-3 rounded-none text-xs uppercase tracking-widest font-semibold hover:bg-[#E0C878] transition-colors duration-500 w-fit ring-1 ring-[#C6A85A]/35 hover:ring-[#C6A85A]/55"
        >
          {cta}
        </a>
      </div>
    </div>
  )
}

export function PricingSection({ showTitle = true, showBorder = true }: { showTitle?: boolean, showBorder?: boolean }) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 })
  const basicIncluded = 'any2' as const
  const deluxeIncluded = 'any4' as const
  const premierIncluded = 'all' as const

  return (
    <section
      id="pricing"
      ref={ref}
      className={`relative py-40 md:py-48 px-4 md:px-8 scroll-mt-24 overflow-hidden ${showBorder ? 'border-t-[0.5px] border-[#C6A85A]/20' : ''}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.18)_0%,transparent_55%),radial-gradient(circle_at_0%_60%,rgba(15,26,23,0)_0%,rgba(198,168,90,0.06)_40%,transparent_70%)]" />
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {showTitle && (
          <div className="relative z-10">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="h-[1px] w-16 bg-[#C6A85A]/40" />
              <h2 className="font-serif text-foreground text-4xl md:text-5xl font-medium tracking-tighter">
                Pricing
              </h2>
            </div>
            <p className="text-[#8FA39B] text-lg mb-16 max-w-2xl font-light">
              Choose the scope you need today, with a clear path to scale.
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <PlanCard
            title="Basic"
            price="$400"
            description="Perfect for early-stage launches."
            included={basicIncluded}
            cta="Request Basic Plan"
          />
          <PlanCard
            title="Deluxe"
            price="$600"
            badge="Most Popular"
            description="For growing teams that need deeper delivery."
            included={deluxeIncluded}
            cta="Request Deluxe Plan"
          />
          <PlanCard
            title="Premier"
            price="$850"
            description="Everything included for full transformation."
            included={premierIncluded}
            cta="Request Premier Plan"
          />
        </div>
      </div>
    </section>
  )
}

