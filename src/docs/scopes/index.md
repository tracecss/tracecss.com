---
title: Scopes
description: Apply Trace CSS to a specific part of a page.
order: 4
---

# Scopes

Use a scoped build when Trace CSS should style only part of a page, such as an embedded settings panel. Scoped builds use CSS `@scope` and apply Trace styles inside containers with the `trace-css` class.

### Load a scoped build

In the [Version Picker](/docs/version-picker/), turn on **Scoped** and choose **Classless** or **Full**. Add the generated stylesheet link to the page.

### Mark the area to style

```html
<body class="trace-css">
  <section>
    <h2>Settings</h2>
    <label>
      Display name
      <input type="text" />
    </label>
    <button type="button">Save</button>
  </section>
</body>
```

### Compare the same markup

Both previews load the same scoped stylesheet. The Scoped preview adds `class="trace-css"` to its `<body>`, so Trace CSS styles its heading, input, and button.

<div class="scope-previews">
  {% for scoped in [true, false] -%}
    {% set preview -%}
      <!doctype html>
      <html lang="en" data-mode="light">
        <head>
          <meta charset="utf-8" />
          <link rel="stylesheet" href="/assets/trace/trace.conditional.min.css" />
          <style>
            body { margin: 0; padding: 1rem; }
            section { display: grid; justify-items: start; gap: 0.75rem; }
            h2 { margin: 0; }
            label { display: grid; gap: 0.25rem; min-inline-size: 0; }
            input { box-sizing: border-box; max-inline-size: 100%; }
          </style>
        </head>
        <body{% if scoped %} class="trace-css"{% endif %}>
          <section>
            <h2>Settings</h2>
            <label>
              Display name
              <input type="text" />
            </label>
            <button type="button">Save</button>
          </section>
        </body>
      </html>
    {%- endset -%}
    <div>
      <p>{{ "Scoped" if scoped else "Unscoped" }}</p>
      <iframe
        title="{{ "Settings with scope" if scoped else "Settings without scope" }}"
        sandbox="allow-same-origin"
        srcdoc="{{ preview | escape }}"
      ></iframe>
    </div>
  {%- endfor -%}
</div>

You can use multiple `trace-css` containers on the same page. Keep elements that need Trace styles inside a container, including dialogs rendered elsewhere in the DOM by your framework. Host page styles and inherited properties can still affect content inside the scope.

<script src="/assets/js/scope-previews.js" defer></script>
