import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/tools/diagnostic-ia',
  title: 'The AI Diagnostic, by NateSystem',
  description:
    'In 4 minutes, measure what your company loses each month in unused SaaS, repetitive work and missed AI opportunities. Free report, no email, no pitch.',
})

export default function EnToolsDiagnosticIaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
