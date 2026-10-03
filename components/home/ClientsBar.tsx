'use client'

/**
 * ClientsBar, sober logo strip rendered just under the hero CTA.
 *
 * Replaces the inline trust line in Hero. Lives as its own component so
 * adding logos later is a config-only change (no JSX to touch).
 *
 * Visual rules (per Nathan's spec, B2B premium register, Linear/Resend
 * style, NOT NateSystem-accent territory; we deliberately stay in
 * neutrals so the eye doesn't pingpong between the hero CTA and this
 * row):
 *   • Top label  , JetBrains Mono 11px uppercase, wide tracking, muted
 *   • Row        , 3 references, gap 64px desktop / 24px mobile (2×2)
 *   • Each item  , exact 32px height, neutral grey at 70% opacity,
 *                   200ms ease-out hover lift to full text colour.
 *   • Logos      , grayscale + currentColor so the wordmark adopts
 *                   the row's neutral hue.
 *   • Wordmarks  , Instrument Serif italic 22px, vertically centred
 *                   on the same 32px line as the SVG logos.
 *
 * Localized label uses i18n keys (`reviews.*` namespace was hero-only
 * before; this is generic, added under `clients.label`).
 */

import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import type { Lang } from '@/lib/i18n'

// `compact` shrinks a specific logo below the row height, for WIDE horizontal
// logos (icon + wordmark + baseline) that would otherwise read heavier than the
// compact icon-based marks even at equal height.
type ClientRef =
  | { name: string; type: 'logo'; src: string; href: string; compact?: boolean }
  // 'logo-white' is a transparent WHITE logo (alpha-cut, no background box).
  // It's tinted per-theme via CSS brightness() so it reads as neutral grey on
  // the light theme and white/light-grey on the dark theme, same optical
  // weight as the grayscale logos, but without the invert() trick that mangles
  // detailed artwork.
  | { name: string; type: 'logo-white'; src: string; href: string; compact?: boolean }
  | { name: string; type: 'wordmark'; href: string }
  // 'photo' est une rencontre, pas une marque : une vraie photo prise sur
  // place, traitee comme un logo pour qu'elle tienne dans la rangee sans
  // la casser. Noir et blanc au repos comme les logos, couleur au survol,
  // et elle mene au cas client au lieu du site du client. `internal` dit
  // qu'on reste sur le site : pas de target _blank, et le prefixe de
  // langue s'applique.
  | { name: string; type: 'photo'; src: string; href: string; internal: true }

// Vendéglátás Menedzsment Kft. is the Hungarian hospitality reference,
// kept as wordmark until the official logo lands. When `/public/logos/
// vendeglatas.png` arrives, flip `type: 'wordmark'` to `type: 'logo'`
// and add the `src`.
const clients: ClientRef[] = [
  {
    name: 'Les Chartreux',
    type: 'logo-white',
    src: '/logos/chartreux-light.png', // transparent white artwork, tinted by CSS per theme
    href: 'https://www.leschartreux.net/',
  },
  { name: 'Université Jean Monnet', type: 'logo', src: '/logos/ujm.png', href: 'https://www.univ-st-etienne.fr/fr/index.html' },
  { name: 'Chromosome', type: 'logo', src: '/logos/chromosome.png', href: 'https://chromosome-saint-etienne.fr/' },
  { name: 'Vendéglátás Menedzsment Kft.', type: 'wordmark', href: 'https://vendeglatasmenedzsment.hu/' },
  // SimpleTeam, blue 'S' wordmark. Rendered as `logo-white`: the alpha-cut
  // artwork is flattened to a solid silhouette by CSS (brightness(0)) so it
  // reads neutral, then tinted per theme, black on light, white on dark,
  // never the raw blue, which would clash with the neutral row.
  { name: 'SimpleTeam', type: 'logo-white', src: '/logos/simpleteam.png', href: 'https://simple-team.com/' },
  // Goutagny Élagage, colored green logo, white background keyed out to
  // transparent so the row's grayscale/invert treatment renders it neutral
  // on both themes (same as the other `logo` refs).
  { name: 'Goutagny Élagage', type: 'logo', src: '/logos/goutagny.png', href: 'https://www.goutagny-elagage.fr/' },
  // Association Aloess, wide horizontal logo (icon + "aloess" + baseline);
  // `compact` trims its height so it doesn't dominate the compact marks.
  { name: 'Association Aloess', type: 'logo', src: '/logos/aloess.png', href: 'https://www.aloess.org/', compact: true },
  /* ⚠︎ LES TROIS RENCONTRES MENENT AU CAS, PAS AU SITE DU CLIENT. C'est
     toute la difference avec les logos au-dessus : un logo dit qui nous
     fait confiance et renvoie chez lui, une rencontre dit ce qu'on a fait
     et renvoie a la preuve.

     ⚠︎ LES CHARTREUX N'ONT PAS DE PAGE DE CAS. lib/case-studies.ts n'en
     porte que deux, 'chromosome' et 'conseil-b2b-budapest'. Leur photo
     pointe donc vers le carrousel de la home, qui est le seul endroit ou
     leur cas est raconte. A rebrancher sur /case-studies/... le jour ou
     la page existe. */
  {
    name: 'Institut des Chartreux, sur la terrasse à Lyon',
    type: 'photo',
    src: '/realisations/chartreux-terrasse.webp',
    href: '/#case-study',
    internal: true,
  },
  {
    name: 'Kis Zoltán, à Budapest',
    type: 'photo',
    src: '/realisations/zoltan-budapest.webp',
    href: '/case-studies/conseil-b2b-budapest',
    internal: true,
  },
  {
    name: 'Catherine F., pendant le podcast',
    type: 'photo',
    src: '/realisations/catherine-podcast.webp',
    href: '/case-studies/chromosome',
    internal: true,
  },
]

/* `hideLabel` sert à la landing /atelier, qui pose son propre titre au-dessus
   du carrousel : sans ça, deux intitulés diraient la même chose à deux pas
   l'un de l'autre. Le reste du site n'y touche pas. La liste de logos, elle,
   reste ici et nulle part ailleurs, pour qu'un ajout se fasse en un endroit. */
export default function ClientsBar({ hideLabel = false }: { hideLabel?: boolean }) {
  const { lang } = useLang()

  const label = makeD(lang)(
    'ILS UTILISENT NOS OUTILS',
    'THEY USE OUR TOOLS',
    'ŐK HASZNÁLJÁK AZ ESZKÖZEINKET'
  )

  return (
    <section
      aria-label={label}
      style={{ padding: '48px 24px' }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 1100 }}
      >
        {!hideLabel && (
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
        )}

        {/* One continuous carousel on every viewport, all references stay on
            ONE line and scroll left forever (track duplicated for a seamless
            loop). Pauses on hover so a visitor can read a logo. */}
        <div className="clients-marquee-wrap" aria-hidden="false">
          <ul className="clients-marquee">
            {[...clients, ...clients].map((c, i) => (
              <li key={`${c.name}-${i}`} className="clients-item">
                <ClientItem c={c} lang={lang} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .clients-item {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 46px;
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
          height: 46px;
          width: auto;
          max-height: 46px;
          max-width: 200px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: inherit;
        }
        /* Wide horizontal logos: trimmed so their optical weight matches the
           compact icon-based marks. */
        .clients-logo--sm {
          height: 34px;
          max-height: 34px;
          max-width: 170px;
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
        /* La rencontre prend la hauteur de la rangee et un format fixe, pour
           qu'elle pese exactement comme un logo. object-fit: cover recadre
           au centre : les photos n'ont pas toutes le meme rapport. */
        .clients-photo {
          height: 46px;
          width: 64px;
          object-fit: cover;
          border-radius: 5px;
          display: block;
          filter: grayscale(100%) contrast(1.04);
          opacity: 0.72;
          transition: filter 220ms ease-out, opacity 220ms ease-out;
        }
        .clients-item:hover .clients-photo,
        .clients-link:focus-visible .clients-photo {
          filter: grayscale(0%) contrast(1);
          opacity: 1;
        }
        .clients-wordmark {
          font-size: 19px;
          line-height: 1.2;
          font-weight: 400;
          color: inherit;
          white-space: nowrap;
          text-align: center;
        }

        /* Continuous carousel on EVERY viewport, all references on one line,
           scrolling left forever. Edges faded so logos appear/vanish smoothly
           instead of being hard-clipped. */
        .clients-marquee-wrap {
          display: block;
          overflow: hidden;
          width: 100%;
          max-width: 100%;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
        }
        .clients-marquee {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          width: max-content;
          gap: 80px;
          animation: clientsScroll 32s linear infinite;
          will-change: transform;
        }
        .clients-marquee .clients-item {
          flex: 0 0 auto;
        }
        /* Pause the scroll while the visitor hovers the strip. */
        .clients-marquee-wrap:hover .clients-marquee {
          animation-play-state: paused;
        }
        @keyframes clientsScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .clients-marquee-wrap {
            max-width: 100vw;
            -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
            mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
          }
          .clients-marquee {
            gap: 48px;
            animation-duration: 13s;
          }
          .clients-marquee .clients-item {
            height: 38px;
          }
          .clients-logo {
            height: 38px;
            max-height: 38px;
            max-width: 150px;
          }
          .clients-logo--sm {
            height: 28px;
            max-height: 28px;
            max-width: 130px;
          }
          .clients-photo {
            height: 38px;
            width: 53px;
          }
          .clients-wordmark {
            font-size: 15px;
          }
        }

        /* References must stay discoverable, so we keep scrolling even under
           reduced-motion, just much slower. */
        @media (prefers-reduced-motion: reduce) {
          .clients-marquee { animation-duration: 90s; }
        }
      `}</style>
    </section>
  )
}

function ClientItem({ c, lang }: { c: ClientRef; lang: Lang }) {
  /* ⚠︎ UN LIEN INTERNE NE S'OUVRE PAS DANS UN ONGLET. Les logos mènent
     chez le client, donc _blank ; les rencontres mènent à une page du
     site, donc même onglet, et avec le préfixe de langue sinon un
     visiteur anglophone retombe en français. */
  const interne = c.type === 'photo'
  return (
    <a
      href={interne ? localizedHref(c.href, lang) : c.href}
      target={interne ? undefined : '_blank'}
      rel={interne ? undefined : 'noopener noreferrer'}
      aria-label={c.name}
      className="clients-link"
    >
      {c.type === 'photo' ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={c.src} alt={c.name} className="clients-photo" loading="lazy" />
      ) : c.type === 'logo' ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={c.src} alt={c.name} className={`clients-logo${c.compact ? ' clients-logo--sm' : ''}`} />
      ) : c.type === 'logo-white' ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={c.src} alt={c.name} className={`clients-logo clients-logo--white${c.compact ? ' clients-logo--sm' : ''}`} />
      ) : (
        <span className="clients-wordmark font-serif italic">{c.name}</span>
      )}
    </a>
  )
}
