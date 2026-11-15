---
title: Кнопки
description: Використовуйте нативні кнопки й додаткові класи Trace CSS.
docSection: Content
order: 4
---

# Кнопки

Явно задайте тип, що відповідає дії кнопки.

### Типи нативних кнопок

Використовуйте `type="button"` для окремої дії, `type="submit"` для надсилання форми та `type="reset"` для відновлення початкових значень.

{% set native %}
<button type="button">Попередній перегляд</button>
<button type="submit">Надіслати</button>
<button type="reset">Скинути</button>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ native | trim | safe }}
</div>

Відповідні нативні елементи введення також отримують стилі кнопок.

{% set inputs %}
<input type="button" value="Попередній перегляд" />
<input type="submit" value="Надіслати" />
<input type="reset" value="Скинути" />
{% endset %}

{% highlight "html" %}{{ inputs | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ inputs | trim | safe }}
</div>

### Недоступність і виконання операції

Атрибут `disabled` блокує натискання. Кнопка `button` з `aria-busy="true"` показує індикатор завантаження. Додайте `disabled`, якщо дія має бути недоступною під час операції.

{% set states %}
<button type="button" disabled>Недоступно</button>
<button type="button" aria-busy="true" disabled>Збереження</button>
{% endset %}

{% highlight "html" %}{{ states | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ states | trim | safe }}
</div>

Кольори, відступи й типографіку можна налаштувати за допомогою [токенів кнопок](/uk/docs/customization/#tokens-buttons).

### Класи розширень

Повна збірка додає колірні варіанти, контури, розміри й стилі іконок. Колір, контур і розмір можна поєднувати на одній кнопці.

#### Кнопки із заливкою

Використовуйте `trace-primary` для основної дії, `trace-secondary` для допоміжної та `trace-danger` для руйнівної.

{% set filled %}
<button type="button" class="trace-primary">Основна</button>
<button type="button" class="trace-secondary">Додаткова</button>
<button type="button" class="trace-danger">Небезпечна дія</button>
{% endset %}

{% highlight "html" %}{{ filled | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ filled | trim | safe }}
</div>

#### Кнопки з контуром

Використовуйте `trace-outline` для типового контуру. Додайте колірний клас, щоб змінити колір контуру.

{% set outlines %}
<button type="button" class="trace-outline">Типовий контур</button>
<button type="button" class="trace-primary trace-outline">Основний контур</button>
<button type="button" class="trace-secondary trace-outline">Додатковий контур</button>
<button type="button" class="trace-danger trace-outline">Контур небезпечної дії</button>
{% endset %}

{% highlight "html" %}{{ outlines | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ outlines | trim | safe }}
</div>

#### Розміри

Використовуйте `trace-small` для малої кнопки та `trace-large` для великої. Середній розмір застосовується типово.

{% set sizes %}
<button type="button" class="trace-small">Малий</button>
<button type="button">Середній</button>
<button type="button" class="trace-large">Великий</button>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ sizes | trim | safe }}
</div>

#### Кнопки з іконками

Огорніть SVG із Lucide в `trace-icon` і розмістіть перед підписом або після нього. Для кнопки з однією іконкою використовуйте `trace-icon-only` і задайте доступну назву атрибутом `aria-label`.

{% set iconButtons %}
<button type="button" class="trace-primary">
  <span class="trace-icon">{% icon "plus" %}</span>
  Додати елемент
</button>
<button type="button" class="trace-secondary trace-outline">
  Продовжити
  <span class="trace-icon">{% icon "arrow-right" %}</span>
</button>
<button type="button" class="trace-icon-only" aria-label="Додати елемент">
  <span class="trace-icon">{% icon "plus" %}</span>
</button>
{% endset %}

{% highlight "html" %}{{ iconButtons | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ iconButtons | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</div>
