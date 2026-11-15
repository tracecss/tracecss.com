---
title: File input
description: Use native file inputs with Trace CSS.
docSection: Forms
order: 2
---

# File input

Use `type="file"` to open the browser’s file picker. Use `accept` to hint which files users can choose and `multiple` to allow more than one. Validate file types and sizes separately.

### Examples

{% set fields %}
<label>
  Attachment
  <input type="file" name="attachment" />
</label>
<label>
  Images
  <input type="file" name="images" accept="image/*" multiple />
</label>
{% endset %}

{% highlight "html" %}{{ fields | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ fields | trim | safe }}
</section>
</div>

### Field states

Use `required` to require a file before form submission. Set `aria-invalid="true"` when validation fails and connect the field to its error message with `aria-describedby`. Press <kbd>Tab</kbd> to see the focus style.

{% set states %}
<label>
  Required attachment
  <input type="file" required />
</label>
<div>
  <label for="file-input-invalid">Invalid attachment</label>
  <input id="file-input-invalid" type="file" aria-invalid="true" aria-describedby="file-input-error" />
  <small id="file-input-error">Choose a supported file type.</small>
</div>
<label>
  Disabled upload
  <input type="file" disabled />
</label>
{% endset %}

{% highlight "html" %}{{ states | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ states | trim | safe }}
</section>
</div>

See [File input tokens](/docs/customization/#tokens-file-inputs) for styling.

### Extension classes

In the Full build, use `trace-small` or `trace-large` to change the size of the file input and its native picker button. Medium uses the default size.

{% set sizes %}
<label>
  Small
  <input type="file" class="trace-small" />
</label>
<label>
  Medium
  <input type="file" />
</label>
<label>
  Large
  <input type="file" class="trace-large" />
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>
