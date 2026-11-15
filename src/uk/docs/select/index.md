---
title: Список вибору
description: Використовуйте нативні списки вибору з Trace CSS.
docSection: Forms
order: 4
---

# Список вибору

Використовуйте `select` з елементами `option` для вибору одного варіанта. Додайте `multiple` і `size`, щоб показати список із множинним вибором. Елемент `optgroup` задає підпис для групи варіантів.

### Нативні елементи

{% set native %}
<label>
  Регіон
  <select>
    <optgroup label="Європа">
      <option>Франція</option>
      <option>Румунія</option>
    </optgroup>
    <optgroup label="Азія">
      <option>Японія</option>
    </optgroup>
  </select>
</label>
<label>
  Сповіщення
  <select multiple size="3">
    <option selected>Електронна пошта</option>
    <option>Пуш-сповіщення</option>
    <option>СМС</option>
  </select>
</label>
<label>
  Вибір регіону недоступний
  <select disabled><option>Франція</option></select>
</label>
{% endset %}

{% highlight "html" %}{{ native | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ native | trim | safe }}
</section>
</div>

### Класи розширень

У повній збірці додайте `trace-select` до обгортки списку, щоб стрілка враховувала тему. Класи `trace-small` і `trace-large` задавайте на самому списку. Середній розмір застосовується типово. Стрілка використовується лише в розкривному списку з одиничним вибором.

{% set sizes %}
<label>
  Малий
  <span class="trace-select">
    <select class="trace-small">
      <option>Перший варіант</option>
      <option>Другий варіант</option>
    </select>
  </span>
</label>
<label>
  Середній
  <span class="trace-select">
    <select>
      <option>Перший варіант</option>
      <option>Другий варіант</option>
    </select>
  </span>
</label>
<label>
  Великий
  <span class="trace-select">
    <select class="trace-large">
      <option>Перший варіант</option>
      <option>Другий варіант</option>
    </select>
  </span>
</label>
{% endset %}

{% highlight "html" %}{{ sizes | trim | safe }}{% endhighlight %}

<div class="theme-previews form-previews">
<section>
{{ sizes | trim | safe }}
</section>
</div>

Кольори, відступи й стрілку можна налаштувати [токенами списків вибору](/uk/docs/customization/#tokens-select-menus).
