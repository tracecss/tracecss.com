---
title: Повзунок
description: Використовуйте нативні повзунки з Trace CSS.
docSection: Forms
order: 5
---

# Повзунок

Використовуйте `input type="range"` для значення між двома межами. Задайте `min`, `max` і `step` для допустимих значень, а `value` — для початкового положення. Коли повзунок у фокусі, змінюйте значення клавішами зі стрілками.

### Нативні елементи

{% set native %}
<label>
  Гучність
  <input type="range" min="0" max="100" step="5" value="40" />
</label>
<label>
  Недоступний регулятор гучності
  <input type="range" min="0" max="100" value="40" disabled />
</label>
<label>
  Неприпустима гучність
  <input type="range" value="80" aria-invalid="true" aria-describedby="range-error" />
  <small id="range-error">Виберіть гучність не вище за 60.</small>
</label>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ native | trim | safe }}
</section>
</div>

### Класи розширень

Повна збірка додає `trace-small` і `trace-large`. Вони змінюють розміри бігунка, доріжки й висоту поля. Середній розмір застосовується типово.

{% set sizes %}
<label>
  Малий
  <input type="range" class="trace-small" value="40" />
</label>
<label>
  Середній
  <input type="range" value="40" />
</label>
<label>
  Великий
  <input type="range" class="trace-large" value="40" />
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>

Кольори й розміри задають [токени повзунків](/uk/docs/customization/#tokens-range-sliders).
