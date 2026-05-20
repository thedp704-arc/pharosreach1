import React from 'react'
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PricingSection } from '@/components/pricing-section'

export const metadata: Metadata = {
  title: 'Pricing & Retainers | Pharos Reach',
  description: 'Transparent pricing for CRM management, website maintenance, and custom fullstack development. Monthly retainers and custom project quotes available.',
  keywords: 'pricing, retainers, CRM management price, website management price, custom software development cost',
}

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
