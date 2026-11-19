import type { Metadata } from 'next'
import '../globals.css'
import RootShell from '@/components/layout/RootShell'
import { BASE_METADATA } from '@/lib/root-metadata'

/**
 * LE LAYOUT RACINE HONGROIS (19/11/2026).
 *
 * C'est un layout racine à part entière, au même niveau que `app/(fr)` :
 * le serveur sert donc `<html lang="hu">` dès le premier octet, sans
 * script de rattrapage. Tout ce qui est rendu sous /hu reçoit `lang="hu"`
 * par le LangProvider de RootShell, et les pages de /hu ré-exportent leur
 * équivalent français au lieu d'en dupliquer le contenu.
 *
 * La canonique et les hreflang de l'accueil /hu sont dans `page.tsx` :
 * posés ici, ils étaient hérités par toutes les pages de l'arbre.
 */

export const metadata: Metadata = {
  ...BASE_METADATA,
  title: 'Egyedi szoftver a luxusvendéglátásnak | NateSystem',
  description:
    'Concierge-szolgáltatások, villák, faházak, jachtok: szoftver, amely ahhoz igazodik, ahogyan Ön a vendégeit kiszolgálja. A forráskód az Öné.',
  /* Même règle qu'en /en : l'openGraph enfant remplace celui du parent. */
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    siteName: 'NateSystem',
    title: 'Egyedi szoftver a luxusvendéglátásnak | NateSystem',
    description: 'Az Ön vendégfogadása egyedi. A szoftvere is legyen az. Concierge-szolgáltatások, villák, faházak, jachtok. A forráskód az Öné.',
    images: [{ url: '/og-image-2026-11.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Egyedi szoftver a luxusvendéglátásnak | NateSystem',
    description: 'Az Ön vendégfogadása egyedi. A szoftvere is legyen az.',
    images: ['/og-image-2026-11.png'],
  },
}

export default function HuLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="hu">{children}</RootShell>
}
