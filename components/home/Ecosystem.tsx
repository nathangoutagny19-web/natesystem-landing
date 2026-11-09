'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion, useInView } from 'framer-motion'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'

/**
 * L'ÉCOSYSTÈME, EN MOUVEMENT (accueil, 8 novembre 2026).
 *
 * Nathan : « un vrai digital ecosystem avec du vrai motion design, simple de
 * compréhension. On promet l'excellence opérationnelle pour le logiciel. Ne
 * parle pas des réseaux sociaux ni de la pub. »
 *
 * Le principe : on suit UNE demande qui entre (un WhatsApp) et traverse le
 * logiciel, étape par étape. Chaque étape s'allume quand la demande l'atteint
 * et affiche ce qui s'est fait tout seul. En cinq secondes on comprend : une
 * demande arrive, tout le reste suit, rien ne s'oublie.
 *
 * Les données de l'exemple sont fictives (« Villa Rosa », « famille Laurent »).
 * Mouvement lent, en boucle ; figé et complet si l'utilisateur réduit les
 * animations. Le hongrois n'est pas relu par un natif.
 */
const STEP_MS = 1900
const PAUSE_MS = 2200

export default function Ecosystem() {
  const { lang, t } = useLang()
  const d = makeD(lang)
  const reduce = useReducedMotion()

  const steps = [
    {
      label: d('Demande', 'Request', 'Kérés'),
      title: d('WhatsApp · famille Laurent', 'WhatsApp · the Laurent family', 'WhatsApp · Laurent család'),
      detail: d('4 nuits, chef privé, transfert', '4 nights, private chef, transfer', '4 éj, magánszakács, transzfer'),
      done: d('Enregistrée, rien ne se perd', 'Logged, nothing gets lost', 'Rögzítve, semmi sem vész el'),
    },
    {
      label: d('Réservation', 'Booking', 'Foglalás'),
      title: d('Villa Rosa', 'Villa Rosa', 'Villa Rosa'),
      detail: d('Du 12 au 16 juillet', '12 to 16 July', 'Július 12–16.'),
      done: d('Disponibilité vérifiée', 'Availability checked', 'Elérhetőség ellenőrizve'),
    },
    {
      label: d('Prestataires et équipe', 'Suppliers and team', 'Beszállítók és csapat'),
      title: d('Chef, chauffeur, ménage', 'Chef, driver, housekeeping', 'Szakács, sofőr, takarítás'),
      detail: d('Prévenus automatiquement', 'Notified automatically', 'Automatikusan értesítve'),
      done: d('Tous ont confirmé', 'All confirmed', 'Mindenki visszaigazolta'),
    },
    {
      label: d('Facturation', 'Invoicing', 'Számlázás'),
      title: d('Séjour et extras', 'Stay and extras', 'Tartózkodás és extrák'),
      detail: d('Chaque extra sur la facture', 'Every extra on the invoice', 'Minden extra a számlán'),
      done: d('Facture envoyée', 'Invoice sent', 'Számla elküldve'),
    },
    {
      label: d('Reporting', 'Reporting', 'Riportok'),
      title: d('Propriétaire et direction', 'Owner and management', 'Tulajdonos és vezetés'),
      detail: d('Les chiffres du mois', 'The month’s figures', 'A hónap számai'),
      done: d('À jour, sans ressaisie', 'Up to date, no retyping', 'Naprakész, újragépelés nélkül'),
    },
  ]
  const N = steps.length

  /* -1 : la demande n'est pas encore entrée. 0..N-1 : étape atteinte. */
  const [active, setActive] = useState(reduce ? N - 1 : -1)
  /* La boucle démarre quand la section est à l'écran, pour que le visiteur
     voie la demande entrer, pas le milieu du parcours. */
  const railRef = useRef<HTMLDivElement>(null)
  const inView = useInView(railRef, { amount: 0.3 })
  useEffect(() => {
    if (reduce || !inView) return
    const delay = active >= N - 1 ? PAUSE_MS : active < 0 ? 900 : STEP_MS
    const id = window.setTimeout(() => setActive((a) => (a >= N - 1 ? -1 : a + 1)), delay)
    return () => window.clearTimeout(id)
  }, [active, reduce, N, inView])

  const progress = active < 0 ? 0 : active / (N - 1)

  return (
    <section id="prestations" style={{ background: '#0e0e12', padding: 'clamp(96px, 11vw, 150px) 24px' }}>
      <div ref={railRef} style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-end">
          <div>
            <p className="font-mono" style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(240,240,242,0.5)' }}>
              {d('Écosystème digital', 'Digital ecosystem', 'Digitális ökoszisztéma')}
            </p>
            <h2 className="font-serif font-normal" style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', lineHeight: 1.04, marginTop: 20, color: '#f0f0f2' }}>
              {d('Une demande arrive. ', 'A request comes in. ', 'Beérkezik egy kérés. ')}
              <span className="italic" style={{ color: 'rgba(240,240,242,0.7)' }}>{d('Tout le reste suit.', 'Everything else follows.', 'Minden más követi.')}</span>
            </h2>
          </div>
          <p className="font-sans" style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: 'rgba(240,240,242,0.6)' }}>
            {t('hero.sub')}
          </p>
        </div>

        {/* Le rail, ordinateur */}
        <div className="hidden lg:block relative" style={{ marginTop: 88 }}>
          <div className="absolute" style={{ left: '10%', right: '10%', top: 7, height: 1, background: 'rgba(255,255,255,0.12)' }} />
          <motion.div
            className="absolute"
            style={{ left: '10%', top: 7, height: 1, background: '#E63946', transformOrigin: 'left' }}
            animate={{ width: `${progress * 80}%` }}
            transition={{ duration: active < 0 ? 0.4 : 1.1, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.span
            className="absolute"
            style={{ top: 2, width: 11, height: 11, borderRadius: 999, background: '#E63946', boxShadow: '0 0 0 6px rgba(230,57,70,0.15)', marginLeft: -5 }}
            animate={{ left: `${10 + progress * 80}%`, opacity: active < 0 ? 0 : 1 }}
            transition={{ duration: active < 0 ? 0.4 : 1.1, ease: [0.65, 0, 0.35, 1] }}
          />
          <div className="grid" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
            {steps.map((s, i) => (
              <Step key={s.label} step={s} state={i < active ? 'past' : i === active ? 'now' : 'next'} />
            ))}
          </div>
        </div>

        {/* La pile, mobile */}
        <div className="lg:hidden" style={{ marginTop: 56, borderLeft: '1px solid rgba(255,255,255,0.12)', paddingLeft: 20 }}>
          {steps.map((s, i) => (
            <div key={s.label} style={{ marginBottom: 28 }}>
              <Step step={s} state={i < active ? 'past' : i === active ? 'now' : 'next'} compact />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6" style={{ marginTop: 80, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p className="font-serif" style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', color: '#f0f0f2', maxWidth: 680 }}>
            {d(
              'Vous gardez la main, le logiciel fait le reste. Un module ou tout l’écosystème : on commence là où ça vous coûte le plus.',
              'You stay in charge, the software does the rest. One module or the whole ecosystem: we start where it costs you the most.',
              'Ön dönt, a szoftver elvégzi a többit. Egy modul vagy a teljes ökoszisztéma: ott kezdjük, ahol a legtöbbe kerül.'
            )}
          </p>
          <Link href={localizedHref('/#rendez-vous', lang)} className="btn-primary btn-on-dark">
            {d('Recevoir votre audit gratuit', 'Get your free audit', 'Kérje ingyenes auditját')} →
          </Link>
        </div>
      </div>
    </section>
  )
}

type StepData = { label: string; title: string; detail: string; done: string }

function Step({ step, state, compact = false }: { step: StepData; state: 'past' | 'now' | 'next'; compact?: boolean }) {
  const lit = state !== 'next'
  return (
    <div style={{ paddingTop: compact ? 0 : 36, paddingRight: compact ? 0 : 20, textAlign: compact ? 'left' : 'center' }}>
      <p className="font-mono" style={{ fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: lit ? 'rgba(240,240,242,0.7)' : 'rgba(240,240,242,0.3)', transition: 'color .6s ease' }}>
        {step.label}
      </p>
      <motion.div
        animate={{ borderColor: state === 'now' ? 'rgba(240,240,242,0.55)' : 'rgba(255,255,255,0.1)', backgroundColor: state === 'now' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0)' }}
        transition={{ duration: 0.6 }}
        style={{ marginTop: 14, border: '1px solid', borderRadius: 2, padding: '18px 16px', textAlign: 'left', minHeight: compact ? 0 : 132 }}
      >
        <p className="font-sans" style={{ fontSize: 15, color: lit ? '#f0f0f2' : 'rgba(240,240,242,0.35)', transition: 'color .6s ease' }}>{step.title}</p>
        <p className="font-sans" style={{ fontSize: 13, fontWeight: 300, marginTop: 4, color: lit ? 'rgba(240,240,242,0.55)' : 'rgba(240,240,242,0.22)', transition: 'color .6s ease' }}>{step.detail}</p>
        <div style={{ height: 22, marginTop: 14 }}>
          <AnimatePresence>
            {lit && (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: state === 'now' ? 1 : 0.6, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="font-sans flex items-center gap-2"
                style={{ fontSize: 12.5, color: '#f0f0f2' }}
              >
                <span style={{ width: 6, height: 6, borderRadius: 999, background: '#E63946', flexShrink: 0 }} />
                {step.done}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
