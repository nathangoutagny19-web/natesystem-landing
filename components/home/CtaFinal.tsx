'use client'

import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { CAL_HANDLE, CAL_NAMESPACE } from '@/lib/constants'
import Footer from '@/components/layout/Footer'

export default function CtaFinal() {
  const { t } = useLang()

  const reassurances = [
    { icon: '✓', text: t('cta.r1') },
    { icon: '✓', text: t('cta.r2') },
    { icon: '✓', text: t('cta.r3') },
  ]

  // Init the Cal embed UI once (brand red per theme).
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
      <div className="mx-auto text-center" style={{ maxWidth: '920px', padding: '140px 0 120px' }}>
        <FadeUp>
          <span className="section-label">{t('cta.label')}</span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto 24px' }}>
            {t('cta.title')}{' '}
            <span className="accent">{t('cta.titleAccent')}</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="font-sans" style={{ fontSize: '17px', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 28px', lineHeight: 1.6 }}>
            {t('cta.sub')}
          </p>
        </FadeUp>

        {/* Trust cues kept visible right above the calendar */}
        <FadeUp delay={0.3}>
          <div className="flex items-center justify-center gap-6 flex-wrap" style={{ marginBottom: '40px' }}>
            {reassurances.map((r) => (
              <div key={r.text} className="flex items-center gap-2">
                <span className="font-sans" style={{ fontSize: '14px', color: 'var(--accent)' }}>{r.icon}</span>
                <span className="font-sans" style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 300 }}>{r.text}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Cal.com inline embed — book directly on the page, zero friction.
            The /book form is kept in the codebase for later (qualification
            step), but with few clients now we remove every step before the
            calendar. */}
        <FadeUp delay={0.4}>
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 16,
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

      <Footer />
    </section>
  )
}
