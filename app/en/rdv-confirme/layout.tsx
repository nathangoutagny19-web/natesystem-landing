import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'en',
  path: '/rdv-confirme',
  title: 'Your call is confirmed | NateSystem',
  description: 'How our call will go, and the one thing to prepare.',
  robots: { index: false, follow: false },
})

export default function EnRdvConfirmeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
