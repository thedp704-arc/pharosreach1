'use client'

import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/unsolicited-designs', label: 'Work' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="bg-[#091818] border-b-[0.5px] border-[#C6A85A]/20">
        <div className="w-full px-4 md:px-8 py-0 flex items-center justify-between h-24">
          <div className="flex items-center h-[5.5rem] w-[5.5rem] flex-shrink-0">
            <Link href="/">
              <img 
                src="/pharos-logo.png" 
                alt="Pharos Reach - Expert Strategy Unbundled" 
                className="h-full w-full object-contain cursor-pointer drop-shadow-[0_0_8px_rgba(198,168,90,0.3)]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12 ml-auto pr-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-[#8FA39B] hover:text-foreground transition-colors text-xs uppercase tracking-[0.15em] font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link 
            href="/exclusive-plan" 
            className="hidden lg:inline-flex bg-transparent text-[#091818] hover:bg-button-cta hover:text-[#EDE8D0] px-6 py-2 rounded-none text-xs uppercase tracking-widest font-semibold transition-all duration-500"
          >
            ooh what's this
          </Link>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#8FA39B]">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#091918] border-[#C6A85A]/20 text-[#EDEDED] w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-[#C6A85A] text-left">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href}
                      href={link.href} 
                      className="text-[#8FA39B] hover:text-[#C6A85A] transition-colors text-sm uppercase tracking-[0.15em] font-semibold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
