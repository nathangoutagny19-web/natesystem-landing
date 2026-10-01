import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The NateSystem library · videos and tools for private schools',
  description:
    'Everything NateSystem publishes for private schools, in one place: the videos, and above all the maps, decision grids and templates that come with them. Access with your first name and email.',
  alternates: {
    canonical: `${SITE_URL}/en/bibliotheque`,
    languages: {
      'fr-FR': `${SITE_URL}/bibliotheque`,
      en: `${SITE_URL}/en/bibliotheque`,
      'x-default': `${SITE_URL}/bibliotheque`,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'The NateSystem library',
    description:
      'The videos, and above all what comes with them: maps, decision grids, templates to reuse.',
    url: `${SITE_URL}/en/bibliotheque`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function BibliothequeEnLayout({ children }: { children: React.ReactNode }) {
  return children
}
