'use client'

import { useEffect } from 'react'

/**
 * PointerGlow — one delegated pointermove listener that drives the premium
 * pointer interactions in globals.css:
 *   • Ambient — a soft glow that follows the cursor on the page background
 *     (--gx/--gy on <html>, lighter in dark mode / darker in light mode).
 *   • Magnetic buttons — the element drifts toward the cursor via --tx/--ty.
 *   • Spotlight — cursor position as % via --mx/--my (buttons + offer cards).
 * Element vars are cleared the moment the cursor leaves, so buttons spring back.
 *
 * Perf/UX guardrails: single listener, rAF-throttled, and a hard no-op on
 * coarse pointers (touch) and reduced-motion.
 */
const BTN = '.btn-primary, .nav-cta-btn, .btn-ghost, .sols-cta, .infra-cta, .form-cta'
const ANY = '.btn-primary, .nav-cta-btn, .btn-ghost, .sols-cta, .infra-cta, .form-cta, .sols-card'
const MAG = 7 // px — max magnetic drift

const clamp = (v: number, m: number) => (v < -m ? -m : v > m ? m : v)

export default function PointerGlow() {
  useEffect(() => {
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const root = document.documentElement
    let raf = 0
    let current: HTMLElement | null = null
    let pending: { el: HTMLElement | null; x: number; y: number } | null = null

    const clear = (el: HTMLElement) => {
      el.style.removeProperty('--tx')
      el.style.removeProperty('--ty')
      el.style.removeProperty('--mx')
      el.style.removeProperty('--my')
    }

    const flush = () => {
      raf = 0
      if (!pending) return
      const { el, x, y } = pending
      pending = null

      // Ambient background glow follows the cursor everywhere.
      root.style.setProperty('--gx', `${x}px`)
      root.style.setProperty('--gy', `${y}px`)

      if (!el) return
      const r = el.getBoundingClientRect()
      if (!r.width || !r.height) return
      el.style.setProperty('--mx', `${((x - r.left) / r.width) * 100}%`)
      el.style.setProperty('--my', `${((y - r.top) / r.height) * 100}%`)
      if (el.matches(BTN)) {
        const tx = clamp(((x - (r.left + r.width / 2)) / (r.width / 2)) * MAG, MAG)
        const ty = clamp(((y - (r.top + r.height / 2)) / (r.height / 2)) * MAG, MAG)
        el.style.setProperty('--tx', `${tx.toFixed(1)}px`)
        el.style.setProperty('--ty', `${ty.toFixed(1)}px`)
      }
    }

    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.(ANY) as HTMLElement | null
      if (el !== current) {
        if (current) clear(current)
        current = el
      }
      pending = { el, x: e.clientX, y: e.clientY }
      if (!raf) raf = requestAnimationFrame(flush)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
      if (current) clear(current)
    }
  }, [])

  return null
}
