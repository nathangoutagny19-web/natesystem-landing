import type { Metadata } from 'next'
import SectorPillar from '@/components/sector/SectorPillar'
import { YACHTING } from '@/lib/pillars'
import { pillarMetadata } from '@/lib/pillar-metadata'

/* Yachting pillar page, English version (SEO strategy of 19/11/2026).
   The French version: /logiciel-gestion-yacht-sur-mesure. */
export const metadata: Metadata = pillarMetadata(YACHTING, 'en')

export default function YachtingPillarEn() {
  return <SectorPillar pillar={YACHTING} />
}
