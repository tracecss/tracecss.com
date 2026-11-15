---
title: Вибір версії
description: Виберіть збірку Trace CSS для свого проєкту.
order: 3
---

# Вибір версії

Виберіть **Без класів**, щоб оформити нативні елементи HTML без класів розширень, або **Повна**, щоб отримати додаткові класи для варіантів і розмірів.

<div id="version-picker-controls" hidden>
  <label>
    Збірка
    <select id="trace-build">
      <option value="full">Повна</option>
      <option value="classless">Без класів</option>
    </select>
  </label>
  <div>
    <label>
      <input
        id="trace-scoped"
        type="checkbox"
        role="switch"
        aria-describedby="trace-scoped-description"
      />
      Обмежена область (Conditional)
    </label>
    <small id="trace-scoped-description">Застосовувати Trace CSS лише всередині контейнерів із класом <code>trace-css</code>.</small>
  </div>
</div>

### Стилі з CDN

Скопіюйте це посилання в `<head>` сторінки.

<div id="version-picker-result">
  <pre class="language-html"><code class="language-html">&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/trace-css@0.1.2/dist/trace.min.css" /&gt;</code></pre>
</div>

<script src="/assets/js/version-picker.js" defer></script>
