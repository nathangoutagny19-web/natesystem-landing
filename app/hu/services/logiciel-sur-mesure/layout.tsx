import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services/logiciel-sur-mesure',
  title: 'Egyedi szoftver és platform | NateSystem',
  description:
    'Az egyedi üzleti szoftver, amely egyetlen platformba vonja az eszközeit és az adatait: egységes adatbázis, irányítópultok, portálok, belső eszközök. A kód az Öné, EU-s tárhelyen. Élesben 4-8 hét alatt. Ingyenes audit.',
})

export default function HuServicesLogicielSurMesureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
