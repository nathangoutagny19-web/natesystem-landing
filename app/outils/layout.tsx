import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outils gratuits pour PME : gestion de stock & prévision de trésorerie | NateSystem',
  description:
    'Des outils gratuits pour dirigeants de PME et TPE, sans inscription. Logiciel de gestion de stock gratuit et simple, outil de prévision de trésorerie gratuit (tableau prévisionnel entreprise). À tester tout de suite.',
  keywords: [
    'logiciel gestion de stock gratuit PME',
    'logiciel gestion stock TPE simple',
    'outil de prévision de trésorerie gratuit',
    'tableau prévisionnel trésorerie entreprise',
    'outils gratuits PME',
    'gestion de stock en ligne gratuit',
  ],
  alternates: { canonical: 'https://www.natesystem.com/outils' },
  openGraph: {
    title: 'Outils gratuits pour PME : gestion de stock & prévision de trésorerie | NateSystem',
    description:
      'Logiciel de gestion de stock gratuit et outil de prévision de trésorerie gratuit, à tester sans inscription. Des versions gratuites de ce qu’on construit sur-mesure.',
    url: 'https://www.natesystem.com/outils',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outils gratuits pour PME | NateSystem',
    description: 'Gestion de stock gratuite et prévision de trésorerie gratuite, sans inscription.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.natesystem.com/outils#page',
      name: 'Outils gratuits pour PME',
      description:
        'Outils gratuits pour dirigeants de PME et TPE : logiciel de gestion de stock gratuit et outil de prévision de trésorerie gratuit, à tester sans inscription.',
      url: 'https://www.natesystem.com/outils',
      isPartOf: { '@id': 'https://www.natesystem.com/#website' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'NateSystem Stock',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Logiciel de gestion de stock gratuit et simple pour PME et TPE. Visualisez en temps réel ce que vous avez, ce qui manque et ce qui va bientôt manquer. Références, entrées/sorties, seuils d’alerte, fournisseurs, sans inscription.',
      url: 'https://stack-stock.natesystem.com',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      provider: { '@id': 'https://www.natesystem.com/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Le Prévisionnel',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web',
      description:
        'Outil de prévision de trésorerie gratuit pour entreprise. Sachez à quel mois votre trésorerie passe dans le rouge : TVA, salaires, cotisations, échéances et retards de paiement inclus. Tableau prévisionnel clair, sans inscription.',
      url: 'https://natesystem-treso.vercel.app',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      provider: { '@id': 'https://www.natesystem.com/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Outils gratuits', item: 'https://www.natesystem.com/outils' },
      ],
    },
  ],
}

export default function OutilsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
