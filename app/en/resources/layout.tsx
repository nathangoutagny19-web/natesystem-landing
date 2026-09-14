import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/resources',
  title: 'Resources: guides, case studies & videos | NateSystem',
  description:
    'Verified client cases, practical guides and resources for owners who want to bring AI and custom software into their company.',
})

export default function EnResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
