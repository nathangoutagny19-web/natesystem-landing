import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/a-propos',
  title: 'Rólunk: Nathan Goutagny, a NateSystem alapítója',
  description:
    'Nathan Goutagny, szoftver- és alkalmazott MI-mérnök, Lyonban. A NateSystem alapítója. Évek működő rendszerek építésével francia és magyar cégeknek: vendéglátás, felsőoktatás, tanácsadás.',
})

export default function HuAProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
