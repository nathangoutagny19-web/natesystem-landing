import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/methode',
  title: 'Módszerünk: feltérképezzük a szervezetét, mielőtt bármit építenénk | NateSystem',
  description:
    'A NateSystem módszere a luxus- és presztízsvendéglátásnak: feltérképezés, egységesítés, automatizálás, képzés, aztán közös továbbfejlesztés. Előbb megértjük, hol vész el az idő és az ügyfél, aztán megépítjük az egyedi rendszert, amely ezt rendezi. A forráskód az Öné.',
})

export default function HuMethodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
