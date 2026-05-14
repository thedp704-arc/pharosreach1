'use client'

import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
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
  included: Set<string>
  highlightMaintenanceNote?: boolean
}) {
  return (
    <ul className="space-y-4 text-p-small">
      {services.map((s) => {
        const isIncluded = included.has(s.key)

        return (
          <li key={s.key} className="flex gap-4">
            <span
              className={
                isIncluded
                  ? 'text-accent mt-[2px]'
                  : 'text-accent/30 mt-[2px]'
              }
            >
              ✓
            </span>
            <span>
              <span className="text-foreground font-light">{s.name}</span>
              <span className="block text-muted text-sm mt-1">
                {s.description}
              </span>
              {highlightMaintenanceNote && s.key === 'website_maintenance' && (
                <span className="block text-sm mt-2 text-accent italic">
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

export default function ExclusivePlanPage() {
  const specialIncluded = new Set<string>([
    'website_creation',
    'website_maintenance',
  ])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-48 pb-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 text-center element-spacing-medium">
            <h1 className="hero-title">
              oh you found a little easter egg!
            </h1>
            <p className="hero-subtitle mx-auto">
              thank you for exploring our website long enough. to reward your patience, we have an exclusive plan for you.
            </p>
          </div>

          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,168,90,0.18)_0%,_transparent_55%),linear-gradient(to_bottom,rgba(31,58,52,0.85),rgba(15,26,23,0.95))] border-[0.5px] border-border p-10 md:p-16 shadow-[0_0_0_1px_rgba(198,168,90,0.08),0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(198,168,90,0.18)_0%,transparent_55%),radial-gradient(circle_at_85%_30%,rgba(198,168,90,0.06)_0%,transparent_60%)] opacity-80" />
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-16 relative z-10">
              <div className="flex-1">
                <h3 className="section-title text-3xl md:text-4xl">
                  Entrepreneur Special
                </h3>

                <div className="mt-8 flex items-center gap-4">
                  <span className="text-label-muted">
                    Available till
                  </span>
                  <OfferCountdown />
                </div>

                <div className="mt-8 flex items-baseline gap-3">
                  <div className="text-foreground text-5xl md:text-6xl font-serif font-medium tracking-tighter drop-shadow-[0_0_15px_rgba(198,168,90,0.2)]">
                    $350
                  </div>
                  <div className="text-label-muted">
                    USD
                  </div>
                </div>

                <p className="text-p mt-8">
                  $300 for website creation + $50 off the first month of maintenance (included).
                </p>
                <p className="text-accent text-sm leading-relaxed font-light mt-4 italic">
                  From next month, maintenance is $100/month.
                </p>

                <div className="mt-12">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center bg-button-cta text-[#EDE8D0] px-10 py-5 rounded-none btn-text hover:bg-[#E0C878] transition-colors duration-500 w-full sm:w-fit ring-1 ring-[#C6A85A]/35 hover:ring-[#C6A85A]/55 shadow-[0_0_20px_rgba(198,168,90,0.15)]"
                  >
                    Claim Entrepreneur Special
                  </a>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-label mb-8">
                  Included services
                </div>
                <ServiceList
                  included={specialIncluded}
                  highlightMaintenanceNote={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer showContactForm={false} />
    </main>
  )
}
