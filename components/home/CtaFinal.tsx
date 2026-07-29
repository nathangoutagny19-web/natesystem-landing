'use client'

import { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import FadeUp from '@/components/ui/FadeUp'
import { CAL_HANDLE, CAL_NAMESPACE } from '@/lib/constants'

/**
 * Prise de rendez-vous, embed Cal.com SEUL (choix Nathan : l'entête
 * « Travaillons ensemble / Racontez-nous… » est retirée). Placé juste après
 * l'offre d'entrée « Le Diagnostic ». id="rendez-vous" conservé (ancre CAL_LINK).
 */
export default function CtaFinal() {
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
      <div className="mx-auto" style={{ maxWidth: '920px', padding: '56px 0 96px' }}>
        <FadeUp>
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
