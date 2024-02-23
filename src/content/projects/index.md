---
title: Projects
subtitle: a quite bare projects page. shhhhh im not done
permalink: /projects
layout: page
---

{% for project in collections.prj reversed %}
        <p><a href="{{ project.url }}">{{ project.data.title }}</a> - {{ project.date | datePretty }} - {{ project.data.subtitle }}</p>
{% endfor %}
