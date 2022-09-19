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
  title: "Projects"
  url: 'http://smgroves.github.io/projects/'
  image: widget-1-302x182.jpg
  text: 'See the computational tools I have developed.'
widget2:
  title: "About Me"
  url: 'http://smgroves.github.io/about/'
  image: cpb_retreat.jpg
  text: 'I am currently a postdoctoral researcher at Vanderbilt Univeristy in the lab of Vito Quaranta, M.D.'
widget3:
  title: "Blog"
  url: 'http://smgroves.github.io/blog/'
  image: widget-github-303x182.jpg
  text: 'Check out my lectures, blog posts, and project descriptions.'
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
# callforaction:
#   url: https://tinyletter.com/smgroves
#   text: Inform me about new updates and publications ›
#   style: alert
# permalink: /index.html
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
