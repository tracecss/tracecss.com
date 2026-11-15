---
title: Tables
description: Style native HTML tables with Trace CSS.
docSection: Content
order: 3
---

# Tables

Trace CSS styles native HTML tables in every build. Use a caption to name the table, column headers in `thead`, and rows in `tbody`. Add `scope="col"` to column headers and `scope="row"` to row headers.

### Default table

{% set table %}
<table>
  <caption>Invoices</caption>
  <thead>
    <tr><th scope="col">Invoice</th><th scope="col">Amount</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">INV-001</th><td>120.00</td></tr>
    <tr><th scope="row">INV-002</th><td>45.50</td></tr>
    <tr><th scope="row">INV-003</th><td>82.00</td></tr>
  </tbody>
</table>
{% endset %}

{% highlight "html" %}{{ table | trim | safe }}{% endhighlight %}

<div>
{{ table | trim | safe }}
</div>

### Extension classes

The Full build adds these classes.

| Class              | Applies to          | Effect                                                  |
| ------------------ | ------------------- | ------------------------------------------------------- |
| `trace-striped`    | Table               | Shades alternate body rows                              |
| `trace-hover`      | Table               | Highlights rows on hover or when they contain focus     |
| `trace-compact`    | Table               | Reduces padding and font size                           |
| `trace-numeric`    | Header or data cell | Aligns values to the inline end and uses tabular digits |
| `trace-table-wrap` | Wrapper             | Allows a wide table to scroll horizontally              |

{% set extended %}
<div class="trace-table-wrap" tabindex="0" role="region" aria-label="Invoice amounts">
  <table class="trace-striped trace-hover trace-compact">
    <caption>Invoice amounts</caption>
    <thead>
      <tr>
        <th scope="col">Invoice</th>
        <th scope="col" class="trace-numeric">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr><th scope="row">INV-001</th><td class="trace-numeric">120.00</td></tr>
      <tr><th scope="row">INV-002</th><td class="trace-numeric">45.50</td></tr>
      <tr><th scope="row">INV-003</th><td class="trace-numeric">82.00</td></tr>
    </tbody>
  </table>
</div>
{% endset %}

{% highlight "html" %}{{ extended | trim | safe }}{% endhighlight %}

<div>
{{ extended | trim | safe }}
</div>

See [Table tokens](/docs/customization/#tokens-tables) for colors, borders, and spacing.
