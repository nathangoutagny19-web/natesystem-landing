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
    <section style={{ padding: '8px 24px 96px' }}>
      <FadeUp className="mx-auto text-center" >
        <div className="mx-auto" style={{ maxWidth: 820 }}>
          <h3
            className="font-serif italic"
            style={{ fontSize: 'clamp(23px, 3.4vw, 36px)', fontWeight: 400, lineHeight: 1.3, color: 'var(--text)', margin: 0 }}
          >
            {d('On vous offre un ', 'We give you a ')}
            <span className="accent">{d('diagnostic gratuit, sans e-mail', 'free diagnostic, no email')}</span>
            {d(' — pour voir exactement où partent vos heures et votre argent.', ' — to see exactly where your hours and money go.')}
          </h3>
          <p
            className="font-sans"
            style={{ fontSize: 14, fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 560, margin: '18px auto 30px' }}
          >
            {d('4 minutes, chiffré, avec 3 leviers priorisés. Sans engagement.', '4 minutes, quantified, with 3 prioritised levers. No commitment.')}
          </p>
          <Link href="/tools/diagnostic-ia" className="btn-primary" style={{ fontSize: 14 }}>
            <span className="btn-primary-dot" />
            {d('Faire le diagnostic gratuit', 'Take the free diagnostic')} &rarr;
          </Link>
        </div>
      </FadeUp>
    </section>
  )
}
