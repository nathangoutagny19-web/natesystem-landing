import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

/**
 * La page de la bibliothèque est INDEXABLE, son contenu ne l'est pas.
 * Google voit les titres, les problèmes traités et la promesse : c'est ce qui
 * fait venir les gens. Les livrables, eux, sont derrière la porte.
 */
export const metadata: Metadata = {
  title: 'NateSystem Library · l’espace privé de l’hôtellerie de luxe',
  description:
    'Checklists à cocher, modèles à reprendre et consignes à copier pour les villas, domaines, maisons de réception, petits hôtels, conciergeries, chalets et yachts. Accès gratuit avec votre email.',
  keywords: [
    'checklist arrivée client villa',
    'outils conciergerie de luxe',
    'modèle rapport propriétaire location',
    'gestion villa de luxe',
    'NateSystem',
  ],
  alternates: {
    canonical: `${SITE_URL}/library`,
    languages: {
      'fr-FR': `${SITE_URL}/library`,
      en: `${SITE_URL}/en/library`,
      'x-default': `${SITE_URL}/library`,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'NateSystem Library',
    description:
      'Checklists, modèles et grilles de décision pour les métiers de l’accueil haut de gamme.',
    url: `${SITE_URL}/library`,
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function BibliothequeLayout({ children }: { children: React.ReactNode }) {
  return children
}
