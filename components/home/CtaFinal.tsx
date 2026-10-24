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
      <div className="mx-auto" style={{ maxWidth: 'var(--cal-w, 1060px)', padding: '56px 0 96px' }}>
        <FadeUp>
          {/* Pas de cadre à nous : seulement la carte Calendly. Calendly pose une marge
              blanche autour de sa carte (≈ 66 px en haut) : on la rogne pour que la carte
              soit posée directement sur le fond du site. */}
          <div className="cal-crop">
            <div className="cal-shift">
              <CalendlyInline />
            </div>
          </div>
        </FadeUp>
      </div>
      <style jsx>{`
        .cal-crop {
          overflow: hidden;
          border-radius: 12px;
        }
        .cal-shift {
          margin-top: -66px;
        }
      `}</style>
    </section>
  )
}
