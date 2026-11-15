---
title: RTL
description: Use Trace CSS with right-to-left languages.
order: 6
---

# RTL

Trace CSS supports right-to-left (RTL) layouts. Set the HTML `dir` attribute to `rtl` on the whole page or on an individual section. Trace uses logical CSS properties so its spacing and controls follow the reading direction.

### Set the direction for the whole page

Use `lang` to identify the language and `dir` to set the reading direction.

```html
<html lang="ar" dir="rtl">
  <!-- Page content -->
</html>
```

### Use RTL in one section

Add `dir="rtl"` to a container to change the direction of that section.

```html
<section lang="ar" dir="rtl">
  <p>الإعدادات</p>
  <label>
    اسم العرض
    <input type="text" placeholder="أدخل اسمك" />
  </label>
  <label>
    <input type="checkbox" role="switch" />
    تفعيل الإشعارات
  </label>
  <button type="button">حفظ</button>
</section>
```

<div class="theme-previews">
  <section lang="ar" dir="rtl">
    <p>الإعدادات</p>
    <label>
      اسم العرض
      <input type="text" placeholder="أدخل اسمك" />
    </label>
    <label>
      <input type="checkbox" role="switch" />
      تفعيل الإشعارات
    </label>
    <button type="button">حفظ</button>
  </section>
</div>
