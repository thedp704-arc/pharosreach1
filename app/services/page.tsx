import React from 'react'
import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ServicesGrid } from '@/components/services-grid'
import { PricingSection } from '@/components/pricing-section'
import { RoyalDivider } from '@/components/royal-divider'

export const metadata: Metadata = {
  title: 'Fullstack Services & System Creation | Pharos Reach',
  description: 'Explore our range of fullstack development services, from custom website builds and CRM management to automated systems and workflows.',
  keywords: 'fullstack development services, CRM management, systems creation, custom website builds, automated workflows',
}

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
