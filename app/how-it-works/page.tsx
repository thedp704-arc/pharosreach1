import React from 'react'
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Systems Creation & Fullstack Workflow | Pharos Reach',
  description: 'Our structured process for building integrated systems, fullstack development, and automated workflows. Focused on creating a cohesive digital infrastructure for your brand.',
  keywords: 'fullstack development, systems creation, CRM management, automated workflows, custom digital infrastructure, technical workflow',
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <Navbar />
      
      {/* SECTION 1: Hero */}
      <section className="relative pt-48 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center element-spacing-medium">
            <div className="h-[1px] w-12 bg-accent/40 mb-4" />
            <h1 className="hero-title">
              How We Work
            </h1>
            <p className="hero-subtitle mx-auto">
              Our structured process for fullstack development and systems creation, focused on building integrated digital infrastructures that scale.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Process Timeline */}
      <section className="relative py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-16 relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
            
            {/* Stage 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1 md:text-right">
                <div className="md:pr-12 element-spacing-small">
                  <h3 className="section-subtitle">01. Discovery Call</h3>
                  <p className="text-p">
                    Every engagement begins with a dedicated discovery session. We conduct a thorough analysis of your objectives, technical requirements, and project expectations to ensure total alignment from day one.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1" />
            </div>

            {/* Stage 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1" />
              <div className="relative z-10 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1 md:text-left">
                <div className="md:pl-12 element-spacing-small">
                  <h3 className="section-subtitle">02. Project Planning</h3>
                  <p className="text-p">
                    Once the scope is defined, we architect the technical foundation. This phase involves mapping out systems integrations, development strategies, and precise delivery milestones tailored to your infrastructure needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1 md:text-right">
                <div className="md:pr-12 element-spacing-small">
                  <h3 className="section-subtitle">03. Custom Proposal</h3>
                  <p className="text-p">
                    We provide a tailored proposal based on the amount of work and your desired timeline. If you need more work in less time, we charge a premium for the accelerated delivery. If you have a longer timeline for the same work, we adjust the investment accordingly.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1" />
            </div>

            {/* Stage 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1" />
              <div className="relative z-10 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1 md:text-left">
                <div className="md:pl-12 element-spacing-small">
                  <h3 className="section-subtitle">04. Fullstack Development</h3>
                  <p className="text-p">
                    Execution begins with a focus on building a cohesive system. We don't just write code; we architect the digital infrastructure that integrates your website, CRM, and automated workflows into one powerful engine.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1 md:text-right">
                <div className="md:pr-12 element-spacing-small">
                  <h3 className="section-subtitle">05. Launch & Retain</h3>
                  <p className="text-p">
                    After a successful launch, we transition to our monthly retainer model. We manage your systems and website ongoing, ensuring everything stays updated, secure, and optimized for your continued growth.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-accent shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Closing */}
      <section className="relative section-spacing px-4 md:px-8 border-t-[0.5px] border-border">
        <div className="max-w-4xl mx-auto text-center relative z-10 element-spacing-medium">
          <h2 className="section-title">
            Built for long-term growth
          </h2>
          <p className="hero-subtitle mx-auto">
            We focus on building systems designed to scale, adapt, and evolve alongside the businesses they support.
          </p>
        </div>
      </section>

      <Footer showContactForm={true} />
    </main>
  )
}
