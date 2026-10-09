import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services',
  title: 'Our services for luxury and prestige hospitality | NateSystem',
  description:
    'Diagnostic, bespoke system and online presence, automation and data, training: a long-term partnership for villas, chalets, estates, concierge services, yachts, boutique hotels and event venues. You own the code.',
})

export default function EnServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
