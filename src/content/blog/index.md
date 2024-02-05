---
title: Blog
subtitle: Welcome to my blog!
permalink: /blog/index.html
layout: page
---

{% for post in collections.posts reversed %}
    <div class="postlist-item">
        <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
        <p>
			{{ post.date | datePretty }}
			{% for tag in post.data.tags %} <a href="/blog/t/{{tag}}" style="margin-right:2px;">{{tag}}</a>{% endfor %}
		</p>
    </div>
{% endfor %}
