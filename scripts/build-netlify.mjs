// Turns a `vinext build --prerender-all` output into a plain static site that
// any static host (Netlify, Pages, S3) can serve.
//
// vinext targets Cloudflare Workers: it writes hashed assets to dist/client and
// keeps the prerendered HTML in dist/server/prerendered-routes for the Worker to
// serve. This merges the two into dist/netlify, converts `care.html` into
// `care/index.html` so extensionless URLs resolve on any host, and regenerates
// the two metadata routes (robots.txt, sitemap.xml) that only exist at runtime.
import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const clientDir = join(root, 'dist/client');
const prerenderDir = join(root, 'dist/server/prerendered-routes');
const outDir = join(root, 'dist/netlify');

const { languageAlternates } = await import(join(root, 'lib/i18n.ts'));
const { site } = await import(join(root, 'lib/site.ts'));
const { default: nextConfig } = await import(join(root, 'next.config.ts'));

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

// 1. Hashed JS/CSS, images, favicon, and the _headers file vinext emits.
await cp(clientDir, outDir, { recursive: true });

// 2. Prerendered HTML, reshaped into directory indexes. 404.html stays at the
//    root because that is where Netlify looks for a custom 404.
const pages = [];
for (const file of await walk(prerenderDir)) {
  if (!file.endsWith('.html')) continue;
  const rel = relative(prerenderDir, file);
  const dest =
    rel === '404.html'
      ? join(outDir, '404.html')
      : rel === 'index.html'
        ? join(outDir, 'index.html')
        : join(outDir, rel.replace(/\.html$/, ''), 'index.html');
  await mkdir(dirname(dest), { recursive: true });
  await cp(file, dest);
  pages.push('/' + rel.replace(/(index)?\.html$/, '').replace(/\/$/, ''));
}

// 3. Metadata routes. These are server handlers in the app, so they have no
//    prerendered output; rebuild them from the same route list and pairings.
const { paths } = JSON.parse(
  await readFile(join(root, 'dist/server/vinext-prerender-paths.json'), 'utf8'),
);
const abs = (path) => site.url + (path === '/' ? '' : path);
const lastmod = new Date().toISOString();
const urls = paths
  .map((path) => {
    const alts = languageAlternates(path);
    const links = alts
      ? Object.entries(alts)
          .map(
            ([lang, href]) =>
              `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${abs(href)}" />`,
          )
          .join('')
      : '';
    const priority = path === '/' ? '1.0' : path.startsWith('/articles/') ? '0.6' : '0.8';
    return `  <url>\n    <loc>${abs(path)}</loc>${links}\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');
await writeFile(
  join(outDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
);
await writeFile(
  join(outDir, 'robots.txt'),
  `User-agent: *\nAllow: /\nDisallow: /docs/\nDisallow: /__debug\n\nSitemap: ${site.url}/sitemap.xml\n`,
);

// 4. next.config.ts redirects become a Netlify _redirects file, and unmatched
//    paths fall through to the 404 page.
const redirects = await nextConfig.redirects();
const rules = redirects
  .map((r) => `${r.source}  ${r.destination}  ${r.permanent ? 301 : 302}`)
  .join('\n');
await writeFile(join(outDir, '_redirects'), `${rules}\n/*  /404.html  404\n`);

console.log(
  `dist/netlify ready: ${pages.length} pages, ${paths.length} sitemap urls, ${redirects.length} redirects`,
);
