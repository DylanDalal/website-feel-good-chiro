// HTTP checks for the published route surface; no browser automation required.
const origin = process.argv[2] ?? 'http://localhost:4179';
const failures = [];
const request = async (path, options) => {
  try {
    return await fetch(new URL(path, origin), options);
  } catch (error) {
    failures.push(`${path}: ${error.message}`);
    return null;
  }
};
const sitemap = await request('/sitemap.xml');
if (!sitemap?.ok) throw new Error('Sitemap did not load');
const xml = await sitemap.text();
const paths = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => new URL(match[1]).pathname,
);
if (paths.length < 30)
  failures.push('Sitemap has fewer than 30 expected pages');
const refs = new Set(),
  titles = new Set();
for (const path of paths) {
  const res = await request(path);
  if (!res?.ok) {
    failures.push(`${path}: status ${res?.status}`);
    continue;
  }
  const html = (await res.text()).replace(
    /<script\b[^>]*>[\s\S]*?<\/script>/gi,
    '',
  );
  const h1s = [...html.matchAll(/<h1\b/gi)];
  if (h1s.length !== 1)
    failures.push(`${path}: expected one h1, found ${h1s.length}`);
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1];
  if (!title || titles.has(title))
    failures.push(`${path}: missing or duplicate title`);
  titles.add(title);
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*>/i)?.[0];
  if (
    !canonical?.includes(
      `href="https://feelgoodchiro.net${path === '/' ? '' : path}`,
    )
  )
    failures.push(`${path}: missing canonical`);
  if (!/<meta[^>]*name="description"/i.test(html))
    failures.push(`${path}: missing description`);
  if (/<video\b|Pause gentle motion|Enable gentle motion/.test(html))
    failures.push(`${path}: obsolete media/control`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    if (!match[1].startsWith('//')) refs.add(match[1]);
  }
}
for (const path of refs) {
  const res = await request(path);
  if (!res?.ok)
    failures.push(`${path}: broken internal reference ${res?.status}`);
}
for (const path of ['/not-a-real-page', '/articles/not-a-real-article']) {
  const res = await request(path);
  if (res?.status !== 404)
    failures.push(`${path}: expected 404, got ${res?.status}`);
}
for (const [source, destination] of [
  ['/forms-and-online-booking/', '/new-patients'],
  ['/back-decompression/', '/cox-spinal-decompression'],
  ['/headaches/', '/articles/headaches'],
]) {
  let current = source,
    valid = true;
  for (let i = 0; i < 3; i++) {
    const res = await request(current, { redirect: 'manual' });
    if (res?.status === 200) break;
    if (![301, 308].includes(res?.status)) {
      valid = false;
      break;
    }
    current = new URL(res.headers.get('location'), origin).pathname;
  }
  if (!valid || current !== destination)
    failures.push(`${source}: invalid redirect destination ${current}`);
}
const robots = await request('/robots.txt');
if (
  !robots?.ok ||
  !(await robots.text()).includes('https://feelgoodchiro.net/sitemap.xml')
)
  failures.push('Invalid robots file');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(
    `PASS: ${paths.length} pages, ${refs.size} internal references, unique titles, descriptions, canonical links, sitemap, robots, missing-page responses, and migration redirects.`,
  );
}
