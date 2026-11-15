---
title: Текстове поле (textarea)
description: Використовуйте нативні багаторядкові поля з Trace CSS.
docSection: Forms
order: 3
---

# Текстове поле (textarea)

Використовуйте `textarea` для багаторядкового тексту. Задайте початкову висоту через `rows`. Trace CSS дає змогу змінювати висоту поля. Атрибут `readonly` дозволяє виділяти текст і забороняє його змінювати, а `disabled` робить поле недоступним.

### Приклади

{% set fields %}
<label>
  Повідомлення
  <textarea name="message" rows="3" placeholder="Напишіть повідомлення"></textarea>
</label>
<label>
  Нотатки для читання
  <textarea rows="2" readonly>Ці нотатки бачать усі.</textarea>
</label>
<label>
  Недоступні нотатки
  <textarea rows="2" disabled></textarea>
</label>
{% endset %}

{% highlight "html" %}{{ fields | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ fields | trim | safe }}
</section>
</div>

Оформлення задають [токени багаторядкових полів](/uk/docs/customization/#tokens-textareas).

### Класи розширень

Повна збірка додає `trace-small` і `trace-large`. Середній розмір застосовується типово.

{% set sizes %}
<textarea class="trace-small" rows="2" aria-label="Мале поле нотаток" placeholder="Малий"></textarea>
<textarea rows="2" aria-label="Середнє поле нотаток" placeholder="Середній"></textarea>
<textarea class="trace-large" rows="2" aria-label="Велике поле нотаток" placeholder="Великий"></textarea>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>
