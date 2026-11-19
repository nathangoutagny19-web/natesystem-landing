import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/methode',
  title: 'Módszerünk: előbb feltérképezünk, aztán építünk | NateSystem',
  description:
    'A NateSystem módszere: feltérképezés, egységesítés, automatizálás, képzés, aztán közös továbbfejlesztés. A forráskód az Öné.',
})

export default function HuMethodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
