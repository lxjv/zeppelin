---
title: Blog
subtitle: Welcome to my blog!
permalink: /blog/index.html
layout: page
---
[blogroll!](/roll)

{% for post in collections.posts reversed %}
    <div class="postlist-item">
        <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
        <p>
			{{ post.date | datePretty }}
			{% for tag in post.data.tags %}<a href="/blog/t/{{tag}}" style="margin: 0 4px;">{{tag}}</a>{% endfor %}
			<blockquote>{{ post.subtitle }}</blockquote>
		</p>
    </div>
{% endfor %}
