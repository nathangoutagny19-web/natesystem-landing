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
  title: 'Egyedi szoftver a luxusvendéglátásnak | NateSystem',
  description:
    'Concierge-szolgáltatások, villák, faházak, jachtok: szoftver, amely ahhoz igazodik, ahogyan Ön a vendégeit kiszolgálja. A forráskód az Öné.',
  alternates: {
    canonical: `${SITE_URL}/hu`,
    languages: {
      'fr-FR': `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
      hu: `${SITE_URL}/hu`,
      'x-default': `${SITE_URL}/`,
    },
  },
  /* Même règle qu'en /en : l'openGraph enfant remplace celui du parent. */
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: `${SITE_URL}/hu/`,
    siteName: 'NateSystem',
    title: 'Egyedi szoftver a luxusvendéglátásnak | NateSystem',
    description: 'Az Ön vendégfogadása egyedi. A szoftvere is legyen az. Concierge-szolgáltatások, villák, faházak, jachtok. A forráskód az Öné.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'NateSystem' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Egyedi szoftver a luxusvendéglátásnak | NateSystem',
    description: 'Az Ön vendégfogadása egyedi. A szoftvere is legyen az.',
    images: ['/og-image.png'],
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
