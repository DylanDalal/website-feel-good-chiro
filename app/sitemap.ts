import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { carePages } from '@/lib/care';
import { articles } from './articles/data';
import { languageAlternates, routePairs } from '@/lib/i18n';
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
    ...routePairs.map((pair) => pair.es),
  ];
  const lastModified = new Date();
  return paths.map((path) => ({
    url: site.url + path,
    lastModified,
    changeFrequency: path === '' || path === '/es' ? 'monthly' : 'yearly',
    priority: path === '' ? 1 : path.startsWith('/articles/') ? 0.6 : 0.8,
    alternates: languageAlternates(path || '/')
      ? {
          languages: Object.fromEntries(
            Object.entries(languageAlternates(path || '/') ?? {}).map(
              ([lang, href]) => [lang, site.url + (href === '/' ? '' : href)],
            ),
          ),
        }
      : undefined,
  }));
}
