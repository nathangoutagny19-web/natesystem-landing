import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/tools',
  title: 'NateSystem eszközök és demók: ingyenes MI-diagnosztika kkv-knak',
  description:
    'Az MI-diagnosztika: számszerűsítse, mennyit pazarol a SaaS-készlete, mennyi időt veszít a csapata, és hol tart az MI-vel. Három kiemelt beavatkozási ponttal és letölthető PDF-fel. Plusz élő demók valódi üzleti szoftverekből.',
})

export default function HuToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
