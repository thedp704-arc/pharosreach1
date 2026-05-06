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
    <ul className="space-y-3 text-[#8FA39B] font-light">
      {services.map((s) => {
        const isIncluded = included.has(s.key)

        return (
          <li key={s.key} className="flex gap-3">
            <span
              className={
                isIncluded
                  ? 'text-accent mt-[2px]'
                  : 'text-[#C6A85A]/40 mt-[2px]'
              }
            >
              ✓
            </span>
            <span>
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

export default function ExclusivePlanPage() {
  const specialIncluded = new Set<string>([
    'website_creation',
    'website_maintenance',
  ])

  return (
    <main className="min-h-screen bg-[#091818] text-foreground">
      <Navbar />
      <div className="pt-40 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h1 className="font-serif text-4xl md:text-5xl mb-6 tracking-tighter">
              oh you found a little easter egg!
            </h1>
            <p className="text-[#8FA39B] text-lg max-w-2xl mx-auto font-light leading-relaxed">
              thank you for exploring our website long enough. to reward your patience, we have an exclusive plan for you.
            </p>
          </div>

          <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,168,90,0.18)_0%,_transparent_55%),linear-gradient(to_bottom,rgba(31,58,52,0.85),rgba(15,26,23,0.95))] border-[0.5px] border-[#C6A85A]/25 p-8 md:p-12 shadow-[0_0_0_1px_rgba(198,168,90,0.08),0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(198,168,90,0.18)_0%,transparent_55%),radial-gradient(circle_at_85%_30%,rgba(198,168,90,0.06)_0%,transparent_60%)] opacity-80" />
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 relative z-10">
              <div className="flex-1">
                <h3 className="font-serif text-foreground text-3xl font-medium tracking-tighter">
                  Entrepreneur Special
                </h3>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[#8FA39B] text-xs uppercase tracking-[0.15em] font-semibold">
                    Available till
                  </span>
                  <OfferCountdown />
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <div className="text-foreground text-5xl font-serif font-medium tracking-tighter">
                    $350
                  </div>
                  <div className="text-[#8FA39B] text-sm font-light uppercase tracking-[0.15em]">
                    USD
                  </div>
                </div>

                <p className="text-[#8FA39B] text-lg leading-relaxed font-light mt-6">
                  $300 for website creation + $50 off the first month of maintenance (included).
                </p>
                <p className="text-accent text-sm leading-relaxed font-light mt-4">
                  From next month, maintenance is $100/month.
                </p>

                <div className="mt-10">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center bg-button-cta text-[#EDE8D0] px-8 py-4 rounded-none text-xs uppercase tracking-widest font-semibold hover:bg-[#E0C878] transition-colors duration-500 w-full sm:w-fit ring-1 ring-[#C6A85A]/35 hover:ring-[#C6A85A]/55"
                  >
                    Claim Entrepreneur Special
                  </a>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-[#8FA39B] text-xs uppercase tracking-[0.15em] font-semibold mb-6">
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
