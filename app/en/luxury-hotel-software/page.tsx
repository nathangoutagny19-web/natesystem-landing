import type { Metadata } from 'next'
import SectorPillar from '@/components/sector/SectorPillar'
import { HOTELS } from '@/lib/pillars'
import { pillarMetadata } from '@/lib/pillar-metadata'

/* Page pilier (stratégie SEO du 19/11/2026), version anglaise.
   L'autre version : /logiciel-hotel-de-luxe-sur-mesure. Contenu : lib/pillars.ts. */
export const metadata: Metadata = pillarMetadata(HOTELS, 'en')

export default function HotelsPillarEn() {
  return <SectorPillar pillar={HOTELS} />
}
