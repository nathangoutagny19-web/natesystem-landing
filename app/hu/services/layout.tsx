import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services',
  title: 'Szolgáltatásaink a luxusvendéglátásnak | NateSystem',
  description:
    'Diagnózis, egyedi rendszer, automatizálás és képzés luxusszállodáknak, concierge-szolgáltatásoknak, ingatlankezelőknek és jachtozásnak. A forráskód az Öné.',
})

export default function HuServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
