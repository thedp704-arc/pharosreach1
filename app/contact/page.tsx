import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#091818] text-foreground">
      <Navbar />
      <div className="pt-20">
        <section className="py-24 md:py-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#C6A85A]/5 border border-[#C6A85A]/15 rounded-none mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(198,168,90,0.05)]">
              <span className="text-[#C6A85A] text-[10px] uppercase tracking-[0.3em] font-bold">Contact Us</span>
            </div>
            <h1 className="font-serif text-foreground text-5xl md:text-6xl font-medium tracking-tighter leading-tight drop-shadow-[0_0_25px_rgba(198,168,90,0.15)]">
              Let's chart your course.
            </h1>
            <p className="text-[#8FA39B] text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Ready to unbundle your strategy? Tell us about your project and let's see how we can help your business scale globally.
            </p>
          </div>
        </section>
        
        {/* The Footer component already contains the contact form */}
        <Footer showContactForm={true} />
      </div>
    </main>
  )
}
