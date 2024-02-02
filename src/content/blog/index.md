---
title: Blog
subtitle: Welcome to my blog!
permalink: /blog/index.html
layout: page
---

> {{subtitle}}

{% for post in collections.posts reversed %}
    <div class="postlist-item">
        <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
        <p>{{ post.date | datePretty }} - {{ post.data.subtitle }} {{post.tags}}</p>
    </div>
{% endfor %}
