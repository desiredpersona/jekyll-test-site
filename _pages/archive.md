---
layout: default
header: false
title: blog
description: Welcome to the jekyll test site
permalink: /blog/
---

<section class="flex flex-column mw7 center ph3 ph4-ns f5 f4-ns fw3 lh-copy mb0">
  <h1 class="f5 fw4 lh-title mb0 pb2 bb b--light-gray">{{ site.data.theme.text.full_archive }}</h1>

  {% for post in site.posts %}
  <a class="link black-80 hover-silver" href="{{ post.url | relative_url }}">
    <article class="f5 lh-copy fw3 pb4 bb b--light-gray">
      <div class="f6 fw6 lh-title ttu tracked mv4"><time>{{ post.date | date: "%b %Y" }}</time></div>
      <h3 class="f3 fw6 lh-title mb0">{{ post.title | escape }}</h3>
      <p class="f5 fw3 lh-copy mv2">{{ post.excerpt | remove: '<p>' | remove: '</p>' }}</p>

      <div class="f6 fw3 silver mt0">
        {% if post.last_modified_at %}
        <span>{{ site.data.theme.text.updated }} <time>{{ post.last_modified_at | date: site.date_format }}</time></span>
        {% else %}
        <time>{{ post.date | date: site.date_format }}</time>
        {% endif %}
        <span class="ttl">&middot; {% include read_time.html %}</span>
      </div>
    </article>
  </a>
  {% endfor %}
</section>