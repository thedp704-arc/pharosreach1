import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PricingSection } from '@/components/pricing-section'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#091818] text-foreground">
      <Navbar />
      <div className="pt-32">
        <PricingSection />
      </div>
      <Footer />
    </main>
  )
}
