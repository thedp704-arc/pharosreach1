import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServicesGrid } from '@/components/services-grid'
import { PricingSection } from '@/components/pricing-section'
import { RoyalDivider } from '@/components/royal-divider'

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#091818] text-foreground">
      <Navbar />
      <div className="pt-32">
        {/* Strategic Pillars */}
        <ServicesGrid showBorder={false} />
      </div>
      <Footer showContactForm={false} />
    </main>
  )
}
