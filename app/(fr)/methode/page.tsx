import type { Lang } from '@/lib/i18n'
import type { Metadata } from 'next'
import { localeAlternates } from '@/lib/en-metadata'
import MethodeContent from '@/components/methode/MethodeContent'

export const metadata: Metadata = {
  title: 'La méthode : cartographier avant de construire | NateSystem',
  description:
    'Cartographier, réunir, automatiser, former, faire évoluer. On trouve d’abord où se perdent le temps et les clients, puis on construit. Le code est à vous.',
  alternates: localeAlternates('fr', '/methode'),
  openGraph: {
    title: 'La méthode : cartographier avant de construire | NateSystem',
    description: 'Cartographier, réunir, automatiser, former, faire évoluer. On trouve d’abord où se perdent le temps et les clients, puis on construit. Le code est à vous.',
    url: 'https://www.natesystem.com/methode/',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/og-image-2026-11.png', width: 1200, height: 630, alt: 'NateSystem' }],
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
