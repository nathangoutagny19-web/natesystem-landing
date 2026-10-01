import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

/**
 * La page de la bibliothèque est INDEXABLE, son contenu ne l'est pas.
 * Google voit les titres, les problèmes traités et la promesse : c'est ce qui
 * fait venir les gens. Les livrables, eux, sont derrière la porte.
 */
export const metadata: Metadata = {
  title: 'La bibliothèque NateSystem · vidéos et outils pour écoles privées',
  description:
    'Tout ce que NateSystem publie pour les écoles privées, au même endroit : les vidéos, et surtout les cartographies, grilles de décision et modèles qui vont avec. Accès avec votre prénom et votre email.',
  keywords: [
    'ressources école privée',
    'outils gestion établissement scolaire',
    'cartographie comptage heures école',
    'créer outils pédagogiques sans coder',
    'NateSystem',
  ],
  alternates: {
    canonical: `${SITE_URL}/bibliotheque`,
    languages: {
      'fr-FR': `${SITE_URL}/bibliotheque`,
      en: `${SITE_URL}/en/bibliotheque`,
      'x-default': `${SITE_URL}/bibliotheque`,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'La bibliothèque NateSystem',
    description:
      'Les vidéos, et surtout ce qui va avec : cartographies, grilles de décision, modèles à reprendre.',
    url: `${SITE_URL}/bibliotheque`,
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function BibliothequeLayout({ children }: { children: React.ReactNode }) {
  return children
}
