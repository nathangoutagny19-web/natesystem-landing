'use client'

import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import BandQuotes from '@/components/home/Testimonials'
import ClientsBar from '@/components/home/ClientsBar'

/**
 * LA BANDE NOIRE DE POSITIONNEMENT (accueil, 8 novembre 2026), juste sous les
 * logos et avant les secteurs. Une phrase en grand, en blanc, et trois vraies
 * photos pour la preuve sociale (Nathan) : deux poignées de main, en haut à
 * gauche et en bas à droite, et, en petit en haut à droite, Nathan en podcast
 * avec Catherine F. (Chromosome). Ces photos ont quitté la rangée de logos le
 * même jour. « Agence » est autorisé depuis le 8 novembre.
 *
 * Sous la phrase et les photos, sur le même fond noir : les citations des
 * clients, seules, sans nom ni entreprise (Nathan, 8 novembre 2026 : les
 * noms sont déjà dans les légendes des photos).
 *
 * ⚠︎ DEUX ÉTAGES. Les photos sont en position absolue dans la « scène »
 * (.stmt-stage), pas dans la section : sinon la photo du bas glisserait
 * sur les citations.
 *
 * ⚠︎ La photo du podcast n'existe qu'en 400 × 288 : elle reste petite (190 px
 * au plus), sinon elle devient floue sur un écran Retina.
 */
export default function StatementBand() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section className="stmt-band" style={{ overflow: 'hidden', background: '#0e0e12' }}>
      <div className="stmt-stage">
      <figure className="stmt-photo stmt-photo-tl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/realisations/chartreux-terrasse.webp" alt={d('Nathan avec l’Institut des Chartreux, à Lyon', 'Nathan with Institut des Chartreux, in Lyon', 'Nathan az Institut des Chartreux-vel Lyonban')} loading="lazy" />
        <figcaption>{d('Institut des Chartreux, Lyon', 'Institut des Chartreux, Lyon', 'Institut des Chartreux, Lyon')}</figcaption>
      </figure>

      <figure className="stmt-photo stmt-photo-tr">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/realisations/bandeau/catherine.webp" alt={d('Nathan en podcast avec Catherine F., de Chromosome', 'Nathan on a podcast with Catherine F., from Chromosome', 'Nathan podcaston Catherine F.-fel, a Chromosome-tól')} loading="lazy" />
        <figcaption>{d('Catherine F., Chromosome', 'Catherine F., Chromosome', 'Catherine F., Chromosome')}</figcaption>
      </figure>

      <p className="font-serif text-center stmt-text">
        {d('L’agence digitale de référence des métiers du service, dans ', 'The go-to digital agency for service businesses in ', 'A szolgáltató vállalkozások meghatározó digitális ügynöksége a ')}
        <span className="italic">{d('l’hospitalité de luxe', 'luxury hospitality', 'luxusvendéglátásban')}</span>
        {d('.', '.', '.')}
      </p>

      <figure className="stmt-photo stmt-photo-br">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/realisations/zoltan-budapest.webp" alt={d('Nathan avec Kis Zoltán, à Budapest', 'Nathan with Kis Zoltán, in Budapest', 'Nathan Kis Zoltánnal Budapesten')} loading="lazy" />
        <figcaption>{d('Kis Zoltán, Budapest', 'Kis Zoltán, Budapest', 'Kis Zoltán, Budapest')}</figcaption>
      </figure>
      </div>

      <BandQuotes />

      {/* Les logos défilent sous les citations (Nathan, 8 novembre 2026). */}
      <ClientsBar dark />

      <style jsx>{`
        .stmt-stage {
          position: relative;
          padding: clamp(150px, 20vw, 260px) 24px;
        }
        .stmt-text {
          position: relative;
          z-index: 1;
          font-size: clamp(32px, 4.4vw, 58px);
          line-height: 1.12;
          color: #f0f0f2;
          /* la phrase reste entre les deux photos, sans les recouvrir */
          max-width: min(760px, calc(56vw - 48px));
          margin: 0 auto;
        }
        .stmt-photo {
          position: absolute;
          z-index: 0;
          margin: 0;
          width: clamp(150px, 17vw, 250px);
        }
        .stmt-photo img {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 5;
          object-fit: cover;
          border-radius: 2px;
          filter: grayscale(0.15);
        }
        .stmt-photo figcaption {
          margin-top: 10px;
          font-family: var(--font-sans);
          font-size: 12px;
          color: rgba(240, 240, 242, 0.55);
        }
        .stmt-photo-tl {
          top: 48px;
          left: clamp(16px, 5vw, 80px);
        }
        .stmt-photo-br {
          bottom: 48px;
          right: clamp(16px, 5vw, 80px);
          text-align: right;
        }
        /* Le podcast, en petit, au format de la photo (paysage) : pas de
           recadrage. */
        .stmt-photo-tr {
          top: 48px;
          right: clamp(16px, 5vw, 80px);
          width: clamp(120px, 12vw, 190px);
          text-align: right;
        }
        .stmt-photo-tr img {
          aspect-ratio: 400 / 288;
        }
        /* Sur téléphone, les photos passent au-dessus et au-dessous de la
           phrase au lieu de la recouvrir : les deux du haut côte à côte, la
           phrase, puis la poignée de main de Budapest à droite. */
        @media (max-width: 760px) {
          .stmt-stage {
            padding: 40px 18px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 36px 16px;
          }
          .stmt-photo {
            position: static;
            width: 150px;
          }
          .stmt-photo-tl {
            grid-column: 1;
            grid-row: 1;
          }
          .stmt-photo-tr {
            grid-column: 2;
            grid-row: 1;
            width: 130px;
            justify-self: end;
          }
          .stmt-text {
            grid-column: 1 / -1;
            grid-row: 2;
            max-width: none;
          }
          .stmt-photo-br {
            grid-column: 1 / -1;
            grid-row: 3;
            justify-self: end;
          }
        }
      `}</style>
    </section>
  )
}
