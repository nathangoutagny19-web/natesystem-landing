import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/case-studies',
  title: 'Esettanulmányok: NateSystem ügyfélmunkák',
  description:
    'Valódi eredmények, mérve és dokumentálva. Hogyan váltották ügyfeleink szétszórt eszközeiket egyedi, beépített MI-vel működő szoftverre.',
})

export default function HuCaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
