---
title: Таблиці
description: Оформлюйте нативні таблиці HTML із Trace CSS.
docSection: Content
order: 3
---

# Таблиці

Використовуйте `caption` для назви таблиці, `thead` для заголовків стовпців і `tbody` для рядків. Задайте заголовкам стовпців `scope="col"`, а заголовкам рядків — `scope="row"`.

### Типова таблиця

{% set table %}
<table>
  <caption>Рахунки</caption>
  <thead>
    <tr><th scope="col">Рахунок</th><th scope="col">Сума</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">INV-001</th><td>120.00</td></tr>
    <tr><th scope="row">INV-002</th><td>45.50</td></tr>
    <tr><th scope="row">INV-003</th><td>82.00</td></tr>
  </tbody>
</table>
{% endset %}

{% highlight "html" %}{{ table | trim | safe }}{% endhighlight %}

<div>
{{ table | trim | safe }}
</div>

### Класи розширень

Повна збірка додає такі класи.

| Клас               | Елемент                     | Дія                                                             |
| ------------------ | --------------------------- | --------------------------------------------------------------- |
| `trace-striped`    | Таблиця                     | Виділяє парні рядки тіла таблиці                                |
| `trace-hover`      | Таблиця                     | Підсвічує рядки за наведення або фокуса в рядку                 |
| `trace-compact`    | Таблиця                     | Зменшує відступи й розмір шрифту                                |
| `trace-numeric`    | Комірка заголовка або даних | Вирівнює значення за кінцем рядка й використовує табличні цифри |
| `trace-table-wrap` | Обгортка                    | Дає змогу прокручувати широку таблицю горизонтально             |

{% set extended %}
<div class="trace-table-wrap" tabindex="0" role="region" aria-label="Суми за рахунками">
  <table class="trace-striped trace-hover trace-compact">
    <caption>Суми за рахунками</caption>
    <thead>
      <tr>
        <th scope="col">Рахунок</th>
        <th scope="col" class="trace-numeric">Сума</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">INV-001</th><td class="trace-numeric">120.00</td></tr>
      <tr><th scope="row">INV-002</th><td class="trace-numeric">45.50</td></tr>
      <tr><th scope="row">INV-003</th><td class="trace-numeric">82.00</td></tr>
    </tbody>
  </table>
</div>
{% endset %}

{% highlight "html" %}{{ extended | trim | safe }}{% endhighlight %}

<div>
{{ extended | trim | safe }}
</div>

Кольори, межі й відступи задають [токени таблиць](/uk/docs/customization/#tokens-tables).
