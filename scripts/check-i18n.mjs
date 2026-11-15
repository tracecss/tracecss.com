import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const root = new URL('../src/', import.meta.url);
const locales = ['en', 'ru', 'uk', 'pt', 'de', 'es', 'ar', 'zh-Hans'];
const scripts = {
  ru: 'Cyrillic',
  uk: 'Cyrillic',
  ar: 'Arabic',
  'zh-Hans': 'Han',
};
const docsLocales = new Set(['ru', 'uk']);

const dictionaries = await Promise.all(
  locales.map(async (locale) => {
    const file = new URL(`_data/i18n/${locale}.json`, root);
    return JSON.parse(await readFile(file, 'utf8'));
  }),
);
const keys = Object.keys(dictionaries[0]).sort();

for (const [index, dictionary] of dictionaries.entries()) {
  const locale = locales[index];
  assert.deepEqual(
    Object.keys(dictionary).sort(),
    keys,
    `${locale} dictionary keys`,
  );
  for (const key of keys) {
    assert.ok(
      dictionary[key]?.trim(),
      `Missing ${locale} translation for ${key}`,
    );
  }
}

async function markdownFiles(directory) {
  return (await readdir(directory, { recursive: true }))
    .filter((path) => path.endsWith('.md'))
    .sort();
}

const englishPages = [
  '404.md',
  'index.md',
  ...(await markdownFiles(new URL('docs/', root))).map(
    (path) => `docs/${path}`,
  ),
];

for (const locale of locales.slice(1)) {
  const directory = new URL(`${locale}/`, root);
  const expectedPages = docsLocales.has(locale)
    ? englishPages.toSorted()
    : ['404.md', 'index.md'];
  assert.deepEqual(
    await markdownFiles(directory),
    expectedPages,
    `${locale} Markdown pages`,
  );

  for (const path of expectedPages) {
    const [english, translated] = await Promise.all([
      readFile(new URL(path, root), 'utf8'),
      readFile(new URL(path, directory), 'utf8'),
    ]);
    assert.notEqual(
      translated,
      english,
      `Untranslated ${locale} page at ${path}`,
    );
    for (const field of ['title', 'description']) {
      if (path === 'docs/rtl/index.md' && field === 'title') {
        assert.match(translated, /^title: RTL$/m);
        continue;
      }
      const script = scripts[locale] ?? 'Latin';
      assert.match(
        translated,
        new RegExp(`^${field}: .*\\p{Script=${script}}`, 'mu'),
        `Missing localized ${field} in ${locale}/${path}`,
      );
    }
  }
}
