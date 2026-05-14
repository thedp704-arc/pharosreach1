'use client'

import React from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

const testimonials = [
  {
    quote: "We just needed something clean that converts. Started getting inbound within the first week.",
    author: "Daniel R.",
    business: "Fitness Studio, Dubai"
  },
  {
    quote: "They rebuilt our site and fixed our booking flow. Way fewer drop-offs now.",
    author: "Chloe M.",
    business: "Beauty Clinic, London"
  },
  {
    quote: "Simple, fast, and no back-and-forth. Exactly what we were looking for.",
    author: "Jason K.",
    business: "E-commerce Brand, Singapore"
  },
  {
    quote: "Our old site was slow and confusing. This is a massive improvement.",
    author: "Carlos V.",
    business: "Restaurant Owner, Miami"
  }
]

export function TestimonialsSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section ref={ref} className="section-spacing px-4 md:px-8 bg-[#091818] border-t-[0.5px] border-border">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#C6A85A]/40" />
            <h2 className="section-title">
              Trusted globally
            </h2>
          </div>
          <p className="text-p">
            Delivering consistent results for businesses across international markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="group border-[0.5px] border-border p-10 bg-[#0F1A17] hover:border-accent/40 transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden hover:shadow-[0_0_40px_rgba(198,168,90,0.12)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,168,90,0.08)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-accent text-5xl font-serif opacity-30 group-hover:opacity-60 transition-opacity drop-shadow-[0_0_10px_rgba(198,168,90,0.3)] block mb-4">"</span>
                <p className="text-p-small italic -mt-2 mb-8">
                  {t.quote}
                </p>
              </div>
              <div className="relative z-10 pt-6 border-t border-border">
                <p className="text-foreground text-sm font-semibold tracking-wide mb-1">
                  {t.author}
                </p>
                <p className="text-label-muted">
                  {t.business}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
