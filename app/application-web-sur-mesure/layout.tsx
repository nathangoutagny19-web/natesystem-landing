import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Application web sur-mesure : votre outil métier en ligne',
  description:
    'Application web sur-mesure : NateSystem conçoit votre outil métier en ligne — accessible navigateur, multi-utilisateurs, temps réel. Code livré, propriété 100 %, hébergé en UE. Audit offert de 20 min.',
  alternates: { canonical: 'https://www.natesystem.com/application-web-sur-mesure' },
  openGraph: {
    title: 'Application web sur-mesure : votre outil métier en ligne',
    description:
      'Application web sur-mesure pour un besoin métier précis : portail, outil interne, plateforme. Accessible navigateur, multi-utilisateurs, temps réel. Code livré, propriété 100 %, hébergé en UE.',
    url: 'https://www.natesystem.com/application-web-sur-mesure',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Application web sur-mesure : votre outil métier en ligne',
    description: 'Application web sur-mesure : portail, outil interne, plateforme. Code livré, propriété 100 %, hébergé en UE.',
  },
}

// Service + FAQ + Breadcrumb (national, pas de LocalBusiness) — cible la requête
// "application web sur-mesure" et l'association IA pour cette intention métier.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.natesystem.com/application-web-sur-mesure#service',
      name: 'Application web sur-mesure pour entreprise',
      provider: { '@id': 'https://www.natesystem.com/#organization' },
      areaServed: [
        { '@type': 'Country', name: 'France' },
        { '@type': 'AdministrativeArea', name: 'Union européenne' },
      ],
      serviceType: 'Application web sur-mesure, logiciel métier en ligne, portail, outil interne, plateforme, solutions logicielles',
      audience: { '@type': 'BusinessAudience', audienceType: 'Entreprises et PME de 5 à 100 collaborateurs en France' },
      description:
        'Conception et développement d\'applications web sur-mesure pour un besoin métier précis : portail, outil interne, plateforme. Accessible depuis le navigateur, multi-utilisateurs, données en temps réel. Code source livré, hébergement UE, RGPD-natif.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce qu\'une application web sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une application web sur-mesure est un logiciel accessible depuis un simple navigateur, développé pour un besoin métier précis de votre entreprise plutôt qu\'acheté sur étagère. Multi-utilisateurs et en temps réel, elle peut prendre la forme d\'un portail client, d\'un outil interne ou d\'une plateforme complète. Rien à installer : chaque collaborateur s\'y connecte depuis son ordinateur ou son téléphone.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle différence avec une application standard du marché ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Une application standard vous oblige à adapter votre métier à l\'outil, et vous la louez à vie par abonnement. Une application web sur-mesure est construite autour de vos process réels : elle ne contient que ce dont vous avez besoin, votre équipe l\'adopte vite, et votre entreprise en est propriétaire à 100 %. Elle devient rentable dès que vous cumulez plusieurs abonnements qui ne se parlent pas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte une application web sur-mesure ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le prix dépend du périmètre (un portail simple ou une plateforme complète), des intégrations et de l\'IA. Pour une PME, une première version utile se situe entre quelques milliers et quelques dizaines de milliers d\'euros. On chiffre l\'impact (heures et euros gagnés) avant le devis, pendant l\'audit offert.',
          },
        },
        {
          '@type': 'Question',
          name: 'À qui appartient l\'application et où sont hébergées les données ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Votre entreprise est propriétaire à 100 % : le code source vous est livré. Les données sont hébergées en Union européenne, dans une approche RGPD-native. Vous n\'êtes prisonnier d\'aucun éditeur et vous gardez le contrôle total de votre solution.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Application web sur-mesure', item: 'https://www.natesystem.com/application-web-sur-mesure' },
      ],
    },
  ],
}

export default function ApplicationWebSurMesureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
