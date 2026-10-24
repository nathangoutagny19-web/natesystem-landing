'use client'

import FadeUp from '@/components/ui/FadeUp'
import CalendlyButton from '@/components/ui/CalendlyButton'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * Prise de rendez-vous (24/10/2026) : un bloc dans le design du site, et un
 * bouton qui ouvre Calendly en plein écran (voir CalendlyButton pour le
 * pourquoi). id="rendez-vous" conservé : c'est l'ancre de CAL_LINK, visée par
 * le bouton « Réserver un appel » de la navigation et des pages.
 */
export default function CtaFinal() {
  const { lang } = useLang()
  const d = makeD(lang)

  const steps = [
    d('Comment votre structure fonctionne aujourd’hui : les demandes, l’équipe, les outils.', 'How your business runs today: requests, team, tools.'),
    d('Ce que ça vous coûte : le temps, les délais, les réservations perdues.', 'What it costs you: time, delays, missed bookings.'),
    d('Notre verdict : ce qu’on construirait, et la suite si ça a du sens.', 'Our assessment: what we would build, and the next step if it makes sense.'),
  ]

  return (
    <section id="rendez-vous" style={{ padding: '0 24px', scrollMarginTop: '90px' }}>
      <div className="mx-auto" style={{ maxWidth: 880, padding: '56px 0 96px' }}>
        <FadeUp>
          <div
            className="rdv-card"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 16,
              padding: '44px 48px',
            }}
          >
            <div className="rdv-head">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/nathan.png" alt="Nathan Goutagny" className="rdv-avatar" />
              <div>
                <span className="section-label" style={{ display: 'block', marginBottom: 8 }}>
                  {d('Appel diagnostic', 'Diagnostic call', 'Diagnosztikai hívás')}
                </span>
                <h2 className="font-serif italic" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, lineHeight: 1.12, color: 'var(--text)', margin: 0 }}>
                  {d('30 minutes sur votre organisation.', '30 minutes on how your business runs.')}{' '}
                  <span style={{ color: 'var(--accent)' }}>{d('Avec Nathan.', 'With Nathan.')}</span>
                </h2>
                <p className="font-mono" style={{ fontSize: 11, letterSpacing: 1.6, textTransform: 'uppercase', color: 'var(--text-secondary)', margin: '12px 0 0' }}>
                  {d('30 min · Google Meet · Nathan Goutagny, fondateur', '30 min · Google Meet · Nathan Goutagny, founder')}
                </p>
              </div>
            </div>

            <ol className="rdv-steps">
              {steps.map((s, i) => (
                <li key={i}>
                  <span className="font-mono">{`0${i + 1}`}</span>
                  <span className="font-sans">{s}</span>
                </li>
              ))}
            </ol>

            <div className="rdv-cta">
              <CalendlyButton style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {d('Choisir un créneau', 'Pick a time')} &rarr;
              </CalendlyButton>
              <span className="font-sans" style={{ fontSize: 13.5, color: 'var(--text-secondary)', fontWeight: 300 }}>
                {d('Du lundi au vendredi. L’invitation arrive par email aussitôt.', 'Monday to Friday. The invitation lands in your inbox right away.')}
              </span>
            </div>
          </div>
        </FadeUp>
      </div>

      <style jsx>{`
        .rdv-head {
          display: flex;
          gap: 24px;
          align-items: center;
        }
        .rdv-avatar {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          object-fit: cover;
          object-position: 50% 30%;
          flex: 0 0 auto;
          border: 1px solid var(--border);
        }
        .rdv-steps {
          list-style: none;
          margin: 32px 0 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .rdv-steps li {
          display: flex;
          gap: 16px;
          align-items: baseline;
          padding: 14px 18px;
          border: 1px solid var(--border);
          border-radius: 12px;
          font-size: 15.5px;
          color: var(--text);
          line-height: 1.55;
        }
        .rdv-steps li > span:first-child {
          font-size: 11px;
          letter-spacing: 1.8px;
          color: var(--accent);
          font-weight: 600;
        }
        .rdv-cta {
          margin-top: 32px;
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }
        @media (max-width: 640px) {
          .rdv-card {
            padding: 28px 22px !important;
          }
          .rdv-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  )
}
