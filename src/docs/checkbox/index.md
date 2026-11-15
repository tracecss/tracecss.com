---
title: Checkbox
description: Use native checkbox controls with Trace CSS.
docSection: Forms
order: 7
---

# Checkbox

A checkbox lets users select or clear an option independently of other choices. Add `checked` to select an option initially.

### Native examples

Set the `indeterminate` DOM property with JavaScript for a partial selection. For validation errors, use `aria-invalid="true"` and connect the message with `aria-describedby`.

{% set native %}
<label>
  <input type="checkbox" checked />
  Include updates
</label>
<label>
  <input type="checkbox" />
  Remember preferences
</label>
<label>
  <input type="checkbox" disabled />
  Unavailable option
</label>
<label>
  <input id="checkbox-mixed" type="checkbox" />
  Select all
</label>
<div>
  <label>
    <input type="checkbox" aria-invalid="true" aria-describedby="checkbox-error" />
    Accept the terms
  </label>
  <small id="checkbox-error">Accept the terms to continue.</small>
</div>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

```js
document.getElementById('checkbox-mixed').indeterminate = true;
```

<div class="theme-previews form-previews">
<section>
{{ native | trim | safe }}
</section>
</div>
<script>
  document.getElementById('checkbox-mixed').indeterminate = true;
</script>

### Extension classes

The Full build adds `trace-small` and `trace-large`. Medium uses the default size.

{% set sizes %}
<label>
  <input type="checkbox" class="trace-small" />
  Small
</label>
<label>
  <input type="checkbox" />
  Medium
</label>
<label>
  <input type="checkbox" class="trace-large" />
  Large
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

See [CSS variables](/docs/customization/#tokens-checkboxes) for styling.
