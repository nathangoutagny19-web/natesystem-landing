'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * Petit encart "mini-diagnostic gratuit", placé juste sous la bascule
 * avant/après ("Nos clients étaient là, aujourd'hui de l'autre côté").
 * Plein de valeur, gratuit, mais compact — pas une grosse section.
 * CTA → /tools/diagnostic-ia.
 */
export default function MiniDiagnosticCta() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <section style={{ padding: '8px 24px 8px' }}>
      <FadeUp className="mx-auto" >
        <div className="mini-diag mx-auto">
          <div className="mini-diag-copy">
            <span className="font-mono mini-diag-eyebrow">
              {d('Gratuit · 4 min · sans e-mail', 'Free · 4 min · no email')}
            </span>
            <h3 className="font-serif italic mini-diag-title">
              {d('Et vous, où en êtes-vous ?', 'And you — where do you stand?')}
            </h3>
            <p className="font-sans mini-diag-sub">
              {d('Le mini-diagnostic chiffre ce que votre stack SaaS gaspille, les heures que votre équipe perd et votre maturité IA — avec 3 leviers priorisés.',
                 'The mini-diagnostic quantifies what your SaaS stack wastes, the hours your team loses and your AI maturity — with 3 prioritised levers.')}
            </p>
          </div>
          <Link href="/tools/diagnostic-ia" className="btn-primary mini-diag-cta">
            <span className="btn-primary-dot" />
            {d('Faire le diagnostic gratuit', 'Take the free diagnostic')} &rarr;
          </Link>
        </div>
      </FadeUp>
    </section>
  )
}
