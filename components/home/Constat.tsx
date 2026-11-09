'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LE CONSTAT (accueil, refonte du 9 novembre 2026). Une seule section, à la
 * place de l'avant/après : pas de tableau, pas de schéma. Nathan, 09/11 :
 * viser l'expérience de service, que le client vit, et montrer qu'elle tient
 * aux opérations en coulisses. Texte de la proposition du 09/11
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
            {d('Vos clients jugent le service. ', 'Your clients judge the service. ', 'Ügyfelei a szolgáltatást ítélik meg. ')}
            <span className="accent">{d('Il dépend de vos opérations.', 'It depends on your operations.', 'Az pedig a működésén múlik.')}</span>
          </h2>
          <p className="lx-lead" style={{ maxWidth: 680 }}>
            {d(
              'Votre client ne voit pas vos messages WhatsApp ni vos tableurs. Il voit le chauffeur à l’heure et la villa prête à son arrivée. Aujourd’hui, tout ça tient sur des relances à la main et sur la mémoire d’une seule personne, souvent la vôtre. Le jour où un détail glisse, c’est lui qui le remarque en premier.',
              'Your client never sees your WhatsApp threads or your spreadsheets. They see the driver on time and the villa ready when they arrive. Today, all of that rests on chasing by hand and on the memory of one person, often you. The day a detail slips, they are the first to notice.',
              'Ügyfele nem látja a WhatsApp-üzeneteit és a táblázatait. Azt látja, hogy a sofőr pontos, és a villa készen várja. Ma mindez kézi utánajáráson és egyetlen ember emlékezetén múlik, gyakran az Önén. Ha egy részlet elcsúszik, ő veszi észre elsőként.'
            )}
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
