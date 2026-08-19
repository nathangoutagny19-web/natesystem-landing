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
    sitemap: 'https://studio.natesystem.com/sitemap.xml',
    host: 'https://studio.natesystem.com',
  }
}
