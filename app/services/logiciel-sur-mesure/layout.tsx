import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Logiciel sur-mesure pour l\'hôtellerie de prestige, NateSystem',
  description:
    'Le logiciel sur-mesure des villas, chalets, conciergeries de luxe, yachts, hôtels indépendants et lieux de réception : vous saisissez une fois, toute l\'organisation suit. Code 100 % à vous, hébergé en UE, un partenariat qui évolue avec vous. Appel offert.',
  keywords: [
    'logiciel sur-mesure hôtellerie de luxe',
    'logiciel conciergerie de luxe',
    'logiciel gestion villas et chalets',
    'logiciel hôtel indépendant',
    'logiciel lieu de réception séminaire',
    'logiciel gestion yacht',
    'logiciel métier sur-mesure',
  ],
  alternates: { canonical: 'https://www.natesystem.com/services/logiciel-sur-mesure' },
  openGraph: {
    title: 'Logiciel sur-mesure pour l\'hôtellerie de prestige, NateSystem',
    description:
      'Fournisseurs, équipes, séjours et événements, devis, facturation : une seule saisie, toute l\'organisation suit. L\'outil propose, une personne décide. Code livré, hébergé en UE.',
    url: 'https://www.natesystem.com/services/logiciel-sur-mesure',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logiciel sur-mesure pour l\'hôtellerie de prestige, NateSystem',
    description: 'Vous saisissez une fois, toute l\'organisation suit. Code 100 % à vous, hébergé en UE.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/services/logiciel-sur-mesure#service',
      name: 'Logiciel sur-mesure pour l\'hôtellerie de prestige',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: ['FR', 'HU', 'EU'],
      serviceType: 'Logiciel métier sur-mesure : demandes, séjours et événements, fournisseurs, planning des équipes, devis, facturation, suivi des données',
      audience: { '@type': 'BusinessAudience', audienceType: 'Organisations de l\'hôtellerie de luxe et de prestige : villas, chalets et domaines, conciergeries de luxe, yachts, hôtels indépendants, lieux de réception et de séminaires, services VIP privés' },
      description:
        'Un logiciel construit sur la façon dont l\'organisation reçoit ses clients : une demande saisie une fois alimente le planning, le devis et la facture. L\'outil propose, une personne décide. Le code source appartient au client à 100 %, les données sont hébergées en UE, et le système évolue avec l\'organisation dans le cadre d\'un partenariat dans la durée.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'un logiciel sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un logiciel sur-mesure est construit pour votre organisation, au lieu d\'un outil générique loué qui vous oblige à garder Excel ouvert à côté. Il réunit ce qui est aujourd\'hui éparpillé entre WhatsApp, mails, tableurs et la tête d\'une seule personne : demandes, séjours et événements, fournisseurs, équipes, devis, facturation. Le code vous appartient et le logiciel évolue avec votre activité.',
          },
        },
        {
          '@type': 'Question',
          name: 'Logiciel sur-mesure ou SaaS : quelle différence ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un SaaS est un outil standard, loué par abonnement, pensé pour la moyenne. Un logiciel sur-mesure suit votre façon de recevoir vos clients, vous en êtes propriétaire (code livré, pas de lock-in) et il évolue avec vous. Il se justifie dès que vous gardez plusieurs outils et un tableur ouverts pour faire tenir l\'ensemble, et que la même demande est ressaisie plusieurs fois.',
          },
        },
        {
          '@type': 'Question',
          name: 'Est-ce un projet ponctuel ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. NateSystem travaille en partenariat dans la durée : le système évolue avec votre organisation, saison après saison, à mesure que vos besoins changent. Le fondateur code lui-même, sans commercial ni junior entre vous et le logiciel. Et vous restez propriétaire du code à 100 %.',
          },
        },
        {
          '@type': 'Question',
          name: 'À qui appartient le code du logiciel ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '100 % du code vous appartient. Les données sont hébergées en UE, conformes RGPD, et restent chez vous en toute discrétion. Documentation complète incluse : n\'importe quel développeur compétent peut reprendre derrière. Si NateSystem disparaît demain, votre logiciel continue de tourner.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.natesystem.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Logiciel sur-mesure', item: 'https://www.natesystem.com/services/logiciel-sur-mesure' },
      ],
    },
  ],
}

export default function LogicielSurMesureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
