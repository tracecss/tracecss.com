---
title: Range
description: Use native range sliders with Trace CSS.
docSection: Forms
order: 5
---

# Range

Use `input type="range"` for a value between two limits. Set `min`, `max`, and `step` to define the allowed values, and `value` for the starting position. Use the arrow keys to adjust a focused slider.

### Native examples

{% set native %}
<label>
  Volume
  <input type="range" min="0" max="100" step="5" value="40" />
</label>
<label>
  Disabled volume
  <input type="range" min="0" max="100" value="40" disabled />
</label>
<label>
  Invalid volume
  <input type="range" value="80" aria-invalid="true" aria-describedby="range-error" />
  <small id="range-error">Choose a volume of 60 or less.</small>
</label>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ native | trim | safe }}
</section>
</div>

### Extension classes

The Full build adds `trace-small` and `trace-large`. They adjust the thumb, track, and control height. Medium uses the default size.

{% set sizes %}
<label>
  Small
  <input type="range" class="trace-small" value="40" />
</label>
<label>
  Medium
  <input type="range" value="40" />
</label>
<label>
  Large
  <input type="range" class="trace-large" value="40" />
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>

See [Range slider tokens](/docs/customization/#tokens-range-sliders) for colors and dimensions.
