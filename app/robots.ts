import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/playbook/*/thank-you',
          '/playbook/unsubscribe',
        ],
      },
    ],
    sitemap: 'https://www.natesystem.com/sitemap.xml',
    host: 'https://www.natesystem.com',
  }
}
