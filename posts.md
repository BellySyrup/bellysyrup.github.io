---
layout: default
title: Home
---
## [sconzen](http://sconzen.github.io): [home](http://sconzen.github.io)


 <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>

  +   Red
  +   Green
  +   Blue