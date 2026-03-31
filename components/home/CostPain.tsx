'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

export default function CostPain() {
  const { t } = useLang()

  const painPoints = [
    { stat: t('costpain.stat1'), text: t('costpain.desc1') },
    { stat: t('costpain.stat2'), text: t('costpain.desc2') },
    { stat: t('costpain.stat3'), text: t('costpain.desc3') },
    { stat: t('costpain.stat4'), text: t('costpain.desc4') },
    { stat: t('costpain.stat5'), text: t('costpain.desc5') },
  ]

  return (
    <section id="cout" style={{ padding: '120px 24px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px' }}>
        <FadeUp className="text-center mb-16">
          <span className="section-label">{t('costpain.label')}</span>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {t('costpain.title')} <span className="accent">{t('costpain.titleAccent')}</span>
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {painPoints.map((item, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <span
                  className="font-serif italic flex-shrink-0"
                  style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    color: 'var(--accent)',
                    textAlign: 'center',
                    fontWeight: 400,
                  }}
                >
                  {item.stat}
                </span>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {item.text}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
