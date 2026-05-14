import React from 'react'

interface ServiceCard {
  title: string
  description: React.ReactNode
  icon: string
}

const services: ServiceCard[] = [
  {
    title: 'Website Creation',
    description: (
      <>
        A fast, modern website built to convert. We <span className="text-accent font-medium">hand-code</span> every line of your site to ensure it reflects your brand perfectly, loads instantly, and delivers a truly <span className="text-accent font-medium">custom experience</span>.
      </>
    ),
    icon: '◻',
  },
  {
    title: 'Website Maintenance',
    description: (
      <>
        Since we <span className="text-accent font-medium">hand-coded</span> your site ourselves, there is no one better to keep your ongoing bugs and crashes in line than us. We ensure your platform stays sharp, stable, and ready for scale.
      </>
    ),
    icon: '↺',
  },
  {
    title: 'CRM Setup',
    description: (
      <>
        Whether it is a fashion e-commerce site or an architect's portfolio, everyone needs to convert viewers to clients. We give you the system, the know-how, and the ability to convert. <span className="text-accent font-medium">Custom-coded</span> sites have a <span className="text-accent font-medium">36%</span> higher chance of capturing and retaining potential clients—don't waste it.
      </>
    ),
    icon: '✦',
  },
  {
    title: 'E-Commerce Building',
    description: (
      <>
        We build <span className="text-accent font-medium">custom-coded</span>, stunning landing pages and full storefronts for you. From product pages to secure checkout, everything is <span className="text-accent font-medium">hand-coded</span> to be as beautiful as it is functional.
      </>
    ),
    icon: '◆',
  },
  {
    title: 'Data Handling',
    description: 'Clean data flows and analytics that give you a clear picture of what\'s working. Make confident decisions instead of guessing.',
    icon: '→',
  },
  {
    title: 'Payment Gateway Setup',
    description: 'Secure, reliable payment integrations so customers can pay without friction — and every transaction lands exactly where it should.',
    icon: '◈',
  },
]

export function ServicesGrid({ showBorder = true }: { showBorder?: boolean }) {
  return (
    <section
      id="services"
      className={`relative section-spacing px-4 md:px-8 scroll-mt-24 overflow-hidden ${showBorder ? 'border-t-[0.5px] border-border' : ''}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.2)_0%,transparent_55%),radial-gradient(circle_at_0%_55%,rgba(15,26,23,0)_0%,rgba(198,168,90,0.08)_45%,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#C6A85A]/5 rounded-full blur-[140px] pointer-events-none opacity-30" />
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="h-[1px] w-16 bg-[#C6A85A]/40" />
            <h2 className="section-title">
              Our Services
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20 relative z-10">
            <p className="text-p">
              Everything your business needs to launch, grow, and operate online — delivered end to end.
            </p>
            <div className="lg:max-w-md p-8 bg-[#C6A85A]/5 border border-[#C6A85A]/15 backdrop-blur-sm shadow-[0_0_20px_rgba(198,168,90,0.05)]">
              <p className="text-p-small text-foreground italic">
                "We leverage <span className="text-accent font-medium">AI-driven components</span> for speed and intelligence, but we <span className="text-accent font-medium">custom code every single website by hand</span>. Our specialized programmers ensure a truly personal, 'this is exactly what I want' feel that templates simply cannot match."
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-[0.5px] border-[#C6A85A]/25 p-10 relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(198,168,90,0.16)_0%,_transparent_55%),linear-gradient(to_bottom,rgba(31,58,52,0.85),rgba(15,26,23,0.95))] shadow-[0_0_0_1px_rgba(198,168,90,0.06),0_18px_50px_rgba(0,0,0,0.30)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_0_1px_rgba(198,168,90,0.2),0_40px_100px_rgba(198,168,90,0.15)] group animate-[royalFadeUp_900ms_ease-out_both]"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(198,168,90,0.22)_0%,transparent_55%),radial-gradient(circle_at_85%_30%,rgba(198,168,90,0.08)_0%,transparent_60%)] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-px bg-gradient-to-br from-[#C6A85A]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 mb-8 transition-transform duration-500 group-hover:scale-110">
                <span className="text-accent text-3xl drop-shadow-[0_0_14px_rgba(198,168,90,0.3)]">{service.icon}</span>
              </div>
              <h3 className="relative z-10 section-card-title mb-4">
                {service.title}
              </h3>
              <p className="relative z-10 text-p-small">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
