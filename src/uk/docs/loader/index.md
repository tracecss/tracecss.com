---
title: Індикатор завантаження
description: Показуйте стани завантаження з Trace CSS.
docSection: Components
order: 2
---

# Індикатор завантаження

Індикатор завантаження показує, що операція триває. Якщо користувач віддає перевагу меншому руху, Trace CSS показує статичний індикатор.

### Окремий індикатор

Повна збірка містить `trace-loader`. Задайте окремому індикатору роль `status` і доступну назву.

{% set loaders %}
<span class="trace-loader" role="status" aria-label="Завантаження"></span>
{% endset %}

{% highlight "html" %}{{ loaders | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ loaders | trim | safe }}
</div>

### Кнопки з індикатором

Установіть `aria-busy="true"` на нативній кнопці, щоб показати індикатор по центру. Додайте `disabled`, щоб заблокувати натискання до завершення операції. У повній збірці безпосередній нащадок `span.trace-icon` показує індикатор поруч із видимим підписом.

{% set buttons %}
<button type="button" aria-busy="true" disabled>Збереження</button>
<button type="button" class="trace-primary" aria-busy="true" disabled>
<span class="trace-icon" aria-hidden="true"></span>
Надсилання
</button>
<button type="button" class="trace-secondary trace-outline" aria-busy="true" disabled>
<span class="trace-icon" aria-hidden="true"></span>
Завантаження
</button>
<button type="button" class="trace-icon-only" aria-label="Збереження" aria-busy="true" disabled>
<span class="trace-icon">{% icon "save" %}</span>
</button>
{% endset %}

{% highlight "html" %}{{ buttons | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ buttons | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</div>

### Індикатор поверх контенту

Установіть `aria-busy="true"` на контейнері, щоб показати шар з індикатором по центру. Вимкніть елементи форми на час операції.

{% set overlay %}
<section aria-busy="true">
  <h4>Налаштування профілю</h4>
  <p>Завантажуються збережені налаштування.</p>
  <form>
    <label>
      Відображуване ім’я
      <input type="text" value="Алекс" disabled />
    </label>
    <button type="button" disabled>Зберегти</button>
  </form>
</section>
{% endset %}

{% highlight "html" %}{{ overlay | trim | safe }}{% endhighlight %}

<div class="theme-previews loading-overlay-preview">
{{ overlay | trim | safe }}
</div>

Оформлення кнопок задають [токени кнопок](/uk/docs/customization/#tokens-buttons).
