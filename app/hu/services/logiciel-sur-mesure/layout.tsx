import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services/logiciel-sur-mesure',
  title: 'Egyedi szoftver és platform | NateSystem',
  description:
    'Egyedi üzleti szoftver, amely egyetlen platformba vonja az eszközeit és az adatait: egységes adatbázis, irányítópultok, portálok. A kód az Öné.',
})

export default function HuServicesLogicielSurMesureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
