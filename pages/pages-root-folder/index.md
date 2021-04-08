---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: header_home.jpg
widget1:
  title: "Contributions to Science"
  url: 'http://smgroves.github.io/contributions/'
  image: widget-1-302x182.jpg
  text: 'See my publications, presentations, and computational tools.'
widget2:
  title: "Broader Impact"
  url: 'http://smgroves.github.io/impact/'
  image: cpb_retreat.jpg
  text: 'See my mentorship and community service, or browse my course lectures and blog posts.'
widget3:
  title: "Current Research"
  url: 'http://smgroves.github.io/about/current/'
  image: widget-github-303x182.jpg
  text: 'I am currently a PhD candidate at Vanderbilt University in the lab of Vito Quaranta.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
callforaction:
  url: https://tinyletter.com/smgroves
  text: Inform me about new updates and publications ›
  style: alert
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
