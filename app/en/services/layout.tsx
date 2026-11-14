import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services',
  title: 'Our services for luxury and prestige hospitality | NateSystem',
  description:
    'Diagnostic, bespoke system and online presence, automation and data, training: a long-term partnership for luxury hotels, concierge and travel designers, property management, yachting and charter. You own the code.',
})

export default function EnServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
