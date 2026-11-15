---
title: Переключатель
description: Используйте нативные переключатели с Trace CSS.
docSection: Forms
order: 6
---

# Переключатель

Переключатель — это `input type="checkbox"` с `role="switch"`. Используйте его для параметров, которые можно включить или выключить.

### Нативные элементы

{% set native %}
<label>
  <input type="checkbox" role="switch" checked />
  Включить уведомления
</label>
<label>
  <input type="checkbox" role="switch" />
  Включить обновления
</label>
<label>
  <input type="checkbox" role="switch" disabled />
  Недоступная настройка
</label>
<div>
  <label>
    <input
      type="checkbox"
      role="switch"
      aria-invalid="true"
      aria-describedby="switch-error"
    />
    Включить автоматические обновления
  </label>
  <small id="switch-error">Включите обновления, чтобы продолжить.</small>
</div>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ native | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

### Классы расширений

Полная сборка добавляет `trace-small` и `trace-large`. Средний размер применяется по умолчанию.

{% set sizes %}
<label>
  <input type="checkbox" role="switch" class="trace-small" />
  Малый
</label>
<label>
  <input type="checkbox" role="switch" />
  Средний
</label>
<label>
  <input type="checkbox" role="switch" class="trace-large" />
  Большой
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

Используйте `trace-switch` как обёртку переключателя и необязательного декоративного иконки. Поле и иконка должны быть прямыми потомками обёртки.

{% set withIcon %}
<label>
  <span class="trace-switch">
    <input type="checkbox" role="switch" checked />
    <span class="trace-icon">{% icon "check" %}</span>
  </span>
  Включить уведомления
</label>
{% endset %}

{% highlight "html" %}{{ withIcon | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ withIcon | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

Оформление задают [CSS-переменные](/ru/docs/customization/#tokens-switches).
