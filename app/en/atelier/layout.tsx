import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'A free 3-hour workshop for your teaching team · NateSystem',
  description:
    'Three hours offered to your teaching team: every teacher builds their own classroom tool, tests it on their own students’ work, and leaves with it. No developer, at your school or online. Three schools this term.',
  keywords: [
    'digital workshop for teachers',
    'build classroom tools without a developer',
    'private school staff training',
    'teacher productivity workshop',
    'NateSystem',
  ],
  /* Le hreflang doit être réciproque sur les trois versions, sinon Google
     écarte la paire. */
  alternates: {
    canonical: `${SITE_URL}/en/atelier`,
    languages: {
      'fr-FR': `${SITE_URL}/atelier`,
      en: `${SITE_URL}/en/atelier`,
      hu: `${SITE_URL}/hu/atelier`,
      'x-default': `${SITE_URL}/atelier`,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Three hours offered to your teachers · NateSystem',
    description:
      'Your teachers all have a spreadsheet they cobbled together alone. In three hours, they build the tool that replaces it.',
    url: `${SITE_URL}/en/atelier`,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Three hours offered to your teachers · NateSystem',
    description:
      'Your teachers all have a spreadsheet they cobbled together alone. In three hours, they build the tool that replaces it.',
  },
}

export default function AtelierEnLayout({ children }: { children: React.ReactNode }) {
  return children
}
