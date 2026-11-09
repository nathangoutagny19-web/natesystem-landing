'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import { AUDIT_LINK } from '@/lib/constants'

/**
 * LA FIN DE PAGE, COMMUNE à l'accueil, à Services et à À propos (9 novembre
 * 2026). Nathan : « jamais réserver un appel mais un audit ». Remplace
 * « Parlons de votre maison / 20 minutes sur Google Meet » et, sur l'accueil,
 * l'agenda Calendly (CtaFinal, gardé dans le dépôt).
 *
 * Le texte reprend celui de la page /audit-gratuit, sans rien promettre de
 * plus : pas de délai de réponse, pas de construction gratuite.
 */
export default function AuditFinal({ paddingTop }: { paddingTop?: number | string }) {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section id="audit" className="lx-section" style={paddingTop !== undefined ? { paddingTop } : undefined}>
      <div className="lx-narrow" style={{ textAlign: 'center' }}>
        <FadeUp>
          <h2 className="lx-title" style={{ margin: '0 auto', maxWidth: 'none' }}>
            {d('Commençons par ', 'Let’s start with ', 'Kezdjük ')}
            <span className="accent">{d('votre audit.', 'your audit.', 'az auditjával.')}</span>
          </h2>
          <p className="lx-lead" style={{ margin: '22px auto 36px' }}>
            {d(
              'Laissez-moi votre site. Je regarde comment vos demandes arrivent et ce qui repose sur une seule personne, puis je vous envoie mon audit, personnellement. Gratuit, sans engagement.',
              'Leave me your website. I look at how your requests come in and what depends on a single person, then I send you my audit, personally. Free, no commitment.',
              'Adja meg a weboldalát. Megnézem, hogyan érkeznek a kérések, és mi múlik egyetlen emberen, majd személyesen elküldöm az auditomat. Ingyenes, kötelezettség nélkül.'
            )}
          </p>
          <Link href={localizedHref(AUDIT_LINK, lang)} className="btn-primary" style={{ margin: '0 auto' }}>
            <span className="btn-primary-dot" />{d('Recevoir votre audit gratuit', 'Get your free audit', 'Kérje ingyenes auditját')} &rarr;
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}
