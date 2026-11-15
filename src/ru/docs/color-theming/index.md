---
title: Цветовые схемы
description: Используйте светлую и тёмную темы Trace CSS.
order: 5
---

# Цветовые схемы

Trace CSS поддерживает светлую и тёмную темы. Задайте `data-mode="light"` или `data-mode="dark"` на `<html>`, чтобы выбрать тему для всей страницы. По умолчанию Trace CSS использует системную настройку.

### Обе темы на одной странице

Задайте `data-mode` на отдельных контейнерах, чтобы показать светлые и тёмные области рядом. При использовании сборки с ограниченной областью добавьте `class="trace-css"` каждому контейнеру.

```html
<section data-mode="light">
  <p>Светлая тема</p>
  <label>
    Отображаемое имя
    <input type="text" placeholder="Введите своё имя" />
  </label>
  <label>
    <input type="checkbox" role="switch" />
    Включить уведомления
  </label>
  <button type="button">Предпросмотр</button>
</section>

<section data-mode="dark">
  <p>Тёмная тема</p>
  <label>
    Отображаемое имя
    <input type="text" placeholder="Введите своё имя" />
  </label>
  <label>
    <input type="checkbox" role="switch" />
    Включить уведомления
  </label>
  <button type="button">Предпросмотр</button>
</section>
```

<div class="theme-previews">
  <section data-mode="light">
    <p>Светлая тема</p>
    <label>
      Отображаемое имя
      <input type="text" placeholder="Введите своё имя" />
    </label>
    <label>
      <input type="checkbox" role="switch" />
      Включить уведомления
    </label>
    <button type="button">Предпросмотр</button>
  </section>
  <section data-mode="dark">
    <p>Тёмная тема</p>
    <label>
      Отображаемое имя
      <input type="text" placeholder="Введите своё имя" />
    </label>
    <label>
      <input type="checkbox" role="switch" />
      Включить уведомления
    </label>
    <button type="button">Предпросмотр</button>
  </section>
</div>
