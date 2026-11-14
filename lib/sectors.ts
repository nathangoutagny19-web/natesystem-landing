import type { Lang } from '@/lib/i18n'

/**
 * LA CIBLE DE NATESYSTEM : QUATRE SECTEURS (Nathan, 14 novembre 2026 :
 * « voilà ma cible, que ce soit clair, affiche ça sur mon site »).
 *
 * Source unique pour le menu (« Secteurs »), les tuiles de l'accueil et le
 * détail de la page Services (#secteurs). Remplace les six secteurs du
 * 8 novembre : la sécurité privée et l'événementiel sortent, la conciergerie
 * et le voyage sur mesure ne font plus qu'un, les hôtels de luxe reviennent.
 * La restauration n'y est jamais : règle permanente.
 *
 * `glyph` : le petit dessin du métier (components/home/SectorGlyph.tsx).
 */
export type SectorSlug = 'hotels' | 'conciergerie' | 'proprietes' | 'yachting'

export type SectorInfo = {
  slug: SectorSlug
  glyph: number
  name: Record<Lang, string>
  /** Une ligne, pour la tuile de l'accueil. */
  line: Record<Lang, string>
}

export const SECTOR_LIST: SectorInfo[] = [
  {
    slug: 'hotels',
    glyph: 6,
    name: { fr: 'Hôtels de luxe', en: 'Luxury hotels', hu: 'Luxusszállodák' },
    line: {
      fr: 'Chambres, salles, ménage et équipes sur un seul planning, qui suit chaque changement.',
      en: 'Rooms, function rooms, housekeeping and staff on one planner that follows every change.',
      hu: 'Szobák, termek, takarítás és csapatok egyetlen tervezőn, amely követ minden változást.',
    },
  },
  {
    slug: 'conciergerie',
    glyph: 2,
    name: { fr: 'Conciergerie et travel designers', en: 'Concierge and travel designers', hu: 'Concierge és utazástervezők' },
    line: {
      fr: 'Demandes, devis, itinéraires et partenaires au même endroit, suivis jusqu’à la facture.',
      en: 'Requests, quotes, itineraries and partners in one place, followed through to the invoice.',
      hu: 'Kérések, árajánlatok, útitervek és partnerek egy helyen, a számláig követve.',
    },
  },
  {
    slug: 'proprietes',
    glyph: 1,
    name: { fr: 'Gestion de propriétés', en: 'Property management', hu: 'Ingatlankezelés' },
    line: {
      fr: 'Chaque maison, ses interventions et son propriétaire, suivis.',
      en: 'Every house, its jobs and its owner, kept on track.',
      hu: 'Minden ház, a munkái és a tulajdonosa, nyomon követve.',
    },
  },
  {
    slug: 'yachting',
    glyph: 0,
    name: { fr: 'Yachting et charter', en: 'Yachting and charter', hu: 'Jachtozás és charter' },
    line: {
      fr: 'Devis, dépenses et relevés des propriétaires, bateau par bateau.',
      en: 'Quotes, expenses and owner statements, boat by boat.',
      hu: 'Árajánlatok, kiadások és tulajdonosi kimutatások, hajóról hajóra.',
    },
  },
]

/** Le lien vers le détail d'un secteur, sur la page Services. */
export const sectorHash = (slug: SectorSlug) => `#secteur-${slug}`

/** Événement envoyé par le menu quand on clique un secteur alors qu'on est déjà sur Services. */
export const SECTOR_EVENT = 'ns:sector'
