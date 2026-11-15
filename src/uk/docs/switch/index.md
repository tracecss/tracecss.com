---
title: Перемикач
description: Використовуйте нативні перемикачі з Trace CSS.
docSection: Forms
order: 6
---

# Перемикач

Перемикач — це `input type="checkbox"` з `role="switch"`. Використовуйте його для параметрів, які можна ввімкнути або вимкнути.

### Нативні елементи

{% set native %}
<label>
  <input type="checkbox" role="switch" checked />
  Увімкнути сповіщення
</label>
<label>
  <input type="checkbox" role="switch" />
  Увімкнути оновлення
</label>
<label>
  <input type="checkbox" role="switch" disabled />
  Недоступне налаштування
</label>
<div>
  <label>
    <input
      type="checkbox"
      role="switch"
      aria-invalid="true"
      aria-describedby="switch-error"
    />
    Увімкнути автоматичні оновлення
  </label>
  <small id="switch-error">Увімкніть оновлення, щоб продовжити.</small>
</div>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ native | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

### Класи розширень

Повна збірка додає `trace-small` і `trace-large`. Середній розмір застосовується типово.

{% set sizes %}
<label>
  <input type="checkbox" role="switch" class="trace-small" />
  Малий
</label>
<label>
  <input type="checkbox" role="switch" />
  Середній
</label>
<label>
  <input type="checkbox" role="switch" class="trace-large" />
  Великий
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

Використовуйте `trace-switch` як обгортку перемикача й необов’язкової декоративної іконки. Поле й іконка мають бути безпосередніми нащадками обгортки.

{% set withIcon %}
<label>
  <span class="trace-switch">
    <input type="checkbox" role="switch" checked />
    <span class="trace-icon">{% icon "check" %}</span>
  </span>
  Увімкнути сповіщення
</label>
{% endset %}

{% highlight "html" %}{{ withIcon | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ withIcon | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

Оформлення задають [CSS-змінні](/uk/docs/customization/#tokens-switches).
