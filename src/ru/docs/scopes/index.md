---
title: Области действия
description: Применяйте Trace CSS к отдельной части страницы.
order: 4
---

# Области действия

Используйте сборку с ограниченной областью, когда Trace CSS должен оформить лишь часть страницы, например встроенную панель настроек. Такая сборка использует CSS `@scope` и применяет стили внутри контейнеров с классом `trace-css`.

### Подключение сборки с ограниченной областью

На странице [Выбор версии](/ru/docs/version-picker/) включите **Ограниченная область** и выберите **Без классов** или **Полная**. Добавьте полученную ссылку на стили на страницу.

### Разметка области действия

```html
<body class="trace-css">
  <section>
    <h2>Настройки</h2>
    <label>
      Отображаемое имя
      <input type="text" />
    </label>
    <button type="button">Сохранить</button>
  </section>
</body>
```

### Сравнение одинаковой разметки

Оба примера подключают стили с ограниченной областью. В примере с областью на `<body>` добавлен `class="trace-css"`, поэтому Trace CSS оформляет заголовок, поле и кнопку.

<div class="scope-previews">
  {% for scoped in [true, false] -%}
    {% set preview -%}
      <!doctype html>
      <html lang="ru" data-mode="light">
        <head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/assets/trace/trace.conditional.min.css" />
          <style>
            body { margin: 0; padding: 1rem; }
            section { display: grid; justify-items: start; gap: 0.75rem; }
            h2 { margin: 0; }
            label { display: grid; gap: 0.25rem; min-inline-size: 0; }
            input { box-sizing: border-box; max-inline-size: 100%; }
          </style>
        </head>
        <body{% if scoped %} class="trace-css"{% endif %}>
          <section>
            <h2>Настройки</h2>
            <label>
              Отображаемое имя
              <input type="text" />
            </label>
            <button type="button">Сохранить</button>
          </section>
        </body>
      </html>
    {%- endset -%}
    <div>
      <p>{{ "С ограничением" if scoped else "Без ограничения" }}</p>
      <iframe
        title="{{ "Настройки с ограничением области" if scoped else "Настройки без ограничения области" }}"
        sandbox="allow-same-origin"
        srcdoc="{{ preview | escape }}"
      ></iframe>
    </div>
  {%- endfor -%}
</div>

На одной странице можно использовать несколько контейнеров `trace-css`. Размещайте внутри контейнера все элементы, которым нужны стили Trace, включая диалоги, которые фреймворк выводит в другом месте DOM. Стили страницы и наследуемые свойства могут влиять на контент области.

<script src="/assets/js/scope-previews.js" defer></script>
