'use client'

import React from 'react'

const CYCLE_MS = 72 * 60 * 60 * 1000

function pad2(n: number) {
  return String(n).padStart(2, '0')
}

export function OfferCountdown() {
  const [remainingMs, setRemainingMs] = React.useState(CYCLE_MS)
  const lastTickRef = React.useRef<number>(Date.now())

  React.useEffect(() => {
    lastTickRef.current = Date.now()

    const id = setInterval(() => {
      const now = Date.now()
      const deltaMs = now - lastTickRef.current
      lastTickRef.current = now

      setRemainingMs((prev) => {
        const next = prev - deltaMs
        if (next <= 0) return CYCLE_MS
        return next
      })
    }, 250)

    return () => clearInterval(id)
  }, [])

  const totalSeconds = Math.max(0, Math.floor(remainingMs / 1000))
  const hours = Math.floor(totalSeconds / 3600) % 100
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-foreground font-serif text-xl tracking-tighter tabular-nums">
        {pad2(hours)}:{pad2(minutes)}:{pad2(seconds)}
      </span>
    </div>
  )
}

