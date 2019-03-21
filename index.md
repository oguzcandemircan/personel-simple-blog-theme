---
layout: default
---

{% for post in site.posts %}
<article class="post">
    <a href="{{ post.url | remove_first:'/'}}">
        <h2>{{ post.title }}</h2>
        <img src="{{ post.image }}" alt="{{ post.title }}" />
        {{ post.description | strip_html }}
    </a>
    <br>
    <br>
    <span>{{ post.date | date: "%-d %B %Y" }}</span>
</article>
{% endfor %}