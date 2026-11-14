'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import SectorGlyph from '@/components/home/SectorGlyph'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import { SECTOR_LIST, sectorHash } from '@/lib/sectors'

/**
 * POUR QUI (accueil). Depuis le 14 novembre 2026, les quatre secteurs de la
 * cible de Nathan (lib/sectors.ts) : hôtels de luxe, conciergerie et travel
 * designers, gestion de propriétés, yachting et charter. Une ligne chacun,
 * avec le petit dessin du métier ; chaque tuile ouvre son détail sur la page
 * Services.
 */
export default function PourQui() {
  const { lang } = useLang()
  const d = makeD(lang)

  return (
    <section id="pour-qui" className="lx-section" style={{ paddingTop: 0 }}>
      <div className="lx-wrap">
        <FadeUp>
          <span className="lx-eyebrow">{d('Pour qui', 'Who it’s for', 'Kiknek')}</span>
          <h2 className="lx-title" style={{ maxWidth: '20ch' }}>
            {d('Les maisons qui servent ', 'Businesses that serve ', 'Vállalkozások, amelyek ')}
            <span className="accent">{d('une clientèle exigeante.', 'demanding clients.', 'igényes ügyfeleket szolgálnak ki.')}</span>
          </h2>
        </FadeUp>

        <div className="pq-grid">
          {SECTOR_LIST.map((s, i) => (
            <FadeUp key={s.slug} delay={0.05 * i}>
              <Link href={localizedHref('/services', lang) + sectorHash(s.slug)} className="pq-tile">
                <SectorGlyph index={s.glyph} />
                <h3 className="font-sans pq-name">{s.name[lang]}</h3>
                <p className="font-sans pq-line">{s.line[lang]}</p>
                <span className="font-sans pq-more">
                  {d('Voir le détail', 'See the detail', 'Részletek')} <span aria-hidden="true">→</span>
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>

      <style jsx>{`
        .pq-grid {
          margin-top: 64px;
          display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--border); border-left: 1px solid var(--border);
        }
        .pq-grid > :global(*) { display: flex; }
        :global(.pq-tile) {
          display: flex; flex-direction: column; width: 100%;
          padding: 30px 26px 28px;
          border-right: 1px solid var(--border); border-bottom: 1px solid var(--border);
          background: var(--bg-card); text-decoration: none; color: inherit;
          transition: background 0.2s ease;
        }
        :global(.pq-tile:hover) { background: var(--bg-elevated); }
        .pq-name { font-size: 16px; font-weight: 500; color: var(--text); margin: 0 0 8px; line-height: 1.35; }
        .pq-line { font-size: 14.5px; font-weight: 300; color: var(--text-secondary); margin: 0; line-height: 1.6; flex: 1; }
        .pq-more { margin-top: 18px; font-size: 13px; color: var(--text-muted); transition: color 0.2s ease; }
        :global(.pq-tile:hover) .pq-more { color: var(--accent); }
        @media (max-width: 980px) { .pq-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 560px) {
          .pq-grid { grid-template-columns: 1fr; margin-top: 40px; }
          :global(.pq-tile) { padding: 22px 20px 24px; }
        }
      `}</style>
    </section>
  )
}
