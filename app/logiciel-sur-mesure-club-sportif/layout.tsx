import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel & IA sur-mesure pour clubs sportifs — NateSystem',
  description:
    'Logiciel métier et IA sur-mesure pour clubs sportifs : génération automatique des offres de sponsoring (PDF, slides, mail) après vos appels, back-office commercial relié au CRM, gestion des bénévoles. Démo en 2 minutes + audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-sur-mesure-club-sportif' },
  openGraph: {
    title: 'Logiciel & IA sur-mesure pour clubs sportifs — NateSystem',
    description:
      'Génération auto des offres de sponsoring, back-office commercial relié au CRM, gestion des bénévoles — pour clubs sportifs. Démo en 2 minutes.',
    url: 'https://www.natesystem.com/logiciel-sur-mesure-club-sportif',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel & IA sur-mesure pour clubs sportifs — NateSystem',
    description: 'Logiciel & IA sur-mesure pour clubs sportifs : sponsoring, back-office, bénévoles.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/logiciel-sur-mesure-club-sportif#service',
      name: 'Logiciel & IA sur-mesure pour clubs sportifs',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'Génération d\'offres de sponsoring, back-office commercial, CRM, gestion des bénévoles',
      audience: { '@type': 'BusinessAudience', audienceType: 'Clubs sportifs, organisations sportives' },
      description:
        'Conception et déploiement de logiciel métier et d\'IA sur-mesure pour clubs sportifs : génération automatique des offres de sponsoring (PDF, slides, mail) après les appels, back-office commercial relié au CRM, gestion des bénévoles. Code livré, hébergé en UE.',
    },
    {
      '@type': 'VideoObject',
      name: 'Comment un club sportif gagne jusqu\'à 15h par semaine avec l\'IA',
      description:
        'Démo : comment l\'automatisation du back-office commercial (création des offres de sponsoring en PDF) fait gagner des heures de gestion à un club sportif.',
      thumbnailUrl: 'https://i.ytimg.com/vi/4ae5mATIjhw/maxresdefault.jpg',
      uploadDate: '2026-06-01',
      contentUrl: 'https://www.youtube.com/watch?v=4ae5mATIjhw',
      embedUrl: 'https://www.youtube-nocookie.com/embed/4ae5mATIjhw',
      publisher: { '@id': 'https://www.natesystem.com/#organization' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment l\'IA aide-t-elle un club sportif sur la partie sponsoring ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En générant automatiquement les offres de sponsoring et de partenariat — en PDF, slides ou mail — juste après vos appels, reliées à votre CRM. Plus besoin de les composer à la main dans Excel et PowerPoint. L\'objectif : transformer plusieurs heures de back-office commercial par semaine en quelques minutes, dans un système que le club possède.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on aussi gérer les bénévoles avec ce type de logiciel ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. La gestion des bénévoles — planning, attribution des rôles, check-in, communication interne — s\'intègre dans la même infrastructure que le back-office commercial, plutôt que dans un patchwork d\'Excel et de WhatsApp. Un seul système, propriété du club, hébergé en UE.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel & IA pour clubs sportifs', item: 'https://www.natesystem.com/logiciel-sur-mesure-club-sportif' },
      ],
    },
  ],
}

export default function ClubSportifLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
