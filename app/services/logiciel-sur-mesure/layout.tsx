import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel & plateforme sur-mesure — NateSystem',
  description:
    'Le logiciel métier sur-mesure qui réunit vos outils et vos données en une seule plateforme — base unifiée, dashboards, portails, outils internes. Vous êtes propriétaire du code, hébergé en UE. En production en 4 à 8 semaines. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/services/logiciel-sur-mesure' },
  openGraph: {
    title: 'Logiciel & plateforme sur-mesure — NateSystem',
    description:
      'Un seul logiciel sur-mesure pour piloter votre activité : base de données unifiée, dashboards, portails clients, outils internes. Code livré, hébergé en UE, en 4 à 8 semaines.',
    url: 'https://www.natesystem.com/services/logiciel-sur-mesure',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel & plateforme sur-mesure — NateSystem',
    description: 'Un seul logiciel sur-mesure qui pilote votre activité. Vous êtes propriétaire, hébergé en UE.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/services/logiciel-sur-mesure#service',
      name: 'Logiciel & plateforme sur-mesure',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'Développement de logiciel métier sur-mesure, plateforme interne, base de données unifiée, dashboards, portails et outils internes',
      audience: { '@type': 'BusinessAudience', audienceType: 'PME et ETI (5 à 100 collaborateurs) avec des opérations récurrentes' },
      description:
        'Conception et déploiement d\'un logiciel métier sur-mesure : on réunit vos outils et vos données dans une seule plateforme conçue pour votre activité — base de données unifiée, dashboards, portails clients, outils internes. Le code source vous appartient, hébergé sur votre infrastructure en UE, en production en 4 à 8 semaines.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'un logiciel sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un logiciel sur-mesure est une application métier conçue spécifiquement pour votre façon de travailler, au lieu d\'un SaaS générique que vous louez. Il réunit en un seul système ce que vous éparpillez aujourd\'hui entre tableurs, mails et outils déconnectés : base de données unifiée, dashboards, portails clients, outils internes. Le code vous appartient et il évolue avec votre activité.',
          },
        },
        {
          '@type': 'Question',
          name: 'Logiciel sur-mesure ou SaaS : quelle différence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un SaaS est un outil standard, loué par abonnement, que vous adaptez à votre métier. Un logiciel sur-mesure est construit autour de votre métier, vous en êtes propriétaire (code livré, pas d\'abonnement à vie, pas de lock-in) et il est hébergé sur votre infrastructure. Le sur-mesure devient rentable quand vous payez plusieurs SaaS qui ne se parlent pas et perdez des heures à les faire communiquer.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de temps pour développer un logiciel sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '4 à 8 semaines pour la première version, selon le périmètre. Le périmètre et la date de livraison sont fixés avant la première ligne de code, avec un point chaque semaine. Vos équipes continuent de travailler normalement pendant qu\'on construit autour d\'elles. Puis on déploie sur votre infrastructure et on forme vos équipes jusqu\'à l\'autonomie.',
          },
        },
        {
          '@type': 'Question',
          name: 'À qui appartient le code du logiciel ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '100 % du code vous appartient et est hébergé sur votre infrastructure, en UE, conforme RGPD. Documentation complète incluse : n\'importe quel développeur compétent peut reprendre derrière. Zéro abonnement, zéro lock-in. Si NateSystem disparaît demain, votre logiciel continue de tourner.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.natesystem.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Logiciel & plateforme sur-mesure', item: 'https://www.natesystem.com/services/logiciel-sur-mesure' },
      ],
    },
  ],
}

export default function LogicielSurMesureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
