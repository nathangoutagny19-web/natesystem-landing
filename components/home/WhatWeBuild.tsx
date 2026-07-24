'use client'

/**
 * WhatWeBuild — "Ce qu'on construit" mockup band, rendered directly under
 * <ClientsBar />. Forms a paired "proof zone": the logo strip above says WHO
 * trusts us (named), this band shows WHAT we build (anonymised).
 *
 * Privacy-by-design (per Nathan's spec): every mockup is a heavily-blurred,
 * downscaled webp — no client name, email, personal data or logo is legible,
 * so nothing here is attributable to a client from the outside. Labels are
 * generic (function · sector), never a client name.
 *
 * Motion: scrolls RIGHT (opposite to the logo strip above, which scrolls
 * left), pauses on hover, reveals the label. Track duplicated for a seamless
 * loop. Reduced-motion → near-frozen so the mockups stay discoverable.
 */

import { useLang } from '@/components/providers/LangProvider'

type Mockup = { slug: string; fr: string; en: string }

// Order: real deployments first, then products, then sector prototypes.
const mockups: Mockup[] = [
  { slug: 'chromosome',      fr: 'Planning & gestion d’équipe · Restauration',    en: 'Scheduling & team management · Hospitality' },
  { slug: 'tcrm',            fr: 'CRM pédagogique · Enseignement',                en: 'Educational CRM · Education' },
  { slug: 'chartreux-stock', fr: 'Gestion des stocks · Institution',              en: 'Inventory management · Institution' },
  { slug: 'simplebook',      fr: 'Réservations en temps réel · Restauration',     en: 'Real-time bookings · Hospitality' },
  { slug: 'scrapavis',       fr: 'Réputation & avis IA · Hospitalité',            en: 'Reputation & AI reviews · Hospitality' },
  { slug: 'restaurantiq',    fr: 'Portfolio & KPI multi-sites · Conseil',         en: 'Multi-site KPI portfolio · Consulting' },
  { slug: 'estateiq',        fr: 'CRM & agents IA · Immobilier',                  en: 'CRM & AI agents · Real estate' },
  { slug: 'eventiq',         fr: 'Pilotage d’événement · Événementiel',           en: 'Event command center · Events' },
  { slug: 'pariselan',       fr: 'Billetterie & CRM · Club sportif',              en: 'Ticketing & CRM · Sports club' },
  { slug: 'brasserie',       fr: 'Commandes & facturation · Artisan-commerçant',  en: 'Orders & invoicing · Trade & crafts' },
]

export default function WhatWeBuild() {
  const { lang } = useLang()
  const label = lang === 'fr' ? 'CE QU’ON CONSTRUIT' : 'WHAT WE BUILD'
  const sub =
    lang === 'fr'
      ? 'Un aperçu des logiciels sur-mesure qu’on conçoit et déploie.'
      : 'A glimpse of the custom software we design and ship.'

  return (
    <section aria-label={label} style={{ padding: '4px 0 56px' }}>
      <div className="mx-auto" style={{ maxWidth: 1100, padding: '0 24px', textAlign: 'center' }}>
        <p
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: 3,
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            opacity: 0.55,
            marginBottom: 10,
            fontWeight: 300,
          }}
        >
          {label}
        </p>
        <p
          className="font-serif italic"
          style={{ fontSize: 18, lineHeight: 1.4, color: 'var(--text-secondary)', marginBottom: 28 }}
        >
          {sub}
        </p>
      </div>

      <div className="build-wrap">
        <ul className="build-track">
          {[...mockups, ...mockups].map((m, i) => (
            <li key={`${m.slug}-${i}`} className="build-card">
              <div className="build-frame" aria-hidden="true">
                <span className="build-dot" />
                <span className="build-dot" />
                <span className="build-dot" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/realisations/mockups/${m.slug}.webp`}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="build-shot"
              />
              <div className="build-cap">
                <span>{lang === 'fr' ? m.fr : m.en}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .build-wrap {
          display: block;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          padding: 8px 0;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent);
        }
        .build-track {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: stretch;
          width: max-content;
          gap: 26px;
          /* scrolls RIGHT — opposite to the logo strip above */
          animation: buildScroll 60s linear infinite;
          will-change: transform;
        }
        .build-wrap:hover .build-track {
          animation-play-state: paused;
        }
        @keyframes buildScroll {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .build-card {
          flex: 0 0 auto;
          position: relative;
          width: 274px;
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          background: var(--bg-card);
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .build-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: 0 14px 34px var(--accent-glow);
        }

        .build-frame {
          display: flex;
          align-items: center;
          gap: 5px;
          height: 22px;
          padding: 0 10px;
          background: var(--bg-elevated);
          border-bottom: 1px solid var(--border);
        }
        .build-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--text-muted);
          opacity: 0.5;
        }

        .build-shot {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          object-position: top center;
        }

        .build-cap {
          position: absolute;
          inset: 22px 0 0 0;
          display: flex;
          align-items: flex-end;
          padding: 12px;
          background: linear-gradient(
            to top,
            color-mix(in srgb, var(--bg-card) 94%, transparent),
            color-mix(in srgb, var(--bg-card) 55%, transparent) 55%,
            transparent
          );
          opacity: 0;
          transition: opacity 220ms ease;
        }
        .build-card:hover .build-cap {
          opacity: 1;
        }
        .build-cap span {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          line-height: 1.35;
          letter-spacing: 0.01em;
          color: var(--text);
          text-align: left;
        }

        @media (max-width: 768px) {
          .build-track {
            gap: 18px;
            animation-duration: 24s;
          }
          .build-card {
            width: 210px;
          }
        }

        /* Keep the mockups discoverable under reduced-motion — near-frozen
           rather than fully stopped so off-screen cards still drift into view. */
        @media (prefers-reduced-motion: reduce) {
          .build-track { animation-duration: 180s; }
        }
      `}</style>
    </section>
  )
}
