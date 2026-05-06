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
    <section ref={ref} className="py-24 md:py-32 px-4 md:px-8 bg-[#091818] border-t-[0.5px] border-[#C6A85A]/20">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="h-[0.5px] w-12 bg-[#C6A85A]/40" />
            <h2 className="font-serif text-foreground text-3xl md:text-4xl tracking-tighter">
              Trusted by businesses across markets
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="group border-[0.5px] border-[#C6A85A]/15 p-8 bg-[#0F1A17] hover:border-[#C6A85A]/40 transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden hover:shadow-[0_0_40px_rgba(198,168,90,0.12)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,168,90,0.08)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="text-accent text-4xl font-serif opacity-30 group-hover:opacity-60 transition-opacity drop-shadow-[0_0_10px_rgba(198,168,90,0.3)]">"</span>
                <p className="text-[#8FA39B] text-base font-light leading-relaxed mb-6 -mt-2 italic">
                  {t.quote}
                </p>
              </div>
              <div className="relative z-10 space-y-1 pt-4 border-t border-[#C6A85A]/10">
                <p className="text-foreground text-sm font-semibold tracking-wide">
                  {t.author}
                </p>
                <p className="text-[#C6A85A] text-xs uppercase tracking-widest font-medium opacity-70">
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
