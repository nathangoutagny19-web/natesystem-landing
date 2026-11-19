import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/tools',
  title: 'Ingyenes MI-diagnosztika és élő demók | NateSystem',
  description:
    'Az MI-diagnosztika: mennyit pazarol a SaaS-készlete, mennyi időt veszít a csapata, és hol tart az MI-vel. Három beavatkozási pont és letölthető PDF.',
})

export default function HuToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
