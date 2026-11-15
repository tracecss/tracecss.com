---
title: Поле введення
description: Використовуйте нативні текстові поля та їхні розширення Trace CSS.
docSection: Forms
order: 1
---

# Поле введення

Доберіть тип HTML-поля відповідно до значення та додайте підпис до кожного поля.

### Зв’язок поля з підписом

Якщо підпис і поле розділено, вкажіть у `for` унікальний `id` поля. Можна також вкласти поле в підпис. В обох випадках натискання підпису передає фокус у поле.

{% set labels %}
<div>
  <label for="input-display-name">Відображуване ім’я</label>
  <input id="input-display-name" type="text" autocomplete="nickname" />
</div>
<label>
  Електронна пошта
  <input type="email" autocomplete="email" />
</label>
{% endset %}

{% highlight "html" %}{{ labels | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ labels | trim | safe }}
</section>
</div>

### Типи полів

Елемент `input` без `type` працює як текстове поле. Trace CSS оформлює наведені нижче типи. Елементи вибору дати, часу й кольору надає браузер, тому вони можуть різнитися між платформами.

{% set fields %}
<label>
  Типове текстове поле
  <input />
</label>
<label>
  Текст
  <input type="text" />
</label>
<label>
  Пошук
  <input type="search" />
</label>
<label>
  Електронна пошта
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
  Місцеві дата й час
  <input type="datetime-local" />
</label>
<label>
  Місяць
  <input type="month" />
</label>
<label>
  Тиждень
  <input type="week" />
</label>
<label>
  Час
  <input type="time" />
</label>
<label>
  Колір
  <input type="color" value="#005473" />
</label>
{% endset %}

{% highlight "html" %}{{ fields | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ fields | trim | safe }}
</section>
</div>

### Стани поля

Атрибут `disabled` робить поле недоступним. Атрибут `readonly` забороняє редагувати значення, зберігаючи можливість його побачити й виділити. У разі помилки валідації задайте `aria-invalid="true"` і зв’яжіть поле з видимим повідомленням через `aria-describedby`.

{% set states %}
<label>
  Недоступно
  <input type="text" value="Недоступно" disabled />
</label>
<label>
  Лише читання
  <input type="text" value="Ідентифікатор облікового запису" readonly />
</label>
<label>
  Електронна пошта
  <input type="email" value="помилка" aria-invalid="true" aria-describedby="input-error" />
</label>
<small id="input-error">Введіть дійсну адресу електронної пошти.</small>
{% endset %}

{% highlight "html" %}{{ states | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ states | trim | safe }}
</section>
</div>

Кольори, межі й відступи задають [токени полів введення](/uk/docs/customization/#tokens-text-inputs).

### Класи розширень

Повна збірка додає `trace-small` і `trace-large`. Середній розмір застосовується типово.

{% set sizes %}
<input type="text" class="trace-small" placeholder="Малий" aria-label="Мале поле" />
<input type="text" placeholder="Середній" aria-label="Середнє поле" />
<input type="text" class="trace-large" placeholder="Великий" aria-label="Велике поле" />
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>

Щоб додати іконку, розмістіть її та поле безпосередньо в `trace-input-wrap`. На обгортці іконки вкажіть `trace-input-icon-start` або `trace-input-icon-end`.

{% set withIcon %}
<label>
  Пошук
  <span class="trace-input-wrap">
    <span class="trace-icon trace-input-icon-start">{% icon "search" %}</span>
    <input type="search" placeholder="Пошук у документації" />
  </span>
</label>
{% endset %}

{% highlight "html" %}{{ withIcon | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ withIcon | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>
