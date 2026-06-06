import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { RoyalDivider } from '@/components/royal-divider'

const sneakers = [
  {
    slug: "nike-air-force-1",
    name: "Nike Air Force 1",
    image: "/nike-air-force-1.png.png",
    price: "$120",
    description: "Iconic white leather sneaker with classic blue swoosh, perfect for everyday style and comfort.",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    colors: ["White/Blue", "Black/White", "White/Red", "Triple White"],
    details: "The Nike Air Force 1 is an icon. First released in 1982, it's been a staple of street culture ever since. Crafted with premium leather for durability and style, it features Nike Air cushioning for all-day comfort."
  },
  {
    slug: "adidas-samba",
    name: "Adidas Samba",
    image: "/adidas-samba.png.png",
    price: "$100",
    description: "Timeless suede and leather sneaker with green accents, a staple of casual streetwear.",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    colors: ["White/Green", "Black/White", "White/Blue", "Gum/White"],
    details: "The Adidas Samba is a timeless classic. Born on the soccer field in the 1950s, it quickly became a favorite off the pitch. With its suede overlays and gum sole, it's perfect for everyday wear."
  },
  {
    slug: "nike-air-zoom",
    name: "Nike Air Zoom (Men)",
    image: "/nike-air-zoom.png.png",
    price: "$150",
    description: "High-performance running sneaker with responsive cushioning and breathable mesh upper.",
    sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12"],
    colors: ["Black/Red", "Blue/White", "Grey/Black", "White/Grey"],
    details: "The Nike Air Zoom is built for speed. With responsive Zoom Air cushioning and a breathable mesh upper, it's perfect for both training runs and race day."
  }
]

export async function generateStaticParams() {
  return sneakers.map((sneaker) => ({
    slug: sneaker.slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const sneaker = sneakers.find(s => s.slug === params.slug)

  if (!sneaker) {
    return <div>Product not found</div>
  }

  return (
    <main className="min-h-screen bg-[#091818] text-foreground selection:bg-accent/30">
      <Navbar />
      
      <section className="pt-48 pb-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/monarch" className="text-label-muted hover:text-accent transition-colors mb-12 inline-block">
            ← Back to Collection
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="aspect-square bg-accent/5 flex items-center justify-center">
                <img 
                  src={sneaker.image} 
                  alt={sneaker.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>

            <div className="element-spacing-large">
              <div>
                <h1 className="hero-title">{sneaker.name}</h1>
                <div className="text-accent text-3xl font-serif my-6">{sneaker.price}</div>
                <p className="text-p">{sneaker.description}</p>
              </div>

              <div className="pt-8">
                <h3 className="section-subtitle mb-6">Select Size</h3>
                <div className="grid grid-cols-4 gap-3">
                  {sneaker.sizes.map((size, i) => (
                    <button 
                      key={i} 
                      className="border border-border py-3 btn-text hover:border-accent hover:bg-accent/10 transition-all"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <h3 className="section-subtitle mb-6">Select Color</h3>
                <div className="flex gap-4">
                  {sneaker.colors.map((color, i) => (
                    <button 
                      key={i} 
                      className="border border-border py-3 px-6 btn-text hover:border-accent hover:bg-accent/10 transition-all"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-12">
                <button className="w-full bg-button-cta text-[#EDE8D0] px-10 py-5 btn-text hover:bg-[#E0C878] transition-all shadow-[0_0_25px_rgba(198,168,90,0.2)]">
                  Checkout
                </button>
              </div>

              <div className="pt-12 border-t border-border">
                <h3 className="section-subtitle mb-6">Details</h3>
                <p className="text-p-small">{sneaker.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RoyalDivider />

      <Footer showContactForm={true} />
    </main>
  )
}
