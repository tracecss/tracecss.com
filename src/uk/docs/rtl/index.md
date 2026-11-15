---
title: RTL
description: Використовуйте Trace CSS із мовами, у яких текст читається справа наліво.
order: 6
---

# RTL

Trace CSS підтримує напрямок справа наліво (RTL). Задайте HTML-атрибуту `dir` значення `rtl` на всій сторінці або в одному розділі. Trace використовує логічні властивості CSS, щоб відступи й елементи керування враховували напрямок читання.

### Напрямок усієї сторінки

Укажіть мову за допомогою `lang` і напрямок читання за допомогою `dir`.

```html
<html lang="ar" dir="rtl">
  <!-- Контент сторінки -->
</html>
```

### RTL в одному розділі

Додайте до контейнера `dir="rtl"`, щоб змінити напрямок у цьому розділі.

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
