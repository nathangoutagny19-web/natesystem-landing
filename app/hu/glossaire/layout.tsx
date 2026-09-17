import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/glossaire',
  title: 'Szójegyzék: egyedi szoftver, MI és automatizálás | NateSystem',
  description:
    'A NateSystem szójegyzéke: az egyedi szoftver, a vállalati MI és az automatizálás fogalmai érthetően. MI-ágens, RAG, ERP, GDPR, no-code, API és a többi.',
})

export default function HuGlossaireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
