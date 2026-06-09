import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog'
import BlogPostClient from './BlogPostClient'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}

  return {
    title: `${post.title} | NateSystem Blog`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.ogImage ? [{ url: post.ogImage }] : [{ url: '/og-image.png' }],
      siteName: 'NateSystem',
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

// Ranked "best-of" lists, declared so we can emit an ItemList schema node.
// "Meilleurs X" listicles are the single most-cited content format in ChatGPT
// (~43.8% of citations) — an explicit ItemList tells AI engines exactly what
// the ranking is, verbatim from the article body (NOT invented).
const RANKED_LISTS: Record<string, string[]> = {
  '10-meilleurs-outils-ia-automatisation-operations-2026': [
    'Make (ex-Integromat)',
    'Zapier',
    'n8n',
    'Claude (Anthropic)',
    'ChatGPT Enterprise',
    'Notion AI',
    'HubSpot Operations Hub',
    'Airtable + Automations',
    'Slack + Workflows IA',
    'NateSystem (infrastructure IA sur-mesure)',
  ],
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const url = `https://www.natesystem.com/blog/${post.slug}`
  // Approximate word count from the HTML body (strip tags) — a density signal
  // AI engines and Google both read.
  const wordCount = post.content.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length

  // Article + breadcrumb (+ optional ItemList) structured data (JSON-LD).
  // Server-rendered, invisible to users — drives article rich results and AI
  // answer-engine citations.
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Person', name: post.author, url: 'https://www.natesystem.com' },
      publisher: { '@id': 'https://www.natesystem.com/#organization' },
      mainEntityOfPage: url,
      articleSection: post.category,
      keywords: post.tags.join(', '),
      wordCount,
      inLanguage: 'fr-FR',
      image: post.ogImage ? [post.ogImage] : ['https://www.natesystem.com/og-image.png'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.natesystem.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.natesystem.com/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ]

  const ranked = RANKED_LISTS[post.slug]
  if (ranked) {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#itemlist`,
      name: post.title,
      numberOfItems: ranked.length,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: ranked.map((name, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
      })),
    })
  }

  const jsonLd = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostClient post={post} />
    </>
  )
}
