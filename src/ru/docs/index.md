---
title: Быстрый старт
description: Установите Trace CSS через менеджер пакетов или подключите в HTML.
order: 1
---

# Быстрый старт

Trace CSS — лёгкая CSS-библиотека, которая оформляет нативные элементы HTML без классов. Подключите стили Trace CSS, чтобы формы, кнопки и текст выглядели согласованно в светлой и тёмной темах.

### Пакетные менеджеры

{% set commands = {
  npm: "npm install trace-css",
  pnpm: "pnpm add trace-css",
  Bun: "bun add trace-css",
  Yarn: "yarn add trace-css"
} %}

<div id="package-install">
  <div hidden>
    <label for="package-manager">Менеджер пакетов</label>
    <select id="package-manager">
      {% for manager, command in commands -%}
        <option value="{{ manager }}">{{ manager }}</option>
      {% endfor -%}
    </select>
  </div>
  {% for manager, command in commands -%}
    <div data-manager="{{ manager }}">
      {% highlight "sh" %}{{ command }}{% endhighlight %}
    </div>
  {% endfor -%}
</div>
<script src="/assets/js/package-install.js" defer></script>

Если в проекте есть сборщик, импортируйте стили в точке входа приложения:

```js
import 'trace-css';
```

### Подключение через CDN

На странице HTML добавьте ссылку на стили в `<head>`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/trace-css@0.1.2/dist/trace.min.css"
/>
```

### Размещение стилей на своём сайте

Скопируйте `dist/trace.min.css` из установленного пакета `trace-css` в каталог общедоступных ресурсов сайта. Если файл доступен по адресу `/assets/trace.min.css`, добавьте в `<head>` такую ссылку:

```html
<link rel="stylesheet" href="/assets/trace.min.css" />
```

### Пример использования

Trace CSS оформляет эти нативные элементы управления HTML без CSS-классов.

```html
<form>
  <h3>Войти</h3>
  <p>Введите имя пользователя и пароль, чтобы продолжить.</p>

  <input
    type="text"
    autocomplete="username"
    placeholder="Имя пользователя"
    aria-label="Имя пользователя"
  />

  <input
    type="password"
    autocomplete="current-password"
    placeholder="Пароль"
    aria-label="Пароль"
  />

  <label>
    <input type="checkbox" role="switch" />
    Запомнить меня
  </label>

  <div>
    <button type="button">Войти</button>
  </div>
</form>
```

<div class="docs-form-preview">
<form>
  <h3>Войти</h3>
  <p>Введите имя пользователя и пароль, чтобы продолжить.</p>
  <input
    type="text"
    autocomplete="username"
    placeholder="Имя пользователя"
    aria-label="Имя пользователя"
  />
  <input
    type="password"
    autocomplete="current-password"
    placeholder="Пароль"
    aria-label="Пароль"
  />
  <label>
    <input type="checkbox" role="switch" />
    Запомнить меня
  </label>
  <div>
    <button type="button">Войти</button>
  </div>
</form>
</div>
