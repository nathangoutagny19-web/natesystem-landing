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
  // 'logo-white' is a transparent WHITE logo (alpha-cut, no background box).
  // It's tinted per-theme via CSS brightness() so it reads as neutral grey on
  // the light theme and white/light-grey on the dark theme — same optical
  // weight as the grayscale logos, but without the invert() trick that mangles
  // detailed artwork.
  | { name: string; type: 'logo-white'; src: string; href: string }
  | { name: string; type: 'wordmark'; href: string }

// Vendéglátás Menedzsment Kft. is the Hungarian hospitality reference —
// kept as wordmark until the official logo lands. When `/public/logos/
// vendeglatas.png` arrives, flip `type: 'wordmark'` to `type: 'logo'`
// and add the `src`.
const clients: ClientRef[] = [
  { name: 'Chromosome', type: 'logo', src: '/logos/chromosome.png', href: 'https://chromosome-saint-etienne.fr/' },
  {
    name: 'Les Chartreux',
    type: 'logo-white',
    src: '/logos/chartreux-light.png', // transparent white artwork, tinted by CSS per theme
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

        {/* Desktop: static centred grid. */}
        <ul className="clients-row">
          {clients.map((c) => (
            <li key={c.name} className="clients-item">
              <ClientItem c={c} />
            </li>
          ))}
        </ul>

        {/* Mobile: slow continuous carousel — references stay on ONE line and
            scroll left forever (track duplicated for a seamless loop) instead
            of stacking into an ugly column. */}
        <div className="clients-marquee-wrap" aria-hidden="false">
          <ul className="clients-marquee">
            {[...clients, ...clients].map((c, i) => (
              <li key={`${c.name}-${i}`} className="clients-item">
                <ClientItem c={c} />
              </li>
            ))}
          </ul>
        </div>
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
        /* White transparent logo (alpha-cut, no background box). One asset,
           tinted by theme: darkened to neutral grey on the light theme so it
           reads against the ivory background, left white/light on the dark
           theme. Matches the optical weight of the grayscale logos. */
        .clients-logo--white {
          filter: brightness(0) opacity(0.72);
        }
        html:not(.light) .clients-logo--white {
          filter: brightness(0) invert(1) opacity(0.85);
        }
        .clients-item:hover .clients-logo--white {
          filter: brightness(0) opacity(1);
        }
        html:not(.light) .clients-item:hover .clients-logo--white {
          filter: brightness(0) invert(1) opacity(1);
        }
        .clients-wordmark {
          font-size: 22px;
          line-height: 1.2;
          font-weight: 400;
          color: inherit;
          white-space: nowrap;
          text-align: center;
        }
        /* Mobile carousel — hidden on desktop, where the grid rules. */
        .clients-marquee-wrap {
          display: none;
        }

        @media (max-width: 768px) {
          /* Hide the static grid, show the scrolling carousel. */
          .clients-row {
            display: none;
          }
          .clients-marquee-wrap {
            display: block;
            overflow: hidden;
            width: 100%;
            max-width: 100vw;
            -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
            mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
          }
          .clients-marquee {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            width: max-content;
            gap: 48px;
            animation: clientsScroll 28s linear infinite;
            will-change: transform;
          }
          .clients-marquee .clients-item {
            height: 44px;
            flex: 0 0 auto;
          }
          .clients-logo {
            height: 44px;
            max-height: 44px;
            max-width: 160px;
          }
          .clients-wordmark {
            font-size: 18px;
          }
          @keyframes clientsScroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          /* Content carries references the user must discover, so we keep it
             moving even with reduced-motion — but slow it right down. */
          @media (prefers-reduced-motion: reduce) {
            .clients-marquee { animation-duration: 60s; }
          }
        }
      `}</style>
    </section>
  )
}

function ClientItem({ c }: { c: ClientRef }) {
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={c.name}
      className="clients-link"
    >
      {c.type === 'logo' ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={c.src} alt={c.name} className="clients-logo" />
      ) : c.type === 'logo-white' ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={c.src} alt={c.name} className="clients-logo clients-logo--white" />
      ) : (
        <span className="clients-wordmark font-serif italic">{c.name}</span>
      )}
    </a>
  )
}
