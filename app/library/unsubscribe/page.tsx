'use client'

import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { CLE_ACCES, CLE_PRENOM } from '@/components/bibliotheque/acces'

/**
 * LA DÉSINSCRIPTION DE LA BIBLIOTHÈQUE.
 *
 * Un champ, un bouton. Pas de « êtes-vous sûr », pas de raison à donner : se
 * désinscrire doit être aussi simple que s'inscrire, c'est ce que demande le
 * RGPD et c'est ce qui évite qu'on marque les emails comme indésirables.
 *
 * L'adresse part à Nathan (voir /api/bibliotheque/desinscription : le CRM n'a
 * pas encore de route de retrait). La clé d'accès locale est effacée aussi :
 * une personne désinscrite ne garde pas une porte ouverte à son nom.
 */

type Etat = 'repos' | 'envoi' | 'ok' | 'erreur'

export default function DesinscriptionPage() {
  const { lang } = useLang()
  const d = makeD(lang)
  const [etat, setEtat] = useState<Etat>('repos')

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (etat === 'envoi') return
    setEtat('envoi')
    const email = String(new FormData(e.currentTarget).get('email') ?? '')
    try {
      const res = await fetch('/api/bibliotheque/desinscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      try {
        localStorage.removeItem(CLE_ACCES)
        localStorage.removeItem(CLE_PRENOM)
      } catch {}
      setEtat('ok')
    } catch {
      setEtat('erreur')
    }
  }

  return (
    <main>
      <Nav />
      <section className="des">
        <div className="card des-carte">
          <span className="section-label">{d('Désinscription', 'Unsubscribe')}</span>
          <h1 className="font-serif italic des-h1">{d('Ne plus recevoir mes emails', 'Stop receiving my emails')}</h1>

          {etat === 'ok' ? (
            <p className="font-sans des-texte" role="status">
              {d(
                'C’est noté. Je retire votre adresse de ma liste, et vous ne recevrez plus d’email de la bibliothèque.',
                'Done. I am taking your address off my list, and you will not get any more library emails.'
              )}
            </p>
          ) : (
            <>
              <p className="font-sans des-texte">
                {d(
                  'Indiquez l’adresse à laquelle vous recevez mes emails. Je la retire de ma liste.',
                  'Enter the address where you receive my emails. I will take it off my list.'
                )}
              </p>
              <form className="des-form" onSubmit={envoyer}>
                <label className="des-champ">
                  <span className="font-mono des-label">{d('Votre email', 'Your email')}</span>
                  <input name="email" type="email" required autoComplete="email" inputMode="email" placeholder={d('vous@exemple.fr', 'you@example.com')} />
                </label>
                <button type="submit" className="btn-primary des-bouton" disabled={etat === 'envoi'}>
                  <span className="btn-primary-dot" />
                  {etat === 'envoi' ? d('Envoi…', 'Sending…') : d('Me désinscrire', 'Unsubscribe me')}
                </button>
                {etat === 'erreur' && (
                  <p className="font-sans des-erreur" role="alert">
                    {d('Ça n’a pas marché. Écrivez-moi à ', 'That did not work. Email me at ')}
                    <a href="mailto:nathan@natesystem.com">nathan@natesystem.com</a>
                    {d(', je vous retire à la main.', ' and I will remove you by hand.')}
                  </p>
                )}
              </form>
            </>
          )}
        </div>
      </section>
      <Footer />

      <style jsx>{`
        .des {
          padding: 150px 24px 100px;
        }
        .des-carte {
          max-width: 560px;
          margin: 0 auto;
          padding: 40px 36px;
        }
        .des-h1 {
          font-size: clamp(26px, 3.4vw, 36px);
          font-weight: 400;
          line-height: 1.15;
          color: var(--text);
          margin: 0 0 14px;
        }
        .des-texte {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0 0 24px;
        }
        .des-form {
          display: grid;
          gap: 16px;
        }
        .des-champ {
          display: grid;
          gap: 8px;
        }
        .des-label {
          font-size: 10.5px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
        }
        .des-champ input {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 300;
          color: var(--text);
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 13px 15px;
          width: 100%;
        }
        .des-champ input:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-subtle);
        }
        .des-bouton {
          justify-self: start;
          border: 0;
        }
        .des-erreur {
          font-size: 14px;
          line-height: 1.6;
          color: var(--accent);
          margin: 0;
        }
        .des-erreur a {
          color: var(--accent);
        }
        @media (max-width: 640px) {
          .des {
            padding: 116px 16px 70px;
          }
          .des-carte {
            padding: 28px 20px;
          }
          .des-bouton {
            justify-self: stretch;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  )
}
