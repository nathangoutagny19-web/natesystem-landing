/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  async redirects() {
    return [
      /* Les 14 pages de playbooks sont retirées du site (29 septembre 2026).
         Elles étaient dans le sitemap depuis des mois, donc indexées : sans
         ces deux lignes, chacune renverrait 404 à un visiteur venu de Google
         ou d'un lien partagé. Elles atterrissent sur /resources, qui portait
         la liste et garde les vidéos, les outils et le blog.

         La règle générique couvre aussi /playbook/<slug>/thank-you et
         /playbook/unsubscribe, qui étaient en disallow et pointaient vers une
         API supprimée avec le reste. */
      {
        source: '/playbook',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/playbook/:path*',
        destination: '/resources',
        permanent: true,
      },
      // Les 3 anciennes calculettes sont consolidées dans Le Diagnostic IA.
      // Redirections 301 permanentes pour préserver le SEO et les liens partagés.
      {
        source: '/tools/saas-calculator',
        destination: '/tools/diagnostic-ia',
        permanent: true,
      },
      {
        source: '/tools/calculateur-temps-perdu',
        destination: '/tools/diagnostic-ia',
        permanent: true,
      },
      {
        source: '/tools/ai-readiness',
        destination: '/tools/diagnostic-ia',
        permanent: true,
      },
      // Restaurant audit retiré du catalogue (hors scope landing principal).
      /* Le blog est resté français : trente articles de fond écrits pour des
         requêtes françaises, sous des slugs français. Les routes /en/blog
         existaient et servaient ce français avec une nav anglaise autour.
         Elles redirigent, plutôt que de renvoyer 404 sur ce qui a pu être
         indexé depuis le 8 septembre. */
      {
        source: '/en/blog',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/en/blog/:slug',
        destination: '/blog/:slug/',
        permanent: true,
      },
      // Préserve les liens externes existants en renvoyant vers l'index des outils.
      {
        source: '/tools/restaurant-audit',
        destination: '/tools',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
