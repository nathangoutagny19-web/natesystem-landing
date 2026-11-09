'use client'

import { useMemo, useState } from 'react'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { LAND_DOTS } from '@/components/about/globe-dots'

/**
 * LE GLOBE DES CLIENTS (page À propos, 9 novembre 2026). Nathan : « tu mets
 * tous nos clients, un globe ou jsp ». SVG fait main : une projection
 * orthographique centrée sur l'Europe, les terres en points (précalculés,
 * globe-dots.ts), un point rouge par ville cliente, Tivat en base.
 *
 * ⚠︎ QUI APPARAÎT, ET COMMENT (règle non négociable, prompt du 09/11) :
 *   - Nommés : seulement les clients déjà publics sur le site (Institut des
 *     Chartreux, Chromosome, IUT de Saint-Étienne, Vendéglátás Menedzsment).
 *     Villes : brain/accounts (Lyon, Saint-Étienne, Budapest).
 *   - Anonyme : SCABB, client (brain), ville écrite dans son devis
 *     (Saint-Chamond) : « Club sportif · Loire », non reconnaissable.
 *   - Absents : la conciergerie sous NDA (aucune ville, aucun détail),
 *     Wandering Yacht (NDA, art. 8 : un point « yachting » à Tivat le
 *     désignerait), Services Exclusifs (pas d'accord écrit : un point
 *     « conciergerie · Suisse » le désignerait, son logo étant sur le site),
 *     Mango Mango (prospect), les clients sans ville écrite (Aloess,
 *     SimpleTeam…). On n'invente jamais un client, une ville ou un point.
 */

const CENTER_LON = 12
const CENTER_LAT = 45
/* Globe zoomé : son rayon dépasse le cadre, on ne voit que l'Europe et son
   pourtour, avec la courbure du bord en haut. */
const R = 560
const C = 250
const LENS = 236

type Place = {
  key: string
  lon: number
  lat: number
  kind: 'client' | 'base'
  city: Record<'fr' | 'en' | 'hu', string>
  who: Record<'fr' | 'en' | 'hu', string>[]
}

const PLACES: Place[] = [
  {
    key: 'lyon',
    lon: 4.84, lat: 45.76, kind: 'client',
    city: { fr: 'Lyon', en: 'Lyon', hu: 'Lyon' },
    who: [{ fr: 'Institut des Chartreux', en: 'Institut des Chartreux', hu: 'Institut des Chartreux' }],
  },
  {
    key: 'saint-etienne',
    lon: 4.39, lat: 45.43, kind: 'client',
    city: { fr: 'Saint-Étienne · Loire', en: 'Saint-Étienne · Loire', hu: 'Saint-Étienne · Loire' },
    who: [
      { fr: 'Chromosome', en: 'Chromosome', hu: 'Chromosome' },
      { fr: 'IUT de Saint-Étienne', en: 'IUT de Saint-Étienne', hu: 'IUT de Saint-Étienne' },
      { fr: 'un club sportif', en: 'a sports club', hu: 'egy sportklub' },
    ],
  },
  {
    key: 'budapest',
    lon: 19.04, lat: 47.5, kind: 'client',
    city: { fr: 'Budapest', en: 'Budapest', hu: 'Budapest' },
    who: [{ fr: 'Vendéglátás Menedzsment', en: 'Vendéglátás Menedzsment', hu: 'Vendéglátás Menedzsment' }],
  },
  {
    key: 'tivat',
    lon: 18.7, lat: 42.43, kind: 'base',
    city: { fr: 'Tivat', en: 'Tivat', hu: 'Tivat' },
    who: [{ fr: 'Notre base, sur la baie de Kotor', en: 'Our base, on the Bay of Kotor', hu: 'Bázisunk, a Kotori-öbölnél' }],
  },
]

const rad = (x: number) => (x * Math.PI) / 180
const sinP0 = Math.sin(rad(CENTER_LAT))
const cosP0 = Math.cos(rad(CENTER_LAT))

/** Projection orthographique : null si le point est sur la face cachée. */
function project(lon: number, lat: number): { x: number; y: number; z: number } | null {
  const l = rad(lon - CENTER_LON)
  const p = rad(lat)
  const z = sinP0 * Math.sin(p) + cosP0 * Math.cos(p) * Math.cos(l)
  if (z <= 0) return null
  /* Arrondis : le serveur et le navigateur ne calculent pas les flottants au
     même dernier chiffre, ce qui ferait un décalage à l'hydratation. */
  const r2 = (v: number) => Math.round(v * 100) / 100
  return {
    x: r2(C + R * Math.cos(p) * Math.sin(l)),
    y: r2(C - R * (cosP0 * Math.sin(p) - sinP0 * Math.cos(p) * Math.cos(l))),
    z: r2(z),
  }
}

