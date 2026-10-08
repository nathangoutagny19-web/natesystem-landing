'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FadeUp from '@/components/ui/FadeUp'
import CarteRessource from '@/components/bibliotheque/CarteRessource'
import Porte from '@/components/bibliotheque/Porte'
import { useAcces } from '@/components/bibliotheque/acces'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import {
  ASSETS_LISTES,
  CATEGORIES,
  SECTEURS,
  SECTEUR_IDS,
  concerne,
  type Categorie,
  type Secteur,
} from '@/lib/bibliotheque'

/**
 * LA BIBLIOTHÈQUE.
 *
 * Les ressources pour faire tourner une maison de l'hôtellerie de luxe avec les
 * bons outils : villas, domaines, maisons de réception, petits hôtels,
 * conciergeries, chalets, yachts. Un prénom et un email ouvrent les livrables.
 *
 * ⚠︎ CE QUI EST FERMÉ, CE SONT LES LIVRABLES, PAS LES VIDÉOS. Les vidéos sont
 * publiques sur YouTube : les cacher serait un mensonge qui se défait en une
 * recherche. Ce qu'on échange contre un email, ce sont les modèles, les
 * checklists et les grilles, qui n'existent nulle part ailleurs.
 *
 * ⚠︎ ON MONTRE AVANT DE DEMANDER. Les fiches sont visibles sans rien donner,
 * seuls les livrables portent un cadenas. Un formulaire posé devant une page
 * vide ne convertit personne : on ne sait pas ce qu'on achète.
 *
 * LES FILTRES vivent dans l'URL (`?metier=villa&theme=operations`) : un lien
 * filtré se partage tel quel en message privé. Lus au montage depuis
 * `window.location` plutôt qu'avec `useSearchParams`, qui forcerait une
 * frontière Suspense et ferait perdre le rendu statique de la page.
 */

type FiltreSecteur = Secteur | 'tous'
type FiltreCategorie = Categorie | 'tous'

const CATEGORIE_IDS = CATEGORIES.map((c) => c.id)

