'use client'

import { useState, useRef, useEffect } from 'react'
import FadeUp from '@/components/ui/FadeUp'

/* ——— Icons (16×16, stroke currentColor) ——— */

const IconShield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const IconClock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const IconCode = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
)
const IconZap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)
const IconCheckCircle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)
const IconUtensils = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
  </svg>
)
const IconSwords = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 17.5L3 6V3h3l11.5 11.5" /><path d="M13 19l6-6" /><path d="M16 16l4 4" /><path d="M19 21l2-2" />
    <path d="M9.5 6.5L21 18v3h-3L6.5 9.5" /><path d="M11 5L5 11" /><path d="M8 8L4 4" /><path d="M5 3L3 5" />
  </svg>
)

/* ——— Data ——— */

interface Guarantee {
  title: string
  desc: string
  icon: React.ReactNode
  absurd?: boolean
}

const standardGuarantees: Guarantee[] = [
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
    icon: <IconZap />,
  },
]

const efficacite: Guarantee = {
  title: 'Garantie Efficacité',
  desc: 'On identifie ensemble avant démarrage les erreurs opérationnelles récurrentes que l\'infrastructure doit éliminer. Si 90 jours après livraison ces erreurs existent encore — on corrige gratuitement jusqu\'à zéro.',
  icon: <IconCheckCircle />,
}

const absurdGuarantees: Guarantee[] = [
  {
    title: 'La Garantie Famille',
    desc: 'Dans les 90 jours suivant la livraison, si vous n\'êtes pas suffisamment satisfait pour en parler à chaque repas de famille jusqu\'à ce que tout le monde en soit lassé — on vous offre le restau.',
    icon: <IconUtensils />,
    absurd: true,
  },
  {
    title: 'La Garantie Concurrent',
    desc: 'Dans les 90 jours suivant la livraison, si vous n\'êtes pas suffisamment satisfait pour nous supplier de ne pas travailler avec votre concurrent direct — on vous offre le restau.',
    icon: <IconSwords />,
    absurd: true,
  },
]

/* ——— Icon box helper ——— */

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: 36, height: 36, minWidth: 36,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(230,57,70,0.08)', color: '#E63946',
      borderRadius: 10,
    }}>
      {children}
    </div>
  )
}

/* ——— Typewriter hook ——— */

function useTypewriter(text: string, active: boolean, speed = 25) {
  const [displayed, setDisplayed] = useState('')
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) { setDisplayed(''); return }
    const words = text.split(' ')
    let i = 0
    setDisplayed('')
    const tick = () => {
      i++
      setDisplayed(words.slice(0, i).join(' '))
      if (i < words.length) timerRef.current = window.setTimeout(tick, speed)
    }
    timerRef.current = window.setTimeout(tick, speed)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [active, text, speed])

  return displayed
}

/* ——— Absurd card ——— */

function AbsurdCard({ g, delay }: { g: Guarantee; delay: number }) {
  const [hovered, setHovered] = useState(false)
  const displayed = useTypewriter(g.desc, hovered)

  return (
    <FadeUp delay={delay}>
      <div
        className="g-absurd"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '3px',
          textTransform: 'uppercase', color: '#E63946', marginBottom: 10,
        }}>
          NOTRE PARI
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
          <IconBox>{g.icon}</IconBox>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '16px', fontWeight: 400, color: '#f0f0f2' }}>
            {g.title}
          </p>
        </div>
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 300,
          color: '#8a8a96', lineHeight: 1.6, minHeight: 66,
        }}>
          {hovered ? displayed : g.desc}
        </p>
      </div>
    </FadeUp>
  )
}

/* ——— Main ——— */

export default function Guarantees() {
  return (
    <section id="garanties" style={{ padding: '120px 24px', background: '#0e0e12' }}>
      <style>{`
        .g-card {
          display: flex; align-items: flex-start; gap: 16px;
          background: #141418; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 24px;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s;
        }
        .g-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.12);
        }
        .g-banner {
          display: flex; align-items: flex-start; gap: 16px;
          background: #141418; border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px; padding: 24px 32px;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s;
        }
        .g-banner:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.12);
        }
        @media (min-width: 768px) {
          .g-banner {
            flex-direction: row; align-items: center;
          }
          .g-banner-left { flex-shrink: 0; display: flex; align-items: center; gap: 12px; min-width: 240px; }
          .g-banner-right { flex: 1; }
        }
        .g-absurd {
          background: rgba(230,57,70,0.04);
          border: 1px solid rgba(230,57,70,0.2);
          border-radius: 16px; padding: 24px; cursor: default;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.3s, box-shadow 0.3s;
        }
        .g-absurd:hover {
          transform: translateY(-2px);
          border-color: rgba(230,57,70,0.4);
          box-shadow: 0 0 0 3px rgba(230,57,70,0.08);
        }
        @media (max-width: 640px) {
          .g-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="mx-auto" style={{ maxWidth: 900 }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">GARANTIES</span>
          <h2 className="section-title" style={{ maxWidth: 600, margin: '0 auto' }}>
            Zéro risque. <span className="accent">7 garanties.</span>
          </h2>
        </FadeUp>

        {/* Row 1-2: 4 standard guarantees in 2×2 */}
        <div className="g-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
          {standardGuarantees.map((g, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div className="g-card">
                <IconBox>{g.icon}</IconBox>
                <div>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500, color: '#f0f0f2', marginBottom: 6 }}>
                    {g.title}
                  </p>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300, color: '#8a8a96', lineHeight: 1.6 }}>
                    {g.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Row 3: Efficacité — full width banner */}
        <div style={{ marginTop: 14 }}>
          <FadeUp delay={0.25}>
            <div className="g-banner">
              <div className="g-banner-left">
                <IconBox>{efficacite.icon}</IconBox>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 500, color: '#f0f0f2' }}>
                  {efficacite.title}
                </p>
              </div>
              <div className="g-banner-right">
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 300, color: '#8a8a96', lineHeight: 1.6 }}>
                  {efficacite.desc}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Row 4: 2 absurd guarantees */}
        <div className="g-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginTop: 14 }}>
          {absurdGuarantees.map((g, i) => (
            <AbsurdCard key={i} g={g} delay={0.35 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
