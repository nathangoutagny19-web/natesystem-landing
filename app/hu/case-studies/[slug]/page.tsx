import type { Metadata } from 'next'
import { CaseStudyRoute, caseStudyMetadata, generateStaticParams } from '../../../case-studies/[slug]/page'

/**
 * `/hu/case-studies/[slug]` : la même route, servie en hongrois.
 *
 * La page française est un composant serveur, qui ne voit pas le
 * LangProvider : elle expose donc son rendu et ses métadonnées comme des
 * fonctions prenant la langue, et cette route les appelle avec 'hu'.
 */

export { generateStaticParams }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return caseStudyMetadata(params.slug, 'hu')
}

export default function HuCaseStudyPage({ params }: { params: { slug: string } }) {
  return <CaseStudyRoute slug={params.slug} lang="hu" />
}
