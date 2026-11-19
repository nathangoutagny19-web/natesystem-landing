import type { Metadata } from 'next'
import SectorPillar from '@/components/sector/SectorPillar'
import { PROPERTIES } from '@/lib/pillars'
import { pillarMetadata } from '@/lib/pillar-metadata'

/* Page pilier (stratégie SEO du 19/11/2026), version anglaise.
   L'autre version : /logiciel-gestion-villas-de-luxe. Contenu : lib/pillars.ts. */
export const metadata: Metadata = pillarMetadata(PROPERTIES, 'en')

export default function PropertiesPillarEn() {
  return <SectorPillar pillar={PROPERTIES} />
}
