import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { Grain } from '@/components/grain'

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-serif' });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Pharos Reach - Strategic Consultancy for Fashion & E-commerce',
  description: 'A strategic partner for global fashion and e-commerce transformation, driving excellence through innovation.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/pharos-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/pharos-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Grain />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Toaster />
      </body>
    </html>
  )
}
