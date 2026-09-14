import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services/audit',
  title: 'Audit & consulting: mapping your processes | NateSystem',
  description:
    'The audit that maps your processes, finds what costs you time and money, and hands you a clear, costed action plan. The plan is yours to keep, with or without us. Free discovery call.',
})

export default function EnServicesAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
