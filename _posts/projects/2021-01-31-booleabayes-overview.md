---
layout: page-fullwidth
breadcrumb: true

subheadline:  "Contributions to Science"
title:  "BooleaBayes"
teaser: "This analysis was written to analyze transcription factor networks for Small Cell Lung Cancer phenotypes. I've written a primer on gene regulatory network dynamics and how our computational tool is able to define them and make predictions about the future using gene expression data-- RNA sequencing data that tells you the identity of a population of cells."
categories:
    - projects
tags:
    - projects
    - code
    - networks
    - contributions
header:
    image_fullwidth: "header_11.jpg"
permalink: "/projects/booleabayes/"
---
## Part 1: The Why

## Part 2: Network structure and dynamics

## Part 3: Using data to build a gene regulatory network for Small Cell Lung Cancer

## Part 4: How good is our model?

## Part 5: So... can we cure Small Cell Lung Cancer yet?
<ul>
    {% for post in site.tags.booleabayes %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}"><stronglist>{{ post.title }}</stronglist></a></li>
    {% endfor %}
</ul>
