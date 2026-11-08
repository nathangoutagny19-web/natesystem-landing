import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'fr',
  path: '/audit-gratuit',
  title: 'Audit gratuit de votre organisation | NateSystem',
  description:
    'Laissez votre site : Nathan regarde où votre organisation perd du temps et des clients, puis vous envoie son audit. Gratuit, sans engagement, sans appel.',
})

export default function AuditGratuitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
