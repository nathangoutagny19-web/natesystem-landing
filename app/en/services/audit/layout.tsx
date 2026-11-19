import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services/audit',
  title: 'Audit & consulting: mapping your processes | NateSystem',
  description:
    'The audit maps your processes, finds what costs you time and money, and gives you a clear, costed action plan. The plan is yours, with or without us.',
})

export default function EnServicesAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
