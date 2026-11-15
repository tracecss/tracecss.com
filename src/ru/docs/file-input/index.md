---
title: Загрузка файлов
description: Используйте нативные поля загрузки файлов с Trace CSS.
docSection: Forms
order: 2
---

# Загрузка файлов

Используйте `type="file"`, чтобы открыть диалог выбора файлов. Задайте `accept` для подсказки о допустимых типах файлов и `multiple` для выбора нескольких файлов. Проверяйте типы и размеры файлов отдельно.

### Примеры

{% set fields %}
<label>
  Вложение
  <input type="file" name="attachment" />
</label>
<label>
  Изображения
  <input type="file" name="images" accept="image/*" multiple />
</label>
{% endset %}

{% highlight "html" %}{{ fields | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ fields | trim | safe }}
</section>
</div>

### Состояния поля

Укажите `required`, чтобы требовать файл при отправке формы. При ошибке валидации задайте `aria-invalid="true"` и свяжите поле с сообщением через `aria-describedby`. Нажмите <kbd>Tab</kbd>, чтобы увидеть стиль фокуса.

{% set states %}
<label>
  Обязательное вложение
  <input type="file" required />
</label>
<div>
  <label for="file-input-invalid">Недопустимое вложение</label>
  <input id="file-input-invalid" type="file" aria-invalid="true" aria-describedby="file-input-error" />
  <small id="file-input-error">Выберите файл поддерживаемого типа.</small>
</div>
<label>
  Загрузка недоступна
  <input type="file" disabled />
</label>
{% endset %}

{% highlight "html" %}{{ states | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ states | trim | safe }}
</section>
</div>

Для настройки оформления используйте [токены полей выбора файлов](/ru/docs/customization/#tokens-file-inputs).

### Классы расширений

В полной сборке `trace-small` и `trace-large` меняют размер поля и его нативной кнопки выбора файла. Средний размер применяется по умолчанию.

{% set sizes %}
<label>
  Малый
  <input type="file" class="trace-small" />
</label>
<label>
  Средний
  <input type="file" />
</label>
<label>
  Большой
  <input type="file" class="trace-large" />
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>
