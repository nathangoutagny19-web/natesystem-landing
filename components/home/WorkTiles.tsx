'use client'

import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import SectorGlyph from '@/components/home/SectorGlyph'
import { useLang } from '@/components/providers/LangProvider'
import { makeD } from '@/lib/lang'
import { localizedHref } from '@/lib/routes'
import type { Lang } from '@/lib/i18n'

/**
 * LES TUILES DE RÉALISATIONS (refonte du 9 novembre 2026). Trois sur
 * l'accueil, cinq sur /case-studies. Chaque tuile : une vraie photo prise sur
 * place (ou, pour la conciergerie sous NDA, aucune photo : son nom ne se
 * montre pas), le client, le secteur, une ligne de résultat.
 *
 * ⚠︎ Les lignes de résultat reprennent mot pour mot ce qui est déjà publié
 * ou validé par Nathan : la forme imposée de la conciergerie sous NDA
 * (brain/accounts/conciergerie-nda.md), les 40 h des Chartreux, les titres
 * des cas existants. Rien d'inventé.
 */
type Tile = {
  key: string
  label: Record<Lang, string>
  line: Record<Lang, string>
  href: string
  photo?: string
  glyph?: number
}

const TILES: Tile[] = [
  {
    key: 'nda',
    label: { fr: 'Conciergerie de luxe · sous NDA', en: 'Luxury concierge · under NDA', hu: 'Luxus concierge · titoktartás alatt' },
    line: {
      fr: '30 h par mois récupérées, et une expérience client nettement meilleure.',
      en: '30 hours a month back, and a clearly better client experience.',
      hu: 'Havi 30 óra visszanyerve, és érezhetően jobb ügyfélélmény.',
    },
    href: '/case-studies',
    glyph: 2,
  },
  {
    key: 'chartreux',
    label: { fr: 'Institut des Chartreux · Lyon', en: 'Institut des Chartreux · Lyon', hu: 'Institut des Chartreux · Lyon' },
    line: {
      fr: 'Neuf tableurs remplacés par un seul outil. 40 h par mois rendues à l’équipe.',
      en: 'Nine spreadsheets replaced by one tool. 40 hours a month given back to the team.',
      hu: 'Kilenc táblázat helyett egyetlen eszköz. Havi 40 óra visszaadva a csapatnak.',
    },
    href: '/case-studies',
    photo: '/realisations/chartreux-terrasse.webp',
  },
  {
    key: 'vendeglatas',
    label: { fr: 'Vendéglátás Menedzsment · Budapest', en: 'Vendéglátás Menedzsment · Budapest', hu: 'Vendéglátás Menedzsment · Budapest' },
    line: {
      fr: 'Vingt-cinq ans de méthode devenus un système qui rédige ses rapports.',
      en: 'Twenty-five years of method turned into a system that writes his reports.',
      hu: 'Huszonöt év módszere egy rendszerré, amely megírja a riportjait.',
    },
    href: '/case-studies/conseil-b2b-budapest',
    photo: '/realisations/zoltan-budapest.webp',
  },
  {
    key: 'chromosome',
    label: { fr: 'Chromosome · Saint-Étienne', en: 'Chromosome · Saint-Étienne', hu: 'Chromosome · Saint-Étienne' },
    line: {
      fr: 'Tout leur fonctionnement sur un logiciel qui leur appartient.',
      en: 'Everything they run, on software that belongs to them.',
      hu: 'A teljes működésük egy szoftveren, amely az övék.',
    },
    href: '/case-studies/chromosome',
    photo: '/realisations/bandeau/catherine.webp',
  },
  {
    key: 'iut',
    label: { fr: 'IUT de Saint-Étienne · département TC', en: 'IUT de Saint-Étienne · Sales & Marketing dept.', hu: 'IUT de Saint-Étienne · kereskedelmi tanszék' },
    line: {
      fr: 'Un outil construit sur leur cahier des charges, pour que les étudiants prospectent sur un vrai outil.',
      en: 'A tool built on their own specification, so students prospect with a real tool.',
      hu: 'A saját követelményeikre épített eszköz, hogy a hallgatók valódi eszközzel dolgozzanak.',
    },
    href: '/case-studies',
    photo: '/realisations/iut-temoignage-poster.jpg',
  },
]

export default function WorkTiles({ variant = 'home' }: { variant?: 'home' | 'all' }) {
  const { lang } = useLang()
  const d = makeD(lang)
  const tiles = variant === 'home' ? TILES.slice(0, 3) : TILES

  return (
    <section id={variant === 'home' ? 'realisations' : 'tous-les-cas'} className="lx-section" style={{ paddingTop: variant === 'home' ? 0 : 24 }}>
      <div className="lx-wrap">
        {variant === 'home' && (
          <FadeUp>
            <span className="lx-eyebrow">{d('Réalisations', 'Case studies', 'Esettanulmányok')}</span>
            <h2 className="lx-title" style={{ maxWidth: 'none' }}>{d('Ce qui a changé ', 'What changed ', 'Ami megváltozott ')}<span className="accent">{d('chez eux.', 'for them.', 'náluk.')}</span></h2>
          </FadeUp>
        )}

        <div className={`wt-grid${variant === 'all' ? ' wt-grid-all' : ''}`}>
          {tiles.map((t, i) => (
            <FadeUp key={t.key} delay={0.06 * i}>
              <Link href={localizedHref(t.href, lang)} className="wt-tile">
                <div className={`wt-media${t.photo ? '' : ' wt-media-plain'}`}>
                  {t.photo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={t.photo} alt={t.label[lang]} loading="lazy" />
                  ) : (
                    <span className="wt-glyph"><SectorGlyph index={t.glyph ?? 2} /></span>
                  )}
                </div>
                <span className="font-mono wt-label">{t.label[lang]}</span>
                <p className="font-serif italic wt-line">{t.line[lang]}</p>
              </Link>
            </FadeUp>
          ))}
        </div>

        {variant === 'home' && (
          <FadeUp>
            <Link href={localizedHref('/case-studies', lang)} className="lx-link">
              {d('Voir toutes nos réalisations', 'See all our case studies', 'Összes esettanulmány')} <span aria-hidden="true">→</span>
            </Link>
          </FadeUp>
        )}
      </div>

      <style jsx>{`
        .wt-grid {
          margin-top: 64px;
          display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px;
        }
        .wt-grid-all { margin-top: 0; }
        :global(.wt-tile) { display: flex; flex-direction: column; text-decoration: none; color: inherit; }
        .wt-media {
          position: relative; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 4px;
          background: var(--bg-elevated);
        }
        .wt-media img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.6s ease;
        }
        :global(.wt-tile:hover) .wt-media img { transform: scale(1.03); }
        .wt-media-plain {
          display: flex; align-items: center; justify-content: center;
          background: #0e0e12; color: #f0f0f2;
        }
        .wt-glyph { transform: scale(1.6); color: #f0f0f2; }
        .wt-glyph :global(.glyph) { color: #f0f0f2; margin-bottom: 0; }
        .wt-label {
          margin-top: 20px; font-size: 10.5px; letter-spacing: 1.8px; text-transform: uppercase;
          color: var(--text-muted);
        }
        .wt-line {
          margin: 10px 0 0; font-size: clamp(19px, 1.8vw, 22px); font-weight: 400; line-height: 1.3; color: var(--text);
        }
        @media (max-width: 860px) {
          .wt-grid { grid-template-columns: 1fr; gap: 40px; margin-top: 40px; }
          .wt-grid-all { margin-top: 0; }
          .wt-line { font-size: 19px; }
        }
      `}</style>
    </section>
  )
}
