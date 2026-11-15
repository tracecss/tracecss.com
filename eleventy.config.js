import { I18nPlugin } from '@11ty/eleventy';
import i18n from 'eleventy-plugin-i18n';
import en from './src/_data/i18n/en.json' with { type: 'json' };
import ru from './src/_data/i18n/ru.json' with { type: 'json' };
import uk from './src/_data/i18n/uk.json' with { type: 'json' };
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import tracePackage from 'trace-css/package.json' with { type: 'json' };
import { headingAnchors } from './lib/heading-anchors.js';
import { icon } from './lib/icon.js';

export default function (eleventyConfig) {
  const dictionaries = { en, ru, uk };
  const translations = {};
  for (const [lang, dictionary] of Object.entries(dictionaries)) {
    for (const [key, value] of Object.entries(dictionary)) {
      (translations[key] ??= {})[lang] = value;
    }
  }
  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: 'en',
    errorMode: 'allow-fallback',
  });
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: { '*': 'en' },
  });
  eleventyConfig.addGlobalData('languageNames', {
    en: 'English',
    ru: 'Русский',
    uk: 'Українська',
  });
  eleventyConfig.addFilter('languageVersions', (page) => {
    const links = eleventyConfig.getFilter('locale_links');
    // Eleventy groups the prefixed inputs together and indexes the root input separately.
    const englishUrl =
      page.lang === 'en' ? page.url : page.url.slice(page.lang.length + 1);
    const localizedUrl =
      page.lang === 'en'
        ? eleventyConfig.getFilter('locale_url')(page.url, 'ru')
        : page.url;

    return [
      { lang: 'en', url: englishUrl },
      ...links(localizedUrl),
      ...(localizedUrl === englishUrl
        ? []
        : [{ lang: page.lang === 'en' ? 'ru' : page.lang, url: localizedUrl }]),
    ].sort((left, right) => left.lang.localeCompare(right.lang));
  });
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addGlobalData('traceVersion', tracePackage.version);
  eleventyConfig.addShortcode('icon', icon);
  eleventyConfig.amendLibrary('md', (markdown) => {
    headingAnchors(
      markdown,
      eleventyConfig.getFilter('slugify'),
      (title, page) =>
        eleventyConfig
          .getFilter('i18n')
          .call({ page }, 'linkTo', { title }, page?.lang || 'en'),
    );
  });
  eleventyConfig.addPassthroughCopy({
    'node_modules/trace-css/dist': 'assets/trace',
    'node_modules/@fontsource-variable/manrope/index.css':
      'assets/fonts/manrope/index.css',
    'node_modules/@fontsource-variable/manrope/files':
      'assets/fonts/manrope/files',
    'node_modules/@fontsource-variable/manrope/LICENSE':
      'assets/fonts/manrope/LICENSE',
    'src/assets': 'assets',
    'src/favicon': '.',
  });

  return {
    dir: { input: 'src', includes: '_includes', output: '_site' },
    templateFormats: ['md', 'html', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
}
