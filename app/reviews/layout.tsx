import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NateSystem · Reviews — Reputation management for restaurants',
  description:
    'AI-powered review intelligence and monthly consulting for restaurants. We run your reputation — collection, response drafting, 90-day action plans — so you don\'t have to.',
  alternates: {
    canonical: 'https://natesystem.com/reviews',
  },
  openGraph: {
    type: 'website',
    url: 'https://natesystem.com/reviews',
    title: 'NateSystem · Reviews — Reputation management for restaurants',
    description:
      'AI-powered review intelligence + human consulting. Free €790 audit for partner referrals, delivered in 3 business days.',
    siteName: 'NateSystem Reviews',
    images: [
      {
        url: '/reviews/04-audit-pdf.png',
        width: 1600,
        height: 1000,
        alt: 'Sample NateSystem Reviews audit PDF',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['fr_FR', 'hu_HU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NateSystem · Reviews — Reputation management for restaurants',
    description: 'We run your restaurant\'s reputation, so you don\'t have to.',
    images: ['/reviews/04-audit-pdf.png'],
  },
}

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
