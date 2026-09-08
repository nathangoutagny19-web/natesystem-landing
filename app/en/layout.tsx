import type { Metadata } from 'next'
import { LangProvider } from '@/components/providers/LangProvider'
import { SITE_URL } from '@/lib/constants'

/**
 * L'ARBRE ANGLAIS.
 *
 * Ce layout est imbriqué dans le layout racine, donc son `LangProvider`
 * l'emporte sur celui du dessus : tout ce qui est rendu sous `/en` reçoit
 * `lang="en"` par le contexte, sans qu'aucune page n'ait à le savoir.
 *
 * C'est ce qui permet aux pages de `/en` de simplement ré-exporter leur
 * équivalent français au lieu d'en dupliquer le contenu. Une seule page à
 * maintenir par route, deux URL indexables.
 *
 * ⚠︎ Le `<html lang>` servi par le serveur reste `fr` : le layout racine est
 * statique et ne connaît pas la route. Le script ci-dessous le corrige avant
 * la peinture. Ce qui pilote réellement l'indexation, ce sont les `hreflang`
 * et le canonique, et ceux-là sont posés correctement, côté serveur.
 */

export const metadata: Metadata = {
  title: 'NateSystem, custom software and AI built on your process',
  description:
    'Custom software and AI for B2B expertise firms. Your scattered data becomes your firm\u2019s biggest asset: faster answers, hours back every week, nothing paid for twice. You own 100% of the source code, EU-hosted.',
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      'fr-FR': `${SITE_URL}/`,
      en: `${SITE_URL}/en`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: { locale: 'en_US' },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider initialLang="en">
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang='en'`,
        }}
      />
      {children}
    </LangProvider>
  )
}
