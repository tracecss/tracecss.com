---
title: Индикатор загрузки
description: Показывайте состояния загрузки с Trace CSS.
docSection: Components
order: 2
---

# Индикатор загрузки

Индикатор загрузки показывает, что операция выполняется. Если пользователь предпочитает меньше движения, Trace CSS показывает статичный индикатор.

### Отдельный индикатор

Полная сборка включает `trace-loader`. Задайте отдельному индикатору роль `status` и доступное имя.

{% set loaders %}
<span class="trace-loader" role="status" aria-label="Загрузка"></span>
{% endset %}

{% highlight "html" %}{{ loaders | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ loaders | trim | safe }}
</div>

### Кнопки с индикатором

Установите `aria-busy="true"` на нативной кнопке, чтобы показать индикатор по центру. Добавьте `disabled`, чтобы заблокировать нажатие до завершения операции. В полной сборке прямой потомок `span.trace-icon` показывает индикатор рядом с видимой подписью.

{% set buttons %}
<button type="button" aria-busy="true" disabled>Сохранение</button>
<button type="button" class="trace-primary" aria-busy="true" disabled>
<span class="trace-icon" aria-hidden="true"></span>
Отправка
</button>
<button type="button" class="trace-secondary trace-outline" aria-busy="true" disabled>
<span class="trace-icon" aria-hidden="true"></span>
Загрузка
</button>
<button type="button" class="trace-icon-only" aria-label="Сохранение" aria-busy="true" disabled>
<span class="trace-icon">{% icon "save" %}</span>
</button>
{% endset %}

{% highlight "html" %}{{ buttons | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ buttons | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</div>

### Индикатор поверх контента

Установите `aria-busy="true"` на контейнере, чтобы показать перекрывающий слой с индикатором по центру. Отключите элементы формы на время операции.

{% set overlay %}
<section aria-busy="true">
  <h4>Настройки профиля</h4>
  <p>Загружаются сохранённые настройки.</p>
  <form>
    <label>
      Отображаемое имя
      <input type="text" value="Алекс" disabled />
    </label>
    <button type="button" disabled>Сохранить</button>
  </form>
</section>
{% endset %}

{% highlight "html" %}{{ overlay | trim | safe }}{% endhighlight %}

<div class="theme-previews loading-overlay-preview">
{{ overlay | trim | safe }}
</div>

Оформление кнопок задают [токены кнопок](/ru/docs/customization/#tokens-buttons).
