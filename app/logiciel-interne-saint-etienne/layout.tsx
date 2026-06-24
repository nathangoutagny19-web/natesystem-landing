import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel interne Saint-Étienne : solution sur-mesure entreprise',
  description:
    'Logiciel interne à Saint-Étienne : NateSystem conçoit des solutions logicielles sur-mesure pour entreprise — gestion, données, équipe. Code livré, propriété 100 %, hébergé en UE. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-interne-saint-etienne' },
  openGraph: {
    title: 'Logiciel interne Saint-Étienne : solution sur-mesure entreprise',
    description:
      'Solutions logicielles internes sur-mesure pour entreprise à Saint-Étienne : gestion, données, pilotage. Code livré, propriété 100 %, hébergé en UE.',
    url: 'https://www.natesystem.com/logiciel-interne-saint-etienne',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel interne Saint-Étienne : solution sur-mesure entreprise',
    description: 'Solutions logicielles internes sur-mesure pour entreprise à Saint-Étienne. Code livré, propriété 100 %, hébergé en UE.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://www.natesystem.com/logiciel-interne-saint-etienne#business',
      name: 'NateSystem — Logiciel interne Saint-Étienne',
      url: 'https://www.natesystem.com/logiciel-interne-saint-etienne',
      description:
        'Agence de logiciel interne sur-mesure pour Saint-Étienne : solutions logicielles métier pour entreprise, intégration IA, gestion des données et des process.',
      areaServed: [
        { '@type': 'City', name: 'Saint-Étienne' },
        { '@type': 'AdministrativeArea', name: 'Loire' },
        { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
      ],
      address: { '@type': 'PostalAddress', addressLocality: 'Saint-Étienne', addressRegion: 'Auvergne-Rhône-Alpes', addressCountry: 'FR' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/logiciel-interne-saint-etienne#service',
      name: 'Logiciel interne sur-mesure pour entreprise à Saint-Étienne',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: { '@type': 'City', name: 'Saint-Étienne' },
      serviceType: 'Logiciel interne, logiciel métier sur-mesure, solutions logicielles, intégration IA, gestion de données',
      audience: { '@type': 'BusinessAudience', audienceType: 'Entreprises et PME de Saint-Étienne et de la Loire (5 à 100 collaborateurs)' },
      description:
        'Conception et déploiement de logiciels internes sur-mesure pour les entreprises de Saint-Étienne : outil métier unique, gestion des données, dashboards, IA intégrée. Code source livré, hébergement UE, RGPD-natif.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'un logiciel interne ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un logiciel interne est une application métier développée pour l\'usage propre d\'une entreprise, au lieu d\'un logiciel standard du marché. Il réunit en un seul système ce que vous éparpillez entre tableurs et outils déconnectés : gestion, données, équipe, pilotage. À Saint-Étienne, NateSystem conçoit ces solutions logicielles sur-mesure pour que l\'entreprise en soit propriétaire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi choisir un logiciel interne sur-mesure plutôt qu\'un logiciel standard ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un logiciel standard vous oblige à adapter votre métier à l\'outil et vous le louez à vie. Un logiciel interne sur-mesure est construit autour de vos process réels, votre équipe l\'adopte vite, et votre entreprise en est propriétaire. Il devient rentable dès que vous cumulez plusieurs abonnements qui ne se parlent pas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un logiciel interne à Saint-Étienne ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le prix dépend du périmètre (un process ou une plateforme complète), des intégrations et de l\'IA. Pour une PME stéphanoise, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact (heures et euros gagnés) avant le devis, pendant l\'audit offert.',
          },
        },
        {
          '@type': 'Question',
          name: 'NateSystem intervient-il à Saint-Étienne ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. NateSystem, agence basée à Lyon, accompagne les entreprises de Saint-Étienne, de la Loire et de toute la région Auvergne-Rhône-Alpes. Le développement se fait à distance et en présentiel selon les besoins.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel interne Saint-Étienne', item: 'https://www.natesystem.com/logiciel-interne-saint-etienne' },
      ],
    },
  ],
}

export default function LogicielInterneSaintEtienneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
