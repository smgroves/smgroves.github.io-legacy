---
layout: page
breadcrumb: true
subheadline:  "Broader Impact"
title:  "Lectures"
teaser: "Presentations and lectures I have given to Vanderbilt University graduate-level courses."
tags:
    - community
    - impact
header:
    image_fullwidth: "header_8.jpg"
permalink: "/lectures/"
---

{% for post in site.categories.lectures %}
  <div class="row">
    <div class="small-12 columns b60">
      <h2><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
      <p> {% if post.image.thumb %}<a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}" title="{{ post.title | escape_once }}"><img src="{{ site.urlimg }}{{ post.image.thumb }}" class="alignleft" width="150" height="150" alt="{{ page.title escape_once }}"></a>{% endif %} </p>
            <p class="subheadline">{{ post.categories | join: ' &middot; ' | prepend: '<span class="subheader">' | append: '</span>' }}{% if post.categories != empty and post.subheadline != NULL %}  {% endif %}</p>
            <p> {% if post.meta_description %}{{ post.meta_description | strip_html | escape }}{% elsif post.teaser %}{{ post.teaser | strip_html | escape }}{% endif %} <a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}" title="{{ site.data.language.read }} {{ post.title | escape_once }}"><strong>{{ site.data.language.read_more }}</strong></a>
      </p>
    </div><!-- /.small-12.columns -->
  </div><!-- /.row -->
{% endfor %}

