import React from 'react'
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { RoyalDivider } from '@/components/royal-divider'

export const metadata: Metadata = {
  title: 'Monarch | High-End Sneaker Concept',
  description: 'A technical demo of a premium sneaker ecommerce site with integrated CRM and scalable infrastructure.',
}

export default function MonarchPage() {
  return (
    <main className="min-h-screen bg-[#091818] text-foreground selection:bg-accent/30">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-48 pb-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.15)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center element-spacing-medium">
            <span className="text-label">Concept Study 01</span>
            <h1 className="hero-title">
              Monarch <br /> 
              <span className="text-accent italic">The Sovereign of Speed</span>
            </h1>
            <p className="hero-subtitle mx-auto">
              A high-performance ecommerce demonstration showcasing custom-coded infrastructure, real-time inventory systems, and integrated lead management.
            </p>
            <div className="flex gap-6 pt-8">
              <button className="bg-button-cta text-[#EDE8D0] px-10 py-5 btn-text hover:bg-[#E0C878] transition-all shadow-[0_0_25px_rgba(198,168,90,0.2)]">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      <RoyalDivider />

      {/* PRODUCT DISPLAY */}
      <section className="section-spacing px-4 md:px-8 bg-[#0F1A17]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="section-title mb-6">Technical Execution</h2>
              <p className="text-p">
                This demo utilizes hand-crafted components optimized for core web vitals, ensuring sub-second load times even with high-resolution 3D assets.
              </p>
            </div>
            <div className="text-label-muted">2026 Edition</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group border-[0.5px] border-border p-8 bg-[#091818] hover:border-accent/40 transition-all duration-500 relative overflow-hidden">
                <div className="aspect-square bg-accent/5 mb-8 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,168,90,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
                   <span className="text-label-muted italic">Sneaker Model {i}</span>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="section-card-title">Apex V{i}</h3>
                  <span className="text-accent font-medium">$420</span>
                </div>
                <p className="text-p-small mb-8">
                  Proprietary carbon-fiber weave with reactive cushioning systems for elite performance.
                </p>
                <button className="w-full border border-accent/30 py-4 btn-text hover:bg-accent/10 transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoyalDivider direction="right" />

      {/* CRM & SYSTEM INTEGRATION */}
      <section className="section-spacing px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="element-spacing-large">
            <div className="text-center element-spacing-small">
              <h2 className="section-title">Backend Architecture</h2>
              <p className="text-p mx-auto">
                Behind the aesthetic is a robust lead capture and CRM integration system designed for high-conversion retail environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-12">
              <div className="element-spacing-medium">
                <h3 className="section-subtitle">Real-time Lead Capture</h3>
                <p className="text-p-small">
                  Every interaction is logged and synced with a central dashboard, allowing for personalized follow-ups and automated marketing workflows based on user behavior.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex gap-4 items-center text-p-small">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Custom CRM Endpoints
                  </li>
                  <li className="flex gap-4 items-center text-p-small">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Automated Inventory Sync
                  </li>
                  <li className="flex gap-4 items-center text-p-small">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Encrypted Data Pipelines
                  </li>
                </ul>
              </div>
              
              <div className="p-8 border border-border bg-[#0F1A17] relative">
                <div className="absolute top-0 right-0 p-4">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>
                <h4 className="text-label mb-8">Mock CRM Feed</h4>
                <div className="space-y-6">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="border-b border-border/50 pb-4 last:border-0">
                      <div className="flex justify-between mb-1">
                        <span className="text-foreground text-sm font-medium">New Enquiry</span>
                        <span className="text-label-muted text-[10px]">2m ago</span>
                      </div>
                      <p className="text-p-small text-[12px]">Interest in Apex V{j} - Lead Quality: High</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RoyalDivider />

      {/* CLOSING SECTION */}
      <section className="section-spacing px-4 md:px-8 border-t-[0.5px] border-border">
        <div className="max-w-4xl mx-auto text-center element-spacing-medium">
          <h2 className="section-title">Execution over Templates</h2>
          <p className="hero-subtitle mx-auto">
            Monarch is a testament to the Pharos Reach philosophy: unbundled, precision-engineered systems that serve the brand, not the platform.
          </p>
          <div className="pt-8">
            <a href="/contact" className="bg-button-cta text-[#EDE8D0] px-10 py-5 btn-text hover:bg-[#E0C878] transition-all">
              Start Your Build
            </a>
          </div>
        </div>
      </section>

      <Footer showContactForm={true} />
    </main>
  )
}
