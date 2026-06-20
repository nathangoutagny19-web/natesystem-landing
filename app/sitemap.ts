import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'
import { allSlugs as allPlaybookSlugs } from '@/lib/playbooks'

const BASE_URL = 'https://www.natesystem.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Static top-level routes (every page that should be indexed)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/diagnostic-ia`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/book`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/playbook`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/glossaire`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/agence-logiciel-ia-lyon`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/logiciel-sur-mesure`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/audit`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/ia`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/logiciel-sur-mesure-vs-saas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/prix-logiciel-sur-mesure`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/logiciel-sur-mesure-restauration`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/logiciel-sur-mesure-enseignement-superieur`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/logiciel-sur-mesure-conseil`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/logiciel-sur-mesure-club-sportif`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  // 12 playbook landing pages
  const playbookRoutes: MetadataRoute.Sitemap = allPlaybookSlugs().map((slug) => ({
    url: `${BASE_URL}/playbook/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  // Blog posts
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...playbookRoutes, ...blogRoutes]
}
