---
title: Radio buttons
description: Use native radio buttons with Trace CSS.
docSection: Forms
order: 8
---

# Radio buttons

Radio buttons with the same `name` let users choose one option. Use a `fieldset` and `legend` to label the group.

### Native examples

When validation fails, set `aria-invalid="true"` on the radio options and link the group to its error message with `aria-describedby`.

{% set native %}
<fieldset>
  <legend>Delivery method</legend>
  <label>
    <input type="radio" name="delivery" checked />
    Email
  </label>
  <label>
    <input type="radio" name="delivery" />
    Push
  </label>
  <label>
    <input type="radio" name="delivery" disabled />
    SMS
  </label>
</fieldset>
<fieldset aria-describedby="contact-method-error">
  <legend>Preferred contact method</legend>
  <label>
    <input type="radio" name="contact-method" aria-invalid="true" required />
    Email
  </label>
  <label>
    <input type="radio" name="contact-method" aria-invalid="true" />
    Phone
  </label>
</fieldset>
<small id="contact-method-error">Choose a contact method to continue.</small>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews radio-previews">
<section>
{{ native | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

### Extension classes

The Full build adds `trace-small` and `trace-large`. Medium uses the default size.

{% set sizes %}
<fieldset>
  <legend>Delivery method</legend>
  <label>
    <input type="radio" name="delivery-size" class="trace-small" />
    Small
  </label>
  <label>
    <input type="radio" name="delivery-size" />
    Medium
  </label>
  <label>
    <input type="radio" name="delivery-size" class="trace-large" />
    Large
  </label>
</fieldset>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews radio-previews">
<section>
{{ sizes | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>

See [CSS variables](/docs/customization/#tokens-radio-buttons) for styling.
