---
title: Колірні схеми
description: Використовуйте світлу й темну теми Trace CSS.
order: 5
---

# Колірні схеми

Trace CSS підтримує світлу й темну теми. Задайте `data-mode="light"` або `data-mode="dark"` на `<html>`, щоб вибрати тему для всієї сторінки. Типово Trace CSS використовує системне налаштування.

### Обидві теми на одній сторінці

Задайте `data-mode` на окремих контейнерах, щоб показати світлі й темні області поруч. У збірці з обмеженою областю додайте `class="trace-css"` до кожного контейнера.

```html
<section data-mode="light">
  <p>Світла тема</p>
  <label>
    Відображуване ім’я
    <input type="text" placeholder="Введіть своє ім’я" />
  </label>
  <label>
    <input type="checkbox" role="switch" />
    Увімкнути сповіщення
  </label>
  <button type="button">Попередній перегляд</button>
</section>

<section data-mode="dark">
  <p>Темна тема</p>
  <label>
    Відображуване ім’я
    <input type="text" placeholder="Введіть своє ім’я" />
  </label>
  <label>
    <input type="checkbox" role="switch" />
    Увімкнути сповіщення
  </label>
  <button type="button">Попередній перегляд</button>
</section>
```

<div class="theme-previews">
  <section data-mode="light">
    <p>Світла тема</p>
    <label>
      Відображуване ім’я
      <input type="text" placeholder="Введіть своє ім’я" />
    </label>
    <label>
      <input type="checkbox" role="switch" />
      Увімкнути сповіщення
    </label>
    <button type="button">Попередній перегляд</button>
  </section>
  <section data-mode="dark">
    <p>Темна тема</p>
    <label>
      Відображуване ім’я
      <input type="text" placeholder="Введіть своє ім’я" />
    </label>
    <label>
      <input type="checkbox" role="switch" />
      Увімкнути сповіщення
    </label>
    <button type="button">Попередній перегляд</button>
  </section>
</div>
