---
title: Select
description: Use native select menus with Trace CSS.
docSection: Forms
order: 4
---

# Select

Use `select` with `option` elements for a single choice. Add `multiple` and `size` to show a list that accepts several choices. `optgroup` labels related options.

### Native examples

{% set native %}
<label>
  Region
  <select>
    <optgroup label="Europe">
      <option>France</option>
      <option>Romania</option>
    </optgroup>
    <optgroup label="Asia">
      <option>Japan</option>
    </optgroup>
  </select>
</label>
<label>
  Notifications
  <select multiple size="3">
    <option selected>Email</option>
    <option>Push</option>
    <option>SMS</option>
  </select>
</label>
<label>
  Disabled region
  <select disabled><option>France</option></select>
</label>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ native | trim | safe }}
</section>
</div>

### Extension classes

In the Full build, put `trace-select` on a wrapper around the select to use the theme-aware dropdown arrow. Put `trace-small` or `trace-large` directly on the select to change its size. Medium uses the default size. The wrapper does not add a dropdown arrow to a multiple-choice list.

{% set sizes %}
<label>
  Small
  <span class="trace-select">
    <select class="trace-small">
      <option>Option one</option>
      <option>Option two</option>
    </select>
  </span>
</label>
<label>
  Medium
  <span class="trace-select">
    <select>
      <option>Option one</option>
      <option>Option two</option>
    </select>
  </span>
</label>
<label>
  Large
  <span class="trace-select">
    <select class="trace-large">
      <option>Option one</option>
      <option>Option two</option>
    </select>
  </span>
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>

See [Select menu tokens](/docs/customization/#tokens-select-menus) for colors, spacing, and the arrow.
