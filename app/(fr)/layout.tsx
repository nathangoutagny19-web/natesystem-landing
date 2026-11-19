import type { Metadata } from 'next'
import '../globals.css'
import RootShell from '@/components/layout/RootShell'
import { BASE_METADATA } from '@/lib/root-metadata'

/**
 * LE LAYOUT RACINE FRANÇAIS (19/11/2026).
 *
 * Le groupe `(fr)` ne change aucune adresse : il existe pour que le français,
 * l'anglais (`app/en`) et le hongrois (`app/hu`) aient chacun leur layout
 * racine, donc leur propre `<html lang>`. Le socle commun (police, schéma
 * Organization, WhatsApp, cookies, analytics) vit dans RootShell.
 */

export const metadata: Metadata = {
  ...BASE_METADATA,
  /* Title ≤ 60 et description ≤ 155 caractères : au-delà, Google coupe (08/11/2026). */
  title: 'Logiciel sur mesure pour l’hospitalité de luxe | NateSystem',
  description:
    'Conciergeries, villas, chalets, yachts : un logiciel construit autour de votre façon de servir vos clients. Le code vous appartient. Audit gratuit.',
  keywords: [
    'logiciel sur mesure conciergerie de luxe',
    'logiciel gestion villa de luxe',
    'logiciel maison de réception',
    'logiciel hôtel de groupe sur mesure',
    'site internet conciergerie de luxe',
    'suivi des demandes clients hospitalité',
    'NateSystem',
    'Nathan Goutagny',
  ],
  /* PAS de canonique ni de hreflang ici (19/11/2026). Posés à la racine, ils
     étaient hérités par toute page qui n'en déclarait pas : /services et
     /politique-anti-spam disaient à Google « l'original, c'est l'accueil ».
     L'accueil déclare les siens dans app/page.tsx, chaque page les siens. */
  openGraph: {
    type: 'website',
    title: 'Logiciel sur mesure pour l’hospitalité de luxe | NateSystem',
    description:
      'Votre façon de servir vos clients est unique. Votre logiciel devrait l’être aussi. Conciergeries, villas, chalets, yachts. Le code vous appartient.',
    siteName: 'NateSystem',
    images: [{ url: '/og-image-2026-11.png', width: 1200, height: 630, alt: 'NateSystem' }],
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'hu_HU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel sur mesure pour l’hospitalité de luxe | NateSystem',
    description: 'Votre façon de servir vos clients est unique. Votre logiciel devrait l’être aussi.',
    images: ['/og-image-2026-11.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>
}
