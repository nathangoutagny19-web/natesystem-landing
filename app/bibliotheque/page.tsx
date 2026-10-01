'use client'

import { useEffect, useState } from 'react'
import { Lock, Check, ArrowRight } from 'lucide-react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import FadeUp from '@/components/ui/FadeUp'
import LiteYouTube from '@/components/ui/LiteYouTube'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { ASSETS } from '@/lib/bibliotheque'

/**
 * LA BIBLIOTHÈQUE.
 *
 * Tout ce que NateSystem publie de substantiel, en un endroit, derrière un
 * prénom et un email.
 *
 * ⚠︎ CE QUI EST FERMÉ, CE SONT LES LIVRABLES, PAS LES VIDÉOS. Les vidéos sont
 * publiques sur YouTube : les cacher serait un mensonge qui se défait en une
 * recherche. Ce qu'on échange contre un email, ce sont les cartographies, les
 * grilles et les modèles, qui n'existent nulle part ailleurs.
 *
 * ⚠︎ ON MONTRE AVANT DE DEMANDER. Les fiches sont visibles sans rien donner,
 * seuls les livrables portent un cadenas. Un formulaire posé devant une page
 * vide ne convertit personne : on ne sait pas ce qu'on achète.
 *
 * L'ACCÈS VIT DANS LE NAVIGATEUR (localStorage). C'est volontairement faible :
 * on veut du volume en haut de tunnel, pas une forteresse. Quelqu'un qui tient
 * à contourner y arrivera, et ce n'est pas grave : il n'était pas un lead.
 */

const CLE = 'ns-biblio-v1'

type Etat = 'repos' | 'envoi' | 'erreur'

