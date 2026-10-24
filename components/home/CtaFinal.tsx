'use client'

import FadeUp from '@/components/ui/FadeUp'
import CalendlyInline from '@/components/ui/CalendlyInline'

/**
 * Prise de rendez-vous, agenda Calendly SEUL (Cal.com remplacé le 24/10/2026) (choix Nathan : l'entête
 * « Travaillons ensemble / Racontez-nous… » est retirée). Placé juste après
 * l'offre d'entrée « Le Diagnostic ». id="rendez-vous" conservé (ancre CAL_LINK).
 */
export default function CtaFinal() {
  return (
    <section id="rendez-vous" style={{ padding: '0 24px', scrollMarginTop: '90px' }}>
      <div className="mx-auto" style={{ maxWidth: '1100px', padding: '56px 0 96px' }}>
        <FadeUp>
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              overflow: 'hidden',
              minHeight: 720,
              textAlign: 'left',
            }}
          >
            <CalendlyInline />
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
