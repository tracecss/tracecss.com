---
title: Ползунок
description: Используйте нативные ползунки с Trace CSS.
docSection: Forms
order: 5
---

# Ползунок

Используйте `input type="range"` для значения между двумя границами. Задайте `min`, `max` и `step` для допустимых значений, а `value` — для начального положения. Когда ползунок в фокусе, меняйте значение клавишами со стрелками.

### Нативные элементы

{% set native %}
<label>
  Громкость
  <input type="range" min="0" max="100" step="5" value="40" />
</label>
<label>
  Недоступный регулятор громкости
  <input type="range" min="0" max="100" value="40" disabled />
</label>
<label>
  Недопустимая громкость
  <input type="range" value="80" aria-invalid="true" aria-describedby="range-error" />
  <small id="range-error">Выберите громкость не выше 60.</small>
</label>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ native | trim | safe }}
</section>
</div>

### Классы расширений

Полная сборка добавляет `trace-small` и `trace-large`. Они меняют размеры бегунка, дорожки и высоту поля. Средний размер применяется по умолчанию.

{% set sizes %}
<label>
  Малый
  <input type="range" class="trace-small" value="40" />
</label>
<label>
  Средний
  <input type="range" value="40" />
</label>
<label>
  Большой
  <input type="range" class="trace-large" value="40" />
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>

Цвета и размеры задаются [токенами ползунков](/ru/docs/customization/#tokens-range-sliders).
