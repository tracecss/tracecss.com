---
title: Чекбокс
description: Використовуйте нативні чекбокси з Trace CSS.
docSection: Forms
order: 7
---

# Чекбокс

Чекбокс дає змогу вмикати й вимикати параметр незалежно від інших. Додайте `checked`, щоб позначити чекбокс початково.

### Нативні елементи

За часткового вибору задайте властивість DOM `indeterminate` через JavaScript. У разі помилки валідації вкажіть `aria-invalid="true"` і зв’яжіть чекбокс із повідомленням через `aria-describedby`.

{% set native %}
<label>
  <input type="checkbox" checked />
  Увімкнути оновлення
</label>
<label>
  <input type="checkbox" />
  Запам’ятати налаштування
</label>
<label>
  <input type="checkbox" disabled />
  Недоступний параметр
</label>
<label>
  <input id="checkbox-mixed" type="checkbox" />
  Вибрати все
</label>
<div>
  <label>
    <input type="checkbox" aria-invalid="true" aria-describedby="checkbox-error" />
    Прийняти умови
  </label>
  <small id="checkbox-error">Прийміть умови, щоб продовжити.</small>
</div>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

```js
document.getElementById('checkbox-mixed').indeterminate = true;
```

<div class="theme-previews form-previews">
<section>
{{ native | trim | safe }}
</section>
</div>
<script>
  document.getElementById('checkbox-mixed').indeterminate = true;
</script>

### Класи розширень

Повна збірка додає `trace-small` і `trace-large`. Середній розмір застосовується типово.

{% set sizes %}
<label>
  <input type="checkbox" class="trace-small" />
  Малий
</label>
<label>
  <input type="checkbox" />
  Середній
</label>
<label>
  <input type="checkbox" class="trace-large" />
  Великий
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

Оформлення задають [CSS-змінні](/uk/docs/customization/#tokens-checkboxes).
