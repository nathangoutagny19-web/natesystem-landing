import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NateSystem Reviews — Online reputation for restaurants & hospitality',
  description:
    'Turn every guest into a 5-star review. Online reputation management for restaurants, hotels and hospitality businesses — review collection, response, and monthly audits.',
  alternates: {
    canonical: 'https://natesystem.com/reviews',
  },
  openGraph: {
    type: 'website',
    url: 'https://natesystem.com/reviews',
    title: 'NateSystem Reviews — Online reputation for restaurants & hospitality',
    description:
      'Review collection, response and monthly reputation audits for restaurants, hotels and hospitality businesses.',
    siteName: 'NateSystem Reviews',
    // TODO: replace with real /public/reviews/og-image.png 1200×630 once asset lands
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem Reviews' }],
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'hu_HU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NateSystem Reviews — Online reputation for restaurants & hospitality',
    description: 'Turn every guest into a 5-star review.',
    images: ['/og-image.png'],
  },
}

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
