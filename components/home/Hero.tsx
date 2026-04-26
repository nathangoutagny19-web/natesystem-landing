'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'
import Link from 'next/link'
import { CAL_LINK } from '@/lib/constants'

type TrustedRef = { label: string; logo?: string; logoHeight?: number }

const TRUSTED_BY: TrustedRef[] = [
  { label: 'Chromosome' },
  { label: 'SimpleTeam' },
  { label: 'Université Jean Monnet', logo: '/logos/ujm.png', logoHeight: 28 },
  { label: 'Vendéglátás Menedzsment Kft.' },
]
const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center" style={{ padding: '140px 24px 80px' }}>
      {/* Label */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }} className="mb-8">
        <span className="section-label" style={{ letterSpacing: '4px' }}>{t('hero.label')}</span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease }}
        className="font-serif italic font-normal"
        style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.15, marginBottom: '24px', maxWidth: '720px', color: 'var(--text)' }}
      >
        {t('hero.title1')}{' '}
        <span className="accent" style={{ color: 'var(--accent)' }}>{t('hero.titleAccent')}</span>
        <br />
        {t('hero.title2')}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease }}
        className="font-sans"
        style={{ fontSize: 'clamp(15px, 3vw, 18px)', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '580px', lineHeight: 1.7, marginBottom: '48px' }}
      >
        {t('hero.sub')}
      </motion.p>

      {/* CTA */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease }}>
        <Link href={CAL_LINK} className="btn-primary" style={{ fontSize: '14px' }}>
          <span className="btn-primary-dot" />
          {t('hero.cta')} →
        </Link>
      </motion.div>

      {/* Scroll hint + trust bar */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4"
      >
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, var(--text-muted), transparent)', animation: 'scrollPulse 2s ease infinite' }} />
        <div className="flex flex-wrap items-center justify-center gap-3 px-6">
          <span className="font-mono text-[10px] font-light tracking-[2.5px] uppercase" style={{ color: 'var(--text-muted)' }}>
            {t('hero.trusted')}
          </span>
          {TRUSTED_BY.map((ref, i) => (
            <span key={ref.label} className="flex items-center gap-3">
              {ref.logo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={ref.logo}
                  alt={ref.label}
                  height={ref.logoHeight ?? 18}
                  className="trust-logo"
                  style={{
                    height: ref.logoHeight ?? 18,
                    width: 'auto',
                  }}
                />
              ) : (
                <span className="text-[11px] font-light tracking-[1px]" style={{ fontFamily: 'var(--font-sans)', color: 'var(--text-secondary)' }}>
                  {ref.label}
                </span>
              )}
              {i < TRUSTED_BY.length - 1 && <span style={{ color: 'var(--accent)', opacity: 0.4, fontSize: '10px' }}>·</span>}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
