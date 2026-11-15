---
title: Color theming
description: Use light and dark themes with Trace CSS.
order: 5
---

# Color theming

Trace CSS supports light and dark themes. Set `data-mode="light"` or `data-mode="dark"` on `<html>` to choose a theme for the whole page. Without an explicit mode, Trace CSS follows the system preference.

### Use both themes on one page

Set `data-mode` on individual containers to show light and dark areas side by side. With a scoped build, add `class="trace-css"` to each container as well.

```html
<section data-mode="light">
  <p>Light theme</p>
  <label>
    Display name
    <input type="text" placeholder="Enter your name" />
  </label>
  <label>
    <input type="checkbox" role="switch" />
    Enable notifications
  </label>
  <button type="button">Preview</button>
</section>

<section data-mode="dark">
  <p>Dark theme</p>
  <label>
    Display name
    <input type="text" placeholder="Enter your name" />
  </label>
  <label>
    <input type="checkbox" role="switch" />
    Enable notifications
  </label>
  <button type="button">Preview</button>
</section>
```

<div class="theme-previews">
  <section data-mode="light">
    <p>Light theme</p>
    <label>
      Display name
      <input type="text" placeholder="Enter your name" />
    </label>
    <label>
      <input type="checkbox" role="switch" />
      Enable notifications
    </label>
    <button type="button">Preview</button>
  </section>
  <section data-mode="dark">
    <p>Dark theme</p>
    <label>
      Display name
      <input type="text" placeholder="Enter your name" />
    </label>
    <label>
      <input type="checkbox" role="switch" />
      Enable notifications
    </label>
    <button type="button">Preview</button>
  </section>
</div>
