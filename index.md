---
layout: default
---

{% for post in site.posts %}
<article class="post">
    <div>
        <a href="{{ post.url | remove_first:'/'}}">
            <h2>{{ post.title }}</h2>
            <img src="{{ post.image }}" alt="{{ post.title }}" />
            <p>{{ post.description | strip_html }}</p>
        </a>
    </div>
    <span>{{ post.date | date: "%-d %B %Y" }}</span>
</article>
{% endfor %}