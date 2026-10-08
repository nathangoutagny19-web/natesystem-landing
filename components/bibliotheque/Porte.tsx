'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import { SECTEURS, lienBiblio } from '@/lib/bibliotheque'

/**
 * LA PORTE DE LA BIBLIOTHÈQUE : prénom, email, et un type d'établissement
 * facultatif.
 *
 * Le type d'établissement est FACULTATIF, et c'est un arbitrage : chaque champ
 * obligatoire de plus coûte des inscriptions, et une liste segmentée à moitié
 * vaut mieux qu'une liste plus courte. « Autre » existe pour que quelqu'un hors
 * cible ne se range pas de force dans une case fausse.
 *
 * LE CONSENTEMENT est une ligne lue avant le bouton, pas une case à cocher.
 * En B2B, la CNIL admet l'information préalable avec droit d'opposition pour
 * un envoi lié à l'activité du destinataire. Si Nathan veut un opt-in strict,
 * c'est une case non cochée à ajouter ici, et `newsletter` à lier à sa valeur
 * dans /api/bibliotheque.
 *
 * `slug` : la ressource depuis laquelle la personne entre. Elle part au CRM,
 * pour savoir quelle ressource fait venir qui.
 */

type Etat = 'repos' | 'envoi' | 'erreur'

export default function Porte({
  slug,
  titre,
  texte,
  onOuvert,
}: {
  slug?: string
  titre: string
  texte: string
  onOuvert: (email: string) => void
}) {
  const { lang } = useLang()
  const d = makeD(lang)
  const [etat, setEtat] = useState<Etat>('repos')

  async function entrer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (etat === 'envoi') return
    setEtat('envoi')
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    try {
      const res = await fetch('/api/bibliotheque', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, slug, lang }),
      })
      if (!res.ok) throw new Error()
      onOuvert(String(data.email))
      setEtat('repos')
    } catch {
      setEtat('erreur')
    }
  }

  return (
    <div className="card porte">
      <span className="section-label">{d('L’accès', 'Access')}</span>
      <h2 className="section-title porte-h2">{titre}</h2>
      <p className="font-sans porte-texte">{texte}</p>

      <form className="porte-form" onSubmit={entrer}>
        <div className="porte-ligne">
          <label className="porte-champ">
            <span className="font-mono porte-label">{d('Votre prénom', 'Your first name')}</span>
            <input name="prenom" type="text" required autoComplete="given-name" placeholder={d('Prénom', 'First name')} />
          </label>
          <label className="porte-champ">
            <span className="font-mono porte-label">{d('Votre email', 'Your email')}</span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder={d('vous@exemple.fr', 'you@example.com')}
            />
          </label>
        </div>

        <label className="porte-champ">
          <span className="font-mono porte-label">
            {d('Votre établissement', 'Your business')}{' '}
            <span className="porte-facultatif">{d('(facultatif)', '(optional)')}</span>
          </span>
          <select name="secteur" defaultValue="">
            <option value="">{d('Choisir', 'Choose')}</option>
            {SECTEURS.map((s) => (
              <option key={s.id} value={s.id}>
                {d(s.fr, s.en)}
              </option>
            ))}
            <option value="autre">{d('Autre', 'Other')}</option>
          </select>
        </label>

        <p className="font-sans porte-consentement">
          {d(
            'En ouvrant la bibliothèque, vous acceptez que je vous écrive quand je publie une nouvelle ressource. Chaque email porte un lien de désinscription, et ',
            'By opening the library, you agree that I may email you when I publish a new resource. Every email has an unsubscribe link, and '
          )}
          <Link href={lienBiblio('/bibliotheque/desinscription', lang)}>
            {d('cette page', 'this page')}
          </Link>
          {d(' fait la même chose à tout moment. Le détail est dans la ', ' does the same at any time. The details are in the ')}
          <Link href={`${localizedHref('/mentions-legales', lang)}#confidentialite`}>
            {d('politique de confidentialité', 'privacy policy')}
          </Link>
          .
        </p>

        <button type="submit" className="btn-primary porte-bouton" disabled={etat === 'envoi'}>
          <span className="btn-primary-dot" />
          {etat === 'envoi' ? d('Ouverture…', 'Opening…') : d('Ouvrir la bibliothèque', 'Open the library')}
          <ArrowRight size={16} strokeWidth={2} />
        </button>

        {etat === 'erreur' && (
          <p className="font-sans porte-erreur" role="alert">
            {d('Ça n’a pas marché. Réessayez, ou écrivez-moi à ', 'That did not work. Try again, or email me at ')}
            <a href="mailto:nathan@natesystem.com">nathan@natesystem.com</a>
          </p>
        )}
      </form>

      <style jsx>{`
        .porte {
          padding: 40px 40px 36px;
        }
        .porte-h2 {
          font-size: clamp(24px, 3vw, 32px);
          color: var(--text);
          margin: 0 0 12px;
        }
        .porte-texte {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0 0 26px;
        }
        .porte-form {
          display: grid;
          gap: 18px;
        }
        .porte-ligne {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .porte-champ {
          display: grid;
          gap: 8px;
          min-width: 0;
        }
        .porte-label {
          font-size: 10.5px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
        }
        .porte-facultatif {
          text-transform: none;
          letter-spacing: 0.4px;
          font-weight: 400;
        }
        .porte-champ input,
        .porte-champ select {
          font-family: var(--font-sans);
          /* 16 px minimum : en dessous, Safari iOS zoome sur le champ. */
          font-size: 16px;
          font-weight: 300;
          color: var(--text);
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 13px 15px;
          width: 100%;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .porte-champ select {
          appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, var(--text-muted) 50%),
            linear-gradient(135deg, var(--text-muted) 50%, transparent 50%);
          background-position: calc(100% - 20px) 50%, calc(100% - 15px) 50%;
          background-size: 5px 5px;
          background-repeat: no-repeat;
          padding-right: 40px;
        }
        .porte-champ input::placeholder {
          color: var(--text-muted);
        }
        .porte-champ input:focus,
        .porte-champ select:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-subtle);
        }
        .porte-consentement {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-muted);
          margin: 2px 0 0;
        }
        .porte-consentement :global(a) {
          color: var(--text-secondary);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .porte-bouton {
          justify-self: start;
          border: 0;
        }
        .porte-bouton:disabled {
          opacity: 0.6;
          cursor: wait;
        }
        .porte-erreur {
          font-size: 14px;
          line-height: 1.6;
          color: var(--accent);
          margin: 0;
        }
        .porte-erreur a {
          color: var(--accent);
        }
        @media (max-width: 640px) {
          .porte {
            padding: 28px 20px 26px;
          }
          .porte-ligne {
            grid-template-columns: 1fr;
          }
          .porte-bouton {
            justify-self: stretch;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}
