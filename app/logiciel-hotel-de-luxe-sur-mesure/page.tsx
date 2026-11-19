import type { Metadata } from 'next'
import SectorPillar from '@/components/sector/SectorPillar'
import { HOTELS } from '@/lib/pillars'
import { pillarMetadata } from '@/lib/pillar-metadata'

/* Page pilier (stratégie SEO du 19/11/2026), version française.
   L'autre version : /en/luxury-hotel-software. Contenu : lib/pillars.ts. */
export const metadata: Metadata = pillarMetadata(HOTELS, 'fr')

export default function HotelsPillarFr() {
  return <SectorPillar pillar={HOTELS} />
}
