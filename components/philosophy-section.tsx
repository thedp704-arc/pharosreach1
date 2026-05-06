import React from 'react'

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-40 md:py-48 px-4 md:px-8 border-t-[0.5px] border-[#C6A85A]/20 scroll-mt-24 bg-[#091818] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(198,168,90,0.05)_0%,_transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-[#C6A85A]/40" />
          <h2 className="font-serif text-foreground text-4xl md:text-5xl font-medium tracking-tighter">
            Our Philosophy
          </h2>
        </div>
        
        <div className="space-y-16">
          <div className="space-y-6">
            <p className="text-foreground text-xl md:text-2xl leading-relaxed font-light italic border-l-2 border-[#C6A85A]/30 pl-8">
              "At Pharos Reach, we believe that exceptional strategy emerges from a deep understanding of market dynamics, consumer behavior, and organizational capability."
            </p>
            <p className="text-[#8FA39B] text-lg leading-relaxed font-light">
              We are not consultants in the traditional sense—we are strategic architects who work hand-in-hand with visionary leaders to chart a course through complex, rapidly evolving global markets.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-[#C6A85A] text-2xl md:text-3xl font-medium tracking-tight">
              Born from Frustration, Built for Freedom
            </h3>
            <p className="text-[#8FA39B] text-lg leading-relaxed font-light">
              Our agency was founded on a simple realization: the digital landscape is over-complicated. When our founders attempted to scale their own ventures online, they were met with rigid tools and "all-or-nothing" service bundles. They were forced to pay premiums for bloated packages filled with features they didn’t need, while the specific solutions they did need remained out of reach.
            </p>
            <p className="text-foreground text-lg font-medium tracking-wide">
              We decided to change that.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="font-serif text-[#C6A85A] text-2xl md:text-3xl font-medium tracking-tight">
              The Pharos Edge: Precision over Bundles
            </h3>
            <p className="text-[#8FA39B] text-lg leading-relaxed font-light">
              We believe you shouldn't have to buy the whole toolbox just to get a single wrench. Our philosophy is rooted in <span className="text-foreground font-normal">true customization</span>:
            </p>
            
            <div className="grid gap-8 mt-8">
              <div className="space-y-3">
                <h4 className="text-foreground text-sm uppercase tracking-widest font-semibold">Tailored Freedom</h4>
                <p className="text-[#8FA39B] text-base leading-relaxed font-light">
                  We give you the power to choose exactly what your business requires. No forced bundles, no hidden premiums for unused services.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-foreground text-sm uppercase tracking-widest font-semibold">Strategic Agility</h4>
                <p className="text-[#8FA39B] text-base leading-relaxed font-light">
                  Our approach combines financial acuity with creative vision to identify untapped opportunities and build sustainable competitive advantages across borders.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-foreground text-sm uppercase tracking-widest font-semibold">Global Reach, Local Focus</h4>
                <p className="text-[#8FA39B] text-base leading-relaxed font-light">
                  We are the bridge for small and medium-sized businesses looking to break into international markets without the overhead of a massive corporation.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#C6A85A]/10">
            <p className="text-foreground text-xl leading-relaxed font-light">
              Whether you are a growing brand or an established player looking for international expansion, we provide the solution you’ve been looking for: <span className="text-accent font-medium italic">expert strategy, unbundled.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