export default function BibliothequePage() {
  const { lang } = useLang()
  const d = makeD(lang)

  /* `null` = on ne sait pas encore (rendu serveur). Sans ce troisième état, la
     page clignote : elle s'affiche fermée puis s'ouvre à l'hydratation. */
  const [ouvert, setOuvert] = useState<boolean | null>(null)
  const [etat, setEtat] = useState<Etat>('repos')

  useEffect(() => {
    try {
      setOuvert(Boolean(localStorage.getItem(CLE)))
    } catch {
      setOuvert(false)
    }
  }, [])

  async function entrer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (etat === 'envoi') return
    setEtat('envoi')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/bibliotheque', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, lang }),
      })
      if (!res.ok) throw new Error()
      try {
        localStorage.setItem(CLE, String(data.email))
      } catch {}
      setOuvert(true)
      setEtat('repos')
    } catch {
      setEtat('erreur')
    }
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
              {d('Tout ce qu’on publie, ', 'Everything we publish, ')}
              <span className="bib-accent">{d('au même endroit', 'in one place')}</span>
            </h1>
            <p className="font-sans bib-lead">
              {d(
                'Les vidéos, et surtout ce qui va avec : les cartographies, les grilles de décision, les modèles à reprendre. Du matériel fait pour des établissements, pas des articles de blog déguisés.',
                'The videos, and above all what comes with them: the maps, the decision grids, the templates to reuse. Material made for schools, not blog posts in disguise.'
              )}
            </p>
          </FadeUp>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ LES ASSETS ═══ */}
      <section className="bib-section">
        <div className="bib-wrap">
          <div className="bib-grid">
            {ASSETS.map((a, i) => (
              <FadeUp key={a.slug} delay={0.06 * i}>
                <article className="card bib-card">
                  <div className="bib-media">
                    {a.videoId ? (
                      <LiteYouTube
                        id={a.videoId}
                        start={a.start}
                        title={d(a.titreFr, a.titreEn)}
                      />
                    ) : (
                      <div className="bib-bientot">
                        <span className="font-mono">{d('Bientôt', 'Coming soon')}</span>
                      </div>
                    )}
                  </div>

                  <div className="bib-corps">
                    <p className="font-mono bib-meta">
                      {d(a.dateFr, a.dateEn)} · {a.dureeMin} min
                    </p>
                    <h2 className="font-serif italic bib-titre">{d(a.titreFr, a.titreEn)}</h2>
                    <p className="font-sans bib-douleur">{d(a.douleurFr, a.douleurEn)}</p>

                    <p className="font-mono bib-livrables-label">
                      {d('Ce que vous repartez avec', 'What you leave with')}
                    </p>
                    <ul className="bib-livrables">
                      {a.livrables.map((l) => (
                        <li key={l.fr} className={ouvert ? 'bib-l bib-l--on' : 'bib-l'}>
                          {ouvert ? (
                            <Check size={15} strokeWidth={2.5} className="bib-ico" />
                          ) : (
                            <Lock size={14} strokeWidth={2} className="bib-ico" />
                          )}
                          <span className="font-sans">{d(l.fr, l.en)}</span>
                        </li>
                      ))}
                    </ul>

                    {ouvert && (
                      <p className="font-sans bib-note">
                        {d(
                          'Les fichiers arrivent. Je vous écris dès qu’ils sont prêts, à l’adresse que vous venez de laisser.',
                          'The files are on their way. I will email you as soon as they are ready, at the address you just left.'
                        )}
                      </p>
                    )}
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LA PORTE ═══ */}
      {ouvert === false && (
        <>
          <div className="divider" />
          <section className="bib-section" id="entrer">
            <div className="bib-wrap bib-wrap--etroit">
              <FadeUp>
                <div className="card bib-porte">
                  <span className="section-label">{d('L’accès', 'Access')}</span>
                  <h2 className="section-title bib-h2">
                    {d('Votre prénom, votre email, et c’est ouvert.', 'Your first name, your email, and it opens.')}
                  </h2>
                  <p className="font-sans bib-lead bib-lead--serre">
                    {d(
                      'Pas de mot de passe, pas de lien à aller chercher dans vos mails. Vous entrez tout de suite, et votre navigateur se souvient de vous.',
                      'No password, no link to hunt for in your inbox. You come straight in, and your browser remembers you.'
                    )}
                  </p>

                  <form className="bib-form" onSubmit={entrer}>
                    <label className="bib-champ">
                      <span className="font-mono bib-champ-label">{d('Votre prénom', 'Your first name')}</span>
                      <input name="prenom" type="text" required autoComplete="given-name" placeholder={d('Prénom', 'First name')} />
                    </label>
                    <label className="bib-champ">
                      <span className="font-mono bib-champ-label">{d('Votre email', 'Your email')}</span>
                      <input name="email" type="email" required autoComplete="email" placeholder={d('vous@etablissement.fr', 'you@school.org')} />
                    </label>
                    <button type="submit" className="btn-primary bib-submit" disabled={etat === 'envoi'}>
                      <span className="btn-primary-dot" />
                      {etat === 'envoi' ? d('Ouverture…', 'Opening…') : d('Ouvrir la bibliothèque', 'Open the library')}
                      <ArrowRight size={16} strokeWidth={2} />
                    </button>

                    {etat === 'erreur' && (
                      <p className="font-sans bib-erreur" role="alert">
                        {d('Ça n’a pas marché. Réessayez, ou écrivez-moi à ', 'That did not work. Try again, or email me at ')}
                        <a href="mailto:nathan@natesystem.com">nathan@natesystem.com</a>
                      </p>
                    )}

                    <p className="font-sans bib-reassurance">
                      {d(
                        'Pas de newsletter automatique. Je vous écris quand je publie quelque chose, et c’est tout.',
                        'No automated newsletter. I write when I publish something, and that is all.'
                      )}
                    </p>
                  </form>
                </div>
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
          max-width: 720px;
        }
        .bib-hero {
          padding: 150px 0 70px;
          text-align: center;
        }
        .bib-h1 {
          font-family: var(--font-serif);
          font-style: italic;
          font-size: clamp(34px, 4.8vw, 58px);
          font-weight: 400;
          line-height: 1.08;
          color: var(--text);
          max-width: 18ch;
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
          max-width: 640px;
          margin: 0 auto;
        }
        .bib-lead--serre {
          margin: 0 0 26px;
          text-align: left;
        }
        .bib-section {
          padding: 80px 0;
        }
        .bib-h2 {
          font-size: clamp(24px, 3vw, 32px);
          color: var(--text);
          margin: 0 0 14px;
        }

        /* ——— Les fiches ——— */
        .bib-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
          align-items: start;
        }
        .bib-card {
          padding: 0;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .bib-media {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: var(--bg-elevated);
          border-bottom: 1px solid var(--border);
        }
        .bib-bientot {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--bg-elevated), var(--bg-card));
        }
        .bib-bientot span {
          font-size: 11px;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--text-muted);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 8px 18px;
        }
        .bib-corps {
          padding: 28px 28px 30px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .bib-meta {
          font-size: 10.5px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin: 0 0 12px;
        }
        .bib-titre {
          font-size: clamp(20px, 2.2vw, 26px);
          font-weight: 400;
          line-height: 1.22;
          color: var(--text);
          margin: 0 0 14px;
        }
        .bib-douleur {
          font-size: 14.5px;
          font-weight: 300;
          line-height: 1.68;
          color: var(--text-secondary);
          margin: 0 0 24px;
        }
        .bib-livrables-label {
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 500;
          margin: 0 0 12px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .bib-livrables {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 11px;
        }
        .bib-l {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.5;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }
        .bib-l--on {
          color: var(--text-secondary);
        }
        .bib-l :global(.bib-ico) {
          flex-shrink: 0;
          margin-top: 3px;
          color: var(--text-muted);
        }
        .bib-l--on :global(.bib-ico) {
          color: var(--accent);
        }
        .bib-note {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 22px 0 0;
          padding-top: 18px;
          border-top: 1px solid var(--border);
        }

        /* ——— La porte ——— */
        .bib-porte {
          padding: 44px 44px 40px;
        }
        .bib-form {
          display: grid;
          gap: 18px;
        }
        .bib-champ {
          display: grid;
          gap: 8px;
        }
        .bib-champ-label {
          font-size: 10.5px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
        }
        .bib-champ input {
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 300;
          color: var(--text);
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px 15px;
          width: 100%;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .bib-champ input::placeholder {
          color: var(--text-muted);
        }
        .bib-champ input:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-subtle);
        }
        .bib-submit {
          justify-self: start;
          border: 0;
          margin-top: 4px;
        }
        .bib-submit:disabled {
          opacity: 0.6;
          cursor: wait;
        }
        .bib-erreur {
          font-size: 14px;
          line-height: 1.6;
          color: var(--accent);
          margin: 0;
        }
        .bib-erreur a {
          color: var(--accent);
        }
        .bib-reassurance {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 0;
        }

        @media (max-width: 880px) {
          .bib-grid {
            grid-template-columns: 1fr;
          }
          .bib-hero {
            padding: 120px 0 56px;
          }
          .bib-section {
            padding: 60px 0;
          }
          .bib-porte {
            padding: 30px 24px 28px;
          }
          .bib-submit {
            justify-self: stretch;
          }
        }
      `}</style>
    </main>
  )
}
