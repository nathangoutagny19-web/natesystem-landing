import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NateSystem · Reviews — Review intelligence software (demo)',
  description:
    'NateSystem · Reviews is a review intelligence product: AI scoring on six aspects, response drafting in your brand voice, 90-day action plans. The demo runs on mock data — request access via the form.',
  alternates: {
    canonical: 'https://www.natesystem.com/reviews',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.natesystem.com/reviews',
    title: 'NateSystem · Reviews — Review intelligence software (demo)',
    description:
      'Review intelligence software in demo. AI scoring, response drafts, action plans. Request demo access via the form.',
    siteName: 'NateSystem Reviews',
    images: [
      {
        url: '/reviews/01-reputation-score.png',
        width: 1600,
        height: 1000,
        alt: 'NateSystem · Reviews — reputation score dashboard',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'hu_HU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NateSystem · Reviews — Review intelligence software (demo)',
    description: 'Review intelligence in demo — request access via the form.',
    images: ['/reviews/01-reputation-score.png'],
  },
}

// SoftwareApplication schema — NateSystem · Reviews is a review-intelligence
// product (demo). Eligible for software rich results; clarifies to AI engines.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://www.natesystem.com/reviews#app',
  name: 'NateSystem · Reviews',
  url: 'https://www.natesystem.com/reviews',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Review intelligence software: AI scoring on six aspects, response drafting in your brand voice, 90-day action plans. Demo runs on mock data; request access via the form.',
  provider: { '@id': 'https://www.natesystem.com/#organization' },
}

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
