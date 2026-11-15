---
title: Конфігурація
description: Налаштуйте палітру, типографіку й нативні елементи керування Trace CSS за допомогою користувацьких властивостей CSS.
order: 7
---

# Конфігурація

Trace CSS оформлює нативний HTML за допомогою спільного набору користувацьких властивостей CSS. Щоб змінити весь інтерфейс, почніть із токенів палітри й типографіки. Токени компонентів дають змогу налаштувати кольори, відступи й форму окремих елементів.

### Типова палітра

Trace виводить по чотири відтінки для основного, додаткового й нейтрального кольорів. Формули змінюють світлоту в OKLCH, зберігаючи колірний тон і насиченість. Коли базовий колір змінюється, його відтінки оновлюються автоматично.

<div class="token-palette">
  {% for family in ["primary", "secondary", "neutral"] -%}
  <div>
    <strong>{{ { primary: "Основний", secondary: "Додатковий", neutral: "Нейтральний" }[family] }}</strong>
    <ul>
      {% for shade in ["lighter", "light", "", "dark", "darker"] -%}
      {% set token = "--trace-" ~ family ~ ("-" ~ shade if shade else "") -%}
      <li><span style="--swatch: var({{ token }})"></span>{{ { lighter: "Найсвітліший", light: "Світлий", base: "Базовий", dark: "Темний", darker: "Найтемніший" }[shade or "base"] }}</li>
      {% endfor -%}
    </ul>
  </div>
  {% endfor -%}
  <div>
    <strong>Стан</strong>
    <ul>
      <li><span style="--swatch: var(--trace-success)"></span>Успіх</li>
      <li><span style="--swatch: var(--trace-danger)"></span>Небезпечна дія</li>
    </ul>
  </div>
</div>

<div class="theme-previews">
  <section data-mode="light">
    <strong>Світла тема</strong>
    <code>--trace-bg-light</code>
    <code>--trace-text-light</code>
  </section>
  <section data-mode="dark">
    <strong>Темна тема</strong>
    <code>--trace-bg-dark</code>
    <code>--trace-text-dark</code>
  </section>
</div>

Токени `--trace-bg` і `--trace-text` вибирають кольори тла й тексту через `light-dark()`. Приклади з `data-mode` див. у статті [Колірні схеми](/uk/docs/color-theming/).

### Перевизначення токенів

Підключіть свої стилі після Trace CSS і задайте значення на `:root`. Якщо використовуєте [збірку з обмеженою областю](/uk/docs/scopes/), задайте значення на контейнері `.trace-css`.

```css
:root {
  --trace-primary: oklch(48% 0.15 255deg);
  --trace-secondary: oklch(88% 0.14 90deg);
  --trace-radius-control: 0.5rem;
  --trace-font-family-sans: system-ui, sans-serif;
}

button.checkout {
  --trace-button-padding-inline: 1.5rem;
}
```

В обох прикладах використано однакові елементи керування. У налаштованому варіанті застосовано основний колір, додатковий колір і радіус із прикладу вище.

<div class="theme-previews customization-preview">
  {% for customized in [false, true] -%}
  <section{% if customized %} class="customization-preview-custom"{% endif %}>
    <strong>{{ "З налаштуваннями" if customized else "Типово" }}</strong>
    <div class="customization-preview-swatches" aria-label="Основний колір і похідні відтінки">
      <span style="--swatch: var(--trace-primary-lighter)"></span>
      <span style="--swatch: var(--trace-primary-light)"></span>
      <span style="--swatch: var(--trace-primary)"></span>
      <span style="--swatch: var(--trace-primary-dark)"></span>
      <span style="--swatch: var(--trace-primary-darker)"></span>
    </div>
    <label>
      Відображуване ім’я
      <input type="text" placeholder="Введіть своє ім’я" />
    </label>
    <button type="button" class="trace-primary">Попередній перегляд</button>
  </section>
  {% endfor -%}
</div>

### Довідник CSS-змінних

Тут перелічено публічні властивості `--trace-*` зі встановленої повної збірки. Значення можуть відрізнятися залежно від селектора, варіанта, стану або розміру області перегляду.

{% set variableHeading = "Змінна" %}
{% set valuesHeading = "Оголошені значення" %}
{% include "token-reference.njk" %}
