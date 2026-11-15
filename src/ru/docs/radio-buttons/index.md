---
title: Радиокнопки
description: Используйте нативные радиокнопки с Trace CSS.
docSection: Forms
order: 8
---

# Радиокнопки

Радиокнопки с одинаковым `name` позволяют выбрать один вариант. Используйте `fieldset` и `legend`, чтобы подписать группу.

### Нативные элементы

При ошибке валидации задайте радиокнопкам `aria-invalid="true"` и свяжите группу с сообщением через `aria-describedby`.

{% set native %}
<fieldset>
  <legend>Способ доставки</legend>
  <label>
    <input type="radio" name="delivery" checked />
    Электронная почта
  </label>
  <label>
    <input type="radio" name="delivery" />
    Пуш-уведомления
  </label>
  <label>
    <input type="radio" name="delivery" disabled />
    СМС
  </label>
</fieldset>
<fieldset aria-describedby="contact-method-error">
  <legend>Предпочтительный способ связи</legend>
  <label>
    <input type="radio" name="contact-method" aria-invalid="true" required />
    Электронная почта
  </label>
  <label>
    <input type="radio" name="contact-method" aria-invalid="true" />
    Телефон
  </label>
</fieldset>
<small id="contact-method-error">Выберите способ связи, чтобы продолжить.</small>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews radio-previews">
<section>
{{ native | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

### Классы расширений

Полная сборка добавляет `trace-small` и `trace-large`. Средний размер применяется по умолчанию.

{% set sizes %}
<fieldset>
  <legend>Способ доставки</legend>
  <label>
    <input type="radio" name="delivery-size" class="trace-small" />
    Малый
  </label>
  <label>
    <input type="radio" name="delivery-size" />
    Средний
  </label>
  <label>
    <input type="radio" name="delivery-size" class="trace-large" />
    Большой
  </label>
</fieldset>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews radio-previews">
<section>
{{ sizes | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

Оформление задают [CSS-переменные](/ru/docs/customization/#tokens-radio-buttons).
