'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { CATEGORIES, FORMATS, SECTEURS, lienBiblio, type Asset } from '@/lib/bibliotheque'
import Livrables from './Livrables'

/**
 * Une ressource dans la grille. La carte entière mène à sa page, où se trouvent
 * la vidéo, le détail et la porte.
 *
 * La vidéo n'est PAS lue dans la grille : sur téléphone, dix lecteurs YouTube
 * l'un sous l'autre se chargent mal et se lisent encore plus mal. La miniature
 * suffit à dire qu'il y en a une.
 */
export default function CarteRessource({ asset: a, ouvert }: { asset: Asset; ouvert: boolean | null }) {
  const { lang } = useLang()
  const d = makeD(lang)
  const video = (lang === 'en' ? a.videoIdEn ?? a.videoId : a.videoId) ?? null
  const categorie = CATEGORIES.find((c) => c.id === a.categorie)!
  const metiers = a.secteurs.includes('tous')
    ? d('Tous les métiers', 'Every type of business')
    : a.secteurs
        .map((s) => SECTEURS.find((x) => x.id === s))
        .filter(Boolean)
        .map((s) => d(s!.fr, s!.en))
        .join(' · ')

  return (
    <Link href={lienBiblio(`/bibliotheque/${a.slug}`, lang)} className="carte-lien">
      <article className="card carte">
        {video && (
          <div className="carte-media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              width={480}
              height={360}
            />
            <span className="carte-play" aria-hidden="true">
              <Play size={16} strokeWidth={2.4} fill="currentColor" />
            </span>
          </div>
        )}

        <div className="carte-corps">
          <p className="font-mono carte-meta">
            <span className="carte-format">{d(FORMATS[a.format].fr, FORMATS[a.format].en)}</span>
            <span>{a.dureeMin} min</span>
            <span>{d(categorie.fr, categorie.en)}</span>
          </p>
          <h2 className="font-serif italic carte-titre">{d(a.titreFr, a.titreEn)}</h2>
          <p className="font-sans carte-douleur">{d(a.douleurFr, a.douleurEn)}</p>

          <p className="font-mono carte-dedans">{d('Ce que vous repartez avec', 'What you leave with')}</p>
          <Livrables livrables={a.livrables} ouvert={ouvert} liens={false} />

          <div className="carte-pied">
            <span className="font-mono carte-metiers">{metiers}</span>
            <span className="font-sans carte-cta">
              {d('Voir la ressource', 'See the resource')}
              <ArrowRight size={15} strokeWidth={2} />
            </span>
          </div>
        </div>
      </article>

      <style jsx>{`
        .carte-lien {
          display: block;
          height: 100%;
          text-decoration: none;
          color: inherit;
        }
        .carte {
          padding: 0;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .carte-lien:hover .carte {
          border-color: var(--border-hover);
        }
        .carte-lien:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 4px;
          border-radius: 16px;
        }
        .carte-media {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: var(--bg-elevated);
          border-bottom: 1px solid var(--border);
        }
        .carte-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .carte-play {
          position: absolute;
          left: 16px;
          bottom: 16px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent);
          color: #fff;
          padding-left: 2px;
          box-shadow: 0 6px 18px -6px rgba(230, 57, 70, 0.6);
        }
        .carte-corps {
          padding: 24px 24px 22px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .carte-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 14px;
          font-size: 10.5px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 12px;
        }
        .carte-format {
          color: var(--accent);
          font-weight: 500;
        }
        .carte-titre {
          font-size: clamp(20px, 2.1vw, 24px);
          font-weight: 400;
          line-height: 1.24;
          color: var(--text);
          margin: 0 0 12px;
        }
        .carte-douleur {
          font-size: 14.5px;
          font-weight: 300;
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0 0 20px;
        }
        .carte-dedans {
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
          margin: 0 0 12px;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }
        .carte-pied {
          margin-top: auto;
          padding-top: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .carte-metiers {
          font-size: 10px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .carte-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 500;
          color: var(--accent);
        }
      `}</style>
    </Link>
  )
}
