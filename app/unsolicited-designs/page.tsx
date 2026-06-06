import React from 'react'
import Link from 'next/link'
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

          {/* Content placeholder for designs */}
          <section className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <Link 
                  href="/monarch"
                  className="aspect-video bg-[#1F3A34]/30 border border-border flex items-center justify-center group hover:border-accent/30 transition-colors duration-500 overflow-hidden relative cursor-pointer"
                >
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,168,90,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <div className="flex flex-col items-center gap-2">
                     <span className="text-accent text-lg font-serif italic tracking-tighter group-hover:scale-110 transition-transform duration-500">Monarch</span>
                     <span className="text-label-muted text-[10px]">Sneaker Concept</span>
                   </div>
                </Link>
                <div className="aspect-video bg-[#1F3A34]/30 border border-border flex items-center justify-center group hover:border-accent/30 transition-colors duration-500 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,168,90,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <span className="text-label-muted">Concept 02 - Coming Soon</span>
                </div>
              </div>
            </div>
          </section>
          
          <RoyalDivider direction="right" />
        </div>
        
        <Footer showContactForm={true} />
      </div>
    </main>
  )
}
