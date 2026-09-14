import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/tools',
  title: 'NateSystem tools & demos: free AI diagnostic for small companies',
  description:
    'The AI Diagnostic: put a figure on what your SaaS stack wastes, the time your team loses and where you stand on AI, with three priority levers and a downloadable PDF. Plus live demos of real business software.',
})

export default function EnToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
