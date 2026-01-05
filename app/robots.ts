import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/gift-cards'],
      },
    ],
    sitemap: 'https://cardgoal.com/sitemap.xml',
  }
}
