import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services',
  title: 'Szolgáltatásaink: egyedi szoftver, audit és MI | NateSystem',
  description:
    'NateSystem-szolgáltatások: audit és tanácsadás, egyedi szoftver és platformok, ágens MI és adatelemzés. Egy eredményalap, bármi is a szakmája. A kód az Öné, EU-s tárhelyen.',
})

export default function HuServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
