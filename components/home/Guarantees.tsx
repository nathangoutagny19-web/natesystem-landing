'use client'

import { useState, useRef, useEffect } from 'react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/* --- Icons (monoline SVG, 20x20) --- */

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

/* --- Data --- */

interface Guarantee {
  title: string
  desc: string
  icon: React.ReactNode
  absurd?: boolean
  absurdLabel?: string
}

/* --- Typewriter hook --- */

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

/* --- Absurd card component --- */

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

/* --- Main component --- */

export default function Guarantees() {
  const { t } = useLang()

  const guarantees: Guarantee[] = [
    {
      title: t('guarantees.roi.title'),
      desc: t('guarantees.roi.desc'),
      icon: <IconShield />,
    },
    {
      title: t('guarantees.delays.title'),
      desc: t('guarantees.delays.desc'),
      icon: <IconClock />,
    },
    {
      title: t('guarantees.ownership.title'),
      desc: t('guarantees.ownership.desc'),
      icon: <IconCode />,
    },
    {
      title: t('guarantees.productivity.title'),
      desc: t('guarantees.productivity.desc'),
      icon: <IconGauge />,
    },
    {
      title: t('guarantees.efficiency.title'),
      desc: t('guarantees.efficiency.desc'),
      icon: <IconTarget />,
    },
    {
      title: t('guarantees.family.title'),
      desc: t('guarantees.family.desc'),
      icon: null,
      absurd: true,
      absurdLabel: t('guarantees.absurdLabel'),
    },
    {
      title: t('guarantees.competitor.title'),
      desc: t('guarantees.competitor.desc'),
      icon: null,
      absurd: true,
      absurdLabel: t('guarantees.absurdLabel'),
    },
  ]

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
          <span className="section-label">{t('guarantees.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {t('guarantees.title')} <span className="accent">{t('guarantees.titleAccent')}</span>
          </h2>
        </FadeUp>

        {/* 5 standard guarantees - 2-column grid */}
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

        {/* 2 absurd guarantees - separate row */}
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
