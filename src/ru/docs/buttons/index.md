---
title: Кнопки
description: Используйте нативные кнопки и дополнительные классы Trace CSS.
docSection: Content
order: 4
---

# Кнопки

Явно задайте тип, соответствующий действию кнопки.

### Типы нативных кнопок

Используйте `type="button"` для отдельного действия, `type="submit"` для отправки формы и `type="reset"` для восстановления исходных значений.

{% set native %}
<button type="button">Предпросмотр</button>
<button type="submit">Отправить</button>
<button type="reset">Сбросить</button>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ native | trim | safe }}
</div>

Соответствующие нативные элементы ввода тоже получают стили кнопок.

{% set inputs %}
<input type="button" value="Предпросмотр" />
<input type="submit" value="Отправить" />
<input type="reset" value="Сбросить" />
{% endset %}

{% highlight "html" %}{{ inputs | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ inputs | trim | safe }}
</div>

### Недоступность и выполнение операции

Атрибут `disabled` блокирует нажатие. Кнопка `button` с `aria-busy="true"` показывает индикатор загрузки. Добавьте `disabled`, если действие должно быть недоступно во время операции.

{% set states %}
<button type="button" disabled>Недоступно</button>
<button type="button" aria-busy="true" disabled>Сохранение</button>
{% endset %}

{% highlight "html" %}{{ states | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ states | trim | safe }}
</div>

Цвета, отступы и типографику можно настроить с помощью [токенов кнопок](/ru/docs/customization/#tokens-buttons).

### Классы расширений

Полная сборка добавляет цветовые варианты, контуры, размеры и стили иконок. Цвет, контур и размер можно сочетать на одной кнопке.

#### Кнопки с заливкой

Используйте `trace-primary` для основного действия, `trace-secondary` для вспомогательного и `trace-danger` для разрушительного.

{% set filled %}
<button type="button" class="trace-primary">Основная</button>
<button type="button" class="trace-secondary">Дополнительная</button>
<button type="button" class="trace-danger">Опасное действие</button>
{% endset %}

{% highlight "html" %}{{ filled | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ filled | trim | safe }}
</div>

#### Кнопки с контуром

Используйте `trace-outline` для контура по умолчанию. Добавьте цветовой класс, чтобы изменить цвет контура.

{% set outlines %}
<button type="button" class="trace-outline">Обычный контур</button>
<button type="button" class="trace-primary trace-outline">Основной контур</button>
<button type="button" class="trace-secondary trace-outline">Дополнительный контур</button>
<button type="button" class="trace-danger trace-outline">Контур опасного действия</button>
{% endset %}

{% highlight "html" %}{{ outlines | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ outlines | trim | safe }}
</div>

#### Размеры

Используйте `trace-small` для маленькой кнопки и `trace-large` для большой. Средний размер применяется по умолчанию.

{% set sizes %}
<button type="button" class="trace-small">Малый</button>
<button type="button">Средний</button>
<button type="button" class="trace-large">Большой</button>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ sizes | trim | safe }}
</div>

#### Кнопки с иконками

Оберните SVG из Lucide в `trace-icon` и поместите перед подписью или после неё. Для кнопки с одной иконкой используйте `trace-icon-only` и задайте доступное имя атрибутом `aria-label`.

{% set iconButtons %}
<button type="button" class="trace-primary">
  <span class="trace-icon">{% icon "plus" %}</span>
  Добавить элемент
</button>
<button type="button" class="trace-secondary trace-outline">
  Продолжить
  <span class="trace-icon">{% icon "arrow-right" %}</span>
</button>
<button type="button" class="trace-icon-only" aria-label="Добавить элемент">
  <span class="trace-icon">{% icon "plus" %}</span>
</button>
{% endset %}

{% highlight "html" %}{{ iconButtons | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ iconButtons | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</div>
