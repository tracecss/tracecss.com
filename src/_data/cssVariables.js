import { readFileSync } from 'node:fs';

const groups = [
  ['Palette and themes', 'bg text primary secondary neutral danger success'],
  ['Typography', 'font heading paragraph typography'],
  ['Shared control styles', 'control radius shadow'],
  ['Buttons', 'button'],
  ['Text inputs', 'input'],
  ['Textareas', 'textarea'],
  ['Select menus', 'select'],
  ['Checkboxes', 'checkbox'],
  ['Radio buttons', 'radio'],
  ['Switches', 'switch'],
  ['Range sliders', 'range'],
  ['File inputs', 'file'],
  ['Tables', 'table'],
  ['Links', 'link'],
  ['Content elements', 'blockquote divider kbd mark'],
  ['Icons', 'icon'],
];

export default function () {
  const stylesheet = readFileSync(
    new URL('../../node_modules/trace-css/dist/trace.css', import.meta.url),
    'utf8',
  );
  const tokens = new Map();

  for (const [, name, value] of stylesheet.matchAll(
    /(--trace-[\w-]+):\s*([^;{}]+?)(?=;|\s*})/g,
  )) {
    if (!tokens.has(name)) tokens.set(name, new Set());
    tokens.get(name).add(value.replace(/\s+/g, ' ').trim());
  }

  const grouped = new Map(groups.map(([title]) => [title, []]));
  const titlesByPrefix = new Map(
    groups.flatMap(([title, prefixes]) =>
      prefixes.split(' ').map((prefix) => [prefix, title]),
    ),
  );
  const other = [];

  for (const [name, values] of [...tokens].sort(([left], [right]) =>
    left.localeCompare(right),
  )) {
    const prefix = name.slice('--trace-'.length).split('-')[0];
    const group = grouped.get(titlesByPrefix.get(prefix)) ?? other;
    group.push({ name, values: [...values] });
  }

  return {
    groups: [...grouped, ['Other variables', other]]
      .filter(([, entries]) => entries.length)
      .map(([title, entries]) => ({ title, entries })),
  };
}
