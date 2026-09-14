import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services',
  title: 'Our services: custom software, audit & AI | NateSystem',
  description:
    'NateSystem services: audit and consulting, custom software and platforms, agentic AI and data analytics. One base of results, whatever your trade. You own the code, hosted in the EU.',
})

export default function EnServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
