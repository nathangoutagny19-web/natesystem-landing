'use client'

import { useRouter } from 'next/navigation'
import { useLang, type Lang } from '@/components/providers/LangProvider'

/**
 * LE SÉLECTEUR DE LANGUE DE LA LANDING, ET IL EST AUTONOME.
 *
 * ⚠︎ POURQUOI IL NE PASSE PAS PAR `setLang` DU LangProvider.
 *
 * `setLang` s'appuie sur `hasTranslation`, donc sur `TRANSLATED_ROUTES` dans
 * lib/routes.ts. Or cette table sert AUSSI au sitemap, qui en déduit une
 * entrée `/en/<route>` ET une entrée `/hu/<route>` pour chaque ligne. Y
 * inscrire `/atelier` publierait `/hu/atelier` dans le sitemap, et cette page
 * n'existe pas : on déclarerait une 404 à Google pour faire marcher un bouton.
 *
 * Cette landing connaît ses trois versions et n'a besoin de rien d'autre.
 * `/atelier` reste hors de TRANSLATED_ROUTES : le sitemap y déclare déjà ses
 * trois URL à la main, l'y inscrire en doublerait deux.
 *
 * L'ancre est conservée : un visiteur arrivé sur `#demander` qui bascule de
 * langue ne doit pas être renvoyé en haut de la page.
 */

const ROUTES: Partial<Record<Lang, string>> = {
  fr: '/atelier',
  en: '/en/atelier',
  hu: '/hu/atelier',
}

const LANGUES: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'hu', label: 'HU' },
]

export default function LangToggle() {
  const { lang } = useLang()
  const router = useRouter()

  function basculer(cible: Lang) {
    if (cible === lang) return
    const route = ROUTES[cible]
    if (!route) return
    const ancre = typeof window !== 'undefined' ? window.location.hash : ''
    router.push(route + ancre)
  }

  return (
    <div className="at-lang" role="group" aria-label={lang === 'fr' ? 'Langue' : lang === 'hu' ? 'Nyelv' : 'Language'}>
      {LANGUES.map((l) => {
        const actif = l.code === lang
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => basculer(l.code)}
            className={`font-mono at-lang-opt${actif ? ' is-on' : ''}`}
            aria-current={actif ? 'true' : undefined}
            lang={l.code}
          >
            {l.label}
          </button>
        )
      })}

      <style jsx>{`
        .at-lang {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          padding: 3px;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: var(--bg-elevated);
        }
        .at-lang-opt {
          appearance: none;
          border: 0;
          cursor: pointer;
          background: transparent;
          color: var(--text-muted);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 1.2px;
          padding: 6px 12px;
          border-radius: 999px;
          line-height: 1;
          transition: background 0.22s ease, color 0.22s ease;
        }
        .at-lang-opt:hover {
          color: var(--text);
        }
        .at-lang-opt.is-on {
          background: var(--bg-card);
          color: var(--text);
          box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
        }
        .at-lang-opt:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
        }
      `}</style>
    </div>
  )
}
