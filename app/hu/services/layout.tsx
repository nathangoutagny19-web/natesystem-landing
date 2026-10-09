import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services',
  title: 'Szolgáltatásaink a luxus- és presztízsvendéglátásnak | NateSystem',
  description:
    'Diagnózis, egyedi rendszer és online megjelenés, automatizálás és adatok, képzés: hosszú távú partnerség villáknak, faházaknak, birtokoknak, concierge-szolgáltatásoknak, jachtoknak, független szállodáknak és rendezvényházaknak. A forráskód az Öné.',
})

export default function HuServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
