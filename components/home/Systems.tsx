'use client'

import { Zap, FileSearch, Send, RefreshCcw, BarChart3 } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function Systems() {
  const { t } = useLang()

  const systems = [
    { icon: Zap, num: '01', title: t('systems.s1.title'), desc: t('systems.s1.desc'), metric: t('systems.s1.metric') },
    { icon: FileSearch, num: '02', title: t('systems.s2.title'), desc: t('systems.s2.desc'), metric: t('systems.s2.metric') },
    { icon: Send, num: '03', title: t('systems.s3.title'), desc: t('systems.s3.desc'), metric: t('systems.s3.metric') },
    { icon: RefreshCcw, num: '04', title: t('systems.s4.title'), desc: t('systems.s4.desc'), metric: t('systems.s4.metric') },
    { icon: BarChart3, num: '05', title: t('systems.s5.title'), desc: t('systems.s5.desc'), metric: t('systems.s5.metric') },
  ]

  return (
    <section id="systemes" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('systems.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '680px', margin: '0 auto 20px' }}>
            {t('systems.title')}{' '}
            <span className="accent">{t('systems.titleAccent')}</span>
          </h2>
          <p
            className="font-sans"
            style={{
              fontSize: '15px',
              fontWeight: 300,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {t('systems.sub')}
          </p>
        </FadeUp>

        <div className="systems-grid">
          {systems.map((s, i) => {
            const Icon = s.icon
            return (
              <FadeUp key={s.num} delay={i * 0.08}>
                <article
                  className="systems-card"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: '32px 28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    transition: 'border-color 0.3s ease, transform 0.3s ease',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 11,
                        letterSpacing: 2,
                        color: 'var(--text-muted)',
                        fontWeight: 400,
                      }}
                    >
                      SYSTÈME {s.num}
                    </span>
                    <Icon size={20} strokeWidth={1.6} style={{ color: 'var(--accent)' }} />
                  </div>

                  <h3
                    className="font-serif italic"
                    style={{
                      fontSize: 22,
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: 'var(--text)',
                      margin: 0,
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="font-sans"
                    style={{
                      fontSize: 13.5,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      fontWeight: 300,
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    {s.desc}
                  </p>

                  <div
                    style={{
                      borderLeft: '2px solid var(--accent)',
                      paddingLeft: 12,
                      marginTop: 8,
                    }}
                  >
                    <p
                      className="font-mono"
                      style={{
                        fontSize: 11.5,
                        fontWeight: 500,
                        color: 'var(--accent)',
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      {s.metric}
                    </p>
                  </div>
                </article>
              </FadeUp>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .systems-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }
        .systems-card:hover {
          border-color: var(--accent) !important;
          transform: translateY(-2px);
        }
        @media (max-width: 880px) {
          .systems-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 540px) {
          .systems-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
