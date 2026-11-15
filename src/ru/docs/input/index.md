---
title: Поле ввода
description: Используйте нативные текстовые поля и их расширения Trace CSS.
docSection: Forms
order: 1
---

# Поле ввода

Подберите тип HTML-поля под значение и добавьте подпись к каждому полю.

### Связь поля с подписью

Если подпись и поле разделены, укажите в `for` уникальный `id` поля. Можно также вложить поле в подпись. В обоих случаях нажатие на подпись переводит фокус в поле.

{% set labels %}
<div>
  <label for="input-display-name">Отображаемое имя</label>
  <input id="input-display-name" type="text" autocomplete="nickname" />
</div>
<label>
  Электронная почта
  <input type="email" autocomplete="email" />
</label>
{% endset %}

{% highlight "html" %}{{ labels | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ labels | trim | safe }}
</section>
</div>

### Типы полей

Элемент `input` без `type` работает как текстовое поле. Trace CSS оформляет перечисленные ниже типы. Элементы выбора даты, времени и цвета предоставляет браузер, поэтому они могут выглядеть по-разному на разных платформах.

{% set fields %}
<label>
  Текстовое поле по умолчанию
  <input />
</label>
<label>
  Текст
  <input type="text" />
</label>
<label>
  Поиск
  <input type="search" />
</label>
<label>
  Электронная почта
  <input type="email" />
</label>
<label>
  Сайт
  <input type="url" />
</label>
<label>
  Телефон
  <input type="tel" />
</label>
<label>
  Пароль
  <input type="password" autocomplete="new-password" />
</label>
<label>
  Число
  <input type="number" />
</label>
<label>
  Дата
  <input type="date" />
</label>
<label>
  Местные дата и время
  <input type="datetime-local" />
</label>
<label>
  Месяц
  <input type="month" />
</label>
<label>
  Неделя
  <input type="week" />
</label>
<label>
  Время
  <input type="time" />
</label>
<label>
  Цвет
  <input type="color" value="#005473" />
</label>
{% endset %}

{% highlight "html" %}{{ fields | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ fields | trim | safe }}
</section>
</div>

### Состояния поля

Атрибут `disabled` делает поле недоступным. Атрибут `readonly` запрещает редактировать значение, сохраняя возможность его увидеть и выделить. При ошибке валидации задайте `aria-invalid="true"` и свяжите поле с видимым сообщением через `aria-describedby`.

{% set states %}
<label>
  Недоступно
  <input type="text" value="Недоступно" disabled />
</label>
<label>
  Только чтение
  <input type="text" value="Идентификатор аккаунта" readonly />
</label>
<label>
  Электронная почта
  <input type="email" value="ошибка" aria-invalid="true" aria-describedby="input-error" />
</label>
<small id="input-error">Введите действительный адрес электронной почты.</small>
{% endset %}

{% highlight "html" %}{{ states | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ states | trim | safe }}
</section>
</div>

Цвета, границы и отступы задаются [токенами полей ввода](/ru/docs/customization/#tokens-text-inputs).

### Классы расширений

Полная сборка добавляет `trace-small` и `trace-large`. Средний размер применяется по умолчанию.

{% set sizes %}
<input type="text" class="trace-small" placeholder="Малый" aria-label="Малое поле" />
<input type="text" placeholder="Средний" aria-label="Среднее поле" />
<input type="text" class="trace-large" placeholder="Большой" aria-label="Большое поле" />
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>

Чтобы добавить иконку, поместите его и поле непосредственно в `trace-input-wrap`. На обёртке иконки укажите `trace-input-icon-start` или `trace-input-icon-end`.

{% set withIcon %}
<label>
  Поиск
  <span class="trace-input-wrap">
    <span class="trace-icon trace-input-icon-start">{% icon "search" %}</span>
    <input type="search" placeholder="Поиск по документации" />
  </span>
</label>
{% endset %}

{% highlight "html" %}{{ withIcon | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ withIcon | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>
