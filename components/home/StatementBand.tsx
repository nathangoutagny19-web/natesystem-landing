'use client'

import FadeUp from '@/components/ui/FadeUp'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LA BANDE NOIRE DE POSITIONNEMENT. Le 9 novembre 2026, Nathan la veut « tout
 * en noir avec la phrase du milieu » : une section entièrement noire, la
 * phrase seule, au centre. Les photos des poignées de main et du podcast sont
 * passées dans les tuiles de réalisations, juste au-dessus, et les citations
 * défilent entre les deux (BandQuotes). « Agence » est autorisé depuis le
 * 8 novembre (décision de Nathan).
 */
export default function StatementBand() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section className="stmt-band" style={{ background: '#0e0e12' }}>
      <FadeUp>
        <p className="font-serif text-center stmt-text">
          {d('L’agence digitale de référence des métiers du service, dans ', 'The go-to digital agency for service businesses in ', 'A szolgáltató vállalkozások meghatározó digitális ügynöksége a ')}
          <span className="italic">{d('l’hospitalité de luxe', 'luxury hospitality', 'luxusvendéglátásban')}</span>
          {d('.', '.', '.')}
        </p>
      </FadeUp>

      <style jsx>{`
        .stmt-band {
          min-height: clamp(520px, 86vh, 860px);
          display: flex; align-items: center; justify-content: center;
          padding: 120px 24px;
        }
        .stmt-text {
          font-size: clamp(34px, 5vw, 66px);
          line-height: 1.1;
          color: #f0f0f2;
          max-width: 980px;
          margin: 0 auto;
        }
        @media (max-width: 640px) {
          .stmt-band { min-height: 72vh; padding: 96px 20px; }
          .stmt-text { font-size: 32px; }
        }
      `}</style>
    </section>
  )
}
