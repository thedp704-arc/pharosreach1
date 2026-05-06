import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PhilosophySection } from '@/components/philosophy-section'
import { RoyalDivider } from '@/components/royal-divider'

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-[#091818] text-foreground">
      <Navbar />
      <div className="pt-32">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.05)_0%,transparent_70%)] pointer-events-none" />
          <PhilosophySection />
          <RoyalDivider direction="right" />
        </div>
      </div>
      <Footer showContactForm={true} />
    </main>
  )
}
