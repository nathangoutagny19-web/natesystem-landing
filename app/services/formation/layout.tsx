import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation & accompagnement, jusqu\'à l\'autonomie complète | NateSystem',
  description:
    'On forme vos équipes, du dirigeant au terrain, à piloter leur logiciel sur-mesure, jusqu\'à l\'autonomie complète. Documentation complète, code et infrastructure 100 % à vous. Vous ne dépendez de personne. Appel offert.',
  alternates: { canonical: 'https://www.natesystem.com/services/formation' },
  openGraph: {
    title: 'Formation & accompagnement, jusqu\'à l\'autonomie complète | NateSystem',
    description:
      'Formation sur votre propre outil, du dirigeant au terrain. Documentation complète, code à vous. On part quand vos équipes sont autonomes.',
    url: 'https://www.natesystem.com/services/formation',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formation & accompagnement, jusqu\'à l\'autonomie complète | NateSystem',
    description: 'On forme vos équipes à piloter leur outil, jusqu\'à l\'autonomie complète. Vous ne dépendez de personne.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/services/formation#service',
      name: 'Formation & accompagnement',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'Formation logiciel, accompagnement au changement, adoption d\'outil, montée en autonomie',
      audience: { '@type': 'BusinessAudience', audienceType: 'PME et ETI (5 à 100 collaborateurs) qui déploient un logiciel sur-mesure' },
      description:
        'Formation des équipes, du dirigeant au terrain, à l\'usage quotidien de leur logiciel sur-mesure, jusqu\'à l\'autonomie complète. Formation sur l\'outil réel avec les vraies données, documentation complète, accompagnement puis passation. Le code et l\'infrastructure appartiennent à 100 % au client.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment se passe la formation à l\'outil ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On forme directement sur votre logiciel, avec vos vraies données, pas sur une démo générique. Chaque rôle est formé sur ce qui le concerne : le dirigeant apprend à lire ses tableaux de bord, les équipes à piloter leur quotidien. On reste à vos côtés le temps qu\'il faut, puis on vous laisse la main.',
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce qu\'on dépend de vous ensuite ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non, c\'est tout l\'inverse. Le code et l\'infrastructure vous appartiennent à 100 %, documentés. La documentation (guides, vidéos, procédures) vous permet de former vos prochaines recrues sans nous. On reste disponible si vous le souhaitez, mais vous n\'êtes jamais coincé avec personne.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.natesystem.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Formation & accompagnement', item: 'https://www.natesystem.com/services/formation' },
      ],
    },
  ],
}

export default function FormationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
