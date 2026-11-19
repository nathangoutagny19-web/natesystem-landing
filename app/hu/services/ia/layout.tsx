import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services/ia',
  title: 'Automatizálás a luxusvendéglátásnak | NateSystem',
  description:
    'Első válasz az ügyfél nyelvén, megerősítések, előleg-emlékeztetők, rendezett WhatsApp-kérések. Az eszköz javasol, a csapata dönt. Adatai az EU-ban.',
})

export default function HuServicesIaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