export default function ClientsGlobe() {
  const { lang } = useLang()
  const d = makeD(lang)
  const [active, setActive] = useState<string | null>(null)

  const land = useMemo(
    () =>
      LAND_DOTS.map(([lon, lat]) => project(lon, lat)).filter((p): p is { x: number; y: number; z: number } => p !== null),
    []
  )
  const places = useMemo(() => PLACES.map((pl) => ({ ...pl, p: project(pl.lon, pl.lat)! })), [])

  return (
    <div className="cg">
      <svg viewBox="0 0 500 500" className="cg-svg" role="img" aria-label={d('Globe : nos clients à Lyon, Saint-Étienne et Budapest, notre base à Tivat', 'Globe: our clients in Lyon, Saint-Étienne and Budapest, our base in Tivat', 'Földgömb: ügyfeleink Lyonban, Saint-Étienne-ben és Budapesten, bázisunk Tivatban')}>
        <defs>
          <radialGradient id="cg-shade" cx="40%" cy="35%" r="75%">
            <stop offset="0%" stopColor="var(--bg-card)" />
            <stop offset="100%" stopColor="var(--bg-elevated)" />
          </radialGradient>
          {/* Le hublot : un cercle qui découpe le globe zoomé sur l'Europe. */}
          <clipPath id="cg-lens"><circle cx={C} cy={C} r={LENS} /></clipPath>
        </defs>
        <circle cx={C} cy={C} r={LENS} fill="url(#cg-shade)" />
        <g clipPath="url(#cg-lens)">
          {land.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={1.25} fill="var(--text-muted)" opacity={0.6} />
          ))}
        </g>
        <circle cx={C} cy={C} r={LENS} fill="none" stroke="var(--border-hover)" strokeWidth="1" />
        {places.map((pl) => {
          const on = active === pl.key
          return (
            <g key={pl.key} className={`cg-place cg-${pl.kind}${on ? ' cg-on' : ''}`} onMouseEnter={() => setActive(pl.key)} onMouseLeave={() => setActive(null)}>
              <title>{`${pl.city[lang]} · ${pl.who.map((w) => w[lang]).join(', ')}`}</title>
              {pl.kind === 'client' ? (
                <>
                  <circle className="cg-pulse" cx={pl.p.x} cy={pl.p.y} r={5} />
                  <circle cx={pl.p.x} cy={pl.p.y} r={on ? 5 : 3.6} fill="var(--accent)" />
                </>
              ) : (
                <circle cx={pl.p.x} cy={pl.p.y} r={on ? 6 : 4.6} fill="var(--bg-card)" stroke="var(--text)" strokeWidth="1.6" />
              )}
            </g>
          )
        })}
      </svg>

      <ul className="cg-legend">
        {PLACES.map((pl) => (
          <li
            key={pl.key}
            className={`cg-item${active === pl.key ? ' cg-item-on' : ''}`}
            onMouseEnter={() => setActive(pl.key)}
            onMouseLeave={() => setActive(null)}
          >
            <span className={`cg-mark cg-mark-${pl.kind}`} aria-hidden="true" />
            <span className="font-mono cg-city">{pl.city[lang]}</span>
            <span className="font-sans cg-who">{pl.who.map((w) => w[lang]).join(' · ')}</span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .cg { display: flex; flex-direction: column; align-items: center; gap: 28px; }
        .cg-svg { width: 100%; max-width: 460px; height: auto; display: block; }
        .cg-place { cursor: default; }
        .cg-pulse { fill: var(--accent); opacity: 0; transform-box: fill-box; transform-origin: center; animation: cgPulse 2.8s ease-out infinite; }
        .cg-place:nth-of-type(2) .cg-pulse { animation-delay: 0.9s; }
        .cg-place:nth-of-type(3) .cg-pulse { animation-delay: 1.8s; }
        @keyframes cgPulse { 0% { opacity: 0.35; transform: scale(0.6); } 100% { opacity: 0; transform: scale(3.2); } }
        @media (prefers-reduced-motion: reduce) { .cg-pulse { animation: none; } }
        .cg-legend { list-style: none; margin: 0; padding: 0; width: 100%; max-width: 460px; }
        .cg-item {
          display: grid; grid-template-columns: 14px 150px 1fr; gap: 12px; align-items: baseline;
          padding: 11px 0; border-bottom: 1px solid var(--border); transition: background 0.2s ease;
        }
        .cg-item:first-child { border-top: 1px solid var(--border); }
        .cg-mark { width: 7px; height: 7px; border-radius: 50%; align-self: center; }
        .cg-mark-client { background: var(--accent); }
        .cg-mark-base { background: var(--bg-card); border: 1.5px solid var(--text); width: 8px; height: 8px; }
        .cg-city { font-size: 10.5px; letter-spacing: 1.6px; text-transform: uppercase; color: var(--text-muted); }
        .cg-who { font-size: 14.5px; color: var(--text); line-height: 1.45; }
        .cg-item-on .cg-who { color: var(--accent); }
        @media (max-width: 560px) {
          .cg-item { grid-template-columns: 14px 1fr; }
          .cg-who { grid-column: 2; }
        }
      `}</style>
    </div>
  )
}
