---
layout: default
title: 'Etiketler'
description: ''
keywords: ''
sitemap: false
---

{%- capture site_tags -%}
    {%- for tag in site.tags -%}
        {{- tag | first -}}{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
{%- endcapture -%}
{%- assign tags_list = site_tags | split:',' | sort -%}

<br>
<hr>
<div class="tags">
    <ul>
        {% for tag in tags_list %}
        <li><a href="#{{- tag -}}"><span>{{ tag }} - ({{site.tags[tag].size}})</span></a></li>
        {% endfor %}
    </ul>
</div>

<hr>

<div id="full-tags-list">
{%- for tag in tags_list -%}
    <h2 id="{{- tag -}}" class="linked-section mt-3">
        <i class="fa fa-tag" aria-hidden="true"></i>
        &nbsp;{{- tag -}}&nbsp;({{site.tags[tag].size}})
    </h2>
    <hr>
    <div class="post-list">
        {%- for post in site.tags[tag] -%}
        <article class="post">
            <a href="{{ post.url | remove_first:'/'}}">
                <h2>{{ post.title }}</h2>
                {{ post.excerpt }}
            </a>
            <span>{{ post.date | date: "%-d %B %Y" }}</span>
        </article>
        {%- endfor -%}
    </div>
{%- endfor -%}
</div>