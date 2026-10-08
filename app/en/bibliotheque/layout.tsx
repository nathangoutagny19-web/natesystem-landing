import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The NateSystem library · templates and methods for luxury hospitality',
  description:
    'Checklists, templates, decision grids and short videos for villas, estates, event venues, boutique hotels, concierge services, chalets and yachts. You see everything before you leave your email.',
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
      'Checklists, templates and decision grids for high-end hospitality.',
    url: `${SITE_URL}/en/bibliotheque`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function BibliothequeEnLayout({ children }: { children: React.ReactNode }) {
  return children
}
