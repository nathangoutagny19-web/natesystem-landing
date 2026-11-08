import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/audit-gratuit',
  title: 'Ingyenes audit a szervezetének | NateSystem',
  description:
    'Adja meg a weboldalát: Nathan megnézi, hol veszít a szervezete időt és vendégeket, majd elküldi az auditját. Ingyenes, kötelezettség és hívás nélkül.',
})

export default function HuAuditGratuitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
