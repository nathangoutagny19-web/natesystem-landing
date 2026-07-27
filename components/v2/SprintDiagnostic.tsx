'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Map, MousePointerClick, FileText, ArrowRight } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * Le Sprint Diagnostic — l'offre d'entrée nommée (REFONTE §4.3).
 * Layout asymétrique 2 colonnes (casse le gabarit "titre centré + cartes") :
 * gauche = le pitch + promesse + CTA ; droite = les 3 livrables numérotés.
 */
export default function SprintDiagnostic() {
  const { t } = useLang()

  // Une petite image DANS chaque case (pas de zoom). La Carte = Miro (à venir).
  const deliverables: { icon: typeof Map; name: string; desc: string; img?: string; fit?: 'contain' | 'cover' }[] = [
    { icon: Map, name: t('v2.sprint.d1.name'), desc: t('v2.sprint.d1.desc') }, // La Carte → Miro (fichier à venir)
    { icon: MousePointerClick, name: t('v2.sprint.d2.name'), desc: t('v2.sprint.d2.desc'), img: 'proto-front', fit: 'contain' },
    { icon: FileText, name: t('v2.sprint.d3.name'), desc: t('v2.sprint.d3.desc'), img: 'feuille-photo', fit: 'cover' },
  ]

  return (
    <section id="sprint-diagnostic" style={{ padding: '110px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: 1100 }}>
        <div className="sprint-grid">
          {/* Left — the pitch */}
          <FadeUp>
            <div>
              <span
                className="font-mono"
                style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600 }}
              >
                {t('v2.sprint.eyebrow')}
              </span>
              <h2
                className="font-serif italic"
                style={{ fontSize: 'clamp(30px, 4vw, 46px)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text)', margin: '14px 0 18px' }}
              >
                {t('v2.sprint.title')}
              </h2>
              <span
                className="font-mono"
                style={{
                  display: 'inline-block',
                  fontSize: 12,
                  letterSpacing: 0.5,
                  color: 'var(--text)',
                  background: 'var(--accent-subtle)',
                  border: '1px solid rgba(230,57,70,0.22)',
                  borderRadius: 999,
                  padding: '6px 14px',
                  marginBottom: 22,
                }}
              >
                {t('v2.sprint.format')}
              </span>
              <p className="font-sans" style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-secondary)', fontWeight: 300, marginBottom: 20, maxWidth: 460 }}>
                {t('v2.sprint.intro')}
              </p>
              <p
                className="font-serif italic"
                style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--text)', borderLeft: '2px solid var(--accent)', paddingLeft: 16, marginBottom: 30, maxWidth: 480 }}
              >
                {t('v2.sprint.promise')}
              </p>
              <Link href="#rendez-vous" className="btn-primary" style={{ fontSize: 14 }}>
                <span className="btn-primary-dot" />
                {t('v2.sprint.cta')} →
              </Link>
              {/* Porte secondaire self-serve → le Diagnostic IA (Lot 4) */}
              <div style={{ marginTop: 16 }}>
                <Link
                  href="/tools/diagnostic-ia"
                  className="font-mono"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 12.5,
                    letterSpacing: 0.3,
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: 2,
                    transition: 'color 0.25s ease, border-color 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.borderColor = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.borderColor = 'var(--border)'
                  }}
                >
                  {t('v2.sprint.selfserve')} →
                </Link>
              </div>
            </div>
          </FadeUp>

          {/* Right — les 3 livrables, chacun avec sa petite image DANS la case */}
          <div className="sprint-cards">
            {deliverables.map((d, i) => {
              const Icon = d.icon
              return (
                <FadeUp key={d.name} delay={0.1 + i * 0.1}>
                  <div
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '22px 22px 18px' }}>
                      <span
                        aria-hidden="true"
                        style={{
                          flex: 'none',
                          width: 44,
                          height: 44,
                          borderRadius: 11,
                          background: 'var(--accent-subtle)',
                          border: '1px solid rgba(230,57,70,0.18)',
                          color: 'var(--accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="font-mono" style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--accent)', margin: '2px 0 8px', fontWeight: 600 }}>
                          {String(i + 1).padStart(2, '0')} / 03
                        </p>
                        <p className="font-serif italic" style={{ fontSize: 20, fontWeight: 400, color: 'var(--text)', margin: '0 0 6px' }}>
                          {d.name}
                        </p>
                        <p className="font-sans" style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-secondary)', fontWeight: 300, margin: 0 }}>
                          {d.desc}
                        </p>
                      </div>
                    </div>
                    {d.img && (
                      <div style={{ position: 'relative', width: '100%', height: 176, background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
                        <Image
                          src={`/realisations/prototype/${d.img}.jpg`}
                          alt={d.name}
                          fill
                          sizes="(max-width: 900px) 90vw, 440px"
                          style={{ objectFit: d.fit, objectPosition: 'center top', padding: d.fit === 'contain' ? '10px' : 0 }}
                        />
                      </div>
                    )}
                  </div>
                </FadeUp>
              )
            })}
            <FadeUp delay={0.4}>
              <div className="flex items-center gap-2" style={{ paddingLeft: 6, color: 'var(--text-muted)' }}>
                <ArrowRight size={14} strokeWidth={2} style={{ color: 'var(--accent)' }} />
                <span className="font-mono" style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase' }}>
                  {t('v2.sprint.format')}
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sprint-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: start;
        }
        .sprint-cards {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        @media (max-width: 900px) {
          .sprint-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  )
}
