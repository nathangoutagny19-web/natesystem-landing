import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/tools',
  title: 'Free AI diagnostic and live demos | NateSystem',
  description:
    'The AI Diagnostic: what your SaaS stack wastes, the time your team loses and where you stand on AI, with three priority levers and a PDF. Plus live demos.',
})

export default function EnToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