export default function BibliothequePage() {
  const { lang } = useLang()
  const d = makeD(lang)
  const { ouvert, ouvrir } = useAcces()

  const [secteur, setSecteur] = useState<FiltreSecteur>('tous')
  const [categorie, setCategorie] = useState<FiltreCategorie>('tous')
  /* Tant que l'URL n'a pas été lue, on ne la réécrit pas : sinon le premier
     rendu (« tous ») effacerait le filtre du lien partagé avant sa lecture. */
  const [pret, setPret] = useState(false)
  const filtres = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const p = new URLSearchParams(window.location.search)
    const m = p.get('metier')
    const t = p.get('theme')
    if (m && (SECTEUR_IDS as string[]).includes(m)) setSecteur(m as Secteur)
    if (t && (CATEGORIE_IDS as string[]).includes(t)) setCategorie(t as Categorie)
    setPret(true)
  }, [])

  /* Sur téléphone, les puces défilent à l'horizontale : arrivé par un lien
     filtré sur « Yacht », on ne verrait pas la puce active. On l'amène en vue,
     sans faire bouger la page verticalement. */
  useEffect(() => {
    if (!pret || !filtres.current) return
    filtres.current.querySelectorAll<HTMLElement>('[aria-pressed="true"]').forEach((el) => {
      const rangee = el.parentElement
      if (rangee && rangee.scrollWidth > rangee.clientWidth) {
        rangee.scrollLeft = el.offsetLeft - rangee.offsetLeft - 8
      }
    })
  }, [pret, secteur, categorie])

  /* L'URL suit les filtres, sans ajouter d'entrée à l'historique : le bouton
     retour ramène à la page d'avant, pas au filtre d'avant. */
  useEffect(() => {
    if (!pret) return
    const url = new URL(window.location.href)
    if (secteur === 'tous') url.searchParams.delete('metier')
    else url.searchParams.set('metier', secteur)
    if (categorie === 'tous') url.searchParams.delete('theme')
    else url.searchParams.set('theme', categorie)
    window.history.replaceState(null, '', url.toString())
  }, [pret, secteur, categorie])

  const visibles = useMemo(
    () =>
      ASSETS_LISTES.filter(
        (a) =>
          (secteur === 'tous' || concerne(a, secteur)) &&
          (categorie === 'tous' || a.categorie === categorie)
      ),
    [secteur, categorie]
  )

  const nomSecteur = (s: Secteur) => {
    const x = SECTEURS.find((y) => y.id === s)!
    return d(x.fr, x.en)
  }

  return (
    <main>
      <Nav />

      {/* ═══ HERO ═══ */}
      <section className="bib-hero">
        <div className="bib-wrap">
          <FadeUp>
            <span className="section-label">{d('La bibliothèque', 'The library')}</span>
            <h1 className="bib-h1">
              {d('Les modèles et les méthodes ', 'Templates and methods ')}
              <span className="bib-accent">
                {d('des métiers de l’accueil haut de gamme', 'for high-end hospitality')}
              </span>
            </h1>
            <p className="font-sans bib-lead">
              {d(
                'Pour les villas, les domaines, les maisons de réception, les petits hôtels, les conciergeries, les chalets et les yachts. Ce que je publie pour ces métiers se trouve ici, à reprendre chez vous tel quel, et chaque ressource montre ce qu’elle contient avant de vous demander votre email.',
                'For villas, estates, event venues, boutique hotels, concierge services, chalets and yachts. What I publish for these businesses lives here, ready to reuse as it is, and every resource shows what is inside before asking for your email.'
              )}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ═══ LES FILTRES ═══ */}
      <section className="bib-filtres" aria-label={d('Filtrer les ressources', 'Filter the resources')}>
        <div className="bib-wrap" ref={filtres}>
          <div className="bib-filtre">
            <span className="font-mono bib-filtre-label">{d('Votre métier', 'Your business')}</span>
            <div className="bib-puces" role="group">
              <Puce actif={secteur === 'tous'} onClick={() => setSecteur('tous')}>
                {d('Tous', 'All')}
              </Puce>
              {SECTEURS.map((s) => (
                <Puce key={s.id} actif={secteur === s.id} onClick={() => setSecteur(s.id)}>
                  {d(s.fr, s.en)}
                </Puce>
              ))}
            </div>
          </div>
          <div className="bib-filtre">
            <span className="font-mono bib-filtre-label">{d('Le thème', 'Theme')}</span>
            <div className="bib-puces" role="group">
              <Puce actif={categorie === 'tous'} onClick={() => setCategorie('tous')}>
                {d('Tous', 'All')}
              </Puce>
              {CATEGORIES.map((c) => (
                <Puce key={c.id} actif={categorie === c.id} onClick={() => setCategorie(c.id)}>
                  {d(c.fr, c.en)}
                </Puce>
              ))}
            </div>
          </div>
          <p className="font-mono bib-compte" aria-live="polite">
            {visibles.length === 1
              ? d('1 ressource', '1 resource')
              : d(`${visibles.length} ressources`, `${visibles.length} resources`)}
          </p>
        </div>
      </section>

      {/* ═══ LES RESSOURCES ═══ */}
      <section className="bib-section">
        <div className="bib-wrap">
          {visibles.length > 0 ? (
            <div className="bib-grille">
              {visibles.map((a, i) => (
                <FadeUp key={a.slug} delay={0.05 * i}>
                  <CarteRessource asset={a} ouvert={ouvert} />
                </FadeUp>
              ))}
            </div>
          ) : (
            <div className="card bib-vide">
              <p className="font-serif italic bib-vide-titre">{d('Rien ici pour l’instant.', 'Nothing here yet.')}</p>
              <p className="font-sans bib-vide-texte">
                {secteur !== 'tous'
                  ? d(
                      `Aucune ressource ne concerne encore les établissements de type « ${nomSecteur(secteur)} » sur ce thème.`,
                      `No resource covers the “${nomSecteur(secteur)}” type of business on this theme yet.`
                    )
                  : d('Aucune ressource ne couvre encore ce thème.', 'No resource covers this theme yet.')}{' '}
                {d(
                  'Je publie au fil de mes échanges avec des professionnels du secteur. Laissez votre email plus bas : je vous écris quand la première sort.',
                  'I publish as I talk with people in the trade. Leave your email below and I will write when the first one comes out.'
                )}
              </p>
              <button
                type="button"
                className="btn-ghost bib-vide-bouton"
                onClick={() => {
                  setSecteur('tous')
                  setCategorie('tous')
                }}
              >
                {d('Voir toutes les ressources', 'See every resource')}
              </button>
            </div>
          )}

          {ouvert && visibles.length > 0 && (
            <p className="font-sans bib-note">
              {d(
                'C’est ouvert. Les fichiers qui ne sont pas encore prêts arrivent : je vous écris dès qu’ils le sont, à l’adresse que vous avez laissée.',
                'It is open. Files that are not ready yet are on their way: I will email you as soon as they are, at the address you left.'
              )}
            </p>
          )}
        </div>
      </section>

      {/* ═══ LA PORTE ═══ */}
      {ouvert === false && (
        <>
          <div className="divider" />
          <section className="bib-section" id="entrer">
            <div className="bib-wrap bib-wrap--etroit">
              <FadeUp>
                <Porte
                  titre={d('Votre prénom, votre email, et c’est ouvert.', 'Your first name, your email, and it opens.')}
                  texte={d(
                    'Pas de mot de passe, pas de lien à aller chercher dans vos mails. Vous entrez tout de suite, et votre navigateur se souvient de vous.',
                    'No password, no link to hunt for in your inbox. You come straight in, and your browser remembers you.'
                  )}
                  onOuvert={ouvrir}
                />
              </FadeUp>
            </div>
          </section>
        </>
      )}

      <Footer />

      <style jsx>{`
        .bib-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .bib-wrap--etroit {
          max-width: 760px;
        }
        .bib-hero {
          padding: 150px 0 48px;
          text-align: center;
        }
        .bib-h1 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(34px, 4.8vw, 58px);
          font-weight: 400;
          line-height: 1.08;
          color: var(--text);
          max-width: 20ch;
          margin: 0 auto 22px;
        }
        .bib-accent {
          color: var(--accent);
        }
        .bib-lead {
          font-size: clamp(15px, 2.4vw, 17px);
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 660px;
          margin: 0 auto;
        }

        /* ——— Filtres ——— */
        .bib-filtres {
          padding: 12px 0 8px;
        }
        .bib-filtre {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 14px;
        }
        .bib-filtre-label {
          flex: 0 0 110px;
          font-size: 10.5px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .bib-puces {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .bib-compte {
          font-size: 10.5px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 22px 0 0;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }

        /* ——— Grille ——— */
        .bib-section {
          padding: 40px 0 80px;
        }
        .bib-grille {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }
        .bib-note {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 28px 0 0;
          max-width: 640px;
        }

        /* ——— État vide ——— */
        .bib-vide {
          padding: 44px 40px;
          text-align: center;
          max-width: 680px;
          margin: 0 auto;
        }
        .bib-vide-titre {
          font-size: clamp(24px, 3vw, 30px);
          color: var(--text);
          margin: 0 0 12px;
        }
        .bib-vide-texte {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0 auto 24px;
          max-width: 520px;
        }
        .bib-vide-bouton {
          cursor: pointer;
        }

        @media (max-width: 1000px) {
          .bib-grille {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        /* Sur téléphone, les puces défilent sur une ligne au lieu d'empiler
           quatre rangées avant la première ressource. */
        @media (max-width: 680px) {
          .bib-hero {
            padding: 116px 0 32px;
          }
          .bib-filtre {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .bib-filtre-label {
            flex: none;
          }
          .bib-puces {
            flex-wrap: nowrap;
            overflow-x: auto;
            width: calc(100% + 24px);
            margin-right: -24px;
            padding: 2px 24px 6px 0;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
          .bib-puces::-webkit-scrollbar {
            display: none;
          }
          .bib-grille {
            grid-template-columns: 1fr;
          }
          .bib-section {
            padding: 28px 0 60px;
          }
          .bib-vide {
            padding: 32px 22px;
          }
        }
      `}</style>
    </main>
  )
}

function Puce({
  actif,
  onClick,
  children,
}: {
  actif: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button type="button" className={`font-sans puce${actif ? ' puce--on' : ''}`} aria-pressed={actif} onClick={onClick}>
      {children}
      <style jsx>{`
        .puce {
          flex-shrink: 0;
          appearance: none;
          cursor: pointer;
          font-size: 13.5px;
          font-weight: 400;
          line-height: 1;
          white-space: nowrap;
          color: var(--text-secondary);
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 9px 15px;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .puce:hover {
          border-color: var(--border-hover);
          color: var(--text);
        }
        .puce--on,
        .puce--on:hover {
          color: #fff;
          background: var(--accent);
          border-color: var(--accent);
        }
        .puce:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
      `}</style>
    </button>
  )
}
