'use client'

import { Lock, Check, Download } from 'lucide-react'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import type { Livrable } from '@/lib/bibliotheque'

/**
 * Ce qu'il y a dans une ressource. Visible par tous, c'est la règle : on montre
 * avant de demander. Seul l'accès au fichier porte un cadenas.
 *
 * Ouvert, un livrable dont le fichier existe devient un lien de
 * téléchargement. Sans fichier, il reste une coche : la personne sait qu'il
 * arrive, et la note sous la liste lui dit comment.
 *
 * `liens={false}` dans la grille : la carte est déjà un lien, et un lien dans
 * un lien n'est pas du HTML valide. Le téléchargement se fait sur la page.
 */
export default function Livrables({
  livrables,
  ouvert,
  liens = true,
}: {
  livrables: Livrable[]
  ouvert: boolean | null
  liens?: boolean
}) {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <ul className="liv">
      {livrables.map((l) => {
        const texte = d(l.fr, l.en)
        const fichier = liens && ouvert && l.fichier
        return (
          <li key={l.fr} className={ouvert ? 'liv-l liv-l--on' : 'liv-l'}>
            {fichier ? (
              <Download size={15} strokeWidth={2.2} className="liv-ico" />
            ) : ouvert ? (
              <Check size={15} strokeWidth={2.5} className="liv-ico" />
            ) : (
              <Lock size={14} strokeWidth={2} className="liv-ico" aria-label={d('Verrouillé', 'Locked')} />
            )}
            {fichier ? (
              <a href={l.fichier!} download className="font-sans liv-lien">
                {texte}
              </a>
            ) : (
              <span className="font-sans">{texte}</span>
            )}
          </li>
        )
      })}

      <style jsx>{`
        .liv {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 11px;
        }
        .liv-l {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.5;
          color: var(--text-muted);
          transition: color 0.3s ease;
        }
        .liv-l--on {
          color: var(--text-secondary);
        }
        .liv-l :global(.liv-ico) {
          flex-shrink: 0;
          margin-top: 3px;
          color: var(--text-muted);
        }
        .liv-l--on :global(.liv-ico) {
          color: var(--accent);
        }
        .liv-lien {
          color: var(--text);
          text-decoration: underline;
          text-decoration-color: var(--accent);
          text-underline-offset: 3px;
        }
      `}</style>
    </ul>
  )
}
