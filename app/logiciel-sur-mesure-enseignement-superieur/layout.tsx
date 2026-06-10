import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel sur-mesure pour l\'enseignement supérieur — NateSystem',
  description:
    'CRM pédagogique sur-mesure pour écoles et universités : parcours étudiant, suivi de stages, relance alumni, tout centralisé. Cas réels : 200+ étudiants suivis, 90 %+ d\'adoption. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/logiciel-sur-mesure-enseignement-superieur' },
  openGraph: {
    title: 'Logiciel sur-mesure pour l\'enseignement supérieur — NateSystem',
    description:
      'CRM pédagogique sur-mesure : parcours étudiant, suivi de stages, relance alumni, centralisés. Cas réels : 200+ étudiants suivis, 90 %+ d\'adoption.',
    url: 'https://www.natesystem.com/logiciel-sur-mesure-enseignement-superieur',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel sur-mesure pour l\'enseignement supérieur — NateSystem',
    description: 'CRM pédagogique sur-mesure pour écoles et universités. 200+ étudiants suivis, 90 %+ d\'adoption.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/logiciel-sur-mesure-enseignement-superieur#service',
      name: 'Logiciel sur-mesure pour l\'enseignement supérieur',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'CRM pédagogique, suivi étudiant, gestion des stages, relation alumni',
      audience: { '@type': 'EducationalAudience', educationalRole: 'Écoles, universités, centres de formation' },
      description:
        'Conception et déploiement d\'un CRM pédagogique sur-mesure pour écoles, universités et établissements d\'enseignement supérieur : parcours étudiant, suivi de stages, relance alumni, centralisés dans un seul outil. Code livré, hébergé en UE.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel CRM pour une école ou une université ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un CRM pédagogique sur-mesure remplace l\'empilement de tableurs et d\'outils génériques par un seul système : parcours étudiant, suivi de stages, relance alumni, candidatures. Sur un déploiement réel en enseignement supérieur, 200+ étudiants ont été suivis dans un seul outil avec plus de 90 % d\'adoption par les équipes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Un logiciel sur-mesure est-il adapté à un établissement public ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Les données sont hébergées en UE et le code vous appartient, ce qui correspond aux exigences de souveraineté et de RGPD des établissements publics. NateSystem a notamment travaillé avec l\'Université Jean Monnet et le groupe scolaire Les Chartreux.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Logiciel sur-mesure pour l\'enseignement supérieur', item: 'https://www.natesystem.com/logiciel-sur-mesure-enseignement-superieur' },
      ],
    },
  ],
}

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
