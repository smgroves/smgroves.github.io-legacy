---
layout: page
show_meta: false
title: "Broader Impact"
header:
   image_fullwidth: "header_10.jpg"
permalink: "/impact/"
---
<ul>
    {% for post in site.tags.impact %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}"><stronglist>{{ post.title }}</stronglist></a></li>
    {% endfor %}
</ul>
