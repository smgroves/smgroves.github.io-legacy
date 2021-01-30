// File#: _1_vertical-timeline
// Usage: codyhouse.co/license
(function() {
	var VTimeline = function(element) {
	  this.element = element;
	  this.sections = this.element.getElementsByClassName('js-v-timeline__section');
	  this.animate = this.element.getAttribute('data-animation') && this.element.getAttribute('data-animation') == 'on' ? true : false;
	  this.animationClass = 'v-timeline__section--animate';
	  this.animationDelta = '-150px';
	  initVTimeline(this);
	};
  
	function initVTimeline(element) {
	  if(!element.animate) return;
	  for(var i = 0; i < element.sections.length; i++) {
		var observer = new IntersectionObserver(vTimelineCallback.bind(element, i),
		{rootMargin: "0px 0px "+element.animationDelta+" 0px"});
		observer.observe(element.sections[i]);
	  }
	};
  
	function vTimelineCallback(index, entries, observer) {
	  if(entries[0].isIntersecting) {
		Util.addClass(this.sections[index], this.animationClass);
		observer.unobserve(this.sections[index]);
	  } 
	};
  
	//initialize the VTimeline objects
	var timelines = document.querySelectorAll('.js-v-timeline'),
	  intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
	  reducedMotion = Util.osHasReducedMotion();
	if( timelines.length > 0) {
	  for( var i = 0; i < timelines.length; i++) {
		if(intersectionObserverSupported && !reducedMotion) (function(i){new VTimeline(timelines[i]);})(i);
		else timelines[i].removeAttribute('data-animation');
	  }
	}
  }());
// (function(){
//   // Vertical Timeline - by CodyHouse.co
// 	function VerticalTimeline( element ) {
// 		this.element = element;
// 		this.blocks = this.element.getElementsByClassName("cd-timeline__block");
// 		this.images = this.element.getElementsByClassName("cd-timeline__img");
// 		this.contents = this.element.getElementsByClassName("cd-timeline__content");
// 		this.offset = 0.8;
// 		this.hideBlocks();
// 	};

// 	VerticalTimeline.prototype.hideBlocks = function() {
// 		if ( !"classList" in document.documentElement ) {
// 			return; // no animation on older browsers
// 		}
// 		//hide timeline blocks which are outside the viewport
// 		var self = this;
// 		for( var i = 0; i < this.blocks.length; i++) {
// 			(function(i){
// 				if( self.blocks[i].getBoundingClientRect().top > window.innerHeight*self.offset ) {
// 					self.images[i].classList.add("cd-timeline__img--hidden"); 
// 					self.contents[i].classList.add("cd-timeline__content--hidden"); 
// 				}
// 			})(i);
// 		}
// 	};

// 	VerticalTimeline.prototype.showBlocks = function() {
// 		if ( ! "classList" in document.documentElement ) {
// 			return;
// 		}
// 		var self = this;
// 		for( var i = 0; i < this.blocks.length; i++) {
// 			(function(i){
// 				if( self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight*self.offset ) {
// 					// add bounce-in animation
// 					self.images[i].classList.add("cd-timeline__img--bounce-in");
// 					self.contents[i].classList.add("cd-timeline__content--bounce-in");
// 					self.images[i].classList.remove("cd-timeline__img--hidden");
// 					self.contents[i].classList.remove("cd-timeline__content--hidden");
// 				}
// 			})(i);
// 		}
// 	};

// 	var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
// 		verticalTimelinesArray = [],
// 		scrolling = false;
// 	if( verticalTimelines.length > 0 ) {
// 		for( var i = 0; i < verticalTimelines.length; i++) {
// 			(function(i){
// 				verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
// 			})(i);
// 		}

// 		//show timeline blocks on scrolling
// 		window.addEventListener("scroll", function(event) {
// 			if( !scrolling ) {
// 				scrolling = true;
// 				(!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
// 			}
// 		});
// 	}

// 	function checkTimelineScroll() {
// 		verticalTimelinesArray.forEach(function(timeline){
// 			timeline.showBlocks();
// 		});
// 		scrolling = false;
// 	};
// })();