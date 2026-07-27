'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * Invitation au diagnostic gratuit, juste après l'avant/après.
 * Choix Nathan : PAS d'encadré — un grand texte + le bouton en dessous, centré.
 * Remplace l'ancienne bascule « nos clients étaient là… ».
 */
export default function MiniDiagnosticCta() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <section style={{ padding: '4px 24px 72px' }}>
      <FadeUp className="mx-auto text-center" >
        <div className="mx-auto" style={{ maxWidth: 680 }}>
          <h3
            className="font-serif italic"
            style={{ fontSize: 'clamp(18px, 2.2vw, 25px)', fontWeight: 400, lineHeight: 1.3, color: 'var(--text)', margin: 0 }}
          >
            {d('On vous offre un ', 'We give you a ')}
            <span className="accent">{d('diagnostic gratuit, sans e-mail', 'free diagnostic, no email')}</span>
            {d(' — pour voir où partent vos heures et votre argent.', ' — to see where your hours and money go.')}
          </h3>
          <p
            className="font-sans"
            style={{ fontSize: 13, fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.55, maxWidth: 480, margin: '12px auto 22px' }}
          >
            {d('60 secondes, chiffré, 3 leviers priorisés. Sans engagement.', '60 seconds, quantified, 3 prioritised levers. No commitment.')}
          </p>
          <Link href="/tools/diagnostic-ia" className="btn-primary" style={{ fontSize: 13, padding: '13px 26px' }}>
            <span className="btn-primary-dot" />
            {d('Faire le diagnostic gratuit', 'Take the free diagnostic')} &rarr;
          </Link>
        </div>
      </FadeUp>
    </section>
  )
}
