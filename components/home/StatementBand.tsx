'use client'

import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LA BANDE DE POSITIONNEMENT (accueil, 8 novembre 2026), sur le modèle de
 * gourmetmarketing.net : une seule phrase, très grande, sur fond sombre, quel
 * que soit le thème. « Agence » est autorisé depuis le 8 novembre (Nathan).
 */
export default function StatementBand() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section style={{ background: '#0e0e12', padding: 'clamp(96px, 14vw, 180px) 24px' }}>
      <p className="font-serif text-center" style={{ fontSize: 'clamp(34px, 4.6vw, 60px)', lineHeight: 1.12, color: '#f0f0f2', maxWidth: 980, margin: '0 auto' }}>
        {d('Nous sommes l’agence digitale des métiers du service, dans ', 'We are the digital agency for service businesses in ', 'A szolgáltató vállalkozások digitális ügynöksége vagyunk a ')}
        <span className="italic">{d('l’hospitalité de luxe', 'luxury hospitality', 'luxusvendéglátásban')}</span>
        {d('.', '.', '.')}
      </p>
    </section>
  )
}
