import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel de gestion sur-mesure pour PME | NateSystem',
  description:
    'Logiciel de gestion sur-mesure pour piloter toute votre PME : ventes, opérations, stocks, équipe. Une solution unique qui remplace l\'ERP rigide. Code livré, propriété 100 %, hébergé en UE. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-gestion-sur-mesure' },
  openGraph: {
    title: 'Logiciel de gestion sur-mesure pour PME | NateSystem',
    description:
      'Un logiciel de gestion sur-mesure pour piloter toute l\'activité : ventes, opérations, stocks, équipe. Une solution unique que votre entreprise possède.',
    url: 'https://www.natesystem.com/logiciel-gestion-sur-mesure',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel de gestion sur-mesure pour PME | NateSystem',
    description: 'Une solution de gestion sur-mesure pour piloter toute votre PME. Code livré, propriété 100 %, hébergé en UE.',
  },
}

// Service + FAQ + Breadcrumb (query page, national) — pas de LocalBusiness.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/logiciel-gestion-sur-mesure#service',
      name: 'Logiciel de gestion sur-mesure pour PME',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'France' },
        { '@type': 'AdministrativeArea', name: 'Union européenne' },
      ],
      serviceType: 'Logiciel de gestion sur-mesure, logiciel métier, ERP sur-mesure, solutions logicielles, pilotage d\'activité, gestion des stocks',
      audience: { '@type': 'BusinessAudience', audienceType: 'PME de 5 à 100 collaborateurs en France' },
      description:
        'Conception et déploiement d\'un logiciel de gestion sur-mesure pour piloter toute l\'activité d\'une PME : ventes, opérations, stocks, équipe. Une solution unique qui remplace l\'ERP standard rigide et réunit les outils dispersés. Code source livré, hébergement UE, RGPD-natif.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'un logiciel de gestion sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un logiciel de gestion sur-mesure est une solution développée spécifiquement pour piloter l\'activité d\'une entreprise : ventes, opérations, stocks, équipe. Au lieu d\'un ERP standard auquel vous devez adapter votre métier, il réunit en un seul système ce que vous éparpillez aujourd\'hui entre tableurs et logiciels qui ne se parlent pas. NateSystem conçoit ces solutions pour que votre entreprise en soit propriétaire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle différence entre un logiciel de gestion sur-mesure et un ERP standard ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un ERP standard vous impose ses process et ses écrans : vous adaptez votre métier à l\'outil, vous payez des modules que vous n\'utilisez pas, et vous le louez à vie. Un logiciel de gestion sur-mesure est construit autour de vos process réels, ne contient que ce dont vous avez besoin, et votre entreprise en est propriétaire. L\'adoption par l\'équipe est plus rapide car chaque écran sert une tâche concrète.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que peut piloter un logiciel de gestion sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tout ce qui fait tourner votre activité, dans une seule solution : ventes et devis, opérations et planning, stocks et achats, suivi de l\'équipe, facturation, et tableaux de bord en temps réel. On part de vos process réels et on construit uniquement les modules qui vous servent, avec des intégrations vers vos outils existants quand c\'est utile.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un logiciel de gestion sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le prix dépend du périmètre (un process ou toute la gestion), du nombre d\'intégrations et de la présence d\'IA. Pour une PME, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact en heures et en euros gagnés avant le devis, pendant l\'audit offert.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel de gestion sur-mesure', item: 'https://www.natesystem.com/logiciel-gestion-sur-mesure' },
      ],
    },
  ],
}

export default function LogicielGestionSurMesureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
