import type { Metadata } from 'next'
import '../globals.css'
import RootShell from '@/components/layout/RootShell'
import { BASE_METADATA } from '@/lib/root-metadata'

/**
 * LE LAYOUT RACINE ANGLAIS (19/11/2026).
 *
 * C'est un layout racine à part entière, au même niveau que `app/(fr)` :
 * le serveur sert donc `<html lang="en">` dès le premier octet, sans
 * script de rattrapage. Tout ce qui est rendu sous /en reçoit `lang="en"`
 * par le LangProvider de RootShell, et les pages de /en ré-exportent leur
 * équivalent français au lieu d'en dupliquer le contenu.
 *
 * La canonique et les hreflang de l'accueil /en sont dans `page.tsx` :
 * posés ici, ils étaient hérités par toutes les pages de l'arbre.
 */

export const metadata: Metadata = {
  ...BASE_METADATA,
  title: 'Custom software for luxury hospitality | NateSystem',
  description:
    'Concierge services, villas, chalets, yachts: software built around the way you serve your clients. You own the code. Get a free audit.',
  /* L'openGraph d'un layout enfant REMPLACE celui du parent, il ne le complète
     pas : sans titre ni url ici, /en partageait le titre français sur X. */
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'NateSystem',
    title: 'Custom software for luxury hospitality | NateSystem',
    description: 'The way you serve your clients is unique. Your software should be too. Concierge services, villas, chalets, yachts. You own the code.',
    images: [{ url: '/og-image-2026-11.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom software for luxury hospitality | NateSystem',
    description: 'The way you serve your clients is unique. Your software should be too.',
    images: ['/og-image-2026-11.png'],
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>
}
