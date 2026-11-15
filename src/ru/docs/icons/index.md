---
title: Иконки
description: Настройте размер и выравнивание иконок SVG с помощью Trace CSS.
docSection: Components
order: 1
---

# Иконки

В полной сборке класс `trace-icon` задаёт размер SVG или изображения и выравнивает его рядом с текстом. Добавьте собственную графику, например SVG из Lucide.

### Библиотеки иконок

Выберите SVG из любой из этих библиотек и поместите непосредственно в обёртку `trace-icon`. Вставьте разметку SVG или укажите скачанный файл в `img`.

- [Lucide](https://lucide.dev/) предлагает контурные иконки с настраиваемой толщиной линий.
- [Heroicons](https://heroicons.com/) предлагает контурные и залитые иконки нескольких размеров.
- [Tabler Icons](https://tabler.io/icons) предлагает контурные и залитые иконки интерфейса.
- [Phosphor Icons](https://phosphoricons.com/) предлагает иконки с разной толщиной линий.
- [Bootstrap Icons](https://icons.getbootstrap.com/) предлагает SVG с иконками интерфейса и логотипами.
- В [Material Symbols](https://fonts.google.com/icons) можно скачать SVG в стилях Outlined, Rounded и Sharp.

```html
<span class="trace-icon" aria-hidden="true">
  <img src="/icons/check.svg" alt="" />
</span>
Сохранено
```

### Встроенные иконки

Поместите графику непосредственно в обёртку. Галочка Lucide декоративна, поскольку состояние уже передано соседним текстом.

{% set example %}
<span class="trace-icon" aria-hidden="true">{% icon "check" %}</span>
Сохранено
{% endset %}

{% highlight "html" %}{{ example | trim | safe }}{% endhighlight %}

<div>
{{ example | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</div>

### Направленные иконки

Добавьте `trace-icon-directional` обёртке, если иконка должна отражаться при направлении справа налево.

{% set example %}
<span class="trace-icon trace-icon-directional" aria-hidden="true">{% icon "arrow-right" %}</span>
{% endset %}

{% highlight "html" %}{{ example | trim | safe }}{% endhighlight %}

<div class="theme-previews">
  <section dir="ltr">
    <span>LTR {{ example | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}</span>
  </section>
  <section dir="rtl">
    <span>RTL {{ example | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}</span>
  </section>
</div>

Размеры задаются [токенами иконок](/ru/docs/customization/#tokens-icons). Как сделать кнопку с одной иконкой доступной, см. в разделе [Кнопки с иконками](/ru/docs/buttons/#knopki-s-ikonkami).
