import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { RoyalDivider } from '@/components/royal-divider'

export default function UnsolicitedDesignsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <section className="section-spacing px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center element-spacing-medium">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 border border-accent/15 rounded-none mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(198,168,90,0.05)]">
                <span className="text-label">Our Work</span>
              </div>
              <h1 className="hero-title">
                Unsolicited Designs.
              </h1>
              <p className="hero-subtitle mx-auto">
                A collection of concepts and visual explorations where we push the boundaries of digital strategy and design.
              </p>
            </div>
          </section>

          <RoyalDivider />
        </div>
        
        <Footer showContactForm={true} />
      </div>
    </main>
  )
}
