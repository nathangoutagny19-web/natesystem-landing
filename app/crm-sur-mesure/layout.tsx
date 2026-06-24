import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CRM sur-mesure : le logiciel taillé pour votre vente',
  description:
    'CRM sur-mesure : NateSystem conçoit un logiciel de suivi prospects, relances et pipeline calé sur votre cycle de vente réel, avec IA intégrée. Code livré, propriété 100 %, hébergé en UE. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/crm-sur-mesure' },
  openGraph: {
    title: 'CRM sur-mesure : le logiciel taillé pour votre vente',
    description:
      'Un CRM sur-mesure calé sur votre cycle de vente réel : suivi prospects, relances, pipeline, IA intégrée. Code livré, propriété 100 %, hébergé en UE.',
    url: 'https://www.natesystem.com/crm-sur-mesure',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM sur-mesure : le logiciel taillé pour votre vente',
    description: 'Un CRM sur-mesure calé sur votre cycle de vente réel : suivi prospects, relances, pipeline, IA intégrée. Code livré, propriété 100 %, hébergé en UE.',
  },
}

// Service + FAQ + Breadcrumb (query page, national — pas de LocalBusiness).
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/crm-sur-mesure#service',
      name: 'CRM sur-mesure pour entreprise',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'France' },
        { '@type': 'AdministrativeArea', name: 'Union européenne' },
      ],
      serviceType: 'CRM sur-mesure, logiciel de gestion commerciale, suivi prospects et clients, pipeline de vente, relances automatisées, IA intégrée',
      audience: { '@type': 'BusinessAudience', audienceType: 'Entreprises et PME de 5 à 100 collaborateurs' },
      description:
        'Conception et déploiement d\'un CRM sur-mesure calé sur le cycle de vente réel de l\'entreprise : suivi prospects et clients, relances, pipeline, intégration aux autres outils, qualification et relance assistées par IA. Code source livré, hébergement UE, RGPD-natif.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'un CRM sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un CRM sur-mesure est un logiciel de gestion commerciale conçu autour du cycle de vente réel de votre entreprise, au lieu d\'un CRM standard que vous subissez. Il regroupe le suivi des prospects et clients, les relances, le pipeline et les intégrations à vos autres outils, exactement comme votre équipe vend. NateSystem conçoit ces solutions logicielles sur-mesure pour que votre entreprise en soit propriétaire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Pourquoi un CRM sur-mesure plutôt qu\'un CRM standard du marché ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un CRM standard vous oblige à plier votre process de vente à l\'outil, à payer des champs et modules que vous n\'utilisez pas, et à louer le tout à vie. Un CRM sur-mesure épouse vos étapes de vente, votre équipe l\'adopte vite parce qu\'il parle son langage, et votre entreprise en est propriétaire. Il devient rentable dès que les abonnements et les saisies manuelles s\'accumulent.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment l\'IA est-elle intégrée dans le CRM ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'L\'IA est intégrée là où elle remplace de vraies heures de travail : qualifier les prospects entrants, proposer les bonnes relances au bon moment, résumer les échanges et préparer les suites. Elle reste un copilote au service de votre équipe commerciale, jamais un gadget ni une boîte noire.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un CRM sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le prix dépend du périmètre (un pipeline simple ou une plateforme commerciale complète), des intégrations et de l\'IA. Pour une PME, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact en heures et en euros gagnés avant le devis, pendant l\'audit offert.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'CRM sur-mesure', item: 'https://www.natesystem.com/crm-sur-mesure' },
      ],
    },
  ],
}

export default function CrmSurMesureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
