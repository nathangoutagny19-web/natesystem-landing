import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/a-propos',
  title: 'Rólunk: Nathan Goutagny, a NateSystem alapítója',
  description:
    'Nathan Goutagny, szoftver- és alkalmazott MI-mérnök, a NateSystem alapítója, Montenegróban és Franciaországban. Egyedi szoftverek a luxusvendéglátásnak.',
})

export default function HuAProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
