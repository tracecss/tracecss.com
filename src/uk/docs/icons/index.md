---
title: Іконки
description: Налаштуйте розмір і вирівнювання іконок SVG за допомогою Trace CSS.
docSection: Components
order: 1
---

# Іконки

У повній збірці клас `trace-icon` задає розмір SVG або зображення й вирівнює його поруч із текстом. Додайте власну графіку, наприклад SVG із Lucide.

### Бібліотеки іконок

Виберіть SVG із будь-якої з цих бібліотек і розмістіть безпосередньо в обгортці `trace-icon`. Вставте розмітку SVG або вкажіть завантажений файл в `img`.

- [Lucide](https://lucide.dev/) пропонує контурні іконки з регульованою товщиною ліній.
- [Heroicons](https://heroicons.com/) пропонує контурні та залиті іконки кількох розмірів.
- [Tabler Icons](https://tabler.io/icons) пропонує контурні та залиті іконки інтерфейсу.
- [Phosphor Icons](https://phosphoricons.com/) пропонує іконки з різною товщиною ліній.
- [Bootstrap Icons](https://icons.getbootstrap.com/) пропонує SVG із іконками інтерфейсу й логотипами.
- У [Material Symbols](https://fonts.google.com/icons) можна завантажити SVG у стилях Outlined, Rounded і Sharp.

```html
<span class="trace-icon" aria-hidden="true">
  <img src="/icons/check.svg" alt="" />
</span>
Збережено
```

### Вбудовані іконки

Розмістіть графіку безпосередньо в обгортці. Позначка Lucide декоративна, бо стан уже передано сусіднім текстом.

{% set example %}
<span class="trace-icon" aria-hidden="true">{% icon "check" %}</span>
Збережено
{% endset %}

{% highlight "html" %}{{ example | trim | safe }}{% endhighlight %}

<div>
{{ example | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</div>

### Напрямлені іконки

Додайте `trace-icon-directional` до обгортки, якщо іконка має віддзеркалюватися за напрямку справа наліво.

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

Розміри задають [токени іконок](/uk/docs/customization/#tokens-icons). Як зробити кнопку з однією іконкою доступною, див. у розділі [Кнопки з іконками](/uk/docs/buttons/#knopki-z-ikonkami).
