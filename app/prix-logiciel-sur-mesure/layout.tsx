import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prix d\'un logiciel sur-mesure en 2026 : combien prévoir ?',
  description:
    'Combien coûte un logiciel métier sur-mesure pour une PME en 2026 ? Les fourchettes réalistes, les facteurs qui font le prix, et comment le comparer au coût cumulé de vos SaaS. Chiffrage précis lors d\'un appel offert.',
  alternates: { canonical: 'https://www.natesystem.com/prix-logiciel-sur-mesure' },
  openGraph: {
    title: 'Prix d\'un logiciel sur-mesure en 2026 : combien prévoir ?',
    description:
      'Fourchettes réalistes, facteurs de prix, et comparaison avec le coût cumulé de vos SaaS. Chiffrage précis lors d\'un appel offert.',
    url: 'https://www.natesystem.com/prix-logiciel-sur-mesure',
    type: 'article',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prix d\'un logiciel sur-mesure en 2026 : combien prévoir ?',
    description: 'Fourchettes réalistes et facteurs de prix d\'un logiciel métier sur-mesure pour PME.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien coûte un logiciel sur-mesure pour une PME ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pour une PME, un premier logiciel métier sur-mesure se situe généralement entre 15 000 et 50 000 € en investissement initial selon le périmètre, puis 100 à 500 €/mois d\'hébergement et de maintenance. Une infrastructure plus complète avec IA intégrée démarre autour de 2 000 €/mois en conception + maintenance. Le prix exact dépend du nombre d\'écrans, d\'intégrations et de la complexité métier.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qui fait varier le prix d\'un logiciel sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Quatre facteurs : le périmètre fonctionnel (nombre d\'écrans et de workflows), le nombre d\'intégrations avec vos outils existants, la complexité de la logique métier, et la présence ou non d\'IA (agents, automatisation, analytics). Un périmètre fixé clairement en amont permet un prix fixe, sans dérive.',
          },
        },
        {
          '@type': 'Question',
          name: 'Un logiciel sur-mesure est-il plus cher qu\'un SaaS ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Plus cher à l\'entrée, moins cher dans la durée. Un SaaS court à vie et grimpe avec le nombre d\'utilisateurs ; le sur-mesure est un investissement ponctuel qui vous appartient ensuite. Le point de bascule se situe souvent entre 2 et 4 ans selon le nombre d\'abonnements remplacés.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Prix d\'un logiciel sur-mesure', item: 'https://www.natesystem.com/prix-logiciel-sur-mesure' },
      ],
    },
  ],
}

export default function PrixLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
