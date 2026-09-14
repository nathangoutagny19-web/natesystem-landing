import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/reviews',
  title: 'NateSystem · Reviews, review intelligence software (demo)',
  description:
    'NateSystem · Reviews is a review intelligence product: AI scoring on six aspects, response drafting in your brand voice, 90-day action plans. The demo runs on mock data, request access via the form.',
})

export default function EnReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
