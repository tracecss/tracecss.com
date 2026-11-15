import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const iconsDirectory = join(
  dirname(require.resolve('lucide-static/package.json')),
  'icons',
);
const cache = new Map();

function escapeAttribute(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    }[character];
  });
}

export function icon(name, label = '') {
  if (typeof name !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) {
    throw new Error(`Invalid Lucide icon name: ${name}`);
  }

  if (!cache.has(name)) {
    cache.set(name, readFileSync(join(iconsDirectory, `${name}.svg`), 'utf8'));
  }

  const accessibility = label
    ? `role="img" aria-label="${escapeAttribute(label)}"`
    : 'aria-hidden="true"';

  return cache
    .get(name)
    .replace(/\sclass="[^"]*"/, '')
    .replace('<svg', `<svg focusable="false" ${accessibility}`);
}
