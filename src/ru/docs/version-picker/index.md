---
title: Выбор версии
description: Выберите сборку Trace CSS для своего проекта.
order: 3
---

# Выбор версии

Выберите **Без классов**, чтобы оформить нативные элементы HTML без классов расширений, или **Полная**, чтобы получить дополнительные классы для вариантов и размеров.

<div id="version-picker-controls" hidden>
  <label>
    Сборка
    <select id="trace-build">
      <option value="full">Полная</option>
      <option value="classless">Без классов</option>
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
      Ограниченная область (Conditional)
    </label>
    <small id="trace-scoped-description">Применять Trace CSS только внутри контейнеров с классом <code>trace-css</code>.</small>
  </div>
</div>

### Стили с CDN

Скопируйте эту ссылку в `<head>` страницы.

<div id="version-picker-result">
  <pre class="language-html"><code class="language-html">&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/trace-css@0.1.2/dist/trace.min.css" /&gt;</code></pre>
</div>

<script src="/assets/js/version-picker.js" defer></script>
