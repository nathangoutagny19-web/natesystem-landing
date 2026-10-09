import type { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import MethodeContent from '@/components/methode/MethodeContent'

export const metadata: Metadata = {
  title: 'Notre méthode : on cartographie votre organisation avant de construire | NateSystem',
  description:
    'La méthode NateSystem pour l\'hospitalité de luxe et de prestige : cartographier, réunir, automatiser, former, puis faire évoluer avec vous. On comprend d\'abord où se perdent le temps et les clients, puis on construit le système sur mesure qui règle ça. Vous êtes propriétaire du code.',
  alternates: {
    canonical: 'https://www.natesystem.com/methode',
    languages: {
      'fr-FR': 'https://www.natesystem.com/methode',
      en: 'https://www.natesystem.com/en/methode',
      'x-default': 'https://www.natesystem.com/methode',
    },
  },
}

/**
 * Le JSON-LD suit la langue : servi depuis /en, il déclarait une WebPage
 * française dont l'@id et le fil d'ariane pointaient vers l'arbre français.
 */
function methodeJsonLd(lang: Lang) {
  const base = 'https://www.natesystem.com'
  const root = lang === 'en' ? `${base}/en` : base
  const en = lang === 'en'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${root}/methode#page`,
        name: en ? 'Our method' : 'Notre approche',
        description: en
          ? 'The NateSystem method: we map your organisation (map, unify, automate, train) before building anything, then keep it evolving with you.'
          : 'La méthode NateSystem : on cartographie votre organisation (cartographier, réunir, automatiser, former) avant de construire quoi que ce soit, puis on la fait évoluer avec vous.',
        inLanguage: lang,
        isPartOf: { '@id': `${base}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: en ? 'Home' : 'Accueil', item: root },
          { '@type': 'ListItem', position: 2, name: en ? 'Our method' : 'Notre approche', item: `${root}/methode` },
        ],
      },
    ],
  }
}

export function MethodeRoute({ lang }: { lang: Lang }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(methodeJsonLd(lang)) }} />
      <MethodeContent />
    </>
  )
}

export default function MethodePage() {
  return <MethodeRoute lang="fr" />
}
