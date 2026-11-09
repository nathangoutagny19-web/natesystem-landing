'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LE CONSTAT (accueil, refonte du 9 novembre 2026). Une seule section pour la
 * chaîne des douleurs, à la place de l'avant/après : pas de tableau, pas de
 * schéma. Texte de la proposition du 09/11
 * (~/Business/Commercial/6:10prospection/04-prompts-et-contexte/website-refonte-structure-2026-11-09.md).
 */
export default function Constat() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section id="constat" className="lx-section">
      <div className="lx-narrow">
        <FadeUp>
          <span className="lx-eyebrow">{d('Le constat', 'The problem', 'A helyzet')}</span>
          <h2 className="lx-title" style={{ maxWidth: '20ch' }}>
            {d('La demande est là. ', 'The demand is there. ', 'A kereslet megvan. ')}
            <span className="accent">{d('C’est l’opérationnel qui bloque.', 'Operations are what hold you back.', 'A működés az, ami visszatart.')}</span>
          </h2>
          <p className="lx-lead" style={{ maxWidth: 680 }}>
            {d(
              'Les demandes arrivent sur WhatsApp, par mail, par téléphone, à toute heure. Les prestataires se relancent un par un. Les préférences de chaque client vivent dans une seule tête, souvent la vôtre. Et chaque extra oublié sur une facture, c’est de la marge perdue. Votre maison grandit, mais tout repose encore sur vous.',
              'Requests come in on WhatsApp, by email, by phone, at any hour. Suppliers get chased one by one. Every client’s preferences live in a single head, often yours. And every extra left off an invoice is margin lost. Your business is growing, but everything still rests on you.',
              'A kérések WhatsAppon, e-mailben és telefonon érkeznek, bármelyik órában. A beszállítókat egyenként kell emlékeztetni. Minden ügyfél preferenciái egyetlen fejben élnek, gyakran az Önében. És minden számláról lemaradt extra elveszett árrés. A vállalkozása nő, de még mindig minden Önön múlik.'
            )}
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
