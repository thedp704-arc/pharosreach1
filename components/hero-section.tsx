import React from 'react'

export function HeroSection() {
  return (
    <section className="pt-48 pb-32 md:pt-64 md:pb-48 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,168,90,0.12)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6A85A]/10 rounded-full blur-[160px] pointer-events-none opacity-40" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center element-spacing-medium animate-royal-fade-up">
          <div className="element-spacing-small relative">
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full -z-10 scale-150" />
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#C6A85A]/5 border border-[#C6A85A]/15 rounded-none mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(198,168,90,0.05)]">
              <span className="text-label">Expert Tools, Unbundled</span>
            </div>
            <h1 className="hero-title max-w-5xl mx-auto">
              Websites that make people trust you in seconds.
            </h1>
            <p className="hero-subtitle mx-auto">
              We build fast, clean websites and systems that turn visitors into enquiries.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a href="/contact" className="bg-button-cta text-[#EDE8D0] px-10 py-5 rounded-none btn-text hover:bg-[#E0C878] transition-colors duration-500 w-full sm:w-auto text-center shadow-[0_0_25px_rgba(198,168,90,0.25)] hover:shadow-[0_0_40px_rgba(198,168,90,0.4)] relative group overflow-hidden">
              <span className="relative z-10">Get Your Website</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
            <a href="/unsolicited-designs" className="border border-[#C6A85A]/30 text-foreground px-10 py-5 rounded-none btn-text hover:bg-[#C6A85A]/10 transition-colors duration-500 w-full sm:w-auto text-center backdrop-blur-sm hover:shadow-[0_0_20px_rgba(198,168,90,0.1)]">
              View Work
            </a>
          </div>

          <div className="pt-12 flex flex-col items-center gap-4">
            <div className="h-[0.5px] w-12 bg-[#C6A85A]/40" />
            <p className="text-label-muted">
              Working with businesses across India, UAE, UK, and beyond
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
