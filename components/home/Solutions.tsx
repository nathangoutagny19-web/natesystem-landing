'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_LINK } from '@/lib/constants'

type Solution = {
  title: string
  target: string
  promise: string
  bullets: string[]
  ideal: string
  cta: string
  ctaSub: string
}

export default function Solutions() {
  const { t } = useLang()

  const solutions: Solution[] = [
    {
      title: t('sols.s1.title'),
      target: t('sols.s1.target'),
      promise: t('sols.s1.promise'),
      bullets: [
        t('sols.s1.bullet1'),
        t('sols.s1.bullet2'),
        t('sols.s1.bullet3'),
        t('sols.s1.bullet4'),
        t('sols.s1.bullet5'),
        t('sols.s1.bullet6'),
      ],
      ideal: t('sols.s1.ideal'),
      cta: t('sols.s1.cta'),
      ctaSub: t('sols.s1.ctaSub'),
    },
    {
      title: t('sols.s2.title'),
      target: t('sols.s2.target'),
      promise: t('sols.s2.promise'),
      bullets: [
        t('sols.s2.bullet1'),
        t('sols.s2.bullet2'),
        t('sols.s2.bullet3'),
        t('sols.s2.bullet4'),
        t('sols.s2.bullet5'),
        t('sols.s2.bullet6'),
      ],
      ideal: t('sols.s2.ideal'),
      cta: t('sols.s2.cta'),
      ctaSub: t('sols.s2.ctaSub'),
    },
    {
      title: t('sols.s3.title'),
      target: t('sols.s3.target'),
      promise: t('sols.s3.promise'),
      bullets: [
        t('sols.s3.bullet1'),
        t('sols.s3.bullet2'),
        t('sols.s3.bullet3'),
        t('sols.s3.bullet4'),
        t('sols.s3.bullet5'),
        t('sols.s3.bullet6'),
      ],
      ideal: t('sols.s3.ideal'),
      cta: t('sols.s3.cta'),
      ctaSub: t('sols.s3.ctaSub'),
    },
  ]

  return (
    <section id="solutions" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1200px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('sols.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 20px' }}>
            {t('sols.title')}{' '}
            <span className="accent">{t('sols.titleAccent')}</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('sols.sub')}
          </p>
        </FadeUp>

        <div className="sols-grid">
          {solutions.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.1}>
              <article
                className="sols-card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  padding: '36px 32px 32px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  gap: 18,
                }}
              >
                <h3
                  className="font-serif italic"
                  style={{
                    fontSize: 26,
                    fontWeight: 400,
                    lineHeight: 1.15,
                    color: 'var(--text)',
                    margin: 0,
                  }}
                >
                  {s.title}
                </h3>

                <p
                  className="font-sans"
                  style={{
                    fontSize: 14,
                    color: 'var(--text)',
                    lineHeight: 1.6,
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  {s.promise}
                </p>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 18 }}>
                  <p
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                      margin: '0 0 12px',
                    }}
                  >
                    {t('sols.includesLabel')}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2"
                        style={{ fontSize: 12.5, color: 'var(--text-secondary)', lineHeight: 1.55, fontWeight: 300 }}
                      >
                        <Check size={14} strokeWidth={2.2} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 3 }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    background: 'var(--bg-elevated)',
                    borderRadius: 8,
                    padding: '12px 14px',
                    marginTop: 'auto',
                  }}
                >
                  <p
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                      margin: '0 0 4px',
                    }}
                  >
                    {t('sols.idealLabel')}
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: 12.5,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    {s.ideal}
                  </p>
                </div>

                <Link
                  href={CAL_LINK}
                  className="sols-cta"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    background: 'transparent',
                    color: 'var(--text)',
                    border: '1px solid var(--border-hover)',
                    padding: '14px 22px',
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'background 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  {s.cta} <ArrowRight size={14} strokeWidth={2} />
                </Link>
                <p
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    margin: 0,
                    letterSpacing: 0.5,
                  }}
                >
                  {s.ctaSub}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sols-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 980px) {
          .sols-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </section>
  )
}
