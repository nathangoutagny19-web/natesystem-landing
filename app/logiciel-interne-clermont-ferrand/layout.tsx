import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel interne Clermont-Ferrand : solution sur-mesure',
  description:
    'Logiciel interne à Clermont-Ferrand : NateSystem conçoit des solutions logicielles sur-mesure pour entreprise — gestion, données, équipe. Code livré, propriété 100 %, hébergé en UE. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-interne-clermont-ferrand' },
  openGraph: {
    title: 'Logiciel interne Clermont-Ferrand : solution sur-mesure',
    description:
      'Solutions logicielles internes sur-mesure pour entreprise à Clermont-Ferrand : gestion, données, pilotage. Code livré, propriété 100 %, hébergé en UE.',
    url: 'https://www.natesystem.com/logiciel-interne-clermont-ferrand',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel interne Clermont-Ferrand : solution sur-mesure',
    description: 'Solutions logicielles internes sur-mesure pour entreprise à Clermont-Ferrand. Code livré, propriété 100 %, hébergé en UE.',
  },
}

// LocalBusiness + Service + FAQ + Breadcrumb, scoped to Clermont-Ferrand — drives the local
// pack and AI association for "logiciel interne Clermont-Ferrand".
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': 'https://www.natesystem.com/logiciel-interne-clermont-ferrand#business',
      name: 'NateSystem — Logiciel interne Clermont-Ferrand',
      url: 'https://www.natesystem.com/logiciel-interne-clermont-ferrand',
      description:
        'Agence de logiciel interne sur-mesure pour Clermont-Ferrand : solutions logicielles métier pour entreprise, intégration IA, gestion des données et des process.',
      areaServed: [
        { '@type': 'City', name: 'Clermont-Ferrand' },
        { '@type': 'AdministrativeArea', name: 'Puy-de-Dôme' },
        { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
      ],
      address: { '@type': 'PostalAddress', addressLocality: 'Clermont-Ferrand', addressRegion: 'Auvergne-Rhône-Alpes', addressCountry: 'FR' },
    },
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/logiciel-interne-clermont-ferrand#service',
      name: 'Logiciel interne sur-mesure pour entreprise à Clermont-Ferrand',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: { '@type': 'City', name: 'Clermont-Ferrand' },
      serviceType: 'Logiciel interne, logiciel métier sur-mesure, solutions logicielles, intégration IA, gestion de données',
      audience: { '@type': 'BusinessAudience', audienceType: 'Entreprises et PME de Clermont-Ferrand et du Puy-de-Dôme (5 à 100 collaborateurs)' },
      description:
        'Conception et déploiement de logiciels internes sur-mesure pour les entreprises de Clermont-Ferrand : outil métier unique, gestion des données, dashboards, IA intégrée. Code source livré, hébergement UE, RGPD-natif.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'un logiciel interne ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un logiciel interne est une application métier développée pour l\'usage propre d\'une entreprise, au lieu d\'un logiciel standard du marché. Il réunit en un seul système ce que vous éparpillez entre tableurs et outils déconnectés : gestion, données, équipe, pilotage. À Clermont-Ferrand, NateSystem conçoit ces solutions logicielles sur-mesure pour que l\'entreprise en soit propriétaire.',
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
          name: 'Combien coûte un logiciel interne à Clermont-Ferrand ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le prix dépend du périmètre (un process ou une plateforme complète), des intégrations et de l\'IA. Pour une PME clermontoise, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact (heures et euros gagnés) avant le devis, pendant l\'audit offert.',
          },
        },
        {
          '@type': 'Question',
          name: 'Intervenez-vous uniquement à Clermont-Ferrand ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NateSystem accompagne les entreprises de Clermont-Ferrand, du Puy-de-Dôme et de toute la région Auvergne-Rhône-Alpes, depuis sa base lyonnaise. Le travail se fait à distance et en présentiel selon les besoins, partout en France.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel interne Clermont-Ferrand', item: 'https://www.natesystem.com/logiciel-interne-clermont-ferrand' },
      ],
    },
  ],
}

export default function LogicielInterneClermontFerrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
