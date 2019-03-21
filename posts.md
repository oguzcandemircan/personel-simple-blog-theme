---
layout: default
---

{% for post in site.posts %}
<article class="post">
    <a href="{{ post.url | remove_first:'/'}}">
        <h2>{{ post.title }}</h2>
        {{ post.excerpt }}
    </a>
    <span>{{ post.date | date: "%-d %B %Y" }}</span>
</article>
{% endfor %}