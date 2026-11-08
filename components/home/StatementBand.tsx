'use client'

import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'

/**
 * LA BANDE NOIRE DE POSITIONNEMENT (accueil, 8 novembre 2026), entre les
 * secteurs et « Avant, après ». Une phrase en grand, en blanc, et deux vraies
 * photos de Nathan qui serre la main de clients, en haut à gauche et en bas à
 * droite, pour la preuve sociale (Nathan). « Agence » est autorisé depuis le
 * 8 novembre.
 */
export default function StatementBand() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section className="stmt-band" style={{ position: 'relative', overflow: 'hidden', background: '#0e0e12' }}>
      <figure className="stmt-photo stmt-photo-tl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/realisations/chartreux-terrasse.webp" alt={d('Nathan avec l’Institut des Chartreux, à Lyon', 'Nathan with Institut des Chartreux, in Lyon', 'Nathan az Institut des Chartreux-vel Lyonban')} loading="lazy" />
        <figcaption>{d('Institut des Chartreux, Lyon', 'Institut des Chartreux, Lyon', 'Institut des Chartreux, Lyon')}</figcaption>
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

      <style jsx>{`
        .stmt-band {
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
        /* Sur téléphone, les photos passent au-dessus et au-dessous de la
           phrase au lieu de la recouvrir. */
        @media (max-width: 760px) {
          .stmt-band {
            padding: 40px 18px;
            display: flex;
            flex-direction: column;
            gap: 36px;
          }
          .stmt-photo {
            position: static;
            width: 150px;
          }
          .stmt-text {
            max-width: none;
          }
          .stmt-photo-br {
            align-self: flex-end;
          }
        }
      `}</style>
    </section>
  )
}
