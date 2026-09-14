import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services/ia',
  title: 'Agentic AI & data analytics: AI that works for you | NateSystem',
  description:
    'Agentic AI with a lasting memory that runs tasks end to end, learns your trade and improves over time. Data analytics so you decide on facts. Built in only where it replaces real hours. Free audit.',
})

export default function EnServicesIaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
