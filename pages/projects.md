---
layout: page
show_meta: false
breadcrumb: true

subheadline:  "Research"
title: "Computational Tools and Projects"
# header:
  # title: "Sarah Groves"
   #image_fullwidth: "header_10.jpg"
permalink: "/projects/"
widget1:
  title: "BooleaBayes"
  url: 'https://pypi.org/project/booleabayes/'
  image: msapplication_tileimage.png
  text: ' A network inference method to derive and simulate gene regulatory networks from transcriptomics data.'
widget2:
  title: "Mazebox"
  url: 'https://pypi.org/project/mazebox/'
  image: mazebox_ctrp.png
  text: 'A suite of tools for analyzing single-cell transcriptomics data.'
---

<div id="header-home">
    <div class="row">
        <div class="small-12 columns">
        </div><!-- /.medium-4.columns -->
    </div><!-- /.row -->
</div><!-- /#header-home -->


{% comment %}
*
* First check, if widget is empty or not by checking if there is a title
*
{% endcomment %}
<div class="row t60">
	{% if page.widget1.image or page.widget1.video or page.widget1.title %}
		{% include _frontpage-widget.html widget=page.widget1 %}
	{% endif %}

	{% if page.widget2.image or page.widget2.video or page.widget2.title %}
		{% include _frontpage-widget.html widget=page.widget2 %}
	{% endif %}

	{% if page.widget3.image or page.widget3.video or page.widget3.title %}
		{% include _frontpage-widget.html widget=page.widget3 %}
	{% endif %}
</div><!-- /.row -->


<!-- 
Check out my recently developed projects and computational tools/code that can be applied to your own data. 

<ul>
    {% for post in site.categories.projects %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}"><stronglist>{{ post.title }}</stronglist></a></li>
    {% endfor %}
</ul> -->
