---
layout: page
show_meta: false
title: "Contributions to Science"
header:
   image_fullwidth: "header_7.jpg"
permalink: "/contributions/"
---
<ul>
    {% for post in site.tags.contributions %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}"><stronglist>{{ post.title }}</stronglist></a></li>
    {% endfor %}
</ul>
