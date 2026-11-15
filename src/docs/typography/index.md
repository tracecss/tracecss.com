---
title: Typography
description: Explore native text elements and responsive heading sizes in Trace CSS.
docSection: Content
order: 1
---

# Typography

Trace CSS styles native HTML text elements. Body text and headings use the theme’s body and heading fonts. Code, keyboard input, and sample output use the monospace font.

### Headings and responsive sizes

Choose headings by their place in the document outline. Trace CSS sets all six levels to bold with a line height of 1.25.

| Element | At 48rem and above | Below 48rem |
| ------- | -----------------: | ----------: |
| `h1`    |               3rem |        2rem |
| `h2`    |             2.5rem |     1.75rem |
| `h3`    |               2rem |      1.5rem |
| `h4`    |             1.5rem |     1.25rem |
| `h5`    |            1.25rem |    1.125rem |
| `h6`    |               1rem |        1rem |

Below `48rem` (typically 768 CSS pixels), a media query reduces the size of `h1` through `h5` in a single step. Body text keeps its default line height of 1.6. Long words can wrap, while preformatted blocks can scroll horizontally. The breakpoint follows the viewport width, including when you use a scoped build.

{% set headings %}
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
{% endset %}

{% highlight "html" %}{{ headings | trim | safe }}{% endhighlight %}

<div aria-hidden="true">
{{ headings | trim | safe }}
</div>

### Paragraphs, lists, and links

Paragraphs have a default bottom margin of `1rem`. Unordered, ordered, and description lists use the body line height. Links use theme-aware colors.

{% set prose %}
<p>Read the <a href="/docs/">Quick start</a> to install Trace CSS.</p>
<ul><li>Native HTML elements</li></ul>
<ol><li>Load the stylesheet</li><li>Add your markup</li></ol>
<dl><dt>Token</dt><dd>A CSS custom property that controls a style.</dd></dl>
{% endset %}

{% highlight "html" %}{{ prose | trim | safe }}{% endhighlight %}

<div>
{{ prose | trim | safe }}
</div>

### Inline text

| Elements          | Rendered example                                                  |
| ----------------- | ----------------------------------------------------------------- |
| `strong`, `b`     | <strong>Important</strong>, <b>Keyword</b>                        |
| `em`, `i`, `cite` | <em>Emphasis</em>, <i>Term</i>, <cite>HTML Living Standard</cite> |
| `del`, `s`        | <del>Deleted</del>, <s>Out of date</s>                            |
| `ins`, `u`        | <ins>Inserted</ins>, <u>Annotated</u>                             |
| `abbr[title]`     | <abbr title="Cascading Style Sheets">CSS</abbr>                   |
| `mark`            | <mark>Highlighted text</mark>                                     |
| `small`           | <small>Fine print</small>                                         |
| `sub`, `sup`      | H<sub>2</sub>O, 2<sup>3</sup>                                     |
| `code`            | <code>display: grid</code>                                        |
| `kbd`             | <kbd>Enter</kbd>                                                  |
| `samp`            | <samp>Build complete</samp>                                       |

### Preformatted text

Use `pre` to preserve whitespace and `code` for source code.

```html
<pre><code>First line
  Indented line</code></pre>
```

<pre data-no-copy><code>First line
  Indented line</code></pre>

### Block quotes and dividers

A block quote uses a tinted surface and a border on the inline start edge. A horizontal rule separates topics with a theme-aware border.

{% set quotation %}
<blockquote>
  <p>Use native HTML as the foundation for your interface.</p>
  <footer>— <cite>Trace CSS documentation</cite></footer>
</blockquote>
<hr />
{% endset %}

{% highlight "html" %}{{ quotation | trim | safe }}{% endhighlight %}

<div>
{{ quotation | trim | safe }}
</div>

See [Typography tokens](/docs/customization/#tokens-typography) for fonts and spacing, [Content element tokens](/docs/customization/#tokens-content-elements) for quotes and inline text, and [Palette and theme tokens](/docs/customization/#tokens-palette-and-themes) for colors.
