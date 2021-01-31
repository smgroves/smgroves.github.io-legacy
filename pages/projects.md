---
layout: page
show_meta: false
subheadline:  "Research"
title: "Computational Tools and Projects"
header:
   image_fullwidth: "header_3.jpg"
permalink: "/projects/"
---
<ul>
    {% for post in site.categories.projects %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>