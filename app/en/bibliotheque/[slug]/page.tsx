import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ASSETS_PUBLIES, assetParSlug } from '@/lib/bibliotheque'
import RessourceVue from '@/components/bibliotheque/RessourceVue'
import { ressourceJsonLd, ressourceMetadata } from '../../../bibliotheque/[slug]/page'

/**
 * `/en/bibliotheque/[slug]` : la même page, servie en anglais. La langue du
 * contenu vient de `app/en/layout.tsx`, celle des métadonnées est passée ici.
 */

export function generateStaticParams() {
  return ASSETS_PUBLIES.map((a) => ({ slug: a.slug }))
}

/* Écrit ici et pas ré-exporté : Next lit la configuration de segment par
   analyse statique du fichier, une ré-exportation passerait inaperçue. */
export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return ressourceMetadata(params.slug, 'en')
}

export default function RessourcePageEn({ params }: { params: { slug: string } }) {
  if (!assetParSlug(params.slug)) notFound()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ressourceJsonLd(params.slug, 'en')) }}
      />
      <RessourceVue slug={params.slug} />
    </>
  )
}
