import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { carePages } from '@/lib/care';
import { articles } from './articles/data';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/care',
    '/about-us',
    '/new-patients',
    '/contact',
    '/articles',
    '/reviews',
    '/privacy',
    ...carePages.map((p) => `/${p.slug}`),
    ...articles.map((a) => `/articles/${a.slug}`),
  ];
  return paths.map((path) => ({
    url: site.url + path,
    changeFrequency: path === '' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : path.startsWith('/articles/') ? 0.6 : 0.8,
  }));
}
