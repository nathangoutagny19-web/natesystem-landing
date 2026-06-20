import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit & consulting — cartographie de vos process | NateSystem',
  description:
    'L\'audit qui cartographie vos process, identifie ce qui vous fait perdre du temps et de l\'argent, et vous remet un plan d\'action clair et chiffré. Vous repartez avec le plan, même sans nous. Appel découverte offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/services/audit' },
  openGraph: {
    title: 'Audit & consulting — cartographie de vos process | NateSystem',
    description:
      'On cartographie vos process, on repère ce qui bloque, on chiffre le coût de l\'inaction, et on vous remet un plan d\'action clair. Vous repartez avec le plan, même sans nous.',
    url: 'https://www.natesystem.com/services/audit',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audit & consulting — cartographie de vos process | NateSystem',
    description: 'On cartographie vos process et on vous remet un plan d\'action clair et chiffré.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/services/audit#service',
      name: 'Audit & consulting opérationnel',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'Audit opérationnel, cartographie des process, diagnostic IA, plan d\'action chiffré',
      audience: { '@type': 'BusinessAudience', audienceType: 'PME et ETI (5 à 100 collaborateurs) qui veulent structurer avant de digitaliser' },
      description:
        'Audit et consulting opérationnel : on cartographie vos process réels, on identifie ce qui vous fait perdre du temps et de l\'argent, on chiffre le coût de l\'inaction, et on vous remet un plan d\'action clair et chiffré. Vous repartez avec le plan, même si on ne travaille pas ensemble.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'En quoi consiste un audit de process ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un audit de process commence par un appel découverte de 20 min, offert, pour comprendre votre situation. Puis on cartographie votre façon réelle de travailler, on repère ce qui bloque ou ralentit, et on chiffre ce que vous coûte l\'inaction. On dessine la cible — vos opérations telles qu\'elles tourneraient avec un logiciel sur-mesure. Vous repartez avec un plan d\'action clair et chiffré.',
          },
        },
        {
          '@type': 'Question',
          name: 'L\'audit est-il payant ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'L\'appel découverte de 20 minutes est offert. L\'audit de consulting approfondi (cartographie des process, structuration, plan d\'action) est un vrai travail qui suit. Dans tous les cas, vous repartez avec un plan clair que vous pouvez exécuter avec nous, en interne, ou avec un mix.',
          },
        },
        {
          '@type': 'Question',
          name: 'À quoi sert la cartographie des process ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La cartographie des process structure votre activité : qui fait quoi, dans quel ordre, avec quelles infos. C\'est cette base claire qui garantit qu\'on construit le bon outil. On commence par corriger les problèmes fondamentaux pour éviter d\'automatiser des opérations défectueuses, puis on dessine vos workflows tels qu\'ils devraient tourner.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.natesystem.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Audit & consulting', item: 'https://www.natesystem.com/services/audit' },
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
