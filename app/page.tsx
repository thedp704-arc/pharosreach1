import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { PhilosophySection } from '@/components/philosophy-section'
import { ServicesGrid } from '@/components/services-grid'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { PricingSection } from '@/components/pricing-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { Footer } from '@/components/footer'
import { RoyalDivider } from '@/components/royal-divider'

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      <HeroSection />
      
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <RoyalDivider />
        <PhilosophySection />
        
        <RoyalDivider direction="right" />
        <ServicesGrid />
        
        <RoyalDivider />
        <HowItWorksSection />
        
        <RoyalDivider direction="right" />
        <PricingSection />
        
        <RoyalDivider />
        <TestimonialsSection />
      </div>

      <TechStackSection />
      <Footer />
    </main>
  )
}
