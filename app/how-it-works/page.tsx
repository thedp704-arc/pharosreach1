import React from 'react'
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Technical Workflow | Pharos Reach',
  description: 'Our structured technical workflow for custom software development, ecommerce systems, and scalable infrastructure. Focused on clarity, execution, and long-term scalability.',
  keywords: 'custom software development, ecommerce systems, scalable infrastructure, automation systems, technical project workflows',
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#091818] text-[#EDEDED] selection:bg-[#C6A85A]/30">
      <Navbar />
      
      {/* SECTION 1: Hero */}
      <section className="relative pt-48 pb-24 px-4 md:px-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.12)_0%,transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="h-[1px] w-12 bg-[#C6A85A]/40 mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tighter mb-8 bg-gradient-to-b from-[#EDEDED] to-[#EDEDED]/60 bg-clip-text text-transparent">
              How We Work
            </h1>
            <p className="max-w-2xl text-[#8FA39B] text-lg md:text-xl leading-relaxed font-light">
              Every project is approached with a structured development process focused on clarity, scalability, and long-term execution.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Process Timeline */}
      <section className="relative py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[0.5px] bg-gradient-to-b from-transparent via-[#C6A85A]/20 to-transparent" />
            
            {/* Stage 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1 md:text-right">
                <div className="md:pr-12">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4 text-[#C6A85A]">01. Discovery Call</h3>
                  <p className="text-[#8FA39B] leading-relaxed font-light text-lg">
                    Every engagement begins with a dedicated discovery session. We conduct a thorough analysis of your objectives, technical requirements, and project expectations to ensure total alignment from day one.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-[#C6A85A] shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1" />
            </div>

            {/* Stage 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1" />
              <div className="relative z-10 w-4 h-4 rounded-full bg-[#C6A85A] shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1 md:text-left">
                <div className="md:pl-12">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4 text-[#C6A85A]">02. Project Planning</h3>
                  <p className="text-[#8FA39B] leading-relaxed font-light text-lg">
                    Once the scope is defined, we architect the technical foundation. This phase involves mapping out systems integrations, development strategies, and precise delivery milestones tailored to your infrastructure needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1 md:text-right">
                <div className="md:pr-12">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4 text-[#C6A85A]">03. Proposal & Scope</h3>
                  <p className="text-[#8FA39B] leading-relaxed font-light text-lg">
                    We provide a detailed technical proposal outlining the full breadth of work. Timelines and project parameters are established based on technical complexity, system integrations, and specific delivery requirements.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-[#C6A85A] shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1" />
            </div>

            {/* Stage 4 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1" />
              <div className="relative z-10 w-4 h-4 rounded-full bg-[#C6A85A] shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1 md:text-left">
                <div className="md:pl-12">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4 text-[#C6A85A]">04. Development</h3>
                  <p className="text-[#8FA39B] leading-relaxed font-light text-lg">
                    Execution begins with a focus on clean, scalable code. We maintain transparent communication through regular progress updates and collaborative feedback loops, ensuring the build remains agile and precise.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 5 */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 relative">
              <div className="flex-1 md:text-right">
                <div className="md:pr-12">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight mb-4 text-[#C6A85A]">05. Launch & Support</h3>
                  <p className="text-[#8FA39B] leading-relaxed font-light text-lg">
                    Following rigorous testing and optimization, we oversee the deployment process. Our partnership continues post-launch with ongoing support and scalability options to ensure long-term system integrity.
                  </p>
                </div>
              </div>
              <div className="relative z-10 w-4 h-4 rounded-full bg-[#C6A85A] shadow-[0_0_15px_rgba(198,168,90,0.5)] mt-2" />
              <div className="flex-1" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Closing */}
      <section className="relative py-32 px-4 md:px-8 border-t-[0.5px] border-[#C6A85A]/20">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Built for long-term growth
          </h2>
          <p className="text-[#8FA39B] text-lg md:text-xl font-light leading-relaxed">
            We focus on building systems designed to scale, adapt, and evolve alongside the businesses they support.
          </p>
        </div>
      </section>

      <Footer showContactForm={true} />
    </main>
  )
}
