'use client'

import React from 'react'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

const tools = [
  "OpenAI",
  "Meta Ads",
  "Canva",
  "Google Analytics",
  "WhatsApp Business",
  "Razorpay",
  "Shopify"
]

export function TechStackSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 })

  // Combine title and tools into a single revolving line
  const marqueeItems = [
    "Built using tools trusted by agencies worldwide",
    ...tools,
    "Built using tools trusted by agencies worldwide",
    ...tools,
    "Built using tools trusted by agencies worldwide",
    ...tools
  ]

  return (
    <section ref={ref} className="py-12 bg-[#091818] border-t-[0.5px] border-[#C6A85A]/10 overflow-hidden">
      <div className={`transition-all duration-1000 delay-200 ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative flex overflow-x-hidden mask-marquee py-4">
          <div className="animate-marquee flex items-center whitespace-nowrap">
            {marqueeItems.map((item, index) => {
              const isTitle = item === "Built using tools trusted by agencies worldwide"
              return (
                <span 
                  key={`${item}-${index}`}
                  className={`${
                    isTitle 
                      ? 'text-[#8FA39B]/40 text-[10px] md:text-xs font-semibold tracking-[0.3em]' 
                      : 'text-[#EDEDED]/20 text-sm md:text-base font-serif tracking-[0.4em] hover:text-accent transition-colors duration-500'
                  } uppercase select-none mx-12 md:mx-20 flex items-center gap-12 md:gap-20`}
                >
                  {item}
                  {!isTitle && <span className="text-[#C6A85A]/20">✦</span>}
                </span>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
