'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { MAP, LAND_PATH } from '@/components/about/map-dots'

/**
 * LA CARTE DES PAYS OÙ NOUS INTERVENONS (page À propos, 9 novembre 2026).
 * Nathan : « fais juste un planisphère avec des traits là où on intervient ».
 * Une carte en points (map-dots.ts, précalculée), un trait rouge depuis notre
 * base de Tivat vers chaque pays, qui se dessine une fois à l'écran.
 *
 * Les pays sont ceux de Nathan (09/11) : France, Suisse, Hongrie, Monténégro,
 * Espagne, États-Unis, Émirats. Le point de chaque pays : Lyon (nos clients),
 * le centre de la Suisse, Budapest (nos clients), Barcelone (Nathan : « pour
 * l'Espagne c'est Barcelone »), New York, Dubaï. Tivat est notre base.
 */

/** Longitude, latitude → coordonnées de la carte (arrondies : même rendu serveur et navigateur). */
const at = (lon: number, lat: number) => ({
  x: Math.round((lon - MAP.lon0) * MAP.k),
  y: Math.round((MAP.lat1 - lat) * MAP.k),
})

const BASE = at(18.7, 42.43)

type Dest = {
  key: string
  p: { x: number; y: number }
  /** Position et ancrage de l'étiquette, réglés à la main pour l'Europe serrée. */
  lx: number
  ly: number
  anchor: 'start' | 'middle' | 'end'
}

const DESTS: Dest[] = [
  { key: 'fr', p: at(4.84, 45.76), lx: -9, ly: -4, anchor: 'end' },
  { key: 'ch', p: at(8.2, 46.8), lx: -2, ly: -12, anchor: 'middle' },
  { key: 'hu', p: at(19.04, 47.5), lx: 8, ly: -6, anchor: 'start' },
  { key: 'es', p: at(2.17, 41.39), lx: -9, ly: 10, anchor: 'end' },
  { key: 'us', p: at(-74.0, 40.71), lx: -9, ly: 4, anchor: 'end' },
  { key: 'ae', p: at(55.27, 25.2), lx: 9, ly: 4, anchor: 'start' },
]

/** Un trait courbe de Tivat vers le pays, bombé vers le haut selon la distance. */
function arc(to: { x: number; y: number }) {
  const mx = (BASE.x + to.x) / 2
  const my = (BASE.y + to.y) / 2
  const dist = Math.hypot(to.x - BASE.x, to.y - BASE.y)
  const lift = Math.round(Math.max(10, dist * 0.32))
  return `M${BASE.x} ${BASE.y} Q${Math.round(mx)} ${Math.round(my - lift)} ${to.x} ${to.y}`
}

export default function WorldMap() {
  const { lang } = useLang()
  const d = makeD(lang)
  const ref = useRef<HTMLDivElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const names: Record<string, string> = {
    fr: d('France', 'France', 'Franciaország'),
    ch: d('Suisse', 'Switzerland', 'Svájc'),
    hu: d('Hongrie', 'Hungary', 'Magyarország'),
    es: d('Espagne', 'Spain', 'Spanyolország'),
    us: d('États-Unis', 'United States', 'Egyesült Államok'),
    ae: d('Émirats arabes unis', 'United Arab Emirates', 'Egyesült Arab Emírségek'),
  }
  const baseName = d('Monténégro · notre base', 'Montenegro · our base', 'Montenegró · bázisunk')
  const all = [names.fr, names.ch, names.hu, d('Monténégro', 'Montenegro', 'Montenegró'), names.es, names.us, names.ae]

  return (
    <div ref={ref} className={`wm${seen ? ' wm-seen' : ''}`}>
      <svg
        viewBox={`0 0 ${MAP.width} ${MAP.height}`}
        className="wm-svg"
        role="img"
        aria-label={d(
          `Carte : depuis notre base au Monténégro, nous intervenons en ${all.join(', ')}`,
          `Map: from our base in Montenegro, we work in ${all.join(', ')}`,
          `Térkép: montenegrói bázisunkról ezekben az országokban dolgozunk: ${all.join(', ')}`
        )}
      >
        <path d={LAND_PATH} className="wm-land" />

        {DESTS.map((t, i) => (
          <path key={`a-${t.key}`} d={arc(t.p)} pathLength={1} className="wm-arc" style={{ animationDelay: `${0.15 * i}s` }} />
        ))}

        {DESTS.map((t, i) => (
          <g key={`p-${t.key}`} className="wm-dest" style={{ animationDelay: `${0.9 + 0.15 * i}s` }}>
            <circle cx={t.p.x} cy={t.p.y} r={3.4} className="wm-dot" />
            <text x={t.p.x + t.lx} y={t.p.y + t.ly} textAnchor={t.anchor} className="wm-label">
              {names[t.key]}
            </text>
          </g>
        ))}

        <circle cx={BASE.x} cy={BASE.y} r={9} className="wm-pulse" />
        <circle cx={BASE.x} cy={BASE.y} r={4.6} className="wm-base" />
        <text x={BASE.x} y={BASE.y + 19} textAnchor="middle" className="wm-label wm-label-base">
          {baseName}
        </text>
      </svg>

      {/* Sur téléphone, la carte est trop petite pour lire les noms : ils passent dessous. */}
      <p className="font-sans wm-list">{all.join(' · ')}</p>

      <style jsx>{`
        .wm { margin-top: 28px; }
        .wm-svg { width: 100%; height: auto; display: block; overflow: visible; }
        .wm-land { stroke: var(--text-muted); stroke-width: 2; stroke-linecap: round; opacity: 0.4; fill: none; }
        .wm-arc {
          fill: none; stroke: var(--accent); stroke-width: 1.4; stroke-linecap: round;
          stroke-dasharray: 1; stroke-dashoffset: 1;
        }
        .wm-seen .wm-arc { animation: wmDraw 1.4s cubic-bezier(0.55, 0, 0.2, 1) forwards; }
        @keyframes wmDraw { to { stroke-dashoffset: 0; } }
        .wm-dest { opacity: 0; }
        .wm-seen .wm-dest { animation: wmIn 0.5s ease forwards; }
        @keyframes wmIn { to { opacity: 1; } }
        .wm-dot { fill: var(--accent); }
        .wm-base { fill: var(--bg); stroke: var(--text); stroke-width: 2; }
        .wm-pulse { fill: var(--accent); opacity: 0; transform-box: fill-box; transform-origin: center; }
        .wm-seen .wm-pulse { animation: wmPulse 2.8s ease-out 1.6s infinite; }
        @keyframes wmPulse { 0% { opacity: 0.35; transform: scale(0.5); } 100% { opacity: 0; transform: scale(2.6); } }
        .wm-label {
          font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.4px; fill: var(--text-secondary);
          paint-order: stroke; stroke: var(--bg); stroke-width: 4px; stroke-linejoin: round;
        }
        .wm-label-base { fill: var(--text); }
        .wm-list { display: none; margin: 18px 0 0; font-size: 14.5px; font-weight: 300; line-height: 1.7; color: var(--text-secondary); }
        @media (prefers-reduced-motion: reduce) {
          .wm-arc, .wm-seen .wm-arc { animation: none; stroke-dashoffset: 0; }
          .wm-dest, .wm-seen .wm-dest { animation: none; opacity: 1; }
          .wm-seen .wm-pulse { animation: none; }
        }
        @media (max-width: 760px) {
          .wm-label { display: none; }
          .wm-list { display: block; }
        }
      `}</style>
    </div>
  )
}
