---
title: Version Picker
description: Choose a Trace CSS build for your project.
order: 3
---

# Version Picker

Choose **Classless** to style native HTML elements with no extension classes, or **Full** to get additional classes for variants and sizes.

<div id="version-picker-controls" hidden>
  <label>
    Build
    <select id="trace-build">
      <option value="full">Full</option>
      <option value="classless">Classless</option>
    </select>
  </label>
  <div>
    <label>
      <input
        id="trace-scoped"
        type="checkbox"
        role="switch"
        aria-describedby="trace-scoped-description"
      />
      Scoped (Conditional)
    </label>
    <small id="trace-scoped-description">Apply Trace CSS only inside containers with the <code>trace-css</code> class.</small>
  </div>
</div>

### CDN stylesheet

Copy this link into the `<head>` of your page.

<div id="version-picker-result">
  <pre class="language-html"><code class="language-html">&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/trace-css@0.1.2/dist/trace.min.css" /&gt;</code></pre>
</div>

<script src="/assets/js/version-picker.js" defer></script>
