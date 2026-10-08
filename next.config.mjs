/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  async redirects() {
    return [
      /* La bibliothèque devient /library le 8 octobre 2026 : « bibliothèque »
         ne se lit pas pour un anglophone. L'ancienne adresse était en ligne
         depuis le 1er octobre, partagée en message : elle redirige. */
      { source: '/bibliotheque', destination: '/library', permanent: true },
      { source: '/bibliotheque/desinscription', destination: '/library/unsubscribe', permanent: true },
      { source: '/bibliotheque/:path*', destination: '/library/:path*', permanent: true },
      { source: '/en/bibliotheque', destination: '/en/library', permanent: true },
      { source: '/en/bibliotheque/desinscription', destination: '/en/library/unsubscribe', permanent: true },
      { source: '/en/bibliotheque/:path*', destination: '/en/library/:path*', permanent: true },
      /* /schools est repliée sur /en le 30 septembre 2026. Elle avait été
         créée la veille, quand la home parlait encore aux PME : il fallait une
         destination anglaise qui parle d'écoles. Maintenant que tout le site
         leur parle, elle faisait doublon avec /en et il y avait deux textes à
         tenir à jour.

         La redirection reste parce que l'URL a été publiée : c'est le lien que
         Nathan poste sur LinkedIn. Après déploiement, repasser natesystem.com/en
         dans le Post Inspector, sinon l'ancienne carte ressort pendant des jours. */
      {
        source: '/schools',
        destination: '/en',
        permanent: true,
      },
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

  /* Pages de présentation envoyées à un prospect précis : du HTML statique
     dans public/pour/<slug>/. Next ne sert pas index.html tout seul pour un
     dossier, d'où la réécriture. Elles sont en noindex dans leur <head>. */
  async rewrites() {
    return [
      {
        source: '/pour/:slug/',
        destination: '/pour/:slug/index.html',
      },
    ]
  },
}

export default nextConfig
