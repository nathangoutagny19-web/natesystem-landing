import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Le Diagnostic, votre organisation cartographiée avant tout engagement | NateSystem',
  description:
    'Le Diagnostic : on cartographie votre organisation, on repère où se perdent le temps, les erreurs et les clients, et vous cliquez dans un prototype construit sur vos vraies données avant tout engagement. Villas, conciergeries, yachts, hôtels indépendants, lieux de réception. Appel offert.',
  keywords: [
    'diagnostic organisation hôtellerie de luxe',
    'cartographie des process conciergerie',
    'prototype logiciel sur-mesure',
    'audit organisation lieu de réception',
    'feuille de route logiciel hôtel indépendant',
  ],
  alternates: { canonical: 'https://www.natesystem.com/services/audit' },
  openGraph: {
    title: 'Le Diagnostic, votre organisation cartographiée avant tout engagement | NateSystem',
    description:
      'La carte de votre organisation, un prototype cliquable sur vos vraies données, une feuille de route chiffrée. Vous ne préparez rien : vous parlez, on fait le travail.',
    url: 'https://www.natesystem.com/services/audit',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Diagnostic, votre organisation cartographiée avant tout engagement | NateSystem',
    description: 'On repère où se perdent le temps, les erreurs et les clients. Un prototype sur vos vraies données, avant tout engagement.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/services/audit#service',
      name: 'Le Diagnostic',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'Cartographie de l\'organisation, prototype cliquable sur données réelles, feuille de route chiffrée',
      audience: { '@type': 'BusinessAudience', audienceType: 'Organisations de l\'hôtellerie de luxe et de prestige : villas, chalets et domaines, conciergeries de luxe, yachts, hôtels indépendants, lieux de réception et de séminaires, services VIP privés' },
      description:
        'Le Diagnostic est la première étape avec NateSystem : on cartographie comment l\'organisation tourne réellement, on repère où se perdent le temps, les erreurs et les clients, on construit un prototype cliquable sur les vraies données du client, et on remet une feuille de route chiffrée. Le tout avant tout engagement.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'En quoi consiste le Diagnostic ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le Diagnostic commence par un appel offert pour comprendre votre situation. Puis on met à plat ce qui est aujourd\'hui dans les têtes : qui fait quoi, d\'où viennent vos clients, où les demandes et les erreurs se perdent. On construit un prototype cliquable sur vos vraies données, et on vous remet une feuille de route chiffrée : quoi construire, dans quel ordre. Vous ne préparez rien et ne remplissez rien.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que se passe-t-il après le Diagnostic ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Deux options : un partenariat dans la durée, où le système continue d\'évoluer avec votre organisation, saison après saison, ou on s\'arrête là. Sans pression, sans engagement. Ce que vous avez vu reste à vous.',
          },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi un prototype avant de s\'engager ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Parce qu\'un document ne montre pas à quoi ressemblera votre quotidien. Le prototype est construit sur vos règles et vos vraies données : vous et votre équipe cliquez dedans, vous voyez ce qui change pour la réception, la conciergerie ou le terrain, et vous décidez en connaissance de cause.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.natesystem.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Le Diagnostic', item: 'https://www.natesystem.com/services/audit' },
      ],
    },
  ],
}

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
