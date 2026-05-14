'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { toast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export function Footer({ showContactForm = true }: { showContactForm?: boolean }) {
  const currentYear = new Date().getFullYear()

  const contactSchema = z.object({
    name: z.string().min(2, 'Please enter your name'),
    email: z.string().email('Please enter a valid email'),
    company: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
  })

  type ContactFormValues = z.infer<typeof contactSchema>

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    const parsed = contactSchema.safeParse(values)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues | undefined
        if (!field) continue
        setError(field, { type: 'manual', message: issue.message })
      }
      toast({
        title: 'Please check the form',
        description: 'Some fields need attention.',
      })
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        toast({
          title: 'Could not send message',
          description: 'Please try again in a moment.',
        })
        return
      }

      toast({
        title: 'Message sent',
        description: 'Thanks for reaching out. We will get back to you soon.',
      })
      reset()
    } catch {
      toast({
        title: 'Network error',
        description: 'Please check your connection and try again.',
      })
    }
  }

  return (
    <footer id="contact" className="bg-[#091818] border-t-[0.5px] border-border section-spacing px-4 md:px-8 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        {showContactForm && (
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="element-spacing-medium">
              <h3 className="section-card-title">
                Pharos Reach
              </h3>
              <p className="text-p-small">
                Expert strategy, unbundled. Strategic consultancy for global fashion and e-commerce leaders seeking transformation at scale.
              </p>

              <div className="space-y-2">
                <p className="text-p-small">
                  <span className="text-foreground block mb-1">dev@pharosreach.com</span>
                  Global offices available
                </p>
              </div>

              <div className="mt-12 flex justify-center md:justify-start">
                <img
                  src="/pharos-logo.png"
                  alt="Pharos Reach"
                  className="w-[280px] md:w-[320px] h-auto object-contain transition-all duration-700"
                  style={{
                    filter: 'drop-shadow(0 0 15px rgba(198,168,90,0.3)) drop-shadow(0 0-40px rgba(198,168,90,0.15))',
                  }}
                />
              </div>
            </div>
            <div className="element-spacing-medium">
              <h4 className="section-card-title">
                Send a message
              </h4>
              <p className="text-p-small">
                Tell us what you're working on and we'll respond within 1-2 business days.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="contact-name" className="text-label">
                    Name
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="Your name"
                    aria-invalid={errors.name ? true : undefined}
                    {...register('name')}
                  />
                  {errors.name?.message && (
                    <p className="text-destructive text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="contact-email" className="text-label">
                    Email
                  </Label>
                  <Input
                    id="contact-email"
                    placeholder="you@company.com"
                    aria-invalid={errors.email ? true : undefined}
                    {...register('email')}
                  />
                  {errors.email?.message && (
                    <p className="text-destructive text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="contact-company" className="text-label">
                    Company (optional)
                  </Label>
                  <Input
                    id="contact-company"
                    placeholder="Company name"
                    {...register('company')}
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="contact-message" className="text-label">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    rows={5}
                    placeholder="How can we help?"
                    aria-invalid={errors.message ? true : undefined}
                    {...register('message')}
                  />
                  {errors.message?.message && (
                    <p className="text-destructive text-sm">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-button-cta text-[#EDE8D0] px-8 py-4 rounded-none btn-text hover:bg-[#E0C878] transition-colors duration-500 w-fit disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(198,168,90,0.15)]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        )}
        
        <div className="border-t-[0.5px] border-border pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-label-muted normal-case font-light">
            © {currentYear} Pharos Reach. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-label-muted normal-case font-light hover:text-accent transition-colors">
              Privacy
            </a>
            <a href="#" className="text-label-muted normal-case font-light hover:text-accent transition-colors">
              Terms
            </a>
            <a href="#" className="text-label-muted normal-case font-light hover:text-accent transition-colors">
              LinkedIn
            </a>
            <a
              href="https://instagram.com/pharosreach"
              target="_blank"
              rel="noreferrer"
              className="text-label-muted normal-case font-light hover:text-accent transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
