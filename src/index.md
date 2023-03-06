---
title: Hello World
layout: "home.njk"
---

Hello Jamstack

{% for post in collections.blog %}
- [{{ post.data.title}}]({{ post.url}})
{% endfor %}


the end