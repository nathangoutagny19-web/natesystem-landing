import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/methode',
  title: 'Our method: we X-ray your business before building anything | NateSystem',
  description:
    'The NateSystem method in four stages: map, unify, automate, train. We find first where your hours and your money go, then build the custom software that wins them back. You own the code.',
})

export default function EnMethodeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
