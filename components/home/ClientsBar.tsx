'use client'

/**
 * ClientsBar — sober logo strip rendered just under the hero CTA.
 *
 * Replaces the inline trust line in Hero. Lives as its own component so
 * adding logos later is a config-only change (no JSX to touch).
 *
 * Visual rules (per Nathan's spec, B2B premium register, Linear/Resend
 * style — NOT NateSystem-accent territory; we deliberately stay in
 * neutrals so the eye doesn't pingpong between the hero CTA and this
 * row):
 *   • Top label   — JetBrains Mono 11px uppercase, wide tracking, muted
 *   • Row         — 3 references, gap 64px desktop / 24px mobile (2×2)
 *   • Each item   — exact 32px height, neutral grey at 70% opacity,
 *                   200ms ease-out hover lift to full text colour.
 *   • Logos       — grayscale + currentColor so the wordmark adopts
 *                   the row's neutral hue.
 *   • Wordmarks   — Instrument Serif italic 22px, vertically centred
 *                   on the same 32px line as the SVG logos.
 *
 * Localized label uses i18n keys (`reviews.*` namespace was hero-only
 * before; this is generic — added under `clients.label`).
 */

import { useLang } from '@/components/providers/LangProvider'

type ClientRef =
  | { name: string; type: 'logo'; src: string }
  | { name: string; type: 'wordmark' }

const clients: ClientRef[] = [
  { name: 'Chromosome', type: 'wordmark' },
  { name: 'Université Jean Monnet', type: 'logo', src: '/logos/ujm.png' },
  { name: 'Vendéglátás Menedzsment Kft.', type: 'wordmark' },
]

export default function ClientsBar() {
  const { lang } = useLang()

  const label =
    lang === 'fr'
      ? 'OPÉRATEURS QUI ONT REMPLACÉ LEUR STACK SAAS'
      : lang === 'hu'
        ? 'OPERÁTOROK, AKIK LECSERÉLTÉK SAAS-RENDSZERÜKET'
        : 'TRUSTED BY OPERATORS REPLACING REAL SAAS'

  return (
    <section
      aria-label={label}
      style={{ padding: '48px 24px' }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1100 }}
      >
        <p
          className="font-mono text-center"
          style={{
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            opacity: 0.5,
            marginBottom: 32,
            fontWeight: 300,
          }}
        >
          {label}
        </p>

        <ul className="clients-row">
          {clients.map((c) => (
            <li key={c.name} className="clients-item">
              {c.type === 'logo' ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={c.src}
                  alt={c.name}
                  className="clients-logo"
                />
              ) : (
                <span className="clients-wordmark font-serif italic">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .clients-row {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 64px;
          flex-wrap: wrap;
        }
        .clients-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 32px;
          color: #9CA3AF;
          opacity: 0.7;
          transition: color 200ms ease-out, opacity 200ms ease-out;
        }
        .clients-item:hover {
          color: var(--text);
          opacity: 1;
        }
        .clients-logo {
          height: 32px;
          width: auto;
          max-height: 32px;
          object-fit: contain;
          /* Black PNGs (UJM 2023) sit on a light theme as-is.
             Grayscale removes any residual chroma, currentColor doesn't
             affect a raster — but on dark we invert with the same trick
             used in the integrations strip. */
          filter: grayscale(100%);
          opacity: inherit;
        }
        html:not(.light) .clients-logo {
          filter: grayscale(100%) invert(1) brightness(0.95);
        }
        .clients-wordmark {
          font-size: 22px;
          line-height: 32px;
          font-weight: 400;
          color: inherit;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .clients-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
          .clients-item {
            min-width: 0;
          }
          .clients-wordmark {
            font-size: 18px;
            line-height: 28px;
          }
        }
      `}</style>
    </section>
  )
}
