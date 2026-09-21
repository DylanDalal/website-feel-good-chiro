// Generates AVIF/WebP variants of the site photos at the widths the layout
// actually asks for. Run locally (`npm run images`) and commit the output —
// Netlify's build image has neither cwebp nor ImageMagick, so this must not be
// part of the deploy build.
import { execFile } from 'node:child_process';
import { readdir, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const run = promisify(execFile);
const imagesDir = join(
  dirname(fileURLToPath(import.meta.url)),
  '../public/images',
);

// width -> the largest rendered CSS width, doubled for retina where it matters.
const PLAN = {
  'pink-gulf-sunset': [1920, 960],
  'chiropractic-consultation': [1200, 600],
  'shoulder-mobility': [1200, 600],
  'active-tampa-couple': [1200, 600],
  'infrared-sauna': [1672, 840],
  'dr-frankie': [470],
};

const kb = (n) => `${Math.round(n / 1024)}kb`;

for (const [name, widths] of Object.entries(PLAN)) {
  const src = join(imagesDir, `${name}.jpg`);
  const original = (await stat(src)).size;
  const made = [];
  for (const width of widths) {
    const suffix = width === widths[0] ? '' : `-${width}`;
    const webp = join(imagesDir, `${name}${suffix}.webp`);
    const avif = join(imagesDir, `${name}${suffix}.avif`);
    // cwebp resizes with -resize W 0 (0 preserves aspect ratio).
    await run('cwebp', [
      '-quiet',
      '-q',
      '80',
      '-resize',
      String(width),
      '0',
      src,
      '-o',
      webp,
    ]);
    await run('magick', [src, '-resize', `${width}x`, '-quality', '55', avif]);
    made.push(
      `${width}w webp ${kb((await stat(webp)).size)} / avif ${kb((await stat(avif)).size)}`,
    );
  }
  console.log(`${name}.jpg (${kb(original)}) -> ${made.join(', ')}`);
}

const all = await readdir(imagesDir);
let total = 0;
for (const f of all) total += (await stat(join(imagesDir, f))).size;
console.log(`\npublic/images total: ${kb(total)} across ${all.length} files`);
