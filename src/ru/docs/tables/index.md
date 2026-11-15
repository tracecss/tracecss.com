---
title: Таблицы
description: Оформляйте нативные таблицы HTML с Trace CSS.
docSection: Content
order: 3
---

# Таблицы

Используйте `caption` для названия таблицы, `thead` для заголовков столбцов и `tbody` для строк. Задайте заголовкам столбцов `scope="col"`, а заголовкам строк — `scope="row"`.

### Таблица по умолчанию

{% set table %}
<table>
  <caption>Счета</caption>
  <thead>
    <tr><th scope="col">Счёт</th><th scope="col">Сумма</th></tr>
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

### Классы расширений

Полная сборка добавляет следующие классы.

| Класс              | Элемент                     | Действие                                                          |
| ------------------ | --------------------------- | ----------------------------------------------------------------- |
| `trace-striped`    | Таблица                     | Выделяет чётные строки тела таблицы                               |
| `trace-hover`      | Таблица                     | Подсвечивает строки при наведении или фокусе внутри строки        |
| `trace-compact`    | Таблица                     | Уменьшает отступы и размер шрифта                                 |
| `trace-numeric`    | Ячейка заголовка или данных | Выравнивает значения по концу строки и использует табличные цифры |
| `trace-table-wrap` | Обёртка                     | Позволяет прокручивать широкую таблицу по горизонтали             |

{% set extended %}
<div class="trace-table-wrap" tabindex="0" role="region" aria-label="Суммы по счетам">
  <table class="trace-striped trace-hover trace-compact">
    <caption>Суммы по счетам</caption>
    <thead>
      <tr>
        <th scope="col">Счёт</th>
        <th scope="col" class="trace-numeric">Сумма</th>
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

Цвета, границы и отступы задают [токены таблиц](/ru/docs/customization/#tokens-tables).
