'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import { AUDIT_LINK } from '@/lib/constants'
import VslPlayer from '@/components/ui/VslPlayer'
import { MAP, LAND_PATH } from '@/components/about/map-dots'
import { BASE, DESTS, arc } from '@/components/about/WorldMap'

/**
 * LE HERO, VERSION NUIT (refonte du 14 novembre 2026).
 *
 * Inspiré de la tenue de Gourmet (fond nuit, grande serif droite, un passage
 * en italique rouge, beaucoup d'air) mais avec ce qui n'appartient qu'à nous :
 * en fond, la carte en points de la page À propos et ses traits rouges qui
 * partent de Tivat ; à côté du titre, la vidéo de Nathan. Le titre, le
 * sous-titre et la ligne de preuve sont ceux déjà validés (lib/i18n.ts).
 */
const ease = [0.22, 1, 0.36, 1] as const

export default function HeroNight() {
  const { lang, t } = useLang()
  const d = makeD(lang)

  return (
    <section className="hn v3-night" aria-labelledby="hn-title">
      {/* La carte, en filigrane à droite. */}
      <svg className="hn-map" viewBox={`0 0 ${MAP.width} ${MAP.height}`} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        <path d={LAND_PATH} className="hn-land" />
        {DESTS.map((p, i) => (
          <path key={p.key} d={arc(p.p)} pathLength={1} className="hn-arc" style={{ animationDelay: `${0.6 + 0.18 * i}s` }} />
        ))}
        {DESTS.map((p, i) => (
          <circle key={`d-${p.key}`} cx={p.p.x} cy={p.p.y} r={3.2} className="hn-dot" style={{ animationDelay: `${1.5 + 0.18 * i}s` }} />
        ))}
        <circle cx={BASE.x} cy={BASE.y} r={10} className="hn-pulse" />
        <circle cx={BASE.x} cy={BASE.y} r={4.4} className="hn-base" />
      </svg>

      <div className="hn-inner">
        <div className="hn-text">
          <motion.p
            className="v3-label"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}
          >
            {d('Logiciels sur mesure · Hospitalité de luxe', 'Bespoke software · Luxury hospitality', 'Egyedi szoftverek · Luxusvendéglátás')}
          </motion.p>

          <motion.h1
            id="hn-title"
            className="font-serif hn-title"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease }}
          >
            {t('hero.titlePrefix')} {t('hero.titleWords')} {d('est unique.', 'is unique.', 'egyedi.')}{' '}
            <em className="hn-accent">{d('Votre logiciel devrait l’être aussi.', 'Your software should be too.', 'A szoftvere is legyen az.')}</em>
          </motion.h1>

          <motion.p
            className="font-sans hn-sub"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease }}
          >
            {t('hero.sub')}
          </motion.p>

          <motion.div
            className="hn-ctas"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.38, ease }}
          >
            <Link href={localizedHref(AUDIT_LINK, lang)} className="v3-pill">
              {t('hero.ctaAudit')} <span aria-hidden="true">→</span>
            </Link>
            <Link href={localizedHref('/case-studies', lang)} className="v3-link hn-link">
              {d('Voir nos réalisations', 'See our work', 'Munkáink')}
            </Link>
          </motion.div>

          <motion.p
            className="font-mono hn-proof"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
          >
            <span className="hn-proof-dot" aria-hidden="true" />
            {t('hero.aiNote')}
          </motion.p>
        </div>

        <motion.div
          className="hn-video"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease }}
        >
          <VslPlayer
            src="/vsl-hospitality.mp4"
            poster="/vsl-hospitality-poster.jpg"
            label={t('hero.vslLabel')}
            duration="51 s"
            title={t('hero.vslTitle')}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .hn {
          position: relative; overflow: hidden;
          min-height: min(100vh, 960px);
          padding: clamp(132px, 15vw, 176px) 24px clamp(72px, 9vw, 112px);
          display: flex; align-items: center;
        }
        .hn-map {
          position: absolute; right: -6%; top: 50%; width: 118%; max-width: 1700px; height: auto;
          transform: translateY(-42%);
          pointer-events: none;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.55) 54%, #000 68%);
          mask-image: linear-gradient(to right, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.55) 54%, #000 68%);
        }
        .hn-land { fill: none; stroke: rgba(240, 240, 242, 0.5); stroke-width: 2; stroke-linecap: round; opacity: 0.32; }
        .hn-arc {
          fill: none; stroke: var(--accent); stroke-width: 1.3; stroke-linecap: round; opacity: 0.85;
          stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: hnDraw 1.8s cubic-bezier(0.55, 0, 0.2, 1) forwards;
        }
        @keyframes hnDraw { to { stroke-dashoffset: 0; } }
        .hn-dot { fill: var(--accent); opacity: 0; animation: hnIn 0.6s ease forwards; }
        @keyframes hnIn { to { opacity: 1; } }
        .hn-base { fill: #0e0e12; stroke: #f0f0f2; stroke-width: 2; }
        .hn-pulse { fill: var(--accent); opacity: 0; transform-box: fill-box; transform-origin: center; animation: hnPulse 3s ease-out 2.4s infinite; }
        @keyframes hnPulse { 0% { opacity: 0.4; transform: scale(0.5); } 100% { opacity: 0; transform: scale(2.8); } }

        .hn-inner {
          position: relative; z-index: 1; width: 100%; max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr); gap: clamp(40px, 6vw, 88px); align-items: center;
        }
        .hn :global(.hn-title) {
          margin: 26px 0 0; font-weight: 400; color: #f0f0f2;
          font-size: clamp(40px, 5.1vw, 74px); line-height: 1.02; letter-spacing: -0.015em;
        }
        .hn-accent { font-style: italic; color: var(--accent); }
        .hn :global(.hn-sub) {
          margin: 30px 0 0; max-width: 540px;
          font-size: clamp(15.5px, 1.4vw, 17.5px); font-weight: 300; line-height: 1.7; color: rgba(240, 240, 242, 0.68);
        }
        .hn :global(.hn-ctas) { display: flex; flex-wrap: wrap; align-items: center; gap: 18px 28px; margin-top: 38px; }
        .hn :global(.hn-ctas) :global(.hn-link) { color: #f0f0f2; }
        .hn :global(.hn-proof) {
          display: flex; align-items: flex-start; gap: 10px; margin: 40px 0 0; max-width: 560px;
          font-size: 10.5px; letter-spacing: 1.3px; text-transform: uppercase; line-height: 1.8; color: rgba(240, 240, 242, 0.5);
        }
        .hn-proof-dot { flex: none; width: 6px; height: 6px; margin-top: 6px; border-radius: 50%; background: var(--accent); }
        .hn :global(.hn-video) { width: 100%; }
        .hn :global(.hn-video) > :global(*) { max-width: 100%; }

        @media (max-width: 960px) {
          .hn { min-height: 0; align-items: flex-start; }
          .hn-inner { grid-template-columns: 1fr; }
          .hn-map { width: 190%; right: -70%; top: 26%; opacity: 0.8; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hn-arc { animation: none; stroke-dashoffset: 0; }
          .hn-dot { animation: none; opacity: 1; }
          .hn-pulse { animation: none; }
        }
      `}</style>
    </section>
  )
}
