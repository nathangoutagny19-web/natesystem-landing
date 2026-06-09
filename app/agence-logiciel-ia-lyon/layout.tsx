import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence logiciel sur-mesure & IA à Lyon — NateSystem',
  description:
    'NateSystem, agence lyonnaise de logiciel métier sur-mesure et d\'intégration IA pour PME. On construit l\'outil qui pilote votre activité — code livré, propriété 100 %, hébergé en UE. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/agence-logiciel-ia-lyon' },
  openGraph: {
    title: 'Agence logiciel sur-mesure & IA à Lyon — NateSystem',
    description:
      'Agence lyonnaise de logiciel métier sur-mesure et d\'intégration IA pour PME. Code livré, propriété 100 %, hébergé en UE. Audit offert de 20 min.',
    url: 'https://www.natesystem.com/agence-logiciel-ia-lyon',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence logiciel sur-mesure & IA à Lyon — NateSystem',
    description: 'Agence lyonnaise de logiciel métier sur-mesure et d\'intégration IA pour PME.',
  },
}

// Service + LocalBusiness JSON-LD scoped to Lyon — helps Google local pack &
// AI engines associate NateSystem with "agence logiciel / IA Lyon".
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/agence-logiciel-ia-lyon#service',
      name: 'Développement de logiciel sur-mesure et intégration IA',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: { '@type': 'City', name: 'Lyon' },
      serviceType: 'Logiciel métier sur-mesure, intégration IA, automatisation',
      description:
        'Conception et déploiement de logiciels métier sur-mesure avec IA intégrée pour les PME de Lyon et sa région. Code source livré, hébergement UE, RGPD-natif.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Agence logiciel & IA à Lyon', item: 'https://www.natesystem.com/agence-logiciel-ia-lyon' },
      ],
    },
  ],
}

export default function LyonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
