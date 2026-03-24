'use client'

import { useState, useRef, useEffect } from 'react'
import FadeUp from '@/components/ui/FadeUp'

/* ——— Icons (monoline SVG, 20×20) ——— */

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
)
const IconGauge = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M12 6v6l4 2" /><path d="M16.24 7.76l-1.41 1.41" />
  </svg>
)
const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
)

/* ——— Data ——— */

interface Guarantee {
  title: string
  desc: string
  icon: React.ReactNode
  absurd?: boolean
  absurdLabel?: string
}

const guarantees: Guarantee[] = [
  {
    title: 'Garantie ROI',
    desc: 'On définit ensemble un chiffre avant de commencer. Il est écrit dans le contrat. Si à 12 mois il n\'est pas atteint, on travaille gratuitement jusqu\'à ce qu\'il le soit.',
    icon: <IconShield />,
  },
  {
    title: 'Garantie Délais',
    desc: 'Chaque semaine de retard injustifiée sur le périmètre initial signé = -10% sur le solde restant, plafonné à 50%. Ne compte pas : évolutions hors périmètre, retours clients non fournis sous 48h, RDV non honorés.',
    icon: <IconClock />,
  },
  {
    title: 'Garantie Propriété',
    desc: '100% du code vous appartient à la livraison. Aucun abonnement pour garder l\'accès. Si NateSystem disparaît demain, votre outil tourne toujours.',
    icon: <IconCode />,
  },
  {
    title: 'Garantie Productivité',
    desc: 'On mesure ensemble le temps perdu sur les tâches ciblées avant de commencer. Si 90 jours après livraison votre équipe n\'a pas récupéré au moins 30% de ce temps — on continue gratuitement jusqu\'à ce que ce soit le cas.',
    icon: <IconGauge />,
  },
  {
    title: 'Garantie Efficacité',
    desc: 'On identifie ensemble avant démarrage les erreurs opérationnelles récurrentes que l\'infrastructure doit éliminer. Si 90 jours après livraison ces erreurs existent encore — on corrige gratuitement jusqu\'à zéro.',
    icon: <IconTarget />,
  },
  {
    title: 'La Garantie Famille',
    desc: 'Dans les 90 jours suivant la livraison, si vous n\'êtes pas suffisamment satisfait pour en parler à chaque repas de famille jusqu\'à ce que tout le monde en soit lassé — on vous offre le restau.',
    icon: null,
    absurd: true,
    absurdLabel: 'Garantie Absurde',
  },
  {
    title: 'La Garantie Concurrent',
    desc: 'Dans les 90 jours suivant la livraison, si vous n\'êtes pas suffisamment satisfait pour nous supplier de ne pas travailler avec votre concurrent direct — on vous offre le restau.',
    icon: null,
    absurd: true,
    absurdLabel: 'Garantie Absurde',
  },
]

/* ——— Typewriter hook ——— */

function useTypewriter(text: string, active: boolean, speed = 30) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) {
      setDisplayed('')
      setDone(false)
      return
    }
    const words = text.split(' ')
    let i = 0
    setDisplayed('')
    setDone(false)

    const tick = () => {
      i++
      setDisplayed(words.slice(0, i).join(' '))
      if (i >= words.length) {
        setDone(true)
        return
      }
      rafRef.current = window.setTimeout(tick, speed)
    }
    rafRef.current = window.setTimeout(tick, speed)

    return () => {
      if (rafRef.current) clearTimeout(rafRef.current)
    }
  }, [active, text, speed])

  return { displayed, done }
}

/* ——— Absurd card component ——— */

function AbsurdCard({ g, delay }: { g: Guarantee; delay: number }) {
  const [hovered, setHovered] = useState(false)
  const { displayed } = useTypewriter(g.desc, hovered)

  return (
    <FadeUp delay={delay}>
      <div
        className="guarantee-absurd"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p className="font-mono" style={{
          fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase',
          color: 'var(--accent)', marginBottom: '10px',
        }}>
          {g.absurdLabel}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <p className="font-sans" style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)' }}>
            {g.title}
          </p>
          <span style={{ fontSize: '18px' }}>🍽</span>
        </div>
        <p
          className="font-sans"
          style={{
            fontSize: '14px', fontWeight: 300, color: 'var(--text-secondary)',
            lineHeight: 1.6, minHeight: '66px',
          }}
        >
          {hovered ? displayed : g.desc}
        </p>
      </div>
    </FadeUp>
  )
}

/* ——— Main component ——— */

export default function Guarantees() {
  const standard = guarantees.filter(g => !g.absurd)
  const absurd = guarantees.filter(g => g.absurd)

  return (
    <section id="garanties" style={{ padding: '120px 24px' }}>
      <style>{`
        .guarantee-card {
          display: flex; align-items: flex-start; gap: 16px;
          background: var(--bg-card); border: 1px solid var(--border);
          border-radius: 16px; padding: 24px; height: 100%;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s;
        }
        .guarantee-card:hover {
          transform: translateY(-2px);
          border-color: var(--border-hover);
        }
        .guarantee-absurd {
          background: rgba(230,57,70,0.04);
          border: 1px solid rgba(230,57,70,0.15);
          border-radius: 16px; padding: 24px; height: 100%;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.3s, box-shadow 0.3s;
          cursor: default;
        }
        .guarantee-absurd:hover {
          transform: translateY(-2px);
          border-color: rgba(230,57,70,0.35);
          box-shadow: 0 0 0 3px rgba(230,57,70,0.15);
        }
        .guarantee-grid > div { height: 100%; }
        .guarantee-full { grid-column: 1 / -1; }
      `}</style>

      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">GARANTIES</span>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Zéro risque. <span className="accent">7 garanties.</span>
          </h2>
        </FadeUp>

        {/* 5 standard guarantees — 2-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
          }}
          className="guarantee-grid"
        >
          {standard.map((g, i) => {
            const isLastOdd = standard.length % 2 !== 0 && i === standard.length - 1
            return (
            <FadeUp key={i} delay={i * 0.06} className={isLastOdd ? 'guarantee-full' : ''}>
              <div className="guarantee-card">
                <div style={{
                  width: 40, height: 40, minWidth: 40,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--accent-subtle)', color: 'var(--accent)',
                  borderRadius: 10,
                }}>
                  {g.icon}
                </div>
                <div>
                  <p className="font-sans" style={{ fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '6px' }}>
                    {g.title}
                  </p>
                  <p className="font-sans" style={{ fontSize: '14px', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {g.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
            )
          })}
        </div>

        {/* 2 absurd guarantees — separate row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
            marginTop: '14px',
          }}
          className="guarantee-grid"
        >
          {absurd.map((g, i) => (
            <AbsurdCard key={i} g={g} delay={0.35 + i * 0.08} />
          ))}
        </div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 640px) {
          .guarantee-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
