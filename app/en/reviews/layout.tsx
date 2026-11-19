import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/reviews',
  title: 'NateSystem · Reviews, review intelligence software (demo)',
  description:
    'NateSystem · Reviews reads your guest reviews: a score on six aspects, replies in your brand voice, a 90-day action plan. The demo runs on sample data.',
})

export default function EnReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
