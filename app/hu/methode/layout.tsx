import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/methode',
  title: 'Módszerünk: átvilágítjuk a cégét, mielőtt bármit építenénk | NateSystem',
  description:
    'A NateSystem módszere négy lépésben: feltérképezés, egységesítés, automatizálás, betanítás. Előbb megértjük, hová megy az ideje és a pénze, aztán megépítjük az egyedi szoftvert, amely visszaszerzi. A kód az Öné.',
})

export default function HuMethodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
