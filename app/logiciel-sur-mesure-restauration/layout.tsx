import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel sur-mesure pour la restauration — NateSystem',
  description:
    'Le logiciel métier qui pilote un restaurant ou un groupe : cockpit KPI temps réel, contrôle des factures fournisseurs, pointeuse & paie, gestion des avis. Cas réel : ×11 sur le temps de pilotage. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-sur-mesure-restauration' },
  openGraph: {
    title: 'Logiciel sur-mesure pour la restauration — NateSystem',
    description:
      'Cockpit KPI, contrôle factures F&B, pointeuse & paie, gestion des avis — un seul système qui pilote votre restaurant ou votre groupe. Cas réel : ×11 sur le temps de pilotage.',
    url: 'https://www.natesystem.com/logiciel-sur-mesure-restauration',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel sur-mesure pour la restauration — NateSystem',
    description: 'Le logiciel métier qui pilote un restaurant ou un groupe. Cas réel : ×11 sur le temps de pilotage.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/logiciel-sur-mesure-restauration#service',
      name: 'Logiciel sur-mesure pour la restauration',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'Logiciel métier restauration, cockpit KPI, contrôle factures F&B, gestion RH et avis',
      audience: { '@type': 'BusinessAudience', audienceType: 'Restaurants, groupes de restauration, hospitality' },
      description:
        'Conception et déploiement d\'un logiciel métier sur-mesure pour restaurants et groupes de restauration : pilotage des KPI en temps réel, contrôle des factures fournisseurs, pointeuse et paie, gestion de la réputation. Code livré, hébergé en UE.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel logiciel pour piloter un restaurant ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plutôt qu\'un empilement de SaaS (caisse, Excel masse salariale, fournisseurs, avis), un logiciel sur-mesure réunit en un seul système le pilotage des couverts et des KPI, le contrôle des factures fournisseurs, la pointeuse et la paie, et la gestion des avis. Sur un déploiement réel (groupe Chromosome), le temps de pilotage hebdomadaire est passé de 11h à 1h par manager.',
          },
        },
        {
          '@type': 'Question',
          name: 'L\'IA sert-elle vraiment en restauration ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, là où elle remplace de vraies heures : détection automatique des surfacturations et doubles facturations sur les factures fournisseurs (3-5 % de marge récupérée sur les achats F&B), rédaction des réponses aux avis dans votre ton, et synthèse mensuelle de réputation par établissement. Pas d\'IA gadget : seulement là où le ROI est mesurable.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel sur-mesure pour la restauration', item: 'https://www.natesystem.com/logiciel-sur-mesure-restauration' },
      ],
    },
  ],
}

export default function RestaurationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
