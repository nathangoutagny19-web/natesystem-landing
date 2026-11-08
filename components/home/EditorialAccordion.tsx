'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'

/**
 * L'accordéon éditorial de l'accueil (8 novembre 2026), sur le modèle de
 * gourmetmarketing.net : des lignes fines, pas de cartes, pas d'icônes.
 * Une ligne ouverte à la fois. Le texte reste dans le HTML même fermé, pour
 * Google.
 */
export type AccordionItem = { title: string; head: string; text: string; href?: string; linkLabel?: string }

export default function EditorialAccordion({ items, defaultOpen = 0, dark = false }: { items: AccordionItem[]; defaultOpen?: number; dark?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  /* Sur fond sombre (sections façon Gourmet), couleurs fixes : les variables
     du thème clair rendraient le texte gris sur noir. */
  const c = dark
    ? { line: 'rgba(255,255,255,0.14)', text: '#f0f0f2', soft: 'rgba(240,240,242,0.62)', muted: 'rgba(240,240,242,0.4)' }
    : { line: 'var(--border)', text: 'var(--text)', soft: 'var(--text-secondary)', muted: 'var(--text-muted)' }

  return (
    <div style={{ borderTop: `1px solid ${c.line}` }}>
      {items.map((it, k) => {
        const isOpen = open === k
        return (
          <div key={it.title} style={{ borderBottom: `1px solid ${c.line}` }}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : k)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between text-left font-sans"
              style={{ padding: '20px 0', fontSize: 18, fontWeight: 400, color: isOpen ? c.text : c.soft, background: 'none', border: 0, cursor: 'pointer' }}
            >
              <span>{it.title}</span>
              {isOpen ? <Minus size={16} style={{ color: c.text }} /> : <Plus size={16} style={{ color: c.muted }} />}
            </button>
            <div hidden={!isOpen} style={{ paddingBottom: 26 }}>
              <p className="font-serif italic" style={{ fontSize: 24, lineHeight: 1.25, color: c.text }}>{it.head}</p>
              <p className="font-sans" style={{ fontSize: 15, fontWeight: 300, color: c.soft, lineHeight: 1.7, marginTop: 12, maxWidth: 560 }}>{it.text}</p>
              {it.href && it.linkLabel && (
                <Link href={it.href} className="font-sans" style={{ display: 'inline-block', marginTop: 14, fontSize: 14, color: c.text, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  {it.linkLabel}
                </Link>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

/** La carte photo d'un vrai client, avec au plus un chiffre autorisé. */
export function CaseCard({ src, alt, chip, metric, metricLabel, href }: { src: string; alt: string; chip: string; metric?: string; metricLabel?: string; href: string }) {
  return (
    <Link href={href} className="block relative overflow-hidden" style={{ borderRadius: 14, aspectRatio: '4 / 5', background: '#0e0e12' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 45%)' }} />
      <div className="absolute flex items-end justify-between gap-4" style={{ left: 20, right: 20, bottom: 20 }}>
        <span className="font-sans" style={{ fontSize: 12, color: '#fff', background: 'rgba(14,14,18,0.75)', borderRadius: 999, padding: '6px 12px' }}>{chip}</span>
        {metric && (
          <span className="text-right" style={{ color: '#fff' }}>
            <span className="font-serif italic block" style={{ fontSize: 48, lineHeight: 1 }}>{metric}</span>
            {metricLabel && <span className="font-sans block" style={{ fontSize: 12, marginTop: 4, opacity: 0.85 }}>{metricLabel}</span>}
          </span>
        )}
      </div>
    </Link>
  )
}
