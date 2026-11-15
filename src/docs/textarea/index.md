---
title: Textarea
description: Use native multiline text fields with Trace CSS.
docSection: Forms
order: 3
---

# Textarea

Use `textarea` for multiline text. Set `rows` for the initial height. Trace CSS lets users resize the field vertically. Use `readonly` to prevent editing while allowing selection, or `disabled` to make the field unavailable.

### Examples

{% set fields %}
<label>
  Message
  <textarea name="message" rows="3" placeholder="Write a message"></textarea>
</label>
<label>
  Read-only notes
  <textarea rows="2" readonly>These notes are visible to everyone.</textarea>
</label>
<label>
  Disabled notes
  <textarea rows="2" disabled></textarea>
</label>
{% endset %}

{% highlight "html" %}{{ fields | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ fields | trim | safe }}
</section>
</div>

See [Textarea tokens](/docs/customization/#tokens-textareas) for styling.

### Extension classes

The Full build adds `trace-small` and `trace-large`. Medium is the default.

{% set sizes %}
<textarea class="trace-small" rows="2" aria-label="Small notes" placeholder="Small"></textarea>
<textarea rows="2" aria-label="Medium notes" placeholder="Medium"></textarea>
<textarea class="trace-large" rows="2" aria-label="Large notes" placeholder="Large"></textarea>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>
