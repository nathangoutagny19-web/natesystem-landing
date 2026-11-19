import type { Metadata } from 'next'
import { SITE_URL } from './constants'

/**
 * Ce que les trois layouts racines (fr, en, hu) déclarent tous (19/11/2026).
 *
 * Depuis qu'il y a un layout racine par langue, /en et /hu n'héritent plus
 * du layout français : sans cette base, ils perdraient `metadataBase`, et
 * les images de partage partiraient en URL relative.
 *
 * Volontairement absents : la canonique et les hreflang. Posés sur un layout,
 * ils sont hérités par toute page qui n'en déclare pas, et c'est exactement
 * ce qui envoyait /services vers l'accueil. Chaque page pose les siens.
 */
export const BASE_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: 'Nathan Goutagny', url: SITE_URL }],
  creator: 'Nathan Goutagny',
  robots: { index: true, follow: true },
}
