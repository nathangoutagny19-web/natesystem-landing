import type { Metadata } from 'next'

/**
 * LA LANDING DE L'ATELIER.
 *
 * Page à part, et c'est voulu : un seul lecteur (le chef d'établissement),
 * une seule action (demander l'atelier). Elle ne porte donc ni la nav du
 * site ni son pied de page, qui offriraient douze portes de sortie à une
 * page qui n'a qu'une destination.
 *
 * Français uniquement. Le lecteur est un directeur d'établissement privé
 * français : il n'y a pas de version /en ni /hu, donc pas de hreflang non
 * plus. Déclarer une langue vers une URL qui n'existe pas vaut moins que
 * ne rien déclarer.
 *
 * Elle est indexable : rien à cacher, et une requête de longue traîne qui
 * tombe dessus est une bonne surprise. Mais ce n'est pas une page SEO,
 * d'où la priorité basse dans le sitemap.
 */

export const metadata: Metadata = {
  title: 'Atelier de 3 h offert pour votre équipe pédagogique · NateSystem',
  description:
    'Trois heures offertes à votre équipe pédagogique : chaque professeur construit son propre outil de classe, le teste sur ses vraies copies, et repart avec. Sans développeur, chez vous ou en visio. Trois établissements ce trimestre.',
  keywords: [
    'atelier numérique équipe pédagogique',
    'formation professeurs outils numériques',
    'atelier école privée',
    'créer ses outils pour sa classe',
    'NateSystem',
  ],
  alternates: { canonical: 'https://www.natesystem.com/atelier' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Trois heures offertes à vos professeurs · NateSystem',
    description:
      'Vos professeurs ont tous un tableur qu’ils ont bricolé seuls. En trois heures, ils construisent l’outil qui le remplace.',
    url: 'https://www.natesystem.com/atelier',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trois heures offertes à vos professeurs · NateSystem',
    description:
      'Vos professeurs ont tous un tableur qu’ils ont bricolé seuls. En trois heures, ils construisent l’outil qui le remplace.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.natesystem.com/atelier#page',
      name: 'Atelier de 3 h offert pour votre équipe pédagogique',
      description:
        'Trois heures offertes à l’équipe pédagogique d’un établissement privé : chaque professeur construit son propre outil de classe, le teste, et repart avec.',
      url: 'https://www.natesystem.com/atelier',
      inLanguage: 'fr-FR',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Atelier', item: 'https://www.natesystem.com/atelier' },
      ],
    },
  ],
}

export default function AtelierLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
