import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/book',
  title: 'Book a call · free | NateSystem',
  description:
    'A free consulting call: we work out together whether we should work together. You leave with a custom AI roadmap, even if we never work together.',
})

export default function EnBookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
