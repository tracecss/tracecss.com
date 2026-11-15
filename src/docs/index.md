---
title: Quick start
description: Install Trace CSS with a package manager or load it in plain HTML.
order: 1
---

# Quick start

Trace CSS is a lightweight, classless CSS library that styles native HTML elements. Add one stylesheet to give your forms, buttons, and typography a consistent look in light and dark themes.

### Install with a package manager

{% set commands = {
  npm: "npm install trace-css",
  pnpm: "pnpm add trace-css",
  Bun: "bun add trace-css",
  Yarn: "yarn add trace-css"
} %}

<div id="package-install">
  <div hidden>
    <label for="package-manager">Package manager</label>
    <select id="package-manager">
      {% for manager, command in commands -%}
        <option value="{{ manager }}">{{ manager }}</option>
      {% endfor -%}
    </select>
  </div>
  {% for manager, command in commands -%}
    <div data-manager="{{ manager }}">
      {% highlight "sh" %}{{ command }}{% endhighlight %}
    </div>
  {% endfor -%}
</div>
<script src="/assets/js/package-install.js" defer></script>

If your project uses a bundler, import the stylesheet in your application entry point:

```js
import 'trace-css';
```

### Load from a CDN

For a plain HTML page, add this stylesheet link inside `<head>`:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/trace-css@0.1.2/dist/trace.min.css"
/>
```

### Host the stylesheet yourself

Copy `dist/trace.min.css` from the installed `trace-css` package into your site's public assets. For example, if the file is served from `/assets/trace.min.css`, add this link inside `<head>`:

```html
<link rel="stylesheet" href="/assets/trace.min.css" />
```

### Usage example

Trace CSS styles these native HTML controls without CSS classes.

```html
<form>
  <h3>Sign in</h3>
  <p>Enter your username and password to continue.</p>

  <input
    type="text"
    autocomplete="username"
    placeholder="Username"
    aria-label="Username"
  />

  <input
    type="password"
    autocomplete="current-password"
    placeholder="Password"
    aria-label="Password"
  />

  <label>
    <input type="checkbox" role="switch" />
    Keep me signed in
  </label>

  <div>
    <button type="button">Sign in</button>
  </div>
</form>
```

<div class="docs-form-preview">
<form>
  <h3>Sign in</h3>
  <p>Enter your username and password to continue.</p>
  <input
    type="text"
    autocomplete="username"
    placeholder="Username"
    aria-label="Username"
  />
  <input
    type="password"
    autocomplete="current-password"
    placeholder="Password"
    aria-label="Password"
  />
  <label>
    <input type="checkbox" role="switch" />
    Keep me signed in
  </label>
  <div>
    <button type="button">Sign in</button>
  </div>
</form>
</div>
