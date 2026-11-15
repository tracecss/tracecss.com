---
title: Links
description: Style native links and customize their interaction states with Trace CSS.
docSection: Content
order: 2
---

# Links

Use an anchor with an `href` to link to another page, a section of the current page, or an external site. Trace CSS gives links a theme-aware color and underline.

### Link destinations

```html
<a href="/docs/">Read the Quick start</a>
<a href="#interaction-states">See interaction states</a>
<a href="https://github.com/tracecss/trace">View Trace CSS on GitHub</a>
```

- [Read the Quick start](/docs/)
- [See interaction states](#interaction-states)
- [View Trace CSS on GitHub](https://github.com/tracecss/trace)

### Interaction states

Hover over one of the examples to see the color change and the underline become thicker. Press <kbd>Tab</kbd> to focus a link and see its outline. The active color appears while a link is pressed. Visited links use the default link color unless you override it.

Trace CSS removes the color transition when reduced motion is enabled and uses system colors in forced-colors mode.

### Customize links

Override link tokens in your stylesheet after Trace CSS. This example increases the underline offset and makes the underline thicker.

```css
:root {
  --trace-link-underline-offset: 0.25em;
  --trace-link-underline-thickness: 0.12em;
}
```

See [Link tokens](/docs/customization/#tokens-links) for the full list of link properties.
