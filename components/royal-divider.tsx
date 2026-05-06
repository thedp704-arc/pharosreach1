import React from 'react'

export function RoyalDivider() {
  return (
    <section aria-hidden className="relative -mt-10 mb-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-center py-10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 -translate-x-1/2 top-1 w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle_at_center,rgba(198,168,90,0.18)_0%,transparent_60%)] blur-[10px] animate-[royalGlowPulse_2.2s_ease-in-out_infinite]" />
          </div>

          <div className="relative z-10 flex items-center w-full gap-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A85A]/0 via-[#C6A85A]/25 to-[#C6A85A]/0" />

            <div className="relative">
              <div className="w-12 h-12 rounded-full border border-[#C6A85A]/30 bg-[#C6A85A]/5 flex items-center justify-center shadow-[0_0_0_1px_rgba(198,168,90,0.08),0_12px_40px_rgba(0,0,0,0.35)]">
                <div className="w-7 h-7 rounded-full border border-[#C6A85A]/35 animate-[royalSpinSlow_5.5s_linear_infinite]" />
              </div>
            </div>

            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#C6A85A]/0 via-[#C6A85A]/25 to-[#C6A85A]/0" />
          </div>
        </div>
      </div>
    </section>
  )
}

