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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const url = `https://www.natesystem.com/blog/${post.slug}`
  // Article + breadcrumb structured data (JSON-LD). Server-rendered, invisible
  // to users — drives article rich results and AI answer-engine citations.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
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
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostClient post={post} />
    </>
  )
}
