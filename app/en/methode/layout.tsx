import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/methode',
  title: 'Our method: map your operation, then build | NateSystem',
  description:
    'Map, unify, automate, train, then keep improving. We first find where time and clients slip away, then build the system that fixes it. You own the code.',
})

export default function EnMethodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
