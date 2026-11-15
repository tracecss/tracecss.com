# Trace CSS documentation

Сайт документации Trace CSS на Eleventy. Стили библиотеки устанавливаются из npm-пакета `trace-css` и копируются локально при сборке.

## Лицензия

Документация сайта распространяется по лицензии [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). Библиотека `trace-css` распространяется по лицензии MIT. Сторонние материалы распространяются на условиях их собственных лицензий.

## Требования

- Node.js >= 24.14.0
- pnpm 10.30.1 (указан в `packageManager`)

## Начало работы

```sh
pnpm install
pnpm dev
```

Исходники страниц находятся в `src`, общий шаблон — в `src/_includes/base.html`, стили сайта — в `src/assets/css/site.css`.

## Команды

| Команда                   | Назначение                           |
| ------------------------- | ------------------------------------ |
| `pnpm dev`                | Сервер разработки с перезагрузкой    |
| `pnpm build`              | Сборка сайта в `_site`               |
| `pnpm check`              | Все проверки, без изменения файлов   |
| `pnpm check:styles`       | Stylelint                            |
| `pnpm check:format`       | Prettier                             |
| `pnpm check:editorconfig` | Проверка EditorConfig                |
| `pnpm format`             | Форматирование файлов                |
| `pnpm lint:staged`        | Исправление и проверка staged-файлов |

## Git-хуки и коммиты

Husky запускает lint-staged перед коммитом: CSS проверяется Stylelint, поддерживаемые файлы форматируются Prettier. Хук `commit-msg` проверяет Conventional Commits через Commitlint.

```text
feat(docs): add installation guide
fix(styles): correct navigation spacing
chore: update dependencies
```

Если папка ещё не является Git-репозиторием, после `git init` выполните `pnpm prepare`, чтобы активировать хуки. Обычный `pnpm install` в Git-репозитории активирует их автоматически.

## Cloudflare Pages

Сборка и публикация запускаются автоматически в Cloudflare Pages после push в подключённый репозиторий.

- Production branch: `main`.
- Build command: `pnpm check && pnpm build`.
- Build output directory: `_site`.
- Node.js >= 24.14.0 и pnpm 10.30.1.

Проверки выполняются в Pages перед сборкой. Если проверка завершится с ошибкой, новая версия сайта не будет опубликована.

## Иконки Lucide

Пакет `lucide-static` подключён через shortcode Eleventy. SVG вставляется при сборке; в браузере не нужен JavaScript, на сайт попадают только использованные иконки.

Выберите имя в [каталоге Lucide](https://lucide.dev/icons/) и используйте kebab-case в `.html`, `.njk` или Markdown:

```njk
<a href="/">{% icon "house" %} Главная</a>
<button type="button" aria-label="Поиск">{% icon "search" %}</button>
```

Рядом с текстом и внутри подписанных кнопок иконки декоративные и скрыты от скринридеров. Для самостоятельной смысловой иконки передайте описание вторым аргументом:

```njk
{% icon "circle-check", "Готово" %}
```

Оборачивайте SVG в `<span class="trace-icon">…</span>` для размера и выравнивания из Trace CSS. Цвет наследуется от `color`, размер обёртки — от `font-size` (по умолчанию `1em`). Неизвестное имя иконки остановит сборку, чтобы ошибка не попала на сайт.
