import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cardgoal.com/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://cardgoal.com/gift-cards',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://cardgoal.com/terms',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://cardgoal.com/privacy',
      lastModified: new Date(),
      priority: 0.9,
    },
  ]
}
