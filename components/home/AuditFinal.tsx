'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import { AUDIT_LINK } from '@/lib/constants'

/**
 * LA FIN DE PAGE, COMMUNE à l'accueil, à Services et à À propos (9 novembre
 * 2026). Nathan : « jamais réserver un appel mais un audit ». L'audit se
 * prend sur l'agenda Calendly de l'accueil (CtaFinal, #rendez-vous) : sur
 * l'accueil, l'agenda est juste dessous, donc pas de bouton (button={false}) ;
 * ailleurs, le bouton y mène.
 *
 * Rien de promis de plus : pas de durée, pas de construction gratuite.
 */
export default function AuditFinal({ paddingTop, button = true }: { paddingTop?: number | string; button?: boolean }) {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section
      id="audit"
      className="lx-section"
      style={{ ...(paddingTop !== undefined ? { paddingTop } : {}), ...(button ? {} : { paddingBottom: 0 }) }}
    >
      <div className="lx-narrow" style={{ textAlign: 'center' }}>
        <FadeUp>
          <h2 className="lx-title" style={{ margin: '0 auto', maxWidth: 'none' }}>
            {d('Commençons par ', 'Let’s start with ', 'Kezdjük ')}
            <span className="accent">{d('votre audit.', 'your audit.', 'az auditjával.')}</span>
          </h2>
          <p className="lx-lead" style={{ margin: button ? '22px auto 36px' : '22px auto 0' }}>
            {d(
              'Choisissez un créneau. On regarde ensemble comment vous travaillez aujourd’hui, et vous repartez avec votre audit. Gratuit, sans engagement.',
              'Pick a time. We look together at how you work today, and you leave with your audit. Free, no commitment.',
              'Válasszon időpontot. Együtt megnézzük, hogyan dolgozik ma, és Ön az auditjával távozik. Ingyenes, kötelezettség nélkül.'
            )}
          </p>
          {button && (
            <Link href={localizedHref(AUDIT_LINK, lang)} className="btn-primary" style={{ margin: '0 auto' }}>
              <span className="btn-primary-dot" />{d('Recevoir votre audit gratuit', 'Get your free audit', 'Kérje ingyenes auditját')} &rarr;
            </Link>
          )}
        </FadeUp>
      </div>
    </section>
  )
}

/**
 * LA BANDE ROUGE DE L'ACCUEIL (refonte du 14 novembre 2026) : le même texte,
 * sur le rouge de la charte, juste au-dessus de l'agenda Calendly (#rendez-vous).
 */
export function AuditBand() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section id="audit" className="ab">
      <div className="ab-inner">
        <FadeUp>
          <h2 className="font-serif ab-title">
            {d('Commençons par ', 'Let’s start with ', 'Kezdjük ')}
            <em>{d('votre audit.', 'your audit.', 'az auditjával.')}</em>
          </h2>
        </FadeUp>
        <FadeUp delay={0.08}>
          <p className="font-sans ab-lead">
            {d(
              'Choisissez un créneau. On regarde ensemble comment vous travaillez aujourd’hui, et vous repartez avec votre audit. Gratuit, sans engagement.',
              'Pick a time. We look together at how you work today, and you leave with your audit. Free, no commitment.',
              'Válasszon időpontot. Együtt megnézzük, hogyan dolgozik ma, és Ön az auditjával távozik. Ingyenes, kötelezettség nélkül.'
            )}
          </p>
          <span className="font-mono ab-hint" aria-hidden="true">↓ {d('L’agenda est juste en dessous', 'The calendar is just below', 'A naptár lent található')}</span>
        </FadeUp>
      </div>
      <style jsx>{`
        .ab { background: var(--accent); color: #fff; padding: clamp(72px, 9vw, 120px) 24px; }
        .ab-inner {
          max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr); gap: clamp(32px, 6vw, 96px); align-items: end;
        }
        .ab-title { margin: 0; font-weight: 400; font-size: clamp(44px, 6.4vw, 96px); line-height: 0.98; letter-spacing: -0.02em; color: #fff; }
        .ab-title em { font-style: italic; }
        .ab-lead { margin: 0; font-size: clamp(16px, 1.5vw, 18px); font-weight: 300; line-height: 1.7; color: rgba(255, 255, 255, 0.9); }
        .ab-hint { display: block; margin-top: 22px; font-size: 10.5px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255, 255, 255, 0.75); }
        @media (max-width: 860px) { .ab-inner { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  )
}
