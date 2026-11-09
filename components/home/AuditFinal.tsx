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
