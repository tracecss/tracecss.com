---
title: Loader
description: Show loading indicators on buttons and containers with aria-busy in Trace CSS.
docSection: Components
order: 2
---

# Loader

Use a loader to show that an operation is in progress. Trace CSS shows a static indicator when the user prefers reduced motion.

### Standalone loader

The Full build provides `trace-loader`. Give a standalone loader a status role and an accessible name.

{% set loaders %}
<span class="trace-loader" role="status" aria-label="Loading"></span>
{% endset %}

{% highlight "html" %}{{ loaders | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ loaders | trim | safe }}
</div>

### Loading buttons

Set `aria-busy="true"` on a native button to show a centered loader in every build. Add `disabled` to prevent activation while work is in progress. With the Full build, a direct `span.trace-icon` child displays the loader alongside the visible label.

{% set buttons %}
<button type="button" aria-busy="true" disabled>Saving</button>
<button type="button" class="trace-primary" aria-busy="true" disabled>
<span class="trace-icon" aria-hidden="true"></span>
Uploading
</button>
<button type="button" class="trace-secondary trace-outline" aria-busy="true" disabled>
<span class="trace-icon" aria-hidden="true"></span>
Loading
</button>
<button type="button" class="trace-icon-only" aria-label="Saving" aria-busy="true" disabled>
<span class="trace-icon">{% icon "save" %}</span>
</button>
{% endset %}

{% highlight "html" %}{{ buttons | trim | safe }}{% endhighlight %}

<div class="button-examples">
{{ buttons | replace(r/\n[ \t]*\n/g, "\n") | trim | safe }}
</div>

### Loading overlay

Set `aria-busy="true"` on a container to show an overlay and a centered loader. Disable the form controls while the container is busy.

{% set overlay %}
<section aria-busy="true">
  <h4>Profile settings</h4>
  <p>Loading your saved preferences.</p>
  <form>
    <label>
      Display name
      <input type="text" value="Alex" disabled />
    </label>
    <button type="button" disabled>Save</button>
  </form>
</section>
{% endset %}

{% highlight "html" %}{{ overlay | trim | safe }}{% endhighlight %}

<div class="theme-previews loading-overlay-preview">
{{ overlay | trim | safe }}
</div>

See [Button tokens](/docs/customization/#tokens-buttons) for button styling.
