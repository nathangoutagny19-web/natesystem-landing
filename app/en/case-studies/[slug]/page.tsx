import type { Metadata } from 'next'
import { CaseStudyRoute, caseStudyMetadata, generateStaticParams } from '../../../case-studies/[slug]/page'

/**
 * `/en/case-studies/[slug]` : la même route, servie en anglais.
 *
 * La page française est un composant serveur, qui ne voit pas le
 * LangProvider : elle expose donc son rendu et ses métadonnées comme des
 * fonctions prenant la langue, et cette route les appelle avec 'en'.
 */

export { generateStaticParams }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return caseStudyMetadata(params.slug, 'en')
}

export default function EnCaseStudyPage({ params }: { params: { slug: string } }) {
  return <CaseStudyRoute slug={params.slug} lang="en" />
}
