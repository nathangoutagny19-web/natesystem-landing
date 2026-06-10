import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel & IA sur-mesure pour cabinets de conseil — NateSystem',
  description:
    'Logiciel métier et IA sur-mesure pour cabinets de conseil et consultants B2B : relance commerciale automatique, réactivation des contacts dormants, reporting interne auto. Cas réel : conversion 4 % → 12 %. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-sur-mesure-conseil' },
  openGraph: {
    title: 'Logiciel & IA sur-mesure pour cabinets de conseil — NateSystem',
    description:
      'Relance commerciale automatique, réactivation des dormants, reporting interne auto — pour cabinets de conseil et consultants B2B. Cas réel : conversion 4 % → 12 %.',
    url: 'https://www.natesystem.com/logiciel-sur-mesure-conseil',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel & IA sur-mesure pour cabinets de conseil — NateSystem',
    description: 'Logiciel & IA sur-mesure pour cabinets de conseil et consultants B2B. Cas réel : conversion 4 % → 12 %.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/logiciel-sur-mesure-conseil#service',
      name: 'Logiciel & IA sur-mesure pour cabinets de conseil',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'Relance commerciale automatisée, réactivation de contacts, reporting interne, CRM consultant',
      audience: { '@type': 'BusinessAudience', audienceType: 'Cabinets de conseil, consultants B2B, agences' },
      description:
        'Conception et déploiement de logiciel métier et d\'IA sur-mesure pour cabinets de conseil et consultants B2B : relance commerciale automatique, réactivation des contacts dormants, reporting interne automatisé. Code livré, hébergé en UE.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Comment l\'IA aide-t-elle un cabinet de conseil à vendre plus ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En automatisant la relance : 3 à 5 messages personnalisés sur 2-3 semaines, qui s\'arrêtent dès que le prospect répond. Chez des clients consultants B2B, ce système a fait passer la conversion de 4 % à 12 %. L\'IA réactive aussi les contacts dormants — anciens clients, prospects fantômes — sans budget publicitaire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Un consultant peut-il automatiser son reporting sans changer d\'outils ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Le système collecte les données du CRM, de la comptabilité et des projets, les analyse et pousse une synthèse dans Slack ou Teams — sans nouveau dashboard à consulter. Le temps facturable récupéré finance l\'outil dès les premières semaines.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel & IA pour cabinets de conseil', item: 'https://www.natesystem.com/logiciel-sur-mesure-conseil' },
      ],
    },
  ],
}

export default function ConseilLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
