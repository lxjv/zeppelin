---
title: Projects
permalink: /projects
layout: page
---

{% for project in collections.prj reversed %}
        <p><a href="{{ project.url }}">{{ project.data.title }}</a> - {{ project.date | datePretty }} - {{ project.data.subtitle }}</p>
{% endfor %}
