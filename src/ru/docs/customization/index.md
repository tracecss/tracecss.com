---
title: Конфигурация
description: Настройте палитру, типографику и нативные элементы управления Trace CSS с помощью пользовательских свойств CSS.
order: 7
---

# Конфигурация

Trace CSS оформляет нативный HTML с помощью общего набора пользовательских свойств CSS. Чтобы изменить весь интерфейс, начните с токенов палитры и типографики. Токены компонентов позволяют настроить цвета, отступы и форму отдельных элементов.

### Палитра по умолчанию

Trace выводит по четыре оттенка для основного, дополнительного и нейтрального цветов. Формулы меняют светлоту в OKLCH, сохраняя цветовой тон и насыщенность. При смене базового цвета его оттенки обновляются автоматически.

<div class="token-palette">
  {% for family in ["primary", "secondary", "neutral"] -%}
  <div>
    <strong>{{ { primary: "Основной", secondary: "Дополнительный", neutral: "Нейтральный" }[family] }}</strong>
    <ul>
      {% for shade in ["lighter", "light", "", "dark", "darker"] -%}
      {% set token = "--trace-" ~ family ~ ("-" ~ shade if shade else "") -%}
      <li><span style="--swatch: var({{ token }})"></span>{{ { lighter: "Самый светлый", light: "Светлый", base: "Базовый", dark: "Тёмный", darker: "Самый тёмный" }[shade or "base"] }}</li>
      {% endfor -%}
    </ul>
  </div>
  {% endfor -%}
  <div>
    <strong>Состояние</strong>
    <ul>
      <li><span style="--swatch: var(--trace-success)"></span>Успех</li>
      <li><span style="--swatch: var(--trace-danger)"></span>Опасное действие</li>
    </ul>
  </div>
</div>

<div class="theme-previews">
  <section data-mode="light">
    <strong>Светлая тема</strong>
    <code>--trace-bg-light</code>
    <code>--trace-text-light</code>
  </section>
  <section data-mode="dark">
    <strong>Тёмная тема</strong>
    <code>--trace-bg-dark</code>
    <code>--trace-text-dark</code>
  </section>
</div>

Токены `--trace-bg` и `--trace-text` выбирают цвета фона и текста через `light-dark()`. Примеры с `data-mode` см. в статье [Цветовые схемы](/ru/docs/color-theming/).

### Переопределение токенов

Подключите свои стили после Trace CSS и задайте значения на `:root`. Если используете [сборку с ограниченной областью](/ru/docs/scopes/), задайте значения на контейнере `.trace-css`.

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

В обоих примерах используются одинаковые элементы управления. В настроенном варианте применены основной цвет, дополнительный цвет и радиус из примера выше.

<div class="theme-previews customization-preview">
  {% for customized in [false, true] -%}
  <section{% if customized %} class="customization-preview-custom"{% endif %}>
    <strong>{{ "С настройками" if customized else "По умолчанию" }}</strong>
    <div class="customization-preview-swatches" aria-label="Основной цвет и производные оттенки">
      <span style="--swatch: var(--trace-primary-lighter)"></span>
      <span style="--swatch: var(--trace-primary-light)"></span>
      <span style="--swatch: var(--trace-primary)"></span>
      <span style="--swatch: var(--trace-primary-dark)"></span>
      <span style="--swatch: var(--trace-primary-darker)"></span>
    </div>
    <label>
      Отображаемое имя
      <input type="text" placeholder="Введите своё имя" />
    </label>
    <button type="button" class="trace-primary">Предпросмотр</button>
  </section>
  {% endfor -%}
</div>

### Справочник CSS-переменных

Здесь перечислены публичные свойства `--trace-*` из установленной полной сборки. Значения могут различаться в зависимости от селектора, варианта, состояния или размера области просмотра.

{% set variableHeading = "Переменная" %}
{% set valuesHeading = "Объявленные значения" %}
{% include "token-reference.njk" %}
