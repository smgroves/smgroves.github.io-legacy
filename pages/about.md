---
layout: page
title: "About Me"
subheadline: "Who am I?"
permalink: "/about/"
header:
    image_fullwidth: "header_1.jpg"
---


Welcome to my site! I am currently a grad student in a cancer systems biology lab and Vanderbilt University. I study phenotypic transitions in Small Cell Lung Cancer. After receiving a B.S. in physics and math from The College of William and Mary, I entered Vanderbilt as a student in their quantitative and chemical biology program. I currently am a PhD candidate in the Quaranta Lab. I love that my project requires me to apply physics and math to biological problems.

<ul>
    {% for post in site.categories.about %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}"><stronglist>{{ post.title }}</stronglist></a></li>
    {% endfor %}
</ul>



## Funding

I am grateful to have obtained my own funding for my time in graduate school. For my second year, I received funding from a Vanderbilt Training grant from the Bioinformatics department. I then was honored to receive the NSF Graduate Research Fellowship (GRFP), for which I am a 5-year fellow (supplies funding for 3 years).

2016-2017 | BIDS: Vanderbilt Training Program in Big Biomedical Data
Science Trainee,
NIH 1T32LM012412-01

2017-2021 | NSF Graduate Research Fellowships Program Fellow, DGE -
1445197
 
