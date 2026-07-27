'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'

/**
 * La garantie « funny » — ce qui restait de la section Garanties (supprimée).
 * Ton rigolo + humain, design clin d'œil resto. Charte NateSystem.
 */
export default function FunnyGuarantee() {
  const { lang } = useLang()
  const d = (fr: string, en: string) => (lang === 'en' ? en : fr)

  return (
    <section id="garantie-funny" style={{ padding: '96px 24px' }}>
      <FadeUp className="mx-auto" >
        <div className="funguar mx-auto">
          <span className="funguar-emoji" aria-hidden="true">🍽️</span>
          <span className="font-mono funguar-label">{d('Notre pari (à moitié sérieux)', 'Our bet (half-serious)')}</span>
          <h2 className="font-serif italic funguar-title">
            {d('La Garantie Concurrent', 'The Competitor Guarantee')}
          </h2>
          <p className="font-sans funguar-text">
            {d('Dans les 90 jours suivant la livraison, si vous n’êtes pas assez satisfait pour nous supplier de ne pas bosser avec votre concurrent direct… on vous offre le resto.',
               'Within 90 days of delivery, if you’re not satisfied enough to beg us not to work with your direct competitor… dinner’s on us.')}
          </p>
          <p className="font-mono funguar-fineprint">
            {d('* un bon resto, promis. Pas un étoilé (quoique, si le projet le mérite).', '* a good spot, promise. Not a Michelin star (unless the project really earns it).')}
          </p>
        </div>
      </FadeUp>
    </section>
  )
}
