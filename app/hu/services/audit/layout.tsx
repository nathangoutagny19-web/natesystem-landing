import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services/audit',
  title: 'Audit és tanácsadás: a folyamatai feltérképezése | NateSystem',
  description:
    'Az audit, amely feltérképezi a folyamatait, megmutatja, mi kerül időbe és pénzbe, és világos, beárazott cselekvési tervet ad a kezébe. A terv az Öné marad, velünk vagy nélkülünk. Ingyenes felfedező hívás.',
})

export default function HuServicesAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
