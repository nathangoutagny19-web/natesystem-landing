import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formation des équipes de l\'hôtellerie de prestige, jusqu\'à l\'autonomie | NateSystem',
  description:
    'On forme la réception, la conciergerie, les équipes terrain et la direction à leur outil et à l\'usage de l\'IA au quotidien, jusqu\'à l\'autonomie complète. Documentation pour vos saisonniers, code et données 100 % à vous. Appel offert.',
  keywords: [
    'formation équipes hôtellerie de luxe',
    'formation conciergerie outils et IA',
    'formation logiciel hôtel indépendant',
    'formation IA équipes réception',
    'accompagnement adoption logiciel sur-mesure',
  ],
  alternates: { canonical: 'https://www.natesystem.com/services/formation' },
  openGraph: {
    title: 'Formation des équipes de l\'hôtellerie de prestige, jusqu\'à l\'autonomie | NateSystem',
    description:
      'De la réception à la direction, chaque équipe formée sur son propre outil et sur l\'IA au quotidien. Documentation pour chaque saison. Code et données à vous.',
    url: 'https://www.natesystem.com/services/formation',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formation des équipes de l\'hôtellerie de prestige, jusqu\'à l\'autonomie | NateSystem',
    description: 'Vos équipes formées à leur outil et à l\'IA au quotidien, jusqu\'à ce que tout ne passe plus par vous.',
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
      serviceType: 'Formation des équipes au logiciel sur-mesure et à l\'usage de l\'IA au quotidien, accompagnement, montée en autonomie',
      audience: { '@type': 'BusinessAudience', audienceType: 'Équipes de l\'hôtellerie de luxe et de prestige (réception, conciergerie, équipes terrain, direction) : villas, chalets et domaines, conciergeries de luxe, yachts, hôtels indépendants, lieux de réception et de séminaires, services VIP privés' },
      description:
        'Formation de la réception, de la conciergerie, des équipes terrain et de la direction à leur logiciel sur-mesure et à l\'usage des outils et de l\'IA dans le travail quotidien, jusqu\'à l\'autonomie complète. Formation sur l\'outil réel avec les vraies données, documentation pour former les saisonniers, suivi saison après saison. Le code et les données appartiennent à 100 % au client.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment se passe la formation à l\'outil ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On forme directement sur votre logiciel, avec vos vrais séjours, clients et fournisseurs, pas sur une démo générique. Chaque rôle est formé sur ce qui le concerne : la direction lit ses chiffres, la réception gère les demandes, les équipes terrain savent quoi faire et quand. On montre aussi à chacun comment utiliser l\'IA dans son travail quotidien, et où garder la main.',
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce qu\'on dépend de vous ensuite ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Le code et les données vous appartiennent à 100 %, documentés. Les guides, vidéos et procédures vous permettent de former vos saisonniers et vos prochaines recrues sans nous. On reste à vos côtés saison après saison si vous le souhaitez, mais vous n\'êtes jamais coincé avec personne.',
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
