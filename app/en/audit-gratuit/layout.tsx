import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'en',
  path: '/audit-gratuit',
  title: 'Free audit of your organisation | NateSystem',
  description:
    'Leave your website: Nathan looks at where your organisation loses time and clients, then sends you his audit. Free, no commitment, no call.',
})

export default function EnAuditGratuitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
