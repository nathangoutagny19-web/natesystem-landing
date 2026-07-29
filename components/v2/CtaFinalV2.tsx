'use client'

import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_HANDLE, CAL_NAMESPACE } from '@/lib/constants'

/**
 * CtaFinalV2, même embed Cal.com que CtaFinal (id="rendez-vous", brand rouge),
 * mais recadré autour du Sprint Diagnostic : « Vous ne sautez jamais dans le
 * vide » (REFONTE §CTA). Réutilise les réassurances existantes cta.r1/r2/r3.
 */
export default function CtaFinalV2() {
  const { t } = useLang()

  const reassurances = [t('cta.r1'), t('cta.r2'), t('cta.r3')]

  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE })
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          light: { 'cal-brand': '#E63946' },
          dark: { 'cal-brand': '#E63946', 'cal-bg': '#0e0e12' },
        },
      })
    })()
  }, [])

  return (
    <section id="rendez-vous" style={{ padding: '0 24px', scrollMarginTop: '90px' }}>
      <div className="mx-auto text-center" style={{ maxWidth: '920px', padding: '130px 0 120px' }}>
        <FadeUp>
          <span className="section-label">{t('v2.cta.eyebrow')}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="section-title" style={{ maxWidth: 700, margin: '0 auto 22px' }}>
            {t('v2.cta.title')}
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="font-sans" style={{ fontSize: 17, fontWeight: 300, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto 28px', lineHeight: 1.6 }}>
            {t('v2.cta.sub')}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex items-center justify-center gap-6 flex-wrap" style={{ marginBottom: 40 }}>
            {reassurances.map((r) => (
              <div key={r} className="flex items-center gap-2">
                <span className="font-sans" style={{ fontSize: 14, color: 'var(--accent)' }}>✓</span>
                <span className="font-sans" style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 300 }}>{r}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
              minHeight: 640,
              textAlign: 'left',
            }}
          >
            <Cal
              namespace={CAL_NAMESPACE}
              calLink={CAL_HANDLE}
              style={{ width: '100%', height: '100%', minHeight: 640, overflow: 'scroll' }}
              config={{ layout: 'month_view' }}
            />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
