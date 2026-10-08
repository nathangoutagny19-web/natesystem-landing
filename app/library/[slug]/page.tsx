import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SITE_URL } from '@/lib/constants'
import { ASSETS_PUBLIES, FORMATS, assetParSlug } from '@/lib/bibliotheque'
import RessourceVue from '@/components/bibliotheque/RessourceVue'

/**
 * UNE RESSOURCE, SUR SA PROPRE PAGE.
 *
 * Pour qu'une seule ressource se partage dans un message privé ou un post sans
 * envoyer la personne chercher dans une liste. Indexable : son titre et le
 * problème qu'elle traite sont publics, ses livrables sont derrière la porte,
 * comme sur la page de la bibliothèque.
 *
 * Composant serveur pour les métadonnées et le JSON-LD, qui ne voient pas le
 * LangProvider : la langue leur est passée en argument, et
 * `app/en/bibliotheque/[slug]/page.tsx` réutilise ces fonctions avec 'en'.
 *
 * Seuls les assets PUBLIÉS ont une page (vidéo ou fichier prêt). Un slug prévu
 * mais pas encore produit tombe en 404, il n'existe pas.
 */

type Lang = 'fr' | 'en'

export function generateStaticParams() {
  return ASSETS_PUBLIES.map((a) => ({ slug: a.slug }))
}

/* Un slug hors liste ne doit pas être rendu à la demande : 404 franc. */
export const dynamicParams = false

export function ressourceMetadata(slug: string, lang: Lang): Metadata {
  const a = assetParSlug(slug)
  if (!a) return {}
  const frUrl = `${SITE_URL}/library/${a.slug}`
  const enUrl = `${SITE_URL}/en/library/${a.slug}`
  const titre = lang === 'en' ? a.titreEn : a.titreFr
  const description = lang === 'en' ? a.douleurEn : a.douleurFr
  return {
    title: lang === 'en' ? `${titre} · NateSystem Library` : `${titre} · NateSystem Library`,
    description,
    alternates: {
      canonical: lang === 'en' ? enUrl : frUrl,
      languages: { 'fr-FR': frUrl, en: enUrl, 'x-default': frUrl },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: titre,
      description,
      url: lang === 'en' ? enUrl : frUrl,
      type: 'article',
      locale: lang === 'en' ? 'en_US' : 'fr_FR',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
    },
    twitter: { card: 'summary_large_image', title: titre, description },
  }
}

export function ressourceJsonLd(slug: string, lang: Lang) {
  const a = assetParSlug(slug)!
  const base = lang === 'en' ? `${SITE_URL}/en` : SITE_URL
  const url = `${base}/library/${a.slug}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LearningResource',
        '@id': `${url}#ressource`,
        name: lang === 'en' ? a.titreEn : a.titreFr,
        description: lang === 'en' ? a.douleurEn : a.douleurFr,
        url,
        inLanguage: lang === 'en' ? 'en' : 'fr-FR',
        learningResourceType: lang === 'en' ? FORMATS[a.format].en : FORMATS[a.format].fr,
        timeRequired: `PT${a.dureeMin}M`,
        isAccessibleForFree: true,
        author: { '@type': 'Person', name: 'Nathan Goutagny' },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: lang === 'en' ? 'Library' : 'Bibliothèque', item: `${base}/library` },
          { '@type': 'ListItem', position: 2, name: lang === 'en' ? a.titreEn : a.titreFr, item: url },
        ],
      },
    ],
  }
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return ressourceMetadata(params.slug, 'fr')
}

export default function RessourcePage({ params }: { params: { slug: string } }) {
  if (!assetParSlug(params.slug)) notFound()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ressourceJsonLd(params.slug, 'fr')) }}
      />
      <RessourceVue slug={params.slug} />
    </>
  )
}
