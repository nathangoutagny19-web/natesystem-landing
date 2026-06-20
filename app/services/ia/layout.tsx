import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IA agentique & data analytics — l\'IA qui travaille pour vous | NateSystem',
  description:
    'Une IA agentique avec mémoire persistante qui exécute des tâches de bout en bout, apprend votre métier et s\'améliore avec le temps. Data analytics pour décider sur du concret. Intégrée là où elle remplace de vraies heures. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/services/ia' },
  openGraph: {
    title: 'IA agentique & data analytics — l\'IA qui travaille pour vous | NateSystem',
    description:
      'IA agentique : mémoire persistante, exécution de tâches de bout en bout, apprentissage continu. Data analytics pour piloter sur du concret. Intégrée là où elle remplace de vraies heures.',
    url: 'https://www.natesystem.com/services/ia',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA agentique & data analytics — l\'IA qui travaille pour vous | NateSystem',
    description: 'Une IA agentique qui exécute des tâches, apprend votre métier et s\'améliore avec le temps.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/services/ia#service',
      name: 'IA agentique & data analytics',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'IA agentique, agents autonomes, automatisation, lecture de documents, data analytics, intégration IA',
      audience: { '@type': 'BusinessAudience', audienceType: 'PME et ETI (5 à 100 collaborateurs) avec des tâches répétitives à fort volume' },
      description:
        'Intégration d\'IA agentique et de data analytics dans votre activité : une IA avec mémoire persistante qui exécute des tâches de bout en bout, apprend votre métier et s\'améliore avec le temps. Agents autonomes, automatisation, lecture de documents, analytics prédictif — intégrés uniquement là où ils remplacent de vraies heures de travail. Vos données restent en UE.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que l\'IA agentique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'L\'IA agentique est une IA qui ne se contente pas de répondre : elle exécute des tâches de bout en bout dans vos outils, avec une mémoire persistante du contexte de votre activité. Elle apprend de chaque interaction et s\'améliore avec le temps. Concrètement, elle prend en charge des tâches répétitives, parfois à forte valeur — comme qualifier un lead, lire un document, router une demande, rédiger une première réponse.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelles tâches l\'IA peut-elle automatiser ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Là où ça fait gagner de vraies heures : workflows automatisés (commandes, factures, relances, passations internes), lecture de documents (factures, contrats, formulaires), tri intelligent (classer, router, rédiger des réponses), analytics prédictif (anticiper stock, no-shows, tendances de ventes), qualification de leads, et agents autonomes qui exécutent des tâches multi-étapes dans vos outils. On choisit ce qui vaut le coup pour vous, pas tout parce que c\'est à la mode.',
          },
        },
        {
          '@type': 'Question',
          name: 'À quoi sert la data analytics pour une PME ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La data analytics réunit vos données en temps réel, au même endroit, pour que vous décidiez sur du concret plutôt qu\'au feeling. Tableaux de bord clairs, indicateurs suivis dans le temps, anticipation des tendances. Vous voyez où vous en êtes d\'un coup d\'œil et vous décidez vite.',
          },
        },
        {
          '@type': 'Question',
          name: 'Mes données sont-elles en sécurité avec l\'IA ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vos données sont hébergées en Europe, protégées et conformes RGPD. L\'IA intégrée tourne sous votre contrôle, sur votre infrastructure. Le modèle — Claude, GPT ou auto-hébergé — est choisi selon votre niveau de souveraineté. Vos données ne sortent pas de votre périmètre.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.natesystem.com/services' },
        { '@type': 'ListItem', position: 3, name: 'IA agentique & data analytics', item: 'https://www.natesystem.com/services/ia' },
      ],
    },
  ],
}

export default function IaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
