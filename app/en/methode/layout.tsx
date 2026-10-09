import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/methode',
  title: 'Our method: we map your organisation before building anything | NateSystem',
  description:
    'The NateSystem method for luxury and prestige hospitality: map, unify, automate, train, then keep evolving with you. We find first where time and clients slip away, then build the bespoke system that fixes it. You own the code.',
})

export default function EnMethodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
