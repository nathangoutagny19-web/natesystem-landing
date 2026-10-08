'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FadeUp from '@/components/ui/FadeUp'
import LiteYouTube from '@/components/ui/LiteYouTube'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import {
  ASSETS_LISTES,
  CATEGORIES,
  FORMATS,
  SECTEURS,
  assetParSlug,
  lienBiblio,
} from '@/lib/bibliotheque'
import { useAcces } from './acces'
import Livrables from './Livrables'
import Contenu from './Contenu'
import Porte from './Porte'
import CarteRessource from './CarteRessource'

/**
 * LA PAGE D'UNE RESSOURCE.
 *
 * Même règle que la bibliothèque : tout se voit, seuls les livrables sont
 * fermés. La porte est sur la page, juste sous ce qu'elle ouvre, pour qu'une
 * personne arrivée par un lien partagé n'ait rien à chercher.
 *
 * Le bloc « Les autres ressources » ne montre que des ressources de la
 * bibliothèque hôtellerie : une école arrivée sur une page qui n'en fait pas
 * partie (secteurs vides) ne s'y voit pas proposer une villa, et l'inverse.
 */
export default function RessourceVue({ slug }: { slug: string }) {
  const { lang } = useLang()
  const d = makeD(lang)
  const { ouvert, ouvrir, prenom } = useAcces()
  const a = assetParSlug(slug)!

  const video = (lang === 'en' ? a.videoIdEn ?? a.videoId : a.videoId) ?? null
  const contenu = a.contenu ?? []
  const apercu = contenu.slice(0, a.apercu ?? 2)
  /* Ce qui suit l'aperçu, flouté sous la porte : on voit qu'il y a de la
     matière, sans pouvoir la lire. Deux blocs suffisent à le faire sentir. */
  const suiteFloue = contenu.slice(a.apercu ?? 2, (a.apercu ?? 2) + 2)
  const enAttenteAnglais =
    lang === 'en' && contenu.some((b) => ('en' in b ? !b.en : 'items' in b ? b.items.some((i) => !i.en) : false))
  const categorie = CATEGORIES.find((c) => c.id === a.categorie)!
  const dansLaBiblio = a.secteurs.length > 0
  const autres = dansLaBiblio ? ASSETS_LISTES.filter((x) => x.slug !== a.slug).slice(0, 3) : []
  const metiers = a.secteurs.includes('tous')
    ? d('Tous les métiers', 'Every type of business')
    : a.secteurs
        .map((s) => SECTEURS.find((x) => x.id === s))
        .filter(Boolean)
        .map((s) => d(s!.fr, s!.en))
        .join(' · ')

  return (
    <main>
      <Nav />

      <article className="res">
        <div className="res-wrap">
          <FadeUp>
            <div className="res-barre">
              {dansLaBiblio && (
                <Link href={lienBiblio('/library', lang)} className="font-sans res-retour">
                  <ArrowLeft size={15} strokeWidth={2} />
                  {d('Toutes les ressources', 'All resources')}
                </Link>
              )}
              {ouvert && (
                <span className="font-mono res-membre">
                  {prenom ? d(`Espace membre · ${prenom}`, `Member area · ${prenom}`) : d('Espace membre', 'Member area')}
                </span>
              )}
            </div>
            <p className="font-mono res-meta">
              <span className="res-format">{d(FORMATS[a.format].fr, FORMATS[a.format].en)}</span>
              <span>{a.dureeMin} min</span>
              <span>{d(categorie.fr, categorie.en)}</span>
              <span>{d(a.dateFr, a.dateEn)}</span>
            </p>
            <h1 className="res-h1">{d(a.titreFr, a.titreEn)}</h1>
            <p className="font-sans res-douleur">{d(a.douleurFr, a.douleurEn)}</p>
            {a.sourceFr && <p className="font-sans res-source">{d(a.sourceFr, a.sourceEn ?? a.sourceFr)}</p>}
            {metiers && <p className="font-mono res-metiers">{metiers}</p>}
          </FadeUp>

          {video && (
            <FadeUp delay={0.08}>
              <div className="res-video">
                <LiteYouTube id={video} start={a.start} title={d(a.titreFr, a.titreEn)} />
              </div>
            </FadeUp>
          )}

          {enAttenteAnglais && (
            <p className="font-sans res-fr">
              This resource is in French for now. The English version is on its way.
            </p>
          )}

          {contenu.length > 0 && (
            <div className="res-contenu">
              <Contenu blocs={ouvert ? contenu : apercu} />
              {ouvert === false && suiteFloue.length > 0 && (
                <div className="res-flou" aria-hidden="true">
                  <Contenu blocs={suiteFloue} />
                </div>
              )}
            </div>
          )}

          {ouvert === false && (
            <FadeUp delay={0.16}>
              <div className="res-porte" id="entrer">
                <Porte
                  slug={a.slug}
                  titre={d('La suite est réservée aux membres.', 'The rest is for members.')}
                  texte={d(
                    'Votre prénom et votre email suffisent. Ils ouvrent cette ressource et toutes les autres, tout de suite, sans mot de passe.',
                    'Your first name and email are all it takes. They open this resource and every other one, straight away, with no password.'
                  )}
                  onOuvert={ouvrir}
                />
              </div>
            </FadeUp>
          )}

          {(contenu.length === 0 || ouvert === false) && (
          <FadeUp delay={0.12}>
            <section className="card res-dedans" aria-labelledby="res-dedans-titre">
              <h2 id="res-dedans-titre" className="font-mono res-dedans-label">
                {contenu.length > 0 ? d('Dans cette ressource', 'In this resource') : d('Ce que vous repartez avec', 'What you leave with')}
              </h2>
              <Livrables livrables={a.livrables} ouvert={ouvert} />
              {ouvert && contenu.length === 0 && a.livrables.some((l) => !l.fichier) && (
                <p className="font-sans res-note">
                  {d(
                    'Les fichiers qui ne sont pas encore prêts arrivent. Je vous écris dès qu’ils le sont, à l’adresse que vous avez laissée.',
                    'Files that are not ready yet are on their way. I will email you as soon as they are, at the address you left.'
                  )}
                </p>
              )}
            </section>
          </FadeUp>
          )}

        </div>

        {autres.length > 0 && (
          <section className="res-autres">
            <div className="res-wrap res-wrap--large">
              <h2 className="font-mono res-autres-label">{d('Les autres ressources', 'Other resources')}</h2>
              <div className="res-autres-grille">
                {autres.map((x) => (
                  <CarteRessource key={x.slug} asset={x} ouvert={ouvert} />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <Footer />

      <style jsx>{`
        .res {
          padding: 136px 0 90px;
        }
        .res-wrap {
          max-width: 820px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .res-wrap--large {
          max-width: 1100px;
        }
        .res-barre {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .res :global(.res-retour) {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 14px;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .res-membre {
          font-size: 10.5px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-subtle);
          border-radius: 999px;
          padding: 6px 11px;
        }
        .res-fr {
          margin: 28px 0 0;
          font-size: 14px;
          color: var(--text-muted);
          font-style: italic;
        }
        .res-contenu {
          margin-top: 36px;
        }
        .res-flou {
          position: relative;
          margin-top: 18px;
          max-height: 260px;
          overflow: hidden;
          filter: blur(5px);
          opacity: 0.55;
          user-select: none;
          pointer-events: none;
          -webkit-mask-image: linear-gradient(to bottom, #000 30%, transparent);
          mask-image: linear-gradient(to bottom, #000 30%, transparent);
        }
        .res :global(.res-retour:hover) {
          color: var(--accent);
        }
        .res-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 16px;
          font-size: 10.5px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 16px;
        }
        .res-format {
          color: var(--accent);
          font-weight: 500;
        }
        .res-h1 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(30px, 4.4vw, 50px);
          font-weight: 400;
          line-height: 1.1;
          color: var(--text);
          margin: 0 0 20px;
        }
        .res-douleur {
          font-size: clamp(15.5px, 2.2vw, 18px);
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0 0 14px;
          max-width: 680px;
        }
        .res-source {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0 0 14px;
          max-width: 680px;
        }
        .res-metiers {
          font-size: 10.5px;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0;
        }
        .res-video {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-elevated);
          margin-top: 36px;
        }
        .res-dedans {
          margin-top: 32px;
          padding: 28px 28px 26px;
        }
        .res-dedans-label {
          font-size: 10.5px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin: 0 0 16px;
        }
        .res-note {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 20px 0 0;
          padding-top: 16px;
          border-top: 1px solid var(--border);
        }
        .res-porte {
          margin-top: 32px;
        }
        .res-autres {
          margin-top: 90px;
          padding-top: 60px;
          border-top: 1px solid var(--border);
        }
        .res-autres-label {
          font-size: 10.5px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
          margin: 0 0 22px;
        }
        .res-autres-grille {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 1000px) {
          .res-autres-grille {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 680px) {
          .res {
            padding: 110px 0 60px;
          }
          .res-video {
            border-radius: 12px;
            margin-top: 28px;
          }
          .res-dedans {
            padding: 22px 20px;
          }
          .res-autres-grille {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}
