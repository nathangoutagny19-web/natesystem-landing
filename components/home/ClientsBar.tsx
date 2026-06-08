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
  | { name: string; type: 'logo'; src: string; href: string }
  // 'logo-themed' ships TWO ready-made variants instead of relying on the
  // grayscale+invert CSS trick: srcLight = the dark/colour logo shown on the
  // light theme, srcDark = the white logo shown on the dark theme. Use this
  // when a logo has detail that invert() would mangle.
  | { name: string; type: 'logo-themed'; srcLight: string; srcDark: string; href: string }
  | { name: string; type: 'wordmark'; href: string }

// Vendéglátás Menedzsment Kft. is the Hungarian hospitality reference —
// kept as wordmark until the official logo lands. When `/public/logos/
// vendeglatas.png` arrives, flip `type: 'wordmark'` to `type: 'logo'`
// and add the `src`.
const clients: ClientRef[] = [
  { name: 'Chromosome', type: 'logo', src: '/logos/chromosome.png', href: 'https://chromosome-saint-etienne.fr/' },
  {
    name: 'Les Chartreux',
    type: 'logo-themed',
    srcLight: '/logos/chartreux-dark.png',
    srcDark: '/logos/chartreux-light.png',
    href: 'https://www.leschartreux.net/',
  },
  { name: 'Université Jean Monnet', type: 'logo', src: '/logos/ujm.png', href: 'https://www.univ-st-etienne.fr/fr/index.html' },
  { name: 'Vendéglátás Menedzsment Kft.', type: 'wordmark', href: 'https://vendeglatasmenedzsment.hu/' },
]

export default function ClientsBar() {
  const { lang } = useLang()

  const label =
    lang === 'fr'
      ? 'ILS NOUS FONT CONFIANCE'
      : lang === 'hu'
        ? 'BIZALMUKAT BENNÜNK HELYEZTÉK'
        : 'TRUSTED BY'

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
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={c.name}
                className="clients-link"
              >
                {c.type === 'logo' ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={c.src}
                    alt={c.name}
                    className="clients-logo"
                  />
                ) : c.type === 'logo-themed' ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.srcLight} alt={c.name} className="clients-logo clients-logo--light" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.srcDark} alt={c.name} className="clients-logo clients-logo--dark" />
                  </>
                ) : (
                  <span className="clients-wordmark font-serif italic">
                    {c.name}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        /* Each cell takes equal width; logos and wordmarks centre into
           a fixed 56px-tall optical band, so a logo with internal
           padding doesn't render rikiki next to the long Hungarian
           wordmark. */
        .clients-row {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          /* Auto-fit so the grid scales whether we have 2, 3 or 4 references */
          grid-template-columns: repeat(auto-fit, minmax(160px, 240px));
          justify-content: center;
          align-items: center;
          column-gap: 56px;
          row-gap: 32px;
        }
        .clients-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 56px;
          color: #9CA3AF;
          opacity: 0.78;
          transition: color 200ms ease-out, opacity 200ms ease-out, transform 200ms ease-out;
        }
        .clients-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          color: inherit;
          text-decoration: none;
        }
        .clients-item:hover {
          color: var(--text);
          opacity: 1;
        }
        .clients-logo {
          /* Match the visual weight of the long Hungarian wordmark.
             max-width caps short logos so they don't blow up on wide
             screens; height covers the typical case. */
          height: 56px;
          width: auto;
          max-height: 56px;
          max-width: 220px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: inherit;
        }
        html:not(.light) .clients-logo {
          filter: grayscale(100%) invert(1) brightness(0.95);
        }
        /* Themed logos ship their own light/dark artwork — opt them out of
           the grayscale+invert trick and swap by theme instead. */
        .clients-logo--light,
        .clients-logo--dark {
          filter: none;
        }
        .clients-logo--dark { display: none; }
        html:not(.light) .clients-logo--light { display: none; }
        html:not(.light) .clients-logo--dark { display: block; }
        .clients-wordmark {
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          color: inherit;
          white-space: nowrap;
          text-align: center;
        }
        @media (max-width: 768px) {
          .clients-row {
            grid-template-columns: 1fr;
            column-gap: 0;
            row-gap: 28px;
          }
          .clients-item {
            height: 48px;
          }
          .clients-logo {
            height: 48px;
            max-height: 48px;
            max-width: 180px;
          }
          .clients-wordmark {
            font-size: 19px;
          }
        }
      `}</style>
    </section>
  )
}
