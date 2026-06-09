'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export type RelatedLink = {
  href: string
  label: string
  desc: string
  /** External (other subdomain / site) — opens in a new tab. */
  external?: boolean
}

/**
 * Sober "Pour aller plus loin" internal-link block. Rendered always-visible
 * (no scroll-gated animation) so the links are reliable internal-mesh signals
 * for crawlers and AI engines. Brand-faithful, neutral register.
 */
export default function RelatedLinks({
  title = 'Pour aller plus loin',
  links,
}: {
  title?: string
  links: RelatedLink[]
}) {
  return (
    <section style={{ padding: '64px 24px' }} aria-label={title}>
      <div className="mx-auto" style={{ maxWidth: 900 }}>
        <p
          className="font-mono"
          style={{
            fontSize: 10.5,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontWeight: 600,
            margin: '0 0 20px',
          }}
        >
          {title}
        </p>
        <div className="related-grid">
          {links.map((l) => {
            const inner = (
              <>
                <div>
                  <p className="font-sans related-label" style={{ fontSize: 15, fontWeight: 500, color: 'var(--text)', margin: '0 0 4px' }}>
                    {l.label}
                  </p>
                  <p className="font-sans" style={{ fontSize: 13, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {l.desc}
                  </p>
                </div>
                <ArrowRight size={16} strokeWidth={2} className="related-arrow" style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} />
              </>
            )
            const style: React.CSSProperties = {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 14,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '20px 22px',
              textDecoration: 'none',
              height: '100%',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
            }
            return l.external ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="related-card" style={style}>
                {inner}
              </a>
            ) : (
              <Link key={l.href} href={l.href} className="related-card" style={style}>
                {inner}
              </Link>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          align-items: stretch;
        }
        .related-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-2px);
        }
        .related-card:hover :global(.related-arrow) {
          transform: translateX(3px);
        }
        .related-card :global(.related-arrow) {
          transition: transform 0.2s ease;
        }
        @media (max-width: 700px) {
          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
