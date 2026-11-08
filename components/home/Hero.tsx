'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLang } from '@/components/providers/LangProvider'
import Link from 'next/link'
import { CAL_LINK } from '@/lib/constants'

/* Bouton principal : l'audit gratuit, sans appel (Nathan, 8 novembre 2026).
   Jamais « prototype » : règle de la prospection. */
const AUDIT_LINK = '/audit-gratuit'
import { localizedHref } from '@/lib/routes'
import { makeD } from '@/lib/lang'
import VslPlayer from '@/components/ui/VslPlayer'

const ease = [0.22, 1, 0.36, 1] as const

/** Cycles through benefit words: each fades/slides in, holds, then out.
    Mount-gated: renders a plain static first word for SSR + first client
    paint (so there's never a hydration text mismatch), then upgrades to the
    animated version once mounted. */
function RotatingWord({ words }: { words: string[] }) {
  const [mounted, setMounted] = useState(false)
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => setMounted(true), [])

  // The word ALWAYS rotates, it's content, not decoration. Reduced-motion only
  // softens the transition (a quick cut instead of a slide), it never freezes it.
  useEffect(() => {
    if (!mounted || words.length <= 1) return
    const id = setInterval(() => setI((p) => (p + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [mounted, words.length])

  /* ⚠︎ LA LARGEUR SUIT LE MOT COURANT, ELLE NE RESERVE PLUS LE PLUS LONG.
     Tant que le mot tournait en FIN de phrase, reserver la largeur du mot le
     plus long ne se voyait pas. Depuis le 4 octobre 2026 il tourne AU MILIEU,
     « Votre [X] est unique », et cette reserve ouvrait un trou de plusieurs
     dizaines de pixels apres les mots courts : « Votre process      est
     unique. » Le gabarit porte donc le mot courant, et c'est motion.span
     layout qui absorbe le changement de largeur. */

  // SSR / first paint: a stable, always-visible first word (avoids hydration mismatch).
  if (!mounted || words.length <= 1) {
    return <span className="accent" style={{ color: 'var(--accent)' }}>{words[0]}</span>
  }

  // Reduced motion → no slide, just a fast opacity cut. Full motion → fade + slide.
  const dur = reduce ? 0.15 : 0.45
  const offset = reduce ? 0 : '0.35em'

  return (
    <motion.span
      layout={!reduce}
      transition={{ duration: dur, ease }}
      style={{ position: 'relative', display: 'inline-block', verticalAlign: 'bottom' }}
    >
      {/* gabarit invisible : il porte le mot COURANT, pas le plus long */}
      <span aria-hidden className="accent" style={{ visibility: 'hidden', color: 'var(--accent)' }}>{words[i]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          className="accent"
          style={{ color: 'var(--accent)', position: 'absolute', left: 0, bottom: 0, whiteSpace: 'nowrap' }}
          initial={{ opacity: 0, y: offset }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : '-0.35em' }}
          transition={{ duration: dur, ease }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  )
}

export default function Hero() {
  const { lang, t } = useLang()
  const d = makeD(lang)
  const words = t('hero.titleWords').split('|').map((w) => w.trim()).filter(Boolean)
  /* Une simple apparition en fondu, rien qui glisse (Nathan, 8 novembre 2026). */
  const fade = (delay: number) => ({ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.9, delay, ease } })

  return (
    /* LE HERO DU 8 NOVEMBRE 2026, sur le modèle de gourmetmarketing.net : fond
       sombre, texte aligné à gauche, deux grandes phrases en serif droite, la
       seconde porte les chiffres, « 40 heures » en rouge. La ligne de preuve en
       petites capitales et la pastille à icône sont retirées. */
    <section className="hero-section" style={{ background: 'radial-gradient(80% 70% at 100% 0%, rgba(230,57,70,0.09), transparent 60%), #0e0e12', padding: '168px 24px 96px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.p {...fade(0.05)} className="font-mono" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,240,242,0.5)' }}>
          {t('hero.label')}
        </motion.p>

        <motion.h1
          {...fade(0.1)}
          className="font-serif font-normal"
          style={{ fontSize: 'clamp(42px, 6.2vw, 88px)', lineHeight: 1.02, letterSpacing: '-0.01em', marginTop: 28, maxWidth: 1080, color: '#f0f0f2' }}
        >
          {t('hero.titlePrefix')}{' '}
          {words.length > 1 ? <RotatingWord words={words} /> : <span>{words[0]}</span>}{' '}
          {t('hero.titleSuffix')}
        </motion.h1>

        <motion.p
          {...fade(0.25)}
          className="font-serif"
          style={{ fontSize: 'clamp(28px, 3.6vw, 48px)', lineHeight: 1.12, marginTop: 36, maxWidth: 980, color: 'rgba(240,240,242,0.86)' }}
        >
          {d('Nos clients nous rapportent ', 'Our clients report ', 'Ügyfeleink szerint havonta ')}
          <span className="italic" style={{ color: '#E63946' }}>{d('40 heures', '40 hours', '40 órát')}</span>
          {d(
            ' rendues chaque mois, et une réactivité qui double.',
            ' given back every month, and responsiveness that doubles.',
            ' nyernek vissza, és kétszer gyorsabban reagálnak.'
          )}
        </motion.p>

        <motion.p
          {...fade(0.35)}
          className="font-sans"
          style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', fontWeight: 300, lineHeight: 1.65, marginTop: 32, maxWidth: 640, color: 'rgba(240,240,242,0.6)' }}
        >
          {t('hero.sub')}
        </motion.p>

        <motion.div {...fade(0.45)} className="flex flex-wrap items-center gap-3" style={{ marginTop: 44 }}>
          <Link href={localizedHref(AUDIT_LINK, lang)} className="btn-primary btn-on-dark">
            {t('hero.ctaAudit')} →
          </Link>
          <Link href={localizedHref(CAL_LINK, lang)} className="btn-ghost btn-on-dark">
            {t('hero.ctaCall')} →
          </Link>
        </motion.div>

        {/* VSL, self-hosted, plays inline on click (zero page-load cost). */}
        <motion.div {...fade(0.55)} style={{ marginTop: 72, maxWidth: 880 }}>
          {/* Sous-titres incrustés dans la vidéo : pas de piste VTT. */}
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
        @media (max-width: 540px) {
          .hero-section {
            padding: 120px 18px 64px !important;
          }
        }
      `}</style>
    </section>
  )
}
