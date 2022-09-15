---
layout: page
breadcrumb: true
title: "About Me"
subheadline: "Who am I?"
permalink: "/about/"
header:
    image_fullwidth: "header_1.jpg"
---


Welcome to my site! I am currently a post-doctoral researcher studying cancer systems biology at Vanderbilt University. I focus on data analysis and computational modeling of phenotypic transitions in Small Cell Lung Cancer. After receiving a B.S. in physics and math from The College of William & Mary in 2016, I entered Vanderbilt via their quantitative and chemical biology program and completed my PhD in the Quaranta Lab in March 2022. I love that my research allows me to apply physics and math to biological problems.

<ul>
    {% for post in site.categories.about %}
    <li><a href="{{ site.url }}{{ site.baseurl }}{{ post.url }}"><stronglist>{{ post.title }}</stronglist></a></li>
    {% endfor %}
</ul>



## Funding and Awards
<b>2022-Current</b>: NIH F32 Post-doctoral Training Grant Awardee
<b>August 2021</b>: Podium Prsentation Award: Cancer Systems Biology Consortium Junior Investigators Annual Meeting
<b>2017-2021</b>:  NSF Graduate Research Fellowships Program Fellow
<b>2019</b>: Vanderbilt Graduate School Travel Grant to Present Research
<b>2016-2017</b>: BIDS (Vanderbilt Training Program in Big Biomedical Data) Science Trainee
<b>2017</b>: Vanderbilt Graduate School Travel Grant to Present Research
<b>2012-2016</b>: James Monroe Scholar, College of William & Mary
<b>2012-2016</b>: Academic Dean's List, College of William & Mary

