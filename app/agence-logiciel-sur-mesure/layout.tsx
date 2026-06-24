import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agence de logiciel sur-mesure : comment choisir',
  description:
    'Agence de logiciel sur-mesure : NateSystem conçoit des solutions logicielles pour entreprise — audit, périmètre fixe, livraison en 4 à 8 semaines, code livré et propriété 100 %. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/agence-logiciel-sur-mesure' },
  openGraph: {
    title: 'Agence de logiciel sur-mesure : comment choisir',
    description:
      'Comment choisir une agence de logiciel sur-mesure : méthode, périmètre fixe, livraison en 4 à 8 semaines, propriété du code. NateSystem conçoit vos solutions logicielles.',
    url: 'https://www.natesystem.com/agence-logiciel-sur-mesure',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence de logiciel sur-mesure : comment choisir',
    description: 'Comment choisir une agence de logiciel sur-mesure : méthode, périmètre fixe, propriété du code. NateSystem conçoit vos solutions logicielles.',
  },
}

// Service + FAQ + Breadcrumb — national query page (intention : trouver le bon
// prestataire). Pas de LocalBusiness : la requête n'est pas géolocalisée.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/agence-logiciel-sur-mesure#service',
      name: 'Agence de logiciel sur-mesure pour entreprise',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'France' },
        { '@type': 'AdministrativeArea', name: 'Union européenne' },
      ],
      serviceType: 'Développement de logiciel sur-mesure, logiciel métier, solutions logicielles, intégration IA, audit de besoins',
      audience: { '@type': 'BusinessAudience', audienceType: 'Entreprises et PME de 5 à 100 collaborateurs en France' },
      description:
        'Agence de développement de logiciel sur-mesure : audit du besoin, périmètre et prix fixes, livraison en 4 à 8 semaines, code source livré et propriété 100 %. Solutions logicielles métier pour entreprise, avec ou sans IA, hébergées en UE.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'une agence de logiciel sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une agence de logiciel sur-mesure est un prestataire qui conçoit et développe une application métier pour l\'usage propre de votre entreprise, au lieu de vous vendre un logiciel standard. Un bon prestataire part de votre besoin réel, fixe un périmètre et un prix avant de coder, livre une solution logicielle dont vous êtes propriétaire, puis forme votre équipe.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment choisir la bonne agence de développement sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vérifiez quatre points : un audit du besoin avant tout devis, un périmètre et un prix fixes (pas de facturation au temps passé qui dérape), la livraison du code source (vous êtes propriétaire, pas locataire), et un hébergement en UE conforme au RGPD. Un bon prestataire vous dit aussi quand un logiciel standard suffirait — il ne vend pas du sur-mesure pour le principe.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de temps pour développer un logiciel sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une première version utile d\'un logiciel sur-mesure se livre en général en 4 à 8 semaines, à condition que le périmètre soit cadré dès le départ. On commence par le process qui vous fait le plus mal, on le met en production, puis on étend. C\'est la méthode qui évite les projets sans fin.',
          },
        },
        {
          '@type': 'Question',
          name: 'À qui appartient le logiciel développé par l\'agence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Avec NateSystem, le code source est livré et votre entreprise en est propriétaire à 100 %. Vous n\'êtes pas locataire d\'un abonnement : vous pouvez faire évoluer la solution, changer de prestataire ou l\'héberger où vous voulez. Les données restent hébergées en UE, en conformité RGPD.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Agence de logiciel sur-mesure', item: 'https://www.natesystem.com/agence-logiciel-sur-mesure' },
      ],
    },
  ],
}

export default function AgenceLogicielSurMesureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
