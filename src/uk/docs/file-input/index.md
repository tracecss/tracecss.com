---
title: Завантаження файлів
description: Використовуйте нативні поля завантаження файлів із Trace CSS.
docSection: Forms
order: 2
---

# Завантаження файлів

Використовуйте `type="file"`, щоб відкрити діалог вибору файлів. Задайте `accept` для підказки про допустимі типи файлів і `multiple` для вибору кількох файлів. Перевіряйте типи й розміри файлів окремо.

### Приклади

{% set fields %}
<label>
  Вкладення
  <input type="file" name="attachment" />
</label>
<label>
  Зображення
  <input type="file" name="images" accept="image/*" multiple />
</label>
{% endset %}

{% highlight "html" %}{{ fields | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ fields | trim | safe }}
</section>
</div>

### Стани поля

Укажіть `required`, щоб вимагати файл під час надсилання форми. У разі помилки валідації задайте `aria-invalid="true"` і зв’яжіть поле з повідомленням через `aria-describedby`. Натисніть <kbd>Tab</kbd>, щоб побачити стиль фокуса.

{% set states %}
<label>
  Обов’язкове вкладення
  <input type="file" required />
</label>
<div>
  <label for="file-input-invalid">Неприпустиме вкладення</label>
  <input id="file-input-invalid" type="file" aria-invalid="true" aria-describedby="file-input-error" />
  <small id="file-input-error">Виберіть файл підтримуваного типу.</small>
</div>
<label>
  Завантаження недоступне
  <input type="file" disabled />
</label>
{% endset %}

{% highlight "html" %}{{ states | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ states | trim | safe }}
</section>
</div>

Для налаштування оформлення використовуйте [токени полів вибору файлів](/uk/docs/customization/#tokens-file-inputs).

### Класи розширень

У повній збірці `trace-small` і `trace-large` змінюють розмір поля та його нативної кнопки вибору файлу. Середній розмір застосовується типово.

{% set sizes %}
<label>
  Малий
  <input type="file" class="trace-small" />
</label>
<label>
  Середній
  <input type="file" />
</label>
<label>
  Великий
  <input type="file" class="trace-large" />
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>
