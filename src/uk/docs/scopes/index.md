---
title: Області дії
description: Застосовуйте Trace CSS до окремої частини сторінки.
order: 4
---

# Області дії

Використовуйте збірку з обмеженою областю, коли Trace CSS має оформити лише частину сторінки, наприклад вбудовану панель налаштувань. Така збірка використовує CSS `@scope` і застосовує стилі всередині контейнерів із класом `trace-css`.

### Підключення збірки з обмеженою областю

На сторінці [Вибір версії](/uk/docs/version-picker/) увімкніть **Обмежена область** і виберіть **Без класів** або **Повна**. Додайте отримане посилання на стилі до сторінки.

### Розмітка області дії

```html
<body class="trace-css">
  <section>
    <h2>Налаштування</h2>
    <label>
      Відображуване ім’я
      <input type="text" />
    </label>
    <button type="button">Зберегти</button>
  </section>
</body>
```

### Порівняння однакової розмітки

Обидва приклади підключають стилі з обмеженою областю. У прикладі з областю до `<body>` додано `class="trace-css"`, тому Trace CSS оформлює заголовок, поле й кнопку.

<div class="scope-previews">
  {% for scoped in [true, false] -%}
    {% set preview -%}
      <!doctype html>
      <html lang="uk" data-mode="light">
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
            <h2>Налаштування</h2>
            <label>
              Відображуване ім’я
              <input type="text" />
            </label>
            <button type="button">Зберегти</button>
          </section>
        </body>
      </html>
    {%- endset -%}
    <div>
      <p>{{ "З обмеженням" if scoped else "Без обмеження" }}</p>
      <iframe
        title="{{ "Налаштування з обмеженням області" if scoped else "Налаштування без обмеження області" }}"
        sandbox="allow-same-origin"
        srcdoc="{{ preview | escape }}"
      ></iframe>
    </div>
  {%- endfor -%}
</div>

На одній сторінці можна використовувати кілька контейнерів `trace-css`. Розміщуйте всередині контейнера всі елементи, яким потрібні стилі Trace, зокрема діалоги, які фреймворк виводить в іншому місці DOM. Стилі сторінки й успадковані властивості можуть впливати на контент області.

<script src="/assets/js/scope-previews.js" defer></script>
