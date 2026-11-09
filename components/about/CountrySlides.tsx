'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LES PAYS OÙ NOUS INTERVENONS (page À propos, 9 novembre 2026). Nathan :
 * « des slides qui tournent, une par pays : France, Suisse, Hongrie,
 * Monténégro, Espagne, USA, UAE ». Choix du dessin au trait : le même style
 * que les petits dessins des secteurs (SectorGlyph), un monument par pays qui
 * se dessine tout seul, un seul détail en rouge. Aucune photo de banque.
 *
 * Le défilement suit la barre sous le drapeau actif : quand elle est pleine,
 * on passe au pays suivant. Elle s'arrête au survol, hors de l'écran, et ne
 * démarre pas si l'utilisateur réduit les animations.
 *
 * ⚠︎ La ligne sous le nom ne dit que ce qui est vrai : nos clients (déjà
 * publics) à Lyon, Saint-Étienne et Budapest, notre base à Tivat. Rien
 * d'inventé pour les autres pays.
 */

type Stroke = { d: string; k?: 'soft' | 'acc' }

/** Un cercle écrit comme un tracé, pour qu'il se dessine comme le reste. */
const ring = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0`

/* France : la tour Eiffel, un fanion rouge au sommet. */
const EIFFEL: Stroke[] = [
  { d: 'M40 196 H320', k: 'soft' },
  { d: 'M118 196 C140 150 160 110 172 60' },
  { d: 'M242 196 C220 150 200 110 188 60' },
  { d: 'M142 196 Q180 146 218 196' },
  { d: 'M128 162 H232' },
  { d: 'M131 168 H229' },
  { d: 'M150 116 H210' },
  { d: 'M160 162 L166 116' },
  { d: 'M200 162 L194 116' },
  { d: 'M166 116 L174 60' },
  { d: 'M194 116 L186 60' },
  { d: 'M166 60 H194' },
  { d: 'M172 60 L177 30' },
  { d: 'M188 60 L183 30' },
  { d: 'M175 30 H185' },
  { d: 'M180 30 V16' },
  { d: 'M180 16 L191 19.5 L180 23', k: 'acc' },
]

/* Suisse : le Cervin, un chalet, le soleil en rouge. */
const CERVIN: Stroke[] = [
  { d: 'M24 196 H336', k: 'soft' },
  { d: 'M24 196 L66 170 L92 180 L118 158', k: 'soft' },
  { d: 'M118 158 L146 124 L168 74 L181 48 L192 41 L199 54 L216 88 L238 124 L268 152 L300 176 L330 196' },
  { d: 'M168 74 L178 88 L172 102' },
  { d: 'M199 54 L207 74 L201 92' },
  { d: 'M146 124 L158 130' },
  { d: 'M238 124 L226 132' },
  { d: 'M252 196 V178 L264 168 L276 178 V196' },
  { d: 'M260 196 V186 H268 V196' },
  { d: ring(292, 66, 11), k: 'acc' },
]

/* Hongrie : le Parlement sur le Danube, un bateau rouge. */
const parlementWindows = [70, 82, 94, 106, 118, 230, 242, 254, 266, 278, 290].map((x) => ({ d: `M${x} 160 V148` }))
const PARLEMENT: Stroke[] = [
  { d: 'M56 170 H304' },
  { d: 'M60 170 V134' },
  { d: 'M300 170 V134' },
  { d: 'M60 134 H134' },
  { d: 'M226 134 H300' },
  { d: 'M60 134 L72 122 L84 134' },
  { d: 'M276 134 L288 122 L300 134' },
  { d: 'M96 134 L104 126 L112 134' },
  { d: 'M248 134 L256 126 L264 134' },
  { d: 'M134 170 V100 L140 90 L146 100 V170' },
  { d: 'M214 170 V100 L220 90 L226 100 V170' },
  { d: 'M150 170 V112 H210 V170' },
  { d: 'M150 112 Q180 58 210 112' },
  { d: 'M176 78 V64 H184 V78' },
  { d: 'M180 64 V40' },
  { d: 'M158 170 V150 Q164 140 170 150 V170' },
  { d: 'M190 170 V150 Q196 140 202 150 V170' },
  ...parlementWindows,
  { d: 'M28 178 H332', k: 'soft' },
  { d: 'M80 186 H140', k: 'soft' },
  { d: 'M110 194 H196', k: 'soft' },
  { d: 'M244 186 H274 L268 192 H250 Z', k: 'acc' },
]

/* Monténégro : la baie de Kotor, l'îlot et son église, la coupole en rouge. */
const KOTOR: Stroke[] = [
  { d: 'M20 150 L60 112 L90 128 L130 80 L168 118 L200 102 L240 138 L282 94 L340 148', k: 'soft' },
  { d: 'M20 172 L58 128 L98 156 L122 146 L150 172' },
  { d: 'M214 172 L256 140 L298 116 L340 158' },
  { d: 'M20 172 H340' },
  { d: 'M148 172 Q180 160 212 172' },
  { d: 'M166 166 V150 H184 V166' },
  { d: 'M188 166 V142 H194 V166' },
  { d: 'M188 142 L191 136 L194 142' },
  { d: 'M166 150 Q175 138 184 150', k: 'acc' },
  { d: 'M60 182 H122', k: 'soft' },
  { d: 'M150 188 H232', k: 'soft' },
  { d: 'M252 180 H312', k: 'soft' },
]

/* Espagne : la Sagrada Família, la croix du sommet en rouge. */
const SAGRADA: Stroke[] = [
  { d: 'M36 196 H324', k: 'soft' },
  { d: 'M100 196 V150 H260 V196' },
  { d: 'M110 150 L116 72 Q120 63 124 72 L130 150' },
  { d: 'M134 150 L140 62 Q144 53 148 62 L154 150' },
  { d: 'M206 150 L212 62 Q216 53 220 62 L226 150' },
  { d: 'M230 150 L236 72 Q240 63 244 72 L250 150' },
  { d: 'M166 150 L172 42 Q180 28 188 42 L194 150' },
  { d: 'M150 196 V178 Q180 152 210 178 V196' },
  { d: 'M117 120 H123' },
  { d: 'M141 104 H147' },
  { d: 'M213 104 H219' },
  { d: 'M237 120 H243' },
  { d: 'M176 96 H184' },
  { d: 'M176 120 H184' },
  { d: 'M180 28 V14', k: 'acc' },
  { d: 'M175 19 H185', k: 'acc' },
]

/* États-Unis : le Golden Gate, les deux tours en rouge. */
const cableY = (x: number) => {
  const t = (x - 117) / 126
  return Math.round((1 - t) * (1 - t) * 60 + 2 * (1 - t) * t * 230 + t * t * 60)
}
const suspenders = [130, 142, 154, 166, 178, 190, 202, 214, 226].map((x) => ({ d: `M${x} ${cableY(x)} V150`, k: 'soft' as const }))
const GOLDEN_GATE: Stroke[] = [
  { d: 'M20 150 H340' },
  { d: 'M20 156 H340', k: 'soft' },
  { d: 'M20 142 Q80 132 117 60' },
  { d: 'M117 60 Q180 230 243 60' },
  { d: 'M243 60 Q280 132 340 142' },
  ...suspenders,
  { d: 'M110 172 V56 M124 172 V56 M110 68 H124 M110 98 H124 M110 128 H124', k: 'acc' },
  { d: 'M236 172 V56 M250 172 V56 M236 68 H250 M236 98 H250 M236 128 H250', k: 'acc' },
  { d: 'M20 176 Q52 160 92 176', k: 'soft' },
  { d: 'M268 176 Q306 156 340 172', k: 'soft' },
  { d: 'M130 186 H220', k: 'soft' },
]

/* Émirats arabes unis : Burj Khalifa, les dunes, le soleil en rouge. */
const BURJ: Stroke[] = [
  { d: 'M160 180 V140 H164 V110 H168 V82 H172 V56 H176 V36 H178 V20' },
  { d: 'M200 180 V150 H196 V120 H192 V92 H188 V66 H184 V40 H182 V20' },
  { d: 'M178 20 H182' },
  { d: 'M180 20 V6' },
  { d: 'M180 176 V44', k: 'soft' },
  { d: 'M108 180 V140 H130 V180' },
  { d: 'M88 180 V158 H104 V180' },
  { d: 'M230 180 V128 H246 V180' },
  { d: 'M250 180 V150 H268 V180' },
  { d: 'M30 180 H330' },
  { d: 'M30 196 Q90 184 150 196', k: 'soft' },
  { d: 'M176 196 Q252 182 330 196', k: 'soft' },
  { d: ring(280, 70, 13), k: 'acc' },
]

/* ——— Les drapeaux, dessinés à la main (3:2, la Suisse carrée) ——— */
function Flag({ code }: { code: string }) {
  if (code === 'ch')
    return (
      <svg viewBox="0 0 26 26" className="cs-flag cs-flag-sq" aria-hidden="true">
        <rect width="26" height="26" fill="#DA291C" />
        <rect x="10.5" y="5" width="5" height="16" fill="#fff" />
        <rect x="5" y="10.5" width="16" height="5" fill="#fff" />
      </svg>
    )
  return (
    <svg viewBox="0 0 39 26" className="cs-flag" aria-hidden="true">
      {code === 'fr' && (
        <>
          <rect width="13" height="26" fill="#0055A4" />
          <rect x="13" width="13" height="26" fill="#fff" />
          <rect x="26" width="13" height="26" fill="#EF4135" />
        </>
      )}
      {code === 'hu' && (
        <>
          <rect width="39" height="9" fill="#CD2A3E" />
          <rect y="9" width="39" height="8" fill="#fff" />
          <rect y="17" width="39" height="9" fill="#436F4D" />
        </>
      )}
      {code === 'me' && (
        <>
          <rect width="39" height="26" fill="#C40308" />
          <rect x="0.9" y="0.9" width="37.2" height="24.2" fill="none" stroke="#D3AE3B" strokeWidth="1.8" />
          <ellipse cx="19.5" cy="14" rx="4.2" ry="4.6" fill="#D3AE3B" />
          <path d="M16.5 8.6 L18 6.4 L19.5 8 L21 6.4 L22.5 8.6 Z" fill="#D3AE3B" />
        </>
      )}
      {code === 'es' && (
        <>
          <rect width="39" height="26" fill="#AA151B" />
          <rect y="6.5" width="39" height="13" fill="#F1BF00" />
        </>
      )}
      {code === 'us' && (
        <>
          <rect width="39" height="26" fill="#B22234" />
          {[1, 3, 5, 7, 9, 11].map((i) => (
            <rect key={i} y={i * 2} width="39" height="2" fill="#fff" />
          ))}
          <rect width="16" height="14" fill="#3C3B6E" />
          {[2, 5, 8, 11].map((y) =>
            [2, 5, 8, 11, 14].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.7" fill="#fff" />)
          )}
        </>
      )}
      {code === 'ae' && (
        <>
          <rect width="39" height="9" fill="#00843D" />
          <rect y="9" width="39" height="8" fill="#fff" />
          <rect y="17" width="39" height="9" fill="#000" />
          <rect width="10" height="26" fill="#EF3340" />
        </>
      )}
    </svg>
  )
}

export default function CountrySlides() {
  const { lang } = useLang()
  const d = makeD(lang)
  const reduce = useReducedMotion()

  const countries = [
    { code: 'fr', art: EIFFEL, name: d('France', 'France', 'Franciaország'), line: d('Nos clients à Lyon et à Saint-Étienne', 'Our clients in Lyon and Saint-Étienne', 'Ügyfeleink Lyonban és Saint-Étienne-ben') },
    { code: 'ch', art: CERVIN, name: d('Suisse', 'Switzerland', 'Svájc'), line: null },
    { code: 'hu', art: PARLEMENT, name: d('Hongrie', 'Hungary', 'Magyarország'), line: d('Nos clients à Budapest', 'Our clients in Budapest', 'Ügyfeleink Budapesten') },
    { code: 'me', art: KOTOR, name: d('Monténégro', 'Montenegro', 'Montenegró'), line: d('Notre base, à Tivat', 'Our base, in Tivat', 'Bázisunk, Tivatban') },
    { code: 'es', art: SAGRADA, name: d('Espagne', 'Spain', 'Spanyolország'), line: null },
    { code: 'us', art: GOLDEN_GATE, name: d('États-Unis', 'United States', 'Egyesült Államok'), line: null },
    { code: 'ae', art: BURJ, name: d('Émirats arabes unis', 'United Arab Emirates', 'Egyesült Arab Emírségek'), line: null },
  ]

  const [i, setI] = useState(0)
  const [hover, setHover] = useState(false)
  const [seen, setSeen] = useState(false)
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  /* On ne fait tourner (et dessiner) que ce qui est à l'écran. */
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setSeen(true)
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting)
        if (e.isIntersecting) setSeen(true)
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const c = countries[i]
  const n = countries.length
  const step = 1.1 / c.art.length
  const paused = hover || !inView

  return (
    <div
      ref={ref}
      className={`cs${seen ? ' cs-seen' : ''}${paused ? ' cs-paused' : ''}${reduce ? ' cs-still' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="cs-stage">
        <svg key={c.code} viewBox="0 0 360 210" className="cs-art" fill="none" aria-hidden="true">
          {c.art.map((s, k) => (
            <path key={k} d={s.d} pathLength={1} className={s.k ? `cs-${s.k}` : undefined} style={{ animationDelay: `${(k * step).toFixed(3)}s` }} />
          ))}
        </svg>
        <div className="cs-text" key={`t-${c.code}`}>
          <span className="font-mono cs-count">
            {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
          <p className="font-serif italic cs-name">{c.name}</p>
          {c.line && <p className="font-sans cs-line">{c.line}</p>}
        </div>
      </div>

      <div className="cs-tabs" role="tablist" aria-label={d('Les pays où nous intervenons', 'The countries we work in', 'Az országok, ahol dolgozunk')}>
        {countries.map((ct, k) => (
          <button
            key={ct.code}
            type="button"
            role="tab"
            aria-selected={k === i}
            aria-label={ct.name}
            title={ct.name}
            className={`cs-tab${k === i ? ' cs-tab-on' : ''}`}
            onClick={() => setI(k)}
          >
            <Flag code={ct.code} />
            <span className="cs-track">
              {k === i && (
                <span
                  key={`bar-${i}`}
                  className="cs-bar"
                  onAnimationEnd={() => setI((v) => (v + 1) % n)}
                />
              )}
            </span>
          </button>
        ))}
      </div>

      <style jsx>{`
        .cs { margin-top: 28px; }
        .cs-stage {
          display: grid; grid-template-columns: minmax(0, 460px) minmax(0, 1fr); gap: 56px; align-items: center;
          min-height: 260px;
        }
        .cs-art { width: 100%; height: auto; display: block; color: var(--text); }
        .cs-art :global(path) {
          stroke: currentColor; stroke-width: 1.3; stroke-linecap: round; stroke-linejoin: round; fill: none;
          stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: csDraw 1.3s cubic-bezier(0.55, 0, 0.2, 1) forwards;
          animation-play-state: paused;
        }
        .cs-seen .cs-art :global(path) { animation-play-state: running; }
        .cs-art :global(.cs-soft) { stroke: var(--text-muted); opacity: 0.7; }
        .cs-art :global(.cs-acc) { stroke: var(--accent); stroke-width: 1.6; }
        @keyframes csDraw { to { stroke-dashoffset: 0; } }

        .cs-text { animation: csIn 0.6s ease both; }
        @keyframes csIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .cs-count { font-size: 10.5px; letter-spacing: 1.8px; color: var(--text-muted); }
        .cs-name { margin: 12px 0 0; font-size: clamp(34px, 4.2vw, 54px); font-weight: 400; line-height: 1.05; color: var(--text); }
        .cs-line { margin: 14px 0 0; font-size: 16px; font-weight: 300; color: var(--text-secondary); }

        .cs-tabs { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 36px; }
        .cs-tab {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 4px 2px; background: none; border: none; cursor: pointer;
          opacity: 0.45; transition: opacity 0.25s ease;
        }
        .cs-tab:hover, .cs-tab-on { opacity: 1; }
        .cs-tab :global(.cs-flag) {
          display: block; height: 18px; width: 27px; border-radius: 2px; overflow: hidden;
          box-shadow: 0 0 0 1px var(--border);
        }
        .cs-tab :global(.cs-flag-sq) { width: 18px; }
        .cs-track { position: relative; display: block; width: 27px; height: 2px; background: var(--border); border-radius: 1px; overflow: hidden; }
        .cs-bar {
          position: absolute; left: 0; top: 0; bottom: 0; width: 100%; background: var(--accent);
          transform-origin: left; transform: scaleX(0);
          animation: csBar 4.6s linear forwards;
        }
        .cs-paused .cs-bar { animation-play-state: paused; }
        @keyframes csBar { to { transform: scaleX(1); } }

        /* Animations réduites : tout est dessiné d'emblée, rien ne tourne seul. */
        .cs-still .cs-art :global(path) { animation: none; stroke-dashoffset: 0; }
        .cs-still .cs-text { animation: none; }
        .cs-still .cs-bar { animation: none; transform: scaleX(1); }

        @media (max-width: 760px) {
          .cs-stage { grid-template-columns: 1fr; gap: 20px; min-height: 0; }
          .cs-art { max-width: 380px; }
          .cs-tabs { gap: 10px; margin-top: 28px; }
        }
      `}</style>
    </div>
  )
}
