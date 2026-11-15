---
title: Switch
description: Use native switch controls with Trace CSS.
docSection: Forms
order: 6
---

# Switch

A switch uses an `input type="checkbox"` with `role="switch"`. Use it for an on/off setting.

### Native examples

{% set native %}
<label>
  <input type="checkbox" role="switch" checked />
  Enable notifications
</label>
<label>
  <input type="checkbox" role="switch" />
  Enable updates
</label>
<label>
  <input type="checkbox" role="switch" disabled />
  Unavailable setting
</label>
<div>
  <label>
    <input
      type="checkbox"
      role="switch"
      aria-invalid="true"
      aria-describedby="switch-error"
    />
    Enable automatic updates
  </label>
  <small id="switch-error">Enable updates to continue.</small>
</div>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ native | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

### Extension classes

The Full build adds `trace-small` and `trace-large`. Medium uses the default size.

{% set sizes %}
<label>
  <input type="checkbox" role="switch" class="trace-small" />
  Small
</label>
<label>
  <input type="checkbox" role="switch" />
  Medium
</label>
<label>
  <input type="checkbox" role="switch" class="trace-large" />
  Large
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

Use `trace-switch` to wrap the switch and an optional decorative icon. Keep the input and icon as direct children of the wrapper.

{% set withIcon %}
<label>
  <span class="trace-switch">
    <input type="checkbox" role="switch" checked />
    <span class="trace-icon">{% icon "check" %}</span>
  </span>
  Enable notifications
</label>
{% endset %}

{% highlight "html" %}{{ withIcon | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ withIcon | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

See [CSS variables](/docs/customization/#tokens-switches) for styling.
