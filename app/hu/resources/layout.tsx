import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/resources',
  title: 'Források: útmutatók, esettanulmányok és videók | NateSystem',
  description:
    'Ellenőrzött ügyfélesetek, gyakorlati útmutatók és anyagok vezetőknek, akik MI-t és egyedi szoftvert akarnak bevinni a cégükbe.',
})

export default function HuResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
