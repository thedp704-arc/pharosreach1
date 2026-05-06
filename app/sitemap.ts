import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pharosreach.com'
  
  const routes = [
    '',
    '/contact',
    '/exclusive-plan',
    '/how-it-works',
    '/philosophy',
    '/pricing',
    '/services',
    '/unsolicited-designs',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
