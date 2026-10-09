import type { Metadata } from 'next'
import { LangProvider } from '@/components/providers/LangProvider'
import { SITE_URL } from '@/lib/constants'

/**
 * L'ARBRE HONGROIS.
 *
 * Même mécanique que `/en` : ce layout est imbriqué dans le layout racine,
 * donc son `LangProvider` l'emporte, et tout ce qui est rendu sous `/hu`
 * reçoit `lang="hu"` par le contexte, sans qu'aucune page n'ait à le savoir.
 *
 * Budapest est le second marché de NateSystem. La règle posée le 17 septembre
 * 2026 : tout ce qui est traduit en français et en anglais l'est en hongrois.
 *
 * ⚠︎ Le `<html lang>` servi par le serveur reste `fr` : le layout racine est
 * statique et ne connaît pas la route. Le script ci-dessous le corrige avant
 * la peinture. Ce qui pilote l'indexation, ce sont les `hreflang` et le
 * canonique, et ceux-là sont posés côté serveur.
 */

export const metadata: Metadata = {
  title: 'NateSystem, egyedi szoftver a luxus- és presztízsvendéglátásnak',
  description:
    'Egyedi szoftver, online megjelenés és követett adatok villáknak, faházaknak, birtokoknak, concierge-szolgáltatásoknak, jachtoknak, független szállodáknak és rendezvényhelyszíneknek. Egyszer viszi be, és az egész szervezet követi. Hosszú távú partnerség, a forráskód az Öné.',
  alternates: {
    canonical: `${SITE_URL}/hu`,
    languages: {
      'fr-FR': `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
      hu: `${SITE_URL}/hu`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: { locale: 'hu_HU',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
}

export default function HuLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider initialLang="hu">
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang='hu'`,
        }}
      />
      {children}
    </LangProvider>
  )
}
