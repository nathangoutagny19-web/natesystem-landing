'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLang } from '@/components/providers/LangProvider'
import Link from 'next/link'
import { CAL_LINK } from '@/lib/constants'

const ease = [0.22, 1, 0.36, 1] as const

/** Cycles through benefit words: each fades/slides in, holds, then out.
    Mount-gated: renders a plain static first word for SSR + first client
    paint (so there's never a hydration text mismatch), then upgrades to the
    animated version once mounted. */
function RotatingWord({ words }: { words: string[] }) {
  const [mounted, setMounted] = useState(false)
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => setMounted(true), [])

  // The word ALWAYS rotates — it's content, not decoration. Reduced-motion only
  // softens the transition (a quick cut instead of a slide), it never freezes it.
  useEffect(() => {
    if (!mounted || words.length <= 1) return
    const id = setInterval(() => setI((p) => (p + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [mounted, words.length])

  // Reserve width for the longest word so the layout doesn't jump.
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), words[0] ?? '')

  // SSR / first paint: a stable, always-visible first word (avoids hydration mismatch).
  if (!mounted || words.length <= 1) {
    return <span className="accent" style={{ color: 'var(--accent)' }}>{words[0]}</span>
  }

  // Reduced motion → no slide, just a fast opacity cut. Full motion → fade + slide.
  const dur = reduce ? 0.15 : 0.45
  const offset = reduce ? 0 : '0.35em'

  return (
    <span style={{ position: 'relative', display: 'inline-block', verticalAlign: 'bottom' }}>
      {/* invisible sizer keeps the line width stable */}
      <span aria-hidden className="accent" style={{ visibility: 'hidden', color: 'var(--accent)' }}>{longest}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          className="accent"
          style={{ color: 'var(--accent)', position: 'absolute', left: 0, bottom: 0, whiteSpace: 'nowrap' }}
          initial={{ opacity: 0, y: offset }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : '-0.35em' }}
          transition={{ duration: dur, ease }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const { t } = useLang()
  const words = t('hero.titleWords').split('|').map((w) => w.trim()).filter(Boolean)

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center hero-section" style={{ padding: '140px 24px 80px' }}>
      {/* Label */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }} className="mb-8">
        <span className="section-label hero-eyebrow">{t('hero.label')}</span>
      </motion.div>

      {/* Title — NateSystem signature: serif italic, scaled up for the new outcome-first H1 */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
        className="font-serif italic font-normal"
        style={{ fontSize: 'clamp(38px, 5.2vw, 64px)', lineHeight: 1.08, marginBottom: '28px', maxWidth: '820px', color: 'var(--text)' }}
      >
        {t('hero.titlePrefix')}{' '}
        <RotatingWord words={words} />
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease }}
        className="font-sans"
        style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '620px', lineHeight: 1.6, marginBottom: '40px' }}
      >
        {t('hero.sub')}
      </motion.p>

      {/* CTAs — primary + secondary ghost */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <Link href={CAL_LINK} className="btn-primary" style={{ fontSize: '14px' }}>
          <span className="btn-primary-dot" />
          {t('hero.cta')} →
        </Link>
        <a
          href="#process"
          className="font-sans"
          style={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            padding: '14px 22px',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            textDecoration: 'none',
            transition: 'border-color 200ms ease, color 200ms ease',
          }}
        >
          {t('hero.secondary')} →
        </a>
      </motion.div>

      {/* Scroll hint — trust bar moved to dedicated <ClientsBar /> below the hero */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4"
      >
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, var(--text-muted), transparent)', animation: 'scrollPulse 2s ease infinite' }} />
      </motion.div>

      <style jsx>{`
        .hero-eyebrow {
          letter-spacing: 4px;
        }
        @media (max-width: 540px) {
          .hero-section {
            padding: 110px 18px 64px !important;
            min-height: auto;
          }
          .hero-eyebrow {
            letter-spacing: 2px;
            font-size: 10px;
          }
        }
      `}</style>
    </section>
  )
}
