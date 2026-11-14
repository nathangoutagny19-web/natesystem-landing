'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import SectorGlyph from '@/components/home/SectorGlyph'
import { makeD } from '@/lib/lang'
import type { Lang } from '@/lib/i18n'
import { SECTOR_LIST, sectorHash, type SectorSlug } from '@/lib/sectors'

/**
 * LE PANNEAU « SECTEURS » DU MENU (14 novembre 2026). Nathan, sur la première
 * version (une petite liste déroulante) : « 0/10, ça fait pas luxe du tout,
 * il faut que ça vaille un site à 400 000 € ».
 *
 * Un panneau pleine largeur qui se déplie sous la barre : à gauche la phrase
 * de la cible, au centre les quatre secteurs en grande serif numérotée, à
 * droite une carte sombre où le dessin du secteur survolé se trace en grand.
 * Le reste de la page se voile. Aucune photo de banque, aucun chiffre.
 *
 * Rendu hors de .nav-links (qui est décalé par un transform) pour pouvoir
 * prendre toute la largeur ; le voile est rendu hors du header, que le flou
 * du mode clair transformerait en bloc conteneur.
 */
export function SectorsPanel({
  open,
  lang,
  href,
  onEnter,
  onLeave,
  onPick,
}: {
  open: boolean
  lang: Lang
  /** Construit le lien localisé (/services, /en/services…). */
  href: (path: string) => string
  onEnter: () => void
  onLeave: () => void
  onPick: (slug?: SectorSlug) => void
}) {
  const d = makeD(lang)
  const [hover, setHover] = useState(0)
  const cur = SECTOR_LIST[hover]

  return (
    <div
      className={`smp${open ? ' smp-open' : ''}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      aria-hidden={!open}
    >
      <div className="smp-inner">
        <div className="smp-intro">
          <span className="font-mono smp-eyebrow">{d('Secteurs', 'Industries', 'Ágazatok')}</span>
          <p className="font-serif smp-title">
            {d('Les maisons qui servent ', 'Businesses that serve ', 'Vállalkozások, amelyek ')}
            <span className="accent">{d('une clientèle exigeante.', 'demanding clients.', 'igényes ügyfeleket szolgálnak ki.')}</span>
          </p>
          <Link href={href('/services') + '#secteurs'} className="font-sans smp-all" tabIndex={open ? 0 : -1} onClick={() => onPick()}>
            {d('Tous les secteurs', 'All industries', 'Összes ágazat')} <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ol className="smp-list">
          {SECTOR_LIST.map((s, i) => (
            <li key={s.slug} style={{ ['--i' as string]: i }}>
              <Link
                href={href('/services') + sectorHash(s.slug)}
                className={`smp-item${i === hover ? ' smp-on' : ''}`}
                tabIndex={open ? 0 : -1}
                onMouseEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                onClick={() => onPick(s.slug)}
              >
                <span className="font-mono smp-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="smp-text">
                  <span className="font-serif smp-name">{s.name[lang]}</span>
                  <span className="font-sans smp-line">{s.line[lang]}</span>
                </span>
                <span className="smp-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="smp-card" aria-hidden="true">
          <span className="font-mono smp-card-idx">
            {String(hover + 1).padStart(2, '0')} / {String(SECTOR_LIST.length).padStart(2, '0')}
          </span>
          <div className="smp-card-art" key={cur.slug}>
            <SectorGlyph index={cur.glyph} size={196} stroke={0.6} />
          </div>
          <span className="font-mono smp-card-label">{cur.name[lang]}</span>
        </div>
      </div>

      <style jsx>{`
        .smp {
          position: absolute; top: 100%; left: 0; right: 0; z-index: 2;
          background: #0e0e12; color: #f0f0f2;
          border-top: 1px solid rgba(255, 255, 255, 0.08); border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 48px 80px -40px rgba(10, 10, 14, 0.35);
          clip-path: inset(0 0 100% 0); opacity: 0; visibility: hidden;
          transition: clip-path 0.55s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease, visibility 0s linear 0.55s;
        }
        .smp-open {
          clip-path: inset(0 0 0 0); opacity: 1; visibility: visible;
          transition: clip-path 0.55s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease, visibility 0s;
        }
        .smp-inner {
          max-width: 1280px; margin: 0 auto; padding: 56px 32px 60px;
          display: grid; grid-template-columns: 290px minmax(0, 1fr) 300px; gap: 64px; align-items: stretch;
        }

        .smp-intro { display: flex; flex-direction: column; }
        .smp-eyebrow { font-size: 10.5px; letter-spacing: 2.6px; text-transform: uppercase; color: var(--accent); }
        .smp-title { margin: 20px 0 0; font-size: 31px; font-weight: 400; line-height: 1.14; color: #f0f0f2; }
        .smp-title .accent { color: var(--accent); font-style: italic; }
        .smp-intro :global(.smp-all) {
          margin-top: auto; align-self: flex-start;
          font-size: 13.5px; color: rgba(240, 240, 242, 0.7); text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2); padding-bottom: 3px;
          transition: color 0.2s ease, border-color 0.2s ease;
        }
        .smp-intro :global(.smp-all:hover) { color: var(--accent); border-color: var(--accent); }

        .smp-list { list-style: none; margin: 0; padding: 0; border-top: 1px solid rgba(255, 255, 255, 0.1); }
        .smp-list li { border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .smp-open .smp-list li { animation: smpIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both; animation-delay: calc(var(--i) * 60ms + 140ms); }
        @keyframes smpIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

        .smp-list :global(.smp-item) {
          position: relative; display: grid; grid-template-columns: 46px minmax(0, 1fr) 24px; align-items: baseline;
          padding: 17px 4px 17px 0; text-decoration: none; color: inherit;
        }
        .smp-list :global(.smp-item)::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: -1px; height: 1px;
          background: var(--accent); transform: scaleX(0); transform-origin: left;
          transition: transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .smp-list :global(.smp-on)::after { transform: scaleX(1); }
        .smp-num { font-family: var(--font-serif); font-style: italic; font-size: 17px; letter-spacing: 0; color: rgba(240, 240, 242, 0.45); transition: color 0.3s ease; }
        .smp-list :global(.smp-on) .smp-num { color: var(--accent); }
        .smp-text { display: block; transition: transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1); }
        .smp-list :global(.smp-on) .smp-text { transform: translateX(8px); }
        .smp-name { display: block; font-size: 29px; font-weight: 400; line-height: 1.1; color: #f0f0f2; }
        .smp-line { display: block; margin-top: 7px; font-size: 13.5px; font-weight: 300; line-height: 1.5; color: rgba(240, 240, 242, 0.6); }
        .smp-arrow {
          align-self: center; justify-self: end; font-size: 18px; color: var(--accent);
          opacity: 0; transform: translateX(-10px);
          transition: opacity 0.3s ease, transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .smp-list :global(.smp-on) .smp-arrow { opacity: 1; transform: none; }

        .smp-card {
          position: relative; display: flex; flex-direction: column; justify-content: space-between;
          min-height: 320px; padding: 22px 24px; border-radius: 4px; overflow: hidden;
          background: radial-gradient(120% 90% at 75% 15%, rgba(230, 57, 70, 0.14), transparent 60%), #17171c;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
          color: #f0f0f2;
        }
        .smp-card-idx, .smp-card-label { font-size: 10.5px; letter-spacing: 2.2px; text-transform: uppercase; color: rgba(240, 240, 242, 0.55); }
        .smp-card-label { color: rgba(240, 240, 242, 0.85); }
        .smp-card-art { flex: 1; display: flex; align-items: center; justify-content: center; animation: smpArt 0.6s ease both; }
        .smp-card-art :global(.glyph) { color: #f0f0f2; margin-bottom: 0; }
        @keyframes smpArt { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: none; } }

        @media (max-width: 1180px) {
          .smp-inner { grid-template-columns: 250px minmax(0, 1fr); gap: 48px; }
          .smp-card { display: none; }
        }
        @media (max-width: 900px) {
          .smp-inner { grid-template-columns: 1fr; padding: 36px 24px 40px; }
          .smp-intro { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .smp, .smp-open { transition: opacity 0.2s ease, visibility 0s; clip-path: none; }
          .smp-open .smp-list li, .smp-card-art { animation: none; }
        }
      `}</style>
    </div>
  )
}

/** Le voile posé sur la page quand le panneau est ouvert. Hors du header. */
export function SectorsVeil({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`smv${open ? ' smv-on' : ''}`} onClick={onClose} aria-hidden="true">
      <style jsx>{`
        .smv {
          position: fixed; left: 0; right: 0; top: 64px; bottom: 0; z-index: 99;
          background: rgba(10, 10, 14, 0.22);
          backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
          opacity: 0; pointer-events: none; transition: opacity 0.4s ease;
        }
        .smv-on { opacity: 1; pointer-events: auto; }
        @media (max-width: 767px) { .smv { display: none; } }
      `}</style>
    </div>
  )
}

/** Garde le panneau ouvert le temps de passer de « Secteurs » au panneau. */
export function useHoverPanel(delay = 180) {
  const [open, setOpen] = useState(false)
  /* Une ref, pas un état : le passage « Secteurs » → panneau se joue entre
     deux rendus, il faut annuler le bon minuteur. */
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cancel = () => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = null
  }
  const openNow = () => {
    cancel()
    setOpen(true)
  }
  const closeSoon = () => {
    cancel()
    timer.current = setTimeout(() => setOpen(false), delay)
  }
  const closeNow = () => {
    cancel()
    setOpen(false)
  }
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return { open, openNow, closeSoon, closeNow, cancel }
}
