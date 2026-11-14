'use client'

import { useState, type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import SectorGlyph from '@/components/home/SectorGlyph'

/**
 * DEUX COLONNES SÉPARÉES PAR UN FILET (refonte du 14 novembre 2026) : une
 * vraie photo avec un chiffre réel d'un côté, une liste numérotée qui s'ouvre
 * de l'autre. Sert aux secteurs et aux services de l'accueil.
 *
 * ⚠︎ Le chiffre posé sur la photo est toujours un chiffre déjà publié et
 * sourcé (les 40 h des Chartreux, rapportées par le client) ou un fait
 * (le code appartient au client). Jamais un chiffre inventé.
 */
export type SplitItem = {
  key: string
  title: string
  /** Le petit dessin du métier (SectorGlyph), s'il y en a un. */
  glyph?: number
  body: ReactNode
  href: string
  linkLabel: string
}

export default function SplitList({
  id,
  night = false,
  reverse = false,
  label,
  title,
  items,
  media,
}: {
  id: string
  night?: boolean
  reverse?: boolean
  label: string
  title: ReactNode
  items: SplitItem[]
  /** `kpi` facultatif : rien sur la photo quand le chiffre ferait dire au visiteur ce qui n'est pas vrai. */
  media: { src: string; alt: string; pos?: string; kpi?: string; kpiText?: string; tag: string; href: string }
}) {
  const [open, setOpen] = useState(0)

  return (
    <section id={id} className={`sl lx-section${night ? ' v3-night' : ''}`}>
      <div className="lx-wrap">
        <FadeUp>
          <span className="v3-label">{label}</span>
          <h2 className="lx-title sl-title">{title}</h2>
        </FadeUp>

        <div className={`sl-grid${reverse ? ' sl-rev' : ''}`}>
          <FadeUp className="sl-media-col">
            <Link href={media.href} className="sl-media">
              <Image src={media.src} alt={media.alt} fill sizes="(max-width: 900px) 92vw, 560px" style={{ objectFit: 'cover', objectPosition: media.pos ?? 'center' }} />
              {media.kpi && <span className="sl-shade" aria-hidden="true" />}
              <span className="font-mono sl-tag">{media.tag}</span>
              {media.kpi && (
                <span className="sl-kpi">
                  <span className="font-serif sl-kpi-value">{media.kpi}</span>
                  <span className="font-sans sl-kpi-text">{media.kpiText}</span>
                </span>
              )}
            </Link>
          </FadeUp>

          <FadeUp delay={0.08} className="sl-list-col">
            <ol className="sl-list">
              {items.map((it, i) => {
                const isOpen = i === open
                return (
                  <li key={it.key} className={`sl-item${isOpen ? ' sl-open' : ''}`}>
                    <button type="button" className="sl-head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                      <span className="font-mono sl-num">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-serif sl-name">{it.title}</span>
                      <span className="sl-plus" aria-hidden="true" />
                    </button>
                    <div className="sl-body" hidden={!isOpen}>
                      {it.glyph !== undefined && (
                        <span className="sl-glyph"><SectorGlyph index={it.glyph} size={44} stroke={1.5} /></span>
                      )}
                      <div className="font-sans sl-text">{it.body}</div>
                      <Link href={it.href} className="v3-link sl-more">
                        {it.linkLabel} <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </li>
                )
              })}
            </ol>
          </FadeUp>
        </div>
      </div>

      <style jsx>{`
        .sl-title { max-width: 20ch; }
        .sl-grid {
          margin-top: clamp(48px, 6vw, 80px);
          display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          border-top: 1px solid var(--sl-line);
        }
        .sl { --sl-line: var(--border); --sl-muted: var(--text-muted); --sl-text: var(--text); --sl-soft: var(--text-secondary); }
        .v3-night.sl { --sl-line: rgba(255, 255, 255, 0.1); --sl-muted: rgba(240, 240, 242, 0.45); --sl-text: #f0f0f2; --sl-soft: rgba(240, 240, 242, 0.66); }
        .sl-grid > :global(.sl-media-col) { padding: 40px clamp(28px, 4vw, 56px) 0 0; border-right: 1px solid var(--sl-line); }
        .sl-grid > :global(.sl-list-col) { padding: 40px 0 0 clamp(28px, 4vw, 56px); }
        .sl-rev > :global(.sl-media-col) { order: 2; padding: 40px 0 0 clamp(28px, 4vw, 56px); border-right: 0; border-left: 1px solid var(--sl-line); }
        .sl-rev > :global(.sl-list-col) { order: 1; padding: 40px clamp(28px, 4vw, 56px) 0 0; }

        :global(.sl-media) {
          position: relative; display: block; aspect-ratio: 5 / 4; border-radius: 4px; overflow: hidden;
          background: #17171c; text-decoration: none;
        }
        :global(.sl-media) :global(img) { transition: transform 1.2s cubic-bezier(0.2, 0.8, 0.2, 1); }
        :global(.sl-media:hover) :global(img) { transform: scale(1.035); }
        .sl-shade { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10, 10, 14, 0.78) 0%, rgba(10, 10, 14, 0.1) 52%, transparent 75%); }
        .sl-tag {
          position: absolute; left: 16px; top: 16px;
          font-size: 9.5px; letter-spacing: 1.8px; text-transform: uppercase; color: #f0f0f2;
          padding: 7px 12px; border-radius: 999px; background: rgba(14, 14, 18, 0.55); border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        }
        .sl-kpi { position: absolute; right: 22px; bottom: 16px; display: flex; flex-direction: column; align-items: flex-end; text-align: right; max-width: 60%; }
        .sl-kpi-value { font-size: clamp(46px, 5vw, 68px); line-height: 1; color: #fff; font-weight: 400; }
        .sl-kpi-text { margin-top: 6px; font-size: 12.5px; line-height: 1.45; color: rgba(255, 255, 255, 0.82); }

        .sl-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--sl-line); }
        .sl-item { border-bottom: 1px solid var(--sl-line); }
        .sl-head {
          width: 100%; display: grid; grid-template-columns: 40px minmax(0, 1fr) 18px; align-items: baseline;
          padding: 22px 0; background: none; border: 0; cursor: pointer; text-align: left; color: inherit;
          -webkit-tap-highlight-color: transparent;
        }
        .sl-num { font-family: var(--font-serif); font-style: italic; font-size: 17px; letter-spacing: 0; color: var(--sl-muted); transition: color 0.3s ease; }
        .sl-open .sl-num, .sl-head:hover .sl-num { color: var(--accent); }
        .sl-name { font-size: clamp(22px, 2.2vw, 28px); line-height: 1.15; color: var(--sl-text); font-weight: 400; transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .sl-head:hover .sl-name { transform: translateX(6px); }
        .sl-plus { position: relative; align-self: center; width: 14px; height: 14px; }
        .sl-plus::before, .sl-plus::after {
          content: ''; position: absolute; left: 0; right: 0; top: 50%; height: 1.3px; margin-top: -0.65px;
          background: var(--sl-soft); transition: transform 0.35s ease;
        }
        .sl-plus::after { transform: rotate(90deg); }
        .sl-open .sl-plus::after { transform: rotate(0deg); }
        .sl-body { padding: 0 0 28px 40px; animation: slIn 0.5s ease both; }
        @keyframes slIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        .sl-glyph { display: block; margin-bottom: 4px; }
        .sl-glyph :global(.glyph) { color: var(--sl-text); margin-bottom: 6px; }
        .sl-text { font-size: 15px; font-weight: 300; line-height: 1.7; color: var(--sl-soft); max-width: 520px; }
        .sl-text :global(ul) { list-style: none; margin: 14px 0 0; padding: 0; }
        .sl-text :global(li) { position: relative; padding-left: 18px; margin-top: 8px; color: var(--sl-text); font-size: 14.5px; }
        .sl-text :global(li)::before { content: ''; position: absolute; left: 0; top: 0.72em; width: 8px; height: 1px; background: var(--accent); }
        .sl-body :global(.sl-more) { margin-top: 20px; font-size: 13.5px; color: var(--sl-text); }

        @media (max-width: 900px) {
          .sl-grid { grid-template-columns: 1fr; border-top: 0; }
          .sl-grid > :global(.sl-media-col), .sl-rev > :global(.sl-media-col) { order: 0; padding: 0 0 32px; border: 0; }
          .sl-grid > :global(.sl-list-col), .sl-rev > :global(.sl-list-col) { order: 1; padding: 0; }
          .sl-body { padding-left: 40px; }
        }
      `}</style>
    </section>
  )
}
