'use client'

import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'
import Link from 'next/link'

const CAL_LINK = 'https://cal.com/natesystem/session-strategique'

const FOOTER_LINKS = [
  { label: 'Prestations', href: '#prestations' },
  { label: 'Résultats', href: '#resultats' },
  { label: 'Process', href: '#process' },
]

const REASSURANCES = [
  { icon: '✓', text: '30 min' },
  { icon: '✓', text: 'No commitment' },
  { icon: '✓', text: '24h response' },
]

export default function CtaFinal() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--color-black)',
        padding: '0 24px',
      }}
    >
      {/* CTA block */}
      <div
        className="mx-auto text-center"
        style={{
          maxWidth: '800px',
          padding: '140px 0 120px',
        }}
      >
        {/* Label */}
        <FadeUp>
          <span className="section-label">Book your free audit</span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.1}>
          <h2
            className="font-display font-normal"
            style={{
              fontSize: 'clamp(36px, 5vw, 70px)',
              lineHeight: 1.08,
              color: 'var(--text-primary)',
              maxWidth: '700px',
              margin: '0 auto 28px',
            }}
          >
            30 minutes to identify exactly where you&apos;re losing{' '}
            <em style={{ color: 'var(--color-gold)' }}>time and money.</em>
          </h2>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.2}>
          <p
            className="font-body font-light mb-12"
            style={{
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '480px',
              margin: '0 auto 48px',
            }}
          >
            No pitch. No pressure. Nathan answers within 24 hours and arrives
            with a clear framework for your situation.
          </p>
        </FadeUp>

        {/* CTA Button */}
        <FadeUp delay={0.3}>
          <motion.a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex"
            style={{
              fontSize: '15px',
              padding: '20px 52px',
              marginBottom: '28px',
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full"
              style={{
                backgroundColor: 'var(--color-gold)',
                animation: 'navPulse 2.5s ease-in-out infinite',
              }}
            />
            Book my free audit →
          </motion.a>
        </FadeUp>

        {/* Reassurances */}
        <FadeUp delay={0.4}>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {REASSURANCES.map((r) => (
              <div key={r.text} className="flex items-center gap-2">
                <span
                  className="font-body"
                  style={{ fontSize: '14px', color: 'var(--color-gold)' }}
                >
                  {r.icon}
                </span>
                <span
                  className="font-body font-light"
                  style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
                >
                  {r.text}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Footer */}
      <footer
        className="mx-auto"
        style={{
          maxWidth: '1200px',
          borderTop: '1px solid var(--border-subtle)',
          padding: '40px 0 48px',
        }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-1">
              <span
                className="font-display italic"
                style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)' }}
              >
                N
              </span>
              <span
                className="w-[5px] h-[5px] rounded-full -ml-[2px] mt-[10px]"
                style={{ backgroundColor: 'var(--color-gold)' }}
              />
              <span
                className="font-body ml-2"
                style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                NateSystem
              </span>
            </div>
            <p
              className="font-body font-light"
              style={{ fontSize: '12px', color: 'var(--text-muted)', maxWidth: '240px' }}
            >
              Infrastructure IA · Agents Spécialisés · Écosystèmes Sur-Mesure
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body font-light transition-colors duration-300 hover:text-white"
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <p
              className="font-body font-light"
              style={{ fontSize: '11px', color: 'var(--text-muted)' }}
            >
              © 2026 NateSystem · Nathan Goutagny
            </p>
            <p
              className="font-body font-light"
              style={{ fontSize: '11px', color: 'var(--text-muted)' }}
            >
              SIRET 92949816000035
            </p>
            <Link
              href="/mentions-legales"
              className="font-body font-light transition-colors duration-300 hover:text-white"
              style={{
                fontSize: '11px',
                color: 'var(--color-gold)',
                textDecoration: 'none',
                opacity: 0.7,
              }}
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </footer>
    </section>
  )
}
