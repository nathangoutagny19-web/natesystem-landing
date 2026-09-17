import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/tools/diagnostic-ia',
  title: 'Az MI-diagnosztika, a NateSystemtől',
  description:
    '4 perc alatt mérje meg, mennyit veszít a cége havonta kihasználatlan SaaS-eszközökön, ismétlődő munkán és elszalasztott MI-lehetőségeken. Ingyenes riport, e-mail és értékesítési duma nélkül.',
})

export default function HuToolsDiagnosticIaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
