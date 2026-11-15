---
title: RTL
description: Используйте Trace CSS с языками, в которых текст читается справа налево.
order: 6
---

# RTL

Trace CSS поддерживает направление справа налево (RTL). Задайте HTML-атрибуту `dir` значение `rtl` на всей странице или в одном разделе. Trace использует логические свойства CSS, чтобы отступы и элементы управления учитывали направление чтения.

### Направление всей страницы

Укажите язык с помощью `lang` и направление чтения с помощью `dir`.

```html
<html lang="ar" dir="rtl">
  <!-- Контент страницы -->
</html>
```

### RTL в одном разделе

Добавьте контейнеру `dir="rtl"`, чтобы изменить направление в этом разделе.

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
