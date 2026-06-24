import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel interne Chambéry : solution sur-mesure entreprise',
  description:
    'Logiciel interne à Chambéry : NateSystem conçoit des solutions logicielles sur-mesure pour entreprise en Savoie — gestion, données, équipe. Code livré, propriété 100 %, hébergé en UE. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-interne-chambery' },
  openGraph: {
    title: 'Logiciel interne Chambéry : solution sur-mesure entreprise',
    description:
      'Solutions logicielles internes sur-mesure pour entreprise à Chambéry (Savoie) : gestion, données, pilotage. Code livré, propriété 100 %, hébergé en UE.',
    url: 'https://www.natesystem.com/logiciel-interne-chambery',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel interne Chambéry : solution sur-mesure entreprise',
    description: 'Solutions logicielles internes sur-mesure pour entreprise à Chambéry. Code livré, propriété 100 %, hébergé en UE.',
  },
}

// LocalBusiness + Service + FAQ + Breadcrumb, scoped to Chambéry — drives the local
// pack and AI association for "logiciel interne Chambéry".
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://www.natesystem.com/logiciel-interne-chambery#business',
      name: 'NateSystem — Logiciel interne Chambéry',
      url: 'https://www.natesystem.com/logiciel-interne-chambery',
      description:
        'Agence de logiciel interne sur-mesure à Chambéry : solutions logicielles métier pour entreprise en Savoie, intégration IA, gestion des données et des process.',
      areaServed: [
        { '@type': 'City', name: 'Chambéry' },
        { '@type': 'AdministrativeArea', name: 'Savoie' },
        { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
      ],
      address: { '@type': 'PostalAddress', addressLocality: 'Chambéry', addressRegion: 'Auvergne-Rhône-Alpes', addressCountry: 'FR' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/logiciel-interne-chambery#service',
      name: 'Logiciel interne sur-mesure pour entreprise à Chambéry',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: { '@type': 'City', name: 'Chambéry' },
      serviceType: 'Logiciel interne, logiciel métier sur-mesure, solutions logicielles, intégration IA, gestion de données',
      audience: { '@type': 'BusinessAudience', audienceType: 'Entreprises et PME de Chambéry et de Savoie (5 à 100 collaborateurs)' },
      description:
        'Conception et déploiement de logiciels internes sur-mesure pour les entreprises de Chambéry : outil métier unique, gestion des données, dashboards, IA intégrée. Code source livré, hébergement UE, RGPD-natif.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'un logiciel interne ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un logiciel interne est une application métier développée pour l\'usage propre d\'une entreprise, au lieu d\'un logiciel standard du marché. Il réunit en un seul système ce que vous éparpillez entre tableurs et outils déconnectés : gestion, données, équipe, pilotage. À Chambéry, NateSystem conçoit ces solutions logicielles sur-mesure pour que l\'entreprise en soit propriétaire.',
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
          name: 'Combien coûte un logiciel interne à Chambéry ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le prix dépend du périmètre (un process ou une plateforme complète), des intégrations et de l\'IA. Pour une PME de Savoie, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact (heures et euros gagnés) avant le devis, pendant l\'audit offert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Intervenez-vous uniquement à Chambéry ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NateSystem accompagne les entreprises de Chambéry, de toute la Savoie et de la région Auvergne-Rhône-Alpes, dont Annecy et Lyon. Le travail se fait à distance et en présentiel selon les besoins, partout en France.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel interne Chambéry', item: 'https://www.natesystem.com/logiciel-interne-chambery' },
      ],
    },
  ],
}

export default function LogicielInterneChamberyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
