---
title: Home
subtitle: Welcome to Laker Turner's website.
permalink: /
layout: base
---

<span class="h-card" style="display: flex;">
	<p>
		Hi! I'm <a class="u-url ntd" rel="me" href="{{author.url}}">Laker Turner</a> (<a href="https://laker.tech/pronouns" class="u-pronouns">she/her</a>). <br>
		<span class="p-note">{{author.bio}}</span>
	</p>
	<img class="u-photo profile-picture" height=80 width=80 src="{{author.photo}}" alt="{{author.photoalt}}">
</span>

Feel free to walk around and see what's going on, maybe [check out my blog](/blog)?

{% include "postlist.njk" %}