'use client'

/**
 * LiveDemosBanner — interactive demos block on /tools.
 *
 * Sits between the restaurant-audit banner and the resources grid.
 * Distinct from the resources cards because these are LIVE working
 * apps (Lovable-deployed Next.js demos with mock data) opened in a
 * new tab — no email gate, no zip download, no DownloadModal.
 *
 * Two cards side by side on desktop, stacked on mobile.
 *   - Actifs: https://actifs.natesystem.com
 *   - Stock:  https://stack-stock.natesystem.com
 *
 * Same visual language as the existing audit banner: var(--bg-card)
 * surface, 1px var(--border), 18px radius, accent kicker, h2 in
 * serif italic, button primary on click. Hover lifts the card 2px
 * and bumps the border to accent.
 */

import { useLang } from '@/components/providers/LangProvider'

interface DemoCard {
  href: string
  tag: string
  title: string
  desc: string
  metrics: string[]
  cta: string
}

export default function LiveDemosBanner() {
  const { t } = useLang()

  const demos: DemoCard[] = [
    {
      href: 'https://actifs.natesystem.com',
      tag: t('demos.actifs.tag'),
      title: t('demos.actifs.title'),
      desc: t('demos.actifs.desc'),
      metrics: [
        t('demos.actifs.metric1'),
        t('demos.actifs.metric2'),
        t('demos.actifs.metric3'),
      ],
      cta: t('demos.actifs.cta'),
    },
    {
      href: 'https://stack-stock.natesystem.com',
      tag: t('demos.stock.tag'),
      title: t('demos.stock.title'),
      desc: t('demos.stock.desc'),
      metrics: [
        t('demos.stock.metric1'),
        t('demos.stock.metric2'),
        t('demos.stock.metric3'),
      ],
      cta: t('demos.stock.cta'),
    },
  ]

  return (
    <section className="px-6 pb-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: 2.5,
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: 12,
            }}
          >
            {t('demos.kicker')}
          </p>
          <h2
            className="font-serif italic"
            style={{
              fontSize: 'clamp(22px, 2.4vw, 30px)',
              lineHeight: 1.25,
              color: 'var(--text)',
              fontWeight: 400,
              marginBottom: 10,
            }}
          >
            {t('demos.title')}
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: 14,
              fontWeight: 300,
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: 620,
              margin: '0 auto',
            }}
          >
            {t('demos.sub')}
          </p>
        </div>

        {/* 2 demo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {demos.map((demo) => (
            <a
              key={demo.href}
              href={demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-card group"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: 'clamp(22px, 2.4vw, 30px)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'none'
              }}
            >
              {/* Kicker */}
              <p
                className="font-mono"
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                }}
              >
                {demo.tag}
              </p>

              {/* Title */}
              <h3
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(20px, 2vw, 24px)',
                  lineHeight: 1.25,
                  color: 'var(--text)',
                  fontWeight: 400,
                }}
              >
                {demo.title}
              </h3>

              {/* Description */}
              <p
                className="font-sans"
                style={{
                  fontSize: 14,
                  fontWeight: 300,
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: 4,
                }}
              >
                {demo.desc}
              </p>

              {/* Metrics row */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {demo.metrics.map((m) => (
                  <li
                    key={m}
                    className="font-sans"
                    style={{
                      fontSize: 13,
                      fontWeight: 400,
                      color: 'var(--text)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 999,
                        background: 'var(--accent)',
                        flexShrink: 0,
                      }}
                    />
                    {m}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <span
                className="font-sans"
                style={{
                  marginTop: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  padding: '10px 18px',
                  background: 'var(--accent)',
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 600,
                  borderRadius: 10,
                  letterSpacing: 0.2,
                }}
              >
                {demo.cta}
              </span>
            </a>
          ))}
        </div>

        {/* Footnote */}
        <p
          className="text-center mt-6 font-mono"
          style={{
            fontSize: 11,
            letterSpacing: 1,
            color: 'var(--text-muted)',
            opacity: 0.7,
          }}
        >
          {t('demos.note')}
        </p>
      </div>
    </section>
  )
}
