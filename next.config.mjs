/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  async redirects() {
    return [
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
    ]
  },
}

export default nextConfig
