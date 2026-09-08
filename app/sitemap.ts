import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'
import { allSlugs as allPlaybookSlugs } from '@/lib/playbooks'
import { allCaseSlugs } from '@/lib/case-studies'

const BASE_URL = 'https://www.natesystem.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Static top-level routes (every page that should be indexed)
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/outils`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/outils/pret-pour-lia`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/diagnostic-ia`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/reviews`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/book`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/playbook`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/glossaire`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/a-propos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/agence-logiciel-ia-lyon`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/logiciel-interne-lyon`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/logiciel-interne-saint-etienne`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/logiciel-interne-villeurbanne`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/logiciel-interne-grenoble`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/logiciel-interne-clermont-ferrand`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/logiciel-interne-annecy`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/logiciel-interne-chambery`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE_URL}/logiciel-gestion-sur-mesure`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/crm-sur-mesure`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/agence-logiciel-sur-mesure`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/application-web-sur-mesure`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/logiciel-sur-mesure`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/audit`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/ia`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services/formation`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
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

  // Written case studies
  const caseStudyRoutes: MetadataRoute.Sitemap = allCaseSlugs().map((slug) => ({
    url: `${BASE_URL}/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  /* ─────────────────────────────────────────────────────────────────────
     LES ROUTES ANGLAISES.

     Seules les pages qui ont un lecteur anglophone sont ici. Les pages de
     référencement français (les sept villes, prix-logiciel-sur-mesure,
     crm-sur-mesure, les pages sectorielles) restent françaises : une version
     anglaise sous un slug français ne vise aucune requête et Google la traite
     comme du remplissage.

     Chaque entrée déclare son équivalent français en `alternates`, ce qui pose
     le hreflang directement dans le sitemap en plus des balises de page.
     ───────────────────────────────────────────────────────────────────── */
  const EN_ROUTES = [
    ['/', 1.0], ['/a-propos', 0.6], ['/blog', 0.8], ['/book', 0.7],
    ['/case-studies', 0.8], ['/glossaire', 0.6], ['/mentions-legales', 0.3],
    ['/methode', 0.9], ['/outils', 0.9], ['/outils/pret-pour-lia', 0.9],
    ['/politique-anti-spam', 0.3], ['/resources', 0.7], ['/reviews', 0.7],
    ['/services', 0.9], ['/services/audit', 0.9], ['/services/formation', 0.9],
    ['/services/ia', 0.9], ['/services/logiciel-sur-mesure', 0.9],
    ['/tools', 0.8], ['/tools/diagnostic-ia', 0.9],
  ] as const

  const enStaticRoutes: MetadataRoute.Sitemap = EN_ROUTES.map(([path, priority]) => ({
    url: `${BASE_URL}/en${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
    alternates: {
      languages: {
        'fr-FR': `${BASE_URL}${path}`,
        en: `${BASE_URL}/en${path === '/' ? '' : path}`,
      },
    },
  }))

  const enBlogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/en/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const enCaseStudyRoutes: MetadataRoute.Sitemap = allCaseSlugs().map((slug) => ({
    url: `${BASE_URL}/en/case-studies/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    ...staticRoutes,
    ...playbookRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...enStaticRoutes,
    ...enBlogRoutes,
    ...enCaseStudyRoutes,
  ]
}
