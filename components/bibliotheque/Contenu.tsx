'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import type { Bloc } from '@/lib/bibliotheque'

/**
 * LE CONTENU D'UNE RESSOURCE, lu sur la page.
 *
 * Deux gestes rendent une ressource utilisable plutôt que lisible : cocher une
 * checklist à l'écran, et copier une consigne d'un tap. Les deux sont là.
 * Les coches restent dans la page (pas de stockage) : une checklist de veille
 * se refait à chaque arrivée.
 *
 * Tant que l'anglais n'est pas écrit, un bloc sans `en` s'affiche en français.
 */
export default function Contenu({ blocs }: { blocs: Bloc[] }) {
  return (
    <div className="ct">
      {blocs.map((b, i) => (
        <BlocVue key={i} b={b} />
      ))}
      <style jsx>{`
        .ct {
          display: grid;
          gap: 18px;
        }
      `}</style>
    </div>
  )
}

function BlocVue({ b }: { b: Bloc }) {
  const { lang } = useLang()
  const d = makeD(lang)
  const tr = (fr: string, en?: string) => d(fr, en ?? fr)

  if (b.t === 'titre') {
    return (
      <h2 className="font-serif italic ct-titre">
        {tr(b.fr, b.en)}
        <style jsx>{`
          .ct-titre {
            font-size: clamp(22px, 2.8vw, 28px);
            font-weight: 400;
            line-height: 1.2;
            color: var(--text);
            margin: 22px 0 0;
          }
        `}</style>
      </h2>
    )
  }

  if (b.t === 'texte') {
    return (
      <p className="font-sans ct-texte">
        {tr(b.fr, b.en)}
        <style jsx>{`
          .ct-texte {
            font-size: 16px;
            font-weight: 300;
            line-height: 1.75;
            color: var(--text-secondary);
            margin: 0;
          }
        `}</style>
      </p>
    )
  }

  if (b.t === 'note') {
    return (
      <p className="font-sans ct-note">
        {tr(b.fr, b.en)}
        <style jsx>{`
          .ct-note {
            font-size: 15.5px;
            font-weight: 400;
            line-height: 1.65;
            color: var(--text);
            margin: 10px 0 0;
            padding: 18px 20px;
            border-left: 3px solid var(--accent);
            background: var(--accent-subtle);
            border-radius: 0 12px 12px 0;
          }
        `}</style>
      </p>
    )
  }

  if (b.t === 'prompt') return <Prompt titre={tr(b.titreFr, b.titreEn)} texte={tr(b.fr, b.en)} />

  return <Liste b={b} />
}

function Liste({ b }: { b: Extract<Bloc, { t: 'liste' }> }) {
  const { lang } = useLang()
  const d = makeD(lang)
  const tr = (fr: string, en?: string) => d(fr, en ?? fr)
  const [faits, setFaits] = useState<Set<number>>(new Set())

  const basculer = (i: number) =>
    setFaits((prev) => {
      const n = new Set(prev)
      if (n.has(i)) n.delete(i)
      else n.add(i)
      return n
    })

  return (
    <div className="li-wrap">
      {b.coche && (
        <p className="font-mono li-compte" aria-live="polite">
          {faits.size} / {b.items.length} {d('fait', 'done')}
        </p>
      )}
      <ol className={`li${b.numero ? ' li--num' : ''}`}>
        {b.items.map((it, i) => {
          const fait = faits.has(i)
          const corps = (
            <span className="li-corps">
              <span className="font-sans li-titre">{tr(it.fr, it.en)}</span>
              {it.detailFr && <span className="font-sans li-detail">{tr(it.detailFr, it.detailEn)}</span>}
            </span>
          )
          return (
            <li key={i} className={`li-item${fait ? ' li-item--fait' : ''}`}>
              {b.coche ? (
                <button type="button" className="li-bouton" aria-pressed={fait} onClick={() => basculer(i)}>
                  <span className="li-case" aria-hidden="true">
                    {fait && <Check size={14} strokeWidth={3} />}
                  </span>
                  {corps}
                </button>
              ) : (
                <div className="li-ligne">
                  <span className={b.numero ? 'font-mono li-num' : 'li-puce'} aria-hidden="true">
                    {b.numero ? String(i + 1).padStart(2, '0') : ''}
                  </span>
                  {corps}
                </div>
              )}
            </li>
          )
        })}
      </ol>
      <style jsx>{`
        .li-wrap {
          display: grid;
          gap: 10px;
        }
        .li-compte {
          font-size: 10.5px;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0;
        }
        .li {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 8px;
        }
        .li-item {
          border: 1px solid var(--border);
          background: var(--bg-card);
          border-radius: 12px;
          transition: border-color 0.2s ease, opacity 0.2s ease;
        }
        .li-bouton,
        .li-ligne {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          width: 100%;
          padding: 14px 16px;
          text-align: left;
        }
        .li-bouton {
          appearance: none;
          background: transparent;
          border: 0;
          cursor: pointer;
          color: inherit;
          font: inherit;
        }
        .li-bouton:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
          border-radius: 12px;
        }
        .li-case {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          margin-top: 1px;
          border-radius: 6px;
          border: 1.5px solid var(--border-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: background 0.2s ease, border-color 0.2s ease;
        }
        .li-item--fait .li-case {
          background: var(--accent);
          border-color: var(--accent);
        }
        .li-item--fait .li-titre {
          text-decoration: line-through;
          text-decoration-color: var(--text-muted);
          color: var(--text-muted);
        }
        .li-puce {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          margin-top: 9px;
        }
        .li-num {
          flex-shrink: 0;
          min-width: 22px;
          font-size: 12px;
          color: var(--accent);
          margin-top: 3px;
        }
        .li-corps {
          display: grid;
          gap: 4px;
          min-width: 0;
        }
        .li-titre {
          font-size: 15.5px;
          font-weight: 500;
          line-height: 1.45;
          color: var(--text);
        }
        .li-detail {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.6;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  )
}

function Prompt({ titre, texte }: { titre: string; texte: string }) {
  const { lang } = useLang()
  const d = makeD(lang)
  const [copie, setCopie] = useState(false)

  async function copier() {
    try {
      await navigator.clipboard.writeText(texte)
      setCopie(true)
      setTimeout(() => setCopie(false), 2000)
    } catch {}
  }

  return (
    <figure className="pr">
      <figcaption className="pr-tete">
        <span className="font-mono pr-titre">{titre}</span>
        <button type="button" className="font-sans pr-copier" onClick={copier}>
          {copie ? <Check size={14} strokeWidth={2.6} /> : <Copy size={14} strokeWidth={2} />}
          {copie ? d('Copié', 'Copied') : d('Copier', 'Copy')}
        </button>
      </figcaption>
      <pre className="pr-texte">{texte}</pre>
      <style jsx>{`
        .pr {
          margin: 0;
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          background: var(--bg-elevated);
        }
        .pr-tete {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 10px 12px 10px 16px;
          border-bottom: 1px solid var(--border);
        }
        .pr-titre {
          font-size: 10.5px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .pr-copier {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
          appearance: none;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          color: #fff;
          background: var(--accent);
          border: 0;
          border-radius: 999px;
          padding: 8px 14px;
        }
        .pr-texte {
          margin: 0;
          padding: 16px;
          font-family: var(--font-mono);
          font-size: 13px;
          line-height: 1.65;
          color: var(--text-secondary);
          white-space: pre-wrap;
          word-break: break-word;
        }
      `}</style>
    </figure>
  )
}
