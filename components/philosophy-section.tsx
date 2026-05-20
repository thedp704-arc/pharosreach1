import React from 'react'

export function PhilosophySection() {
  return (
    <section id="philosophy" className="section-spacing px-4 md:px-8 border-t-[0.5px] border-border scroll-mt-24 bg-[#091818] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(198,168,90,0.05)_0%,_transparent_50%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-4 mb-16">
          <div className="h-[1px] w-12 bg-[#C6A85A]/40" />
          <h2 className="section-title">
            Our Philosophy
          </h2>
        </div>
        
        <div className="element-spacing-large">
          <div className="element-spacing-medium">
            <p className="text-p-large">
              "At Pharos Reach, we believe that exceptional growth emerges from integrated systems, fullstack execution, and a commitment to building for the long term."
            </p>
            <p className="text-p">
              We are not consultants in the traditional sense—we are digital architects who build the infrastructure visionary leaders need to dominate their markets.
            </p>
          </div>

          <div className="element-spacing-medium">
            <h3 className="section-subtitle">
              Systems Over Templates
            </h3>
            <p className="text-p">
              Our agency was founded on a simple realization: the digital landscape is fragmented. Most businesses struggle with disconnected tools, inefficient workflows, and websites that don't talk to their CRMs.
            </p>
            <p className="text-p font-medium text-foreground tracking-wide">
              We decided to build systems instead of just sites.
            </p>
          </div>

          <div className="element-spacing-medium">
            <h3 className="section-subtitle">
              The Pharos Edge: Fullstack Integration
            </h3>
            <p className="text-p">
              We believe your digital presence should be a cohesive engine. Our philosophy is rooted in <span className="text-foreground font-normal">integrated systems</span>:
            </p>
            
            <div className="grid gap-10 mt-8">
              <div className="element-spacing-small">
                <h4 className="text-label">Integrated Infrastructure</h4>
                <p className="text-p-small">
                  We focus on fullstack development that connects your frontend, backend, and CRM into one seamless system.
                </p>
              </div>
              <div className="element-spacing-small">
                <h4 className="text-label">Long-term Scalability</h4>
                <p className="text-p-small">
                  Our monthly retainers ensure your systems evolve with your business, providing ongoing optimization and management.
                </p>
              </div>
              <div className="element-spacing-small">
                <h4 className="text-label">Global Standards</h4>
                <p className="text-p-small">
                  We build for businesses across the globe, ensuring every line of code meets international standards for speed, security, and performance.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-border">
            <p className="text-p-large border-none pl-0 italic-none not-italic">
              Whether you are a growing brand or an established player, we provide the solution you’ve been looking for: <span className="text-accent font-medium italic">expert systems, custom built.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
