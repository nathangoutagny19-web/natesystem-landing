import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'NateSystem Library · the private library for luxury hospitality',
  description:
    'Checklists to tick off, templates to reuse and prompts to copy for villas, estates, event venues, boutique hotels, concierge services, chalets and yachts. Free access with your email.',
  alternates: {
    canonical: `${SITE_URL}/en/library`,
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
      'Checklists, templates and decision grids for high-end hospitality.',
    url: `${SITE_URL}/en/library`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function BibliothequeEnLayout({ children }: { children: React.ReactNode }) {
  return children
}
