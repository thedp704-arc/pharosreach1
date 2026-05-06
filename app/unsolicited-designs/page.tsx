import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { RoyalDivider } from '@/components/royal-divider'

export default function UnsolicitedDesignsPage() {
  return (
    <main className="min-h-screen bg-[#091818] text-foreground">
      <Navbar />
      <div className="pt-20">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <section className="py-24 md:py-32 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#C6A85A]/5 border border-[#C6A85A]/15 rounded-none mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(198,168,90,0.05)]">
                <span className="text-[#C6A85A] text-[10px] uppercase tracking-[0.3em] font-bold">Our Work</span>
              </div>
              <h1 className="font-serif text-foreground text-5xl md:text-6xl font-medium tracking-tighter leading-tight drop-shadow-[0_0_25px_rgba(198,168,90,0.15)]">
                Unsolicited Designs.
              </h1>
              <p className="text-[#8FA39B] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                A collection of concepts and visual explorations where we push the boundaries of digital strategy and design.
              </p>
            </div>
          </section>

          <RoyalDivider />

          {/* Content placeholder for designs */}
          <section className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="aspect-video bg-[#1F3A34]/30 border border-[#C6A85A]/10 flex items-center justify-center group hover:border-[#C6A85A]/30 transition-colors duration-500 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,168,90,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <span className="text-[#8FA39B] text-sm uppercase tracking-widest font-light">Concept 01 - Coming Soon</span>
                </div>
                <div className="aspect-video bg-[#1F3A34]/30 border border-[#C6A85A]/10 flex items-center justify-center group hover:border-[#C6A85A]/30 transition-colors duration-500 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(198,168,90,0.05)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <span className="text-[#8FA39B] text-sm uppercase tracking-widest font-light">Concept 02 - Coming Soon</span>
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
