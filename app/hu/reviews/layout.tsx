import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/reviews',
  title: 'NateSystem · Reviews, véleményelemző szoftver (demó)',
  description:
    'A NateSystem · Reviews véleményelemző termék: MI-pontozás hat szempont szerint, válaszfogalmazás az Ön márkahangján, 90 napos cselekvési tervek. A demó kitalált adatokon fut, hozzáférés az űrlapon keresztül.',
})

export default function HuReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
