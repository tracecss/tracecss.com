---
title: Buttons
description: Use native buttons and optional Trace CSS button classes.
docSection: Content
order: 4
---

# Buttons

Trace CSS styles native buttons in every build. Set an explicit type to match the button’s action.

### Native button types

Use `type="button"` for a standalone action, `type="submit"` to submit the form, and `type="reset"` to restore the form’s initial values.

{% set native %}
<button type="button">Preview</button>
<button type="submit">Submit</button>
<button type="reset">Reset</button>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ native | trim | safe }}
</div>

The corresponding native input elements also receive button styles.

{% set inputs %}
<input type="button" value="Preview" />
<input type="submit" value="Submit" />
<input type="reset" value="Reset" />
{% endset %}

{% highlight "html" %}{{ inputs | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ inputs | trim | safe }}
</div>

### Disabled and busy states

Use `disabled` to prevent activation. A `button` with `aria-busy="true"` displays a loading indicator. Add `disabled` as well if the action should be unavailable during the operation.

{% set states %}
<button type="button" disabled>Unavailable</button>
<button type="button" aria-busy="true" disabled>Saving</button>
{% endset %}

{% highlight "html" %}{{ states | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ states | trim | safe }}
</div>

See [Button tokens](/docs/customization/#tokens-buttons) to customize colors, spacing, and typography.

### Extension classes

The Full build adds color variants, outlines, sizes, and icon styles. You can combine a color, an outline, and a size on the same button.

#### Filled colors

Use `trace-primary` for the main action, `trace-secondary` for a supporting action, and `trace-danger` for a destructive action.

{% set filled %}
<button type="button" class="trace-primary">Primary</button>
<button type="button" class="trace-secondary">Secondary</button>
<button type="button" class="trace-danger">Danger</button>
{% endset %}

{% highlight "html" %}{{ filled | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ filled | trim | safe }}
</div>

#### Outline colors

Use `trace-outline` by itself for the default outline. Pair it with a color class to use the corresponding outline color.

{% set outlines %}
<button type="button" class="trace-outline">Default outline</button>
<button type="button" class="trace-primary trace-outline">Primary outline</button>
<button type="button" class="trace-secondary trace-outline">Secondary outline</button>
<button type="button" class="trace-danger trace-outline">Danger outline</button>
{% endset %}

{% highlight "html" %}{{ outlines | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ outlines | trim | safe }}
</div>

#### Sizes

Use `trace-small` for Small and `trace-large` for Large. Medium is the default size and needs no size class.

{% set sizes %}
<button type="button" class="trace-small">Small</button>
<button type="button">Medium</button>
<button type="button" class="trace-large">Large</button>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ sizes | trim | safe }}
</div>

#### Buttons with icons

Wrap a Lucide SVG in `trace-icon` and place it before or after the label. Use `trace-icon-only` for a button with just an icon, and give the button an accessible name with `aria-label`.

{% set iconButtons %}
<button type="button" class="trace-primary">
  <span class="trace-icon">{% icon "plus" %}</span>
  Add item
</button>
<button type="button" class="trace-secondary trace-outline">
  Continue
  <span class="trace-icon">{% icon "arrow-right" %}</span>
</button>
<button type="button" class="trace-icon-only" aria-label="Add item">
  <span class="trace-icon">{% icon "plus" %}</span>
</button>
{% endset %}

{% highlight "html" %}{{ iconButtons | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ iconButtons | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</div>
