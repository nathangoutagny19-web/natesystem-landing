import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/book',
  title: 'Hívás foglalása · ingyenes | NateSystem',
  description:
    'Ingyenes tanácsadói hívás: közösen kiderítjük, érdemes-e együtt dolgoznunk. Egy Önre szabott MI-ütemtervvel távozik, akkor is, ha soha nem dolgozunk együtt.',
})

export default function HuBookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
