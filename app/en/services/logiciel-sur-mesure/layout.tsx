import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/services/logiciel-sur-mesure',
  title: 'Bespoke software for villas, concierges, yachts, hotels',
  description:
    'Bespoke software for villas, luxury concierges, yachts and hotels: enter it once, the whole team follows. You own the code. Free audit.',
})

export default function EnServicesLogicielSurMesureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
