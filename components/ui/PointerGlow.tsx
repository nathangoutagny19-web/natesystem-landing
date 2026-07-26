'use client'

import { useEffect } from 'react'

/**
 * PointerGlow — one delegated pointermove listener that feeds the cursor
 * position (as % of the element) into --mx/--my on hovered buttons and offer
 * cards, driving the CSS spotlight in globals.css.
 *
 * Perf/UX guardrails: single listener, rAF-throttled, and a hard no-op on
 * coarse pointers (touch) and reduced-motion — so it never runs where it
 * would waste cycles or bother anyone.
 */
const SELECTOR = '.btn-primary, .nav-cta-btn, .sols-card'

export default function PointerGlow() {
  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    let raf = 0
    let pending: { el: HTMLElement; x: number; y: number } | null = null

    const flush = () => {
      raf = 0
      if (!pending) return
      pending.el.style.setProperty('--mx', `${pending.x}%`)
      pending.el.style.setProperty('--my', `${pending.y}%`)
      pending = null
    }

    const onMove = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null
      const el = target?.closest?.(SELECTOR) as HTMLElement | null
      if (!el) return
      const r = el.getBoundingClientRect()
      if (!r.width || !r.height) return
      pending = {
        el,
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      }
      if (!raf) raf = requestAnimationFrame(flush)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
