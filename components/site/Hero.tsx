'use client'

import { motion } from 'framer-motion'

const CAL_LINK = 'https://cal.com/natesystem/session-strategique'

const TRUSTED_BY = ['Chromosome', 'SimpleTeam', 'IUT Saint-Étienne', 'Vendéglátás Menedzsment Kft.']

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center"
      style={{ padding: '160px 24px 100px' }}
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
      >
        <span
          className="section-label"
          style={{ letterSpacing: '4px' }}
        >
          AI Infrastructure · NateSystem
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-display font-normal"
        style={{
          fontSize: 'clamp(52px, 8vw, 112px)',
          lineHeight: 1.04,
          marginBottom: '28px',
          maxWidth: '960px',
          color: 'var(--text-primary)',
        }}
      >
        Scale your{' '}
        <em style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>
          operations.
        </em>
        <br />
        Without scaling headcount.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="font-body font-light"
        style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
          maxWidth: '560px',
          marginBottom: '52px',
        }}
      >
        We deploy intelligent AI systems directly into your operations —
        connecting your tools, automating your processes, and letting your team
        focus on what actually matters.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-20"
      >
        <a
          href={CAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ fontSize: '14px', padding: '16px 40px' }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full"
            style={{
              backgroundColor: 'var(--color-gold)',
              flexShrink: 0,
              animation: 'navPulse 2.5s ease-in-out infinite',
            }}
          />
          Book a free audit →
        </a>

        <a
          href="#prestations"
          onClick={(e) => handleScroll(e, '#prestations')}
          className="text-sm font-light tracking-[0.5px] transition-all duration-300 hover:opacity-100"
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            opacity: 0.7,
          }}
        >
          See how it works ↓
        </a>
      </motion.div>

      {/* Proof bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        className="absolute bottom-12 left-0 right-0 flex flex-col items-center gap-4"
      >
        <div
          className="w-[1px] h-10"
          style={{
            background: 'linear-gradient(to bottom, var(--text-muted), transparent)',
            animation: 'scrollLine 2s ease infinite',
          }}
        />
        <div className="flex flex-wrap items-center justify-center gap-3 px-6">
          <span
            className="text-[10px] font-light tracking-[2.5px] uppercase"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}
          >
            Trusted by
          </span>
          <div className="flex items-center gap-3">
            {TRUSTED_BY.map((name, i) => (
              <span key={name} className="flex items-center gap-3">
                <span
                  className="text-[11px] font-light tracking-[1px]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}
                >
                  {name}
                </span>
                {i < TRUSTED_BY.length - 1 && (
                  <span style={{ color: 'var(--color-gold)', opacity: 0.4, fontSize: '10px' }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
