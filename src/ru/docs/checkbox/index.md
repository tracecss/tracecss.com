---
title: Чекбокс
description: Используйте нативные чекбоксы с Trace CSS.
docSection: Forms
order: 7
---

# Чекбокс

Чекбокс позволяет включать и выключать параметр независимо от остальных. Добавьте `checked`, чтобы изначально отметить чекбокс.

### Нативные элементы

При частичном выборе задайте свойство DOM `indeterminate` через JavaScript. При ошибке валидации укажите `aria-invalid="true"` и свяжите чекбокс с сообщением через `aria-describedby`.

{% set native %}
<label>
  <input type="checkbox" checked />
  Включить обновления
</label>
<label>
  <input type="checkbox" />
  Запомнить настройки
</label>
<label>
  <input type="checkbox" disabled />
  Недоступный параметр
</label>
<label>
  <input id="checkbox-mixed" type="checkbox" />
  Выбрать всё
</label>
<div>
  <label>
    <input type="checkbox" aria-invalid="true" aria-describedby="checkbox-error" />
    Принять условия
  </label>
  <small id="checkbox-error">Примите условия, чтобы продолжить.</small>
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

### Классы расширений

Полная сборка добавляет `trace-small` и `trace-large`. Средний размер применяется по умолчанию.

{% set sizes %}
<label>
  <input type="checkbox" class="trace-small" />
  Малый
</label>
<label>
  <input type="checkbox" />
  Средний
</label>
<label>
  <input type="checkbox" class="trace-large" />
  Большой
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

Оформление задают [CSS-переменные](/ru/docs/customization/#tokens-checkboxes).
