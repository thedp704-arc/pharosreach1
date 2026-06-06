import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'Invalid input', issues: parsed.error.issues },
        { status: 400 },
      )
    }

    const { name, email, company, message } = parsed.data

    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'dev@pharosreach.com'
    const toEmail = process.env.RESEND_TO_EMAIL ?? 'thedp704@gmail.com'

    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY environment variable')
      return NextResponse.json(
        { ok: false, error: 'Server misconfiguration: RESEND_API_KEY missing' },
        { status: 500 },
      )
    }

    const subject = `New contact message from ${name}`
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n')

    const html = `
      <h2 style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; color: #0F1A17;">
        New contact message
      </h2>
      <p style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; color: #0F1A17;">
        <strong>Name:</strong> ${escapeHtml(name)}<br/>
        <strong>Email:</strong> ${escapeHtml(email)}<br/>
        ${company ? `<strong>Company:</strong> ${escapeHtml(company)}<br/>` : ''}
      </p>
      <hr style="border: none; border-top: 1px solid rgba(0,0,0,0.1);"/>
      <p style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; color: #0F1A17; white-space: pre-wrap;">
        ${escapeHtml(message)}
      </p>
    `

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Pharos Reach <${fromEmail}>`,
        to: [toEmail],
        subject,
        text,
        html,
        // Lets you reply directly to the visitor from your inbox.
        reply_to: email,
      }),
    })

    if (!resendRes.ok) {
      const errorBody = await resendRes.text().catch(() => '')
      console.error('Resend API error:', resendRes.status, errorBody)
      return NextResponse.json(
        { ok: false, error: 'Could not send email' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid JSON' },
      { status: 400 },
    )
  }
}

function escapeHtml(str: string) {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return str.replace(/[&<>"']/g, (m) => map[m])
}
