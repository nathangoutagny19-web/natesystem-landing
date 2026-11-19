import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services',
  title: 'Our services for luxury hospitality | NateSystem',
  description:
    'Diagnostic, bespoke software, automation and training for luxury hotels, concierge services, property managers and yachting. You own the code.',
})

export default function EnServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
