---
title: Projects
subtitle: a quite bare projects page. shhhhh im not done
permalink: /projects/index.html
layout: page
eleventyExcludeFromCollections: true
---
{% for project in collections.prj reversed %}
    <p><a href="{{ project.url }}">{{ project.data.title }}</a> - {{ project.date | datePretty }} - {{ project.data.subtitle }}</p>
{% endfor %}
