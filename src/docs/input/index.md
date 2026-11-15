---
title: Input
description: Use native text inputs and their Trace CSS extensions.
docSection: Forms
order: 1
---

# Input

Trace CSS styles native text inputs in every build. Choose the HTML input type that matches the value and give each field a label.

### Associate a label

Use `for` with a matching, unique `id` when the label and field are separate. You can also nest the field inside its label. Clicking either label focuses its field.

{% set labels %}
<div>
  <label for="input-display-name">Display name</label>
  <input id="input-display-name" type="text" autocomplete="nickname" />
</div>
<label>
  Email
  <input type="email" autocomplete="email" />
</label>
{% endset %}

{% highlight "html" %}{{ labels | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ labels | trim | safe }}
</section>
</div>

### Input types

An `input` without a `type` behaves like a text field. Trace CSS styles the types below. The browser supplies the date, time, and color picker interfaces, so those interfaces can vary across platforms.

{% set fields %}
<label>
  Default text field
  <input />
</label>
<label>
  Text
  <input type="text" />
</label>
<label>
  Search
  <input type="search" />
</label>
<label>
  Email
  <input type="email" />
</label>
<label>
  Website
  <input type="url" />
</label>
<label>
  Phone
  <input type="tel" />
</label>
<label>
  Password
  <input type="password" autocomplete="new-password" />
</label>
<label>
  Number
  <input type="number" />
</label>
<label>
  Date
  <input type="date" />
</label>
<label>
  Local date and time
  <input type="datetime-local" />
</label>
<label>
  Month
  <input type="month" />
</label>
<label>
  Week
  <input type="week" />
</label>
<label>
  Time
  <input type="time" />
</label>
<label>
  Color
  <input type="color" value="#005473" />
</label>
{% endset %}

{% highlight "html" %}{{ fields | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ fields | trim | safe }}
</section>
</div>

### Field states

Use `disabled` to make a field unavailable. Use `readonly` to keep its value visible and selectable while preventing edits. Set `aria-invalid="true"` when validation fails and link the field to a visible error with `aria-describedby`.

{% set states %}
<label>
  Disabled
  <input type="text" value="Unavailable" disabled />
</label>
<label>
  Read only
  <input type="text" value="Account ID" readonly />
</label>
<label>
  Email
  <input type="email" value="invalid" aria-invalid="true" aria-describedby="input-error" />
</label>
<small id="input-error">Enter a valid email address.</small>
{% endset %}

{% highlight "html" %}{{ states | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ states | trim | safe }}
</section>
</div>

See [Input tokens](/docs/customization/#tokens-text-inputs) for colors, borders, and spacing.

### Extension classes

The Full build adds `trace-small` and `trace-large`. Medium is the default size.

{% set sizes %}
<input type="text" class="trace-small" placeholder="Small" aria-label="Small input" />
<input type="text" placeholder="Medium" aria-label="Medium input" />
<input type="text" class="trace-large" placeholder="Large" aria-label="Large input" />
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>

To add an icon, place it and the input directly inside `trace-input-wrap`. Use `trace-input-icon-start` or `trace-input-icon-end` on the icon wrapper.

{% set withIcon %}
<label>
  Search
  <span class="trace-input-wrap">
    <span class="trace-icon trace-input-icon-start">{% icon "search" %}</span>
    <input type="search" placeholder="Search documentation" />
  </span>
</label>
{% endset %}

{% highlight "html" %}{{ withIcon | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ withIcon | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</section>
</div>
