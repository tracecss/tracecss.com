---
title: Icons
description: Size and align SVG icons with Trace CSS.
docSection: Components
order: 1
---

# Icons

The Full build provides `trace-icon` to size and align an SVG or image alongside text. Supply your own artwork, such as a Lucide SVG.

### Icon libraries

Choose an SVG from any of these libraries and place it directly inside a `trace-icon` wrapper. You can paste the SVG markup inline or reference a downloaded file with `img`.

- [Lucide](https://lucide.dev/) offers outline icons with adjustable stroke width.
- [Heroicons](https://heroicons.com/) offers outline and filled icons in several sizes.
- [Tabler Icons](https://tabler.io/icons) offers outline and filled interface icons.
- [Phosphor Icons](https://phosphoricons.com/) offers icons in multiple weights.
- [Bootstrap Icons](https://icons.getbootstrap.com/) offers SVG files for interface icons and brand marks.
- [Material Symbols](https://fonts.google.com/icons) offers downloadable SVGs in Outlined, Rounded, and Sharp styles.

```html
<span class="trace-icon" aria-hidden="true">
  <img src="/icons/check.svg" alt="" />
</span>
Saved
```

### Inline icons

Place the artwork directly inside the wrapper. This Lucide check icon is decorative because the adjacent text already conveys the status.

{% set example %}
<span class="trace-icon" aria-hidden="true">{% icon "check" %}</span>
Saved
{% endset %}

{% highlight "html" %}{{ example | trim | safe }}{% endhighlight %}

<div>
{{ example | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</div>

### Directional icons

Add `trace-icon-directional` to the wrapper if the icon should mirror in right-to-left layouts.

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

See [Icon tokens](/docs/customization/#tokens-icons) for sizing and [Buttons with icons](/docs/buttons/#buttons-with-icons) for accessible icon-only buttons.
