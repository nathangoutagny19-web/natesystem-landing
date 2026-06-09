'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'
import Link from 'next/link'
import { CAL_LINK } from '@/lib/constants'

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const { t } = useLang()

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
        {t('hero.title1')}{' '}{t('hero.title2')}{' '}
        <span className="accent" style={{ color: 'var(--accent)' }}>{t('hero.titleAccent')}</span>
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
