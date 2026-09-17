import type { Metadata } from 'next'
import { localeMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = localeMetadata({
  lang: 'hu',
  path: '/services/ia',
  title: 'Ágens MI és adatelemzés: MI, amely Önért dolgozik | NateSystem',
  description:
    'Tartós memóriájú ágens MI, amely végponttól végpontig futtat feladatokat, megtanulja a szakmáját, és idővel jobb lesz. Adatelemzés, hogy tényekre alapozva döntsön. Csak ott épül be, ahol valódi munkaórákat vált ki. Ingyenes audit.',
})

export default function HuServicesIaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
