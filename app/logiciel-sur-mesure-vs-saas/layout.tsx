import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel sur-mesure vs SaaS : lequel choisir pour votre PME ?',
  description:
    'Comparatif honnête entre logiciel métier sur-mesure et abonnement SaaS pour une PME : coût réel, propriété, adaptation, lock-in, données. Quand chacun a du sens — et comment décider.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-sur-mesure-vs-saas' },
  openGraph: {
    title: 'Logiciel sur-mesure vs SaaS : lequel choisir pour votre PME ?',
    description:
      'Comparatif honnête : coût réel, propriété, adaptation, lock-in, données. Quand le sur-mesure bat le SaaS — et quand non.',
    url: 'https://www.natesystem.com/logiciel-sur-mesure-vs-saas',
    type: 'article',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel sur-mesure vs SaaS : lequel choisir pour votre PME ?',
    description: 'Comparatif honnête sur-mesure vs SaaS pour une PME : coût, propriété, lock-in, données.',
  },
}

// FAQPage + Breadcrumb JSON-LD — the comparison's key questions, citable by AI.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Logiciel sur-mesure ou SaaS : lequel coûte le moins cher ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le SaaS coûte moins cher à l\'entrée mais devient plus cher dans la durée : l\'abonnement court à vie et grimpe avec le nombre d\'utilisateurs. Le sur-mesure demande un investissement initial plus élevé, puis ne coûte que l\'hébergement et la maintenance. Le point de bascule se situe généralement entre 2 et 4 ans selon le nombre d\'utilisateurs et d\'outils remplacés.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quand choisir un logiciel sur-mesure plutôt qu\'un SaaS ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le sur-mesure a du sens quand vos process sont spécifiques, quand vous empilez plusieurs SaaS qui ne se parlent pas, quand vous voulez être propriétaire de votre outil et de vos données, ou quand le coût cumulé de vos abonnements dépasse celui d\'un système qui vous appartiendrait. Le SaaS reste pertinent pour un besoin standard et ponctuel.',
          },
        },
        {
          '@type': 'Question',
          name: 'Est-on propriétaire d\'un logiciel sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, à 100 % si le prestataire vous livre le code source. Chez NateSystem, le code et l\'infrastructure vous appartiennent, hébergés chez vous, sans lock-in ni abonnement otage. Un SaaS, lui, ne vous appartient jamais : vous louez un accès.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel sur-mesure vs SaaS', item: 'https://www.natesystem.com/logiciel-sur-mesure-vs-saas' },
      ],
    },
  ],
}

export default function VsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
