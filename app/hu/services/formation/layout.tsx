import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services/formation',
  title: 'Képzés és támogatás a teljes önállóságig | NateSystem',
  description:
    'Betanítjuk a csapatait, a vezetőtől a terepen dolgozóig, hogy önállóan vigyék a saját egyedi szoftverüket. Teljes dokumentáció, a kód az Öné.',
})

export default function HuServicesFormationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
