import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel interne Grenoble : solution sur-mesure entreprise',
  description:
    'Logiciel interne à Grenoble : NateSystem conçoit des solutions logicielles sur-mesure pour entreprise — gestion, données, équipe. Code livré, propriété 100 %, hébergé en UE. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-interne-grenoble' },
  openGraph: {
    title: 'Logiciel interne Grenoble : solution sur-mesure entreprise',
    description:
      'Solutions logicielles internes sur-mesure pour entreprise à Grenoble : gestion, données, pilotage. Code livré, propriété 100 %, hébergé en UE.',
    url: 'https://www.natesystem.com/logiciel-interne-grenoble',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel interne Grenoble : solution sur-mesure entreprise',
    description: 'Solutions logicielles internes sur-mesure pour entreprise à Grenoble. Code livré, propriété 100 %, hébergé en UE.',
  },
}

// LocalBusiness + Service + FAQ + Breadcrumb, scoped to Grenoble — drives the local
// pack and AI association for "logiciel interne Grenoble".
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://www.natesystem.com/logiciel-interne-grenoble#business',
      name: 'NateSystem — Logiciel interne Grenoble',
      url: 'https://www.natesystem.com/logiciel-interne-grenoble',
      description:
        'Agence de logiciel interne sur-mesure à Grenoble : solutions logicielles métier pour entreprise et PME industrielles, intégration IA, gestion des données et des process.',
      areaServed: [
        { '@type': 'City', name: 'Grenoble' },
        { '@type': 'AdministrativeArea', name: 'Isère' },
        { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
      ],
      address: { '@type': 'PostalAddress', addressLocality: 'Grenoble', addressRegion: 'Auvergne-Rhône-Alpes', addressCountry: 'FR' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/logiciel-interne-grenoble#service',
      name: 'Logiciel interne sur-mesure pour entreprise à Grenoble',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: { '@type': 'City', name: 'Grenoble' },
      serviceType: 'Logiciel interne, logiciel métier sur-mesure, solutions logicielles, intégration IA, gestion de données',
      audience: { '@type': 'BusinessAudience', audienceType: 'Entreprises et PME de Grenoble et de l\'Isère (5 à 100 collaborateurs)' },
      description:
        'Conception et déploiement de logiciels internes sur-mesure pour les entreprises de Grenoble : outil métier unique, gestion des données, dashboards, IA intégrée. Adapté aux PME industrielles et technologiques aux process complexes. Code source livré, hébergement UE, RGPD-natif.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'un logiciel interne ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un logiciel interne est une application métier développée pour l\'usage propre d\'une entreprise, au lieu d\'un logiciel standard du marché. Il réunit en un seul système ce que vous éparpillez entre tableurs et outils déconnectés : gestion, données, équipe, pilotage. À Grenoble, NateSystem conçoit ces solutions logicielles sur-mesure pour que l\'entreprise en soit propriétaire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Un logiciel interne convient-il aux PME industrielles et technologiques de Grenoble ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Les entreprises de l\'écosystème grenoblois — industrie, microélectronique, deep tech — ont souvent des process complexes qu\'aucun logiciel standard ne couvre vraiment. Un logiciel interne sur-mesure est précisément conçu autour de ces process et de la donnée propre à votre métier, sans vous obliger à plier votre activité à un outil générique.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un logiciel interne à Grenoble ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le prix dépend du périmètre (un process ou une plateforme complète), des intégrations et de l\'IA. Pour une PME grenobloise, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact (heures et euros gagnés) avant le devis, pendant l\'audit offert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Intervenez-vous uniquement à Grenoble ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NateSystem est basé à Lyon et accompagne les entreprises de Grenoble, de l\'Isère et de toute la région Auvergne-Rhône-Alpes. Le travail se fait à distance et en présentiel selon les besoins, partout en France.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel interne Grenoble', item: 'https://www.natesystem.com/logiciel-interne-grenoble' },
      ],
    },
  ],
}

export default function LogicielInterneGrenobleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
