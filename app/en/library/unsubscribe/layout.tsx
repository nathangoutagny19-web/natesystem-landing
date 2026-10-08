import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unsubscribe · NateSystem library',
  robots: { index: false, follow: false },
}

export default function DesinscriptionEnLayout({ children }: { children: React.ReactNode }) {
  return children
}
