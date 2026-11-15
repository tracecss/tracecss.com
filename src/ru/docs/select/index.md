---
title: Список выбора
description: Используйте нативные списки выбора с Trace CSS.
docSection: Forms
order: 4
---

# Список выбора

Используйте `select` с элементами `option` для выбора одного варианта. Добавьте `multiple` и `size`, чтобы показать список с множественным выбором. Элемент `optgroup` задаёт подпись для группы вариантов.

### Нативные элементы

{% set native %}
<label>
  Регион
  <select>
    <optgroup label="Европа">
      <option>Франция</option>
      <option>Румыния</option>
    </optgroup>
    <optgroup label="Азия">
      <option>Япония</option>
    </optgroup>
  </select>
</label>
<label>
  Уведомления
  <select multiple size="3">
    <option selected>Электронная почта</option>
    <option>Пуш-уведомления</option>
    <option>СМС</option>
  </select>
</label>
<label>
  Выбор региона недоступен
  <select disabled><option>Франция</option></select>
</label>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ native | trim | safe }}
</section>
</div>

### Классы расширений

В полной сборке добавьте `trace-select` обёртке списка, чтобы стрелка учитывала тему. Классы `trace-small` и `trace-large` задавайте на самом списке. Средний размер применяется по умолчанию. Стрелка используется только в раскрывающемся списке с одиночным выбором.

{% set sizes %}
<label>
  Малый
  <span class="trace-select">
    <select class="trace-small">
      <option>Первый вариант</option>
      <option>Второй вариант</option>
    </select>
  </span>
</label>
<label>
  Средний
  <span class="trace-select">
    <select>
      <option>Первый вариант</option>
      <option>Второй вариант</option>
    </select>
  </span>
</label>
<label>
  Большой
  <span class="trace-select">
    <select class="trace-large">
      <option>Первый вариант</option>
      <option>Второй вариант</option>
    </select>
  </span>
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>

Цвета, отступы и стрелку можно настроить [токенами списков выбора](/ru/docs/customization/#tokens-select-menus).
