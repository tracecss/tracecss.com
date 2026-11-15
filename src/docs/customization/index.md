---
title: Customization
description: Customize the Trace CSS palette, typography, and native controls with CSS custom properties.
order: 7
---

# Customization

Trace CSS styles native HTML with a shared set of CSS custom properties. Start with palette and typography tokens to change the look of the whole interface. Use component tokens when a particular control needs its own colors, spacing, or shape.

### Default palette

Trace derives four shades each from the primary, secondary, and neutral colors. The shade formulas adjust OKLCH lightness while keeping the base hue and chroma. Changing a base color updates its derived shades automatically.

<div class="token-palette">
  {% for family in ["primary", "secondary", "neutral"] -%}
  <div>
    <strong>{{ family | capitalize }}</strong>
    <ul>
      {% for shade in ["lighter", "light", "", "dark", "darker"] -%}
      {% set token = "--trace-" ~ family ~ ("-" ~ shade if shade else "") -%}
      <li><span style="--swatch: var({{ token }})"></span>{{ shade or "base" }}</li>
      {% endfor -%}
    </ul>
  </div>
  {% endfor -%}
  <div>
    <strong>Status</strong>
    <ul>
      <li><span style="--swatch: var(--trace-success)"></span>Success</li>
      <li><span style="--swatch: var(--trace-danger)"></span>Danger</li>
    </ul>
  </div>
</div>

<div class="theme-previews">
  <section data-mode="light">
    <strong>Light theme</strong>
    <code>--trace-bg-light</code>
    <code>--trace-text-light</code>
  </section>
  <section data-mode="dark">
    <strong>Dark theme</strong>
    <code>--trace-bg-dark</code>
    <code>--trace-text-dark</code>
  </section>
</div>

The `--trace-bg` and `--trace-text` tokens select the active background and text colors with `light-dark()`. See [Color theming](/docs/color-theming/) for examples using `data-mode`.

### Override theme tokens

Load your stylesheet after Trace CSS and set your values on `:root`. If you use a [scoped build](/docs/scopes/), set the values on the `.trace-css` container.

```css
:root {
  --trace-primary: oklch(48% 0.15 255deg);
  --trace-secondary: oklch(88% 0.14 90deg);
  --trace-radius-control: 0.5rem;
  --trace-font-family-sans: system-ui, sans-serif;
}

button.checkout {
  --trace-button-padding-inline: 1.5rem;
}
```

The two previews use the same controls. The customized preview uses the primary, secondary, and radius values from the example above.

<div class="theme-previews customization-preview">
  {% for customized in [false, true] -%}
  <section{% if customized %} class="customization-preview-custom"{% endif %}>
    <strong>{{ "Customized" if customized else "Default" }}</strong>
    <div class="customization-preview-swatches" aria-label="Primary color and derived shades">
      <span style="--swatch: var(--trace-primary-lighter)"></span>
      <span style="--swatch: var(--trace-primary-light)"></span>
      <span style="--swatch: var(--trace-primary)"></span>
      <span style="--swatch: var(--trace-primary-dark)"></span>
      <span style="--swatch: var(--trace-primary-darker)"></span>
    </div>
    <label>
      Display name
      <input type="text" placeholder="Enter your name" />
    </label>
    <button type="button" class="trace-primary">Preview</button>
  </section>
  {% endfor -%}
</div>

### CSS variable reference

These are the public `--trace-*` properties declared by the installed Full build. Multiple values can apply under different selectors, variants, states, or viewport sizes.

{% set variableHeading = "Variable" %}
{% set valuesHeading = "Declared values" %}
{% include "token-reference.njk" %}
