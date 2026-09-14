import type { Metadata } from 'next'
import { enMetadata } from '@/lib/en-metadata'

export const metadata: Metadata = enMetadata({
  path: '/glossaire',
  title: 'Glossary: custom software, AI & automation | NateSystem',
  description:
    'The NateSystem glossary: plain definitions of the terms of custom software, AI in business and automation. AI agent, RAG, ERP, GDPR, no-code, API and more.',
})

export default function EnGlossaireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
