import React from 'react'

export function HowItWorksSection({ showTitle = true }: { showTitle?: boolean }) {
  return (
    <section
      id="how-it-works"
      className="relative section-spacing px-4 md:px-8 border-t-[0.5px] border-border scroll-mt-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(198,168,90,0.15)_0%,transparent_55%),radial-gradient(circle_at_0%_60%,rgba(198,168,90,0.08)_0%,transparent_55%)]" />
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-20">
            <div className="max-w-2xl">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-16 bg-[#C6A85A]/40" />
                  <h2 className="section-title">
                    How it works
                  </h2>
                </div>
                <p className="text-p">
                  A clear, structured process so you always know what's happening and what's next.
                </p>
              </div>
            </div>

            <div className="relative z-10 text-p-small max-w-xl lg:text-base">
              Pick the plan that fits your goals, then select the services you need (if applicable).
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <Step
            number="01"
            title="Choose your plan"
            description="Basic, Deluxe, or Premier package."
          />
          <Step
            number="02"
            title="Confirm requirements"
            description="We gather key details, access needs, and scope so we can start with clarity."
          />
          <Step
            number="03"
            title="Build & integrate"
            description="Your selected services are delivered in focused milestones."
          />
          <Step
            number="04"
            title="Review & launch"
            description="We validate everything, then launch and provide a short handover."
          />
        </div>
      </div>
    </section>
  )
}

function Step({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="relative group border-[0.5px] border-[#C6A85A]/25 p-10 bg-[radial-gradient(circle_at_top,_rgba(198,168,90,0.16)_0%,_transparent_55%),linear-gradient(to_bottom,rgba(31,58,52,0.85),rgba(15,26,23,0.95))] shadow-[0_0_0_1px_rgba(198,168,90,0.06),0_20px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(198,168,90,0.16),0_30px_80px_rgba(0,0,0,0.45)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(198,168,90,0.18)_0%,transparent_55%)] opacity-80" />
      <div className="relative z-10 flex items-center gap-6 mb-8">
        <div className="w-12 h-12 rounded-full border border-[#C6A85A]/35 bg-[#C6A85A]/10 flex items-center justify-center text-accent font-serif text-lg tracking-tighter shadow-[0_0_0_1px_rgba(198,168,90,0.08)]">
          {number}
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A85A]/30 via-[#C6A85A]/15 to-transparent" />
      </div>
      <h3 className="relative z-10 section-card-title mb-4">
        {title}
      </h3>
      <p className="relative z-10 text-p-small">
        {description}
      </p>
    </div>
  )
}

