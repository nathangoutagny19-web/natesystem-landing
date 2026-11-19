import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services/audit',
  title: 'Audit: a folyamatai feltérképezése | NateSystem',
  description:
    'Az audit feltérképezi a folyamatait, megmutatja, mi kerül időbe és pénzbe, és beárazott cselekvési tervet ad. A terv az Öné marad, velünk vagy nélkülünk.',
})

export default function HuServicesAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
