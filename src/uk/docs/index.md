---
title: Швидкий старт
description: Встановіть Trace CSS через менеджер пакетів або підключіть у HTML.
order: 1
---

# Швидкий старт

Trace CSS — легка CSS-бібліотека, що оформлює нативні елементи HTML без класів. Підключіть стилі Trace CSS, щоб форми, кнопки й текст мали узгоджений вигляд у світлій і темній темах.

### Пакетні менеджери

{% set commands = {
  npm: "npm install trace-css",
  pnpm: "pnpm add trace-css",
  Bun: "bun add trace-css",
  Yarn: "yarn add trace-css"
} %}

<div id="package-install">
  <div hidden>
    <label for="package-manager">Менеджер пакетів</label>
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

Якщо проєкт використовує збирач, імпортуйте стилі у точці входу застосунку:

```js
import 'trace-css';
```

### Підключення через CDN

На сторінці HTML додайте посилання на стилі у `<head>`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/trace-css@0.1.2/dist/trace.min.css"
/>
```

### Розміщення стилів на власному сайті

Скопіюйте `dist/trace.min.css` із встановленого пакета `trace-css` до каталогу загальнодоступних ресурсів сайту. Якщо файл доступний за адресою `/assets/trace.min.css`, додайте в `<head>` таке посилання:

```html
<link rel="stylesheet" href="/assets/trace.min.css" />
```

### Приклад використання

Trace CSS оформлює ці нативні елементи керування HTML без CSS-класів.

```html
<form>
  <h3>Увійти</h3>
  <p>Введіть ім’я користувача й пароль, щоб продовжити.</p>

  <input
    type="text"
    autocomplete="username"
    placeholder="Ім’я користувача"
    aria-label="Ім’я користувача"
  />

  <input
    type="password"
    autocomplete="current-password"
    placeholder="Пароль"
    aria-label="Пароль"
  />

  <label>
    <input type="checkbox" role="switch" />
    Запам’ятати мене
  </label>

  <div>
    <button type="button">Увійти</button>
  </div>
</form>
```

<div class="docs-form-preview">
<form>
  <h3>Увійти</h3>
  <p>Введіть ім’я користувача й пароль, щоб продовжити.</p>
  <input
    type="text"
    autocomplete="username"
    placeholder="Ім’я користувача"
    aria-label="Ім’я користувача"
  />
  <input
    type="password"
    autocomplete="current-password"
    placeholder="Пароль"
    aria-label="Пароль"
  />
  <label>
    <input type="checkbox" role="switch" />
    Запам’ятати мене
  </label>
  <div>
    <button type="button">Увійти</button>
  </div>
</form>
</div>
