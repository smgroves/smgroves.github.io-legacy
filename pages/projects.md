---
layout: page
show_meta: false
breadcrumb: true

subheadline:  "Research"
title: "Computational Tools and Projects"
header:
   image_fullwidth: "header_10.jpg"
permalink: "/projects/"
---

Check out my recently developed projects and computational tools/code that can be applied to your own data. 

<ul>
    {% for post in site.categories.projects %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}"><stronglist>{{ post.title }}</stronglist></a></li>
    {% endfor %}
</ul>
