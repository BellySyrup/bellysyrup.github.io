---
layout: default
title: all posts
---

{% for post in site.posts %}[{{post.title}}]({{post.url}})  
{% endfor %}