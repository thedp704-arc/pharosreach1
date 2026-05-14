import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20">
        <section className="section-spacing px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center element-spacing-medium">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent/5 border border-accent/15 rounded-none mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(198,168,90,0.05)]">
              <span className="text-label">Contact Us</span>
            </div>
            <h1 className="hero-title">
              Let's chart your course.
            </h1>
            <p className="hero-subtitle mx-auto">
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
