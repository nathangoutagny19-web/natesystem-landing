'use client'

import { Clock, TrendingUp, Target, Users, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

type Benefit = { icon: LucideIcon; title: string; desc: string }

export default function Twist() {
  const { t } = useLang()

  const benefits: Benefit[] = [
    { icon: Clock, title: t('twist.b1.title'), desc: t('twist.b1.desc') },
    { icon: TrendingUp, title: t('twist.b2.title'), desc: t('twist.b2.desc') },
    { icon: Target, title: t('twist.b3.title'), desc: t('twist.b3.desc') },
    { icon: Users, title: t('twist.b4.title'), desc: t('twist.b4.desc') },
    { icon: ShieldCheck, title: t('twist.b5.title'), desc: t('twist.b5.desc') },
    { icon: Sparkles, title: t('twist.b6.title'), desc: t('twist.b6.desc') },
  ]

  return (
    <section id="twist" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('twist.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '720px', margin: '0 auto 20px' }}>
            {t('twist.title')}
          </h2>
          <p className="font-sans" style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontWeight: 300 }}>
            {t('twist.sub')}
          </p>
        </FadeUp>

        <div className="twist-grid">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <FadeUp key={b.title} delay={i * 0.08}>
                <article
                  className="twist-card"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 12,
                    padding: '28px 26px',
                    height: '100%',
                    boxShadow: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -16px rgba(15, 23, 42, 0.12)',
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: 'var(--accent-subtle)',
                      border: '1px solid rgba(230,57,70,0.18)',
                      color: 'var(--accent)',
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h3
                    className="font-serif italic"
                    style={{ fontSize: 21, fontWeight: 400, lineHeight: 1.2, color: 'var(--text)', margin: '0 0 10px' }}
                  >
                    {b.title}
                  </h3>
                  <p
                    className="font-sans"
                    style={{ fontSize: 14, lineHeight: 1.6, fontWeight: 300, color: 'var(--text-secondary)', margin: 0 }}
                  >
                    {b.desc}
                  </p>
                </article>
              </FadeUp>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .twist-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }
        @media (max-width: 900px) {
          .twist-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 560px) {
          .twist-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
