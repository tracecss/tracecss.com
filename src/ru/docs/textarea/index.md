---
title: Текстовое поле (textarea)
description: Используйте нативные многострочные поля с Trace CSS.
docSection: Forms
order: 3
---

# Текстовое поле (textarea)

Используйте `textarea` для многострочного текста. Задайте начальную высоту через `rows`. Trace CSS позволяет менять высоту поля. Атрибут `readonly` разрешает выделять текст и запрещает его менять, а `disabled` делает поле недоступным.

### Примеры

{% set fields %}
<label>
  Сообщение
  <textarea name="message" rows="3" placeholder="Напишите сообщение"></textarea>
</label>
<label>
  Заметки для чтения
  <textarea rows="2" readonly>Эти заметки видны всем.</textarea>
</label>
<label>
  Недоступные заметки
  <textarea rows="2" disabled></textarea>
</label>
{% endset %}

{% highlight "html" %}{{ fields | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ fields | trim | safe }}
</section>
</div>

Оформление задают [токены многострочных полей](/ru/docs/customization/#tokens-textareas).

### Классы расширений

Полная сборка добавляет `trace-small` и `trace-large`. Средний размер применяется по умолчанию.

{% set sizes %}
<textarea class="trace-small" rows="2" aria-label="Малое поле заметок" placeholder="Малый"></textarea>
<textarea rows="2" aria-label="Среднее поле заметок" placeholder="Средний"></textarea>
<textarea class="trace-large" rows="2" aria-label="Большое поле заметок" placeholder="Большой"></textarea>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>
