import type { Metadata } from 'next'
import SectorPillar from '@/components/sector/SectorPillar'
import { PROPERTIES } from '@/lib/pillars'
import { pillarMetadata } from '@/lib/pillar-metadata'

/* Page pilier (stratégie SEO du 19/11/2026), version française.
   L'autre version : /en/luxury-villa-management-software. Contenu : lib/pillars.ts. */
export const metadata: Metadata = pillarMetadata(PROPERTIES, 'fr')

export default function PropertiesPillarFr() {
  return <SectorPillar pillar={PROPERTIES} />
}
