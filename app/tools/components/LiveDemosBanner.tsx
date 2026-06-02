'use client'

/**
 * LiveDemosBanner — interactive demos block on /tools.
 *
 * Sits between the page hero and the resources grid. Distinct from
 * the resources cards because these are LIVE working apps — no email
 * gate, no zip download, no DownloadModal.
 *
 * Three cards in a responsive grid:
 *   - Actifs: external Lovable app (https://actifs.natesystem.com)
 *   - Stock:  external Lovable app (https://stack-stock.natesystem.com)
 *   - Reviews: gated by request-access form (DemoRequestModal). Unlike
 *     the two above, Reviews has no public demo URL — access is granted
 *     by email after the form is submitted. The card opens the modal
 *     instead of navigating away.
 *
 * Same visual language across all three: var(--bg-card) surface,
 * 1px var(--border), 18px radius, accent kicker, h2 in serif italic.
 */

import { useState } from 'react'
import { useLang } from '@/components/providers/LangProvider'
import DemoRequestModal, { DemoRequest } from '@/components/ui/DemoRequestModal'

interface DemoCard {
  /** If gated, no href is used — the card opens the request modal. */
  href?: string
  /** Demo to request when the card is gated. */
  request?: DemoRequest
  tag: string
  title: string
  desc: string
  metrics: string[]
  cta: string
  /** Optional pill on the kicker line, e.g. "ON REQUEST" for gated cards. */
  badge?: string
}

export default function LiveDemosBanner() {
  const { t } = useLang()
  const [requesting, setRequesting] = useState<DemoRequest | null>(null)

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
    {
      request: { id: 'reviews', title: 'NateSystem · Reviews' },
      tag: t('demos.reviews.tag'),
      title: t('demos.reviews.title'),
      desc: t('demos.reviews.desc'),
      metrics: [
        t('demos.reviews.metric1'),
        t('demos.reviews.metric2'),
        t('demos.reviews.metric3'),
      ],
      cta: t('demos.reviews.cta'),
      badge: t('mega.gated'),
    },
  ]

  const cardStyle: React.CSSProperties = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 18,
    padding: 'clamp(22px, 2.4vw, 30px)',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
    textAlign: 'left',
    cursor: 'pointer',
    width: '100%',
    fontFamily: 'inherit',
  }

  const onHoverEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = 'var(--accent)'
    e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
    e.currentTarget.style.transform = 'translateY(-2px)'
  }
  const onHoverLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.borderColor = 'var(--border)'
    e.currentTarget.style.boxShadow = 'none'
    e.currentTarget.style.transform = 'none'
  }

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

        {/* Demo cards — 3-up on wide, stack on mobile */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {demos.map((demo) => {
            const inner = (
              <>
                {/* Kicker + optional gated badge */}
                <p
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span>{demo.tag}</span>
                  {demo.badge && (
                    <span
                      style={{
                        fontSize: 9,
                        letterSpacing: 1.5,
                        padding: '2px 6px',
                        borderRadius: 4,
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                    >
                      {demo.badge}
                    </span>
                  )}
                </p>

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
              </>
            )

            // Gated card — button that opens the request modal
            if (demo.request) {
              const req = demo.request
              return (
                <button
                  key={req.id}
                  type="button"
                  onClick={() => setRequesting(req)}
                  className="demo-card group"
                  style={cardStyle}
                  onMouseEnter={onHoverEnter}
                  onMouseLeave={onHoverLeave}
                >
                  {inner}
                </button>
              )
            }

            // External card — anchor opens the Lovable app in a new tab
            return (
              <a
                key={demo.href}
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-card group"
                style={cardStyle}
                onMouseEnter={onHoverEnter}
                onMouseLeave={onHoverLeave}
              >
                {inner}
              </a>
            )
          })}
        </div>

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

      <DemoRequestModal demo={requesting} onClose={() => setRequesting(null)} />
    </section>
  )
}
