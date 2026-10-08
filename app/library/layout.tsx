import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

/**
 * La page de la bibliothèque est INDEXABLE, son contenu ne l'est pas.
 * Google voit les titres, les problèmes traités et la promesse : c'est ce qui
 * fait venir les gens. Les livrables, eux, sont derrière la porte.
 */
export const metadata: Metadata = {
  title: 'La bibliothèque NateSystem · modèles et méthodes pour l’hôtellerie de luxe',
  description:
    'Checklists, modèles, grilles de décision et courtes vidéos pour les villas, domaines, maisons de réception, petits hôtels, conciergeries, chalets et yachts. Tout se voit avant de laisser votre email.',
  keywords: [
    'checklist arrivée client villa',
    'outils conciergerie de luxe',
    'modèle rapport propriétaire location',
    'gestion villa de luxe',
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
      'Checklists, modèles et grilles de décision pour les métiers de l’accueil haut de gamme.',
    url: `${SITE_URL}/bibliotheque`,
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function BibliothequeLayout({ children }: { children: React.ReactNode }) {
  return children
}
