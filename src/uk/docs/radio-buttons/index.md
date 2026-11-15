---
title: Радіокнопки
description: Використовуйте нативні радіокнопки з Trace CSS.
docSection: Forms
order: 8
---

# Радіокнопки

Радіокнопки з однаковим `name` дають змогу вибрати один варіант. Використовуйте `fieldset` і `legend`, щоб підписати групу.

### Нативні елементи

У разі помилки валідації задайте радіокнопкам `aria-invalid="true"` і зв’яжіть групу з повідомленням через `aria-describedby`.

{% set native %}
<fieldset>
  <legend>Спосіб доставлення</legend>
  <label>
    <input type="radio" name="delivery" checked />
    Електронна пошта
  </label>
  <label>
    <input type="radio" name="delivery" />
    Пуш-сповіщення
  </label>
  <label>
    <input type="radio" name="delivery" disabled />
    СМС
  </label>
</fieldset>
<fieldset aria-describedby="contact-method-error">
  <legend>Бажаний спосіб зв’язку</legend>
  <label>
    <input type="radio" name="contact-method" aria-invalid="true" required />
    Електронна пошта
  </label>
  <label>
    <input type="radio" name="contact-method" aria-invalid="true" />
    Телефон
  </label>
</fieldset>
<small id="contact-method-error">Виберіть спосіб зв’язку, щоб продовжити.</small>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews radio-previews">
<section>
{{ native | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

### Класи розширень

Повна збірка додає `trace-small` і `trace-large`. Середній розмір застосовується типово.

{% set sizes %}
<fieldset>
  <legend>Спосіб доставлення</legend>
  <label>
    <input type="radio" name="delivery-size" class="trace-small" />
    Малий
  </label>
  <label>
    <input type="radio" name="delivery-size" />
    Середній
  </label>
  <label>
    <input type="radio" name="delivery-size" class="trace-large" />
    Великий
  </label>
</fieldset>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews radio-previews">
<section>
{{ sizes | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

Оформлення задають [CSS-змінні](/uk/docs/customization/#tokens-radio-buttons).
