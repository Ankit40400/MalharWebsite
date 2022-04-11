if (matchMedia) {
const mq = window.matchMedia("(min-width: 1101px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

// media query change
function WidthChange(mq) {
if (mq.matches) {
// window width is at least px
	$(document).ready(function(){
		// Init ScrollMagic
		var controller = new ScrollMagic.Controller();

		// pin the intro
		// var pinIntroScene = new ScrollMagic.Scene({
		// 	triggerElement: '#intro',
		// 	triggerHook: 0,
		// 	duration:'30%'
		// })
		// .setPin('#intro',{pushFollowers:false})
		// .addTo(controller);
		// //pin again
		// var pinIntroScene = new ScrollMagic.Scene({
		// 	triggerElement: '#project01',
		// 	triggerHook: 0.4,

		// })
		// .setPin('#intro',{pushFollowers:false})
		// .addTo(controller);

		// parallax Scene
		// var parallaxTl = new TimelineMax();
		// parallaxTl
		// 		.from('.planet',0.4,{autoAlpha: 0,ease:Power0.easeNone}, 0.4)
		// 		.from('.conclave_container',2,{y: '-90%', ease:Power0.easeNone},0)
		// 		;
				
		// var slideParallaxScene = new ScrollMagic.Scene({
		// 		triggerElement:'.planet',
		// 		offset:50,
		// 		triggerHook:0.6,
		// 		duration:'100%'
		// })
		// .setTween(parallaxTl)
		// .addIndicators({
		//  		name: 'planet scene',
		//  		colorTrigger :'yellow',
		//  		indent:800,
		//  		colorStart: 'pink',
		//  		colorEnd: 'red'
		//  	})
		// .addTo(controller);

		// side-parallax


		var planetsec1 = new TimelineMax();
		planetsec1.from('.p1',10,{y:'20%', ease:Power0.easeNone})
				  // .from('.conclave_container',3,{y:'5%', ease:Power0.easeNone})

				;
				
		var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement:'.conclave_section',
				
				triggerHook:1,
				offset:100,	
				duration:'100%'
		})
		.setTween(planetsec1)
		.addIndicators({
				name: 'planet scene',
				colorTrigger :'yellow',
				indent:800,
				colorStart: 'pink',
				colorEnd: 'red'
			})
		.addTo(controller);
		// --------------------------------------------------------

		
		var planetsec2 = new TimelineMax();
		planetsec2.from('.p2',10,{y:'20%', ease:Power0.easeNone})
				;
				
		var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement:'.cs',
				
				triggerHook:1,
				offset:100,
				duration:'100%'
		})
		.setTween(planetsec2)
		.addIndicators({
				name: 'planet scene',
				colorTrigger :'yellow',
				indent:800,
				colorStart: 'pink',
				colorEnd: 'red'
			})
		.addTo(controller);

		var planetsec3 = new TimelineMax();
		planetsec3.from('.p3',10,{y:'20%', ease:Power0.easeNone})
				;
				
		var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement:'.cs1',
				
				triggerHook:1,
				offset:100,
				duration:'100%'
		})
		.setTween(planetsec3)
		.addIndicators({
				name: 'planet scene',
				colorTrigger :'yellow',
				indent:800,
				colorStart: 'pink',
				colorEnd: 'red'
			})
		.addTo(controller);

		var planetsec4 = new TimelineMax();
		planetsec4.from('.p4',10,{y:'20%', ease:Power0.easeNone})
				;
				
		var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement:'.cs2',
				
				triggerHook:1,
				offset:100,
				duration:'100%'
		})
		.setTween(planetsec4)
		.addIndicators({
				name: 'planet scene',
				colorTrigger :'yellow',
				indent:800,
				colorStart: 'pink',
				colorEnd: 'red'
			})
		.addTo(controller);
		// content ------------------------------------
		var contentsec1 = new TimelineMax();
		contentsec1.from('.co',5,{y:'40%', ease:Power0.easeNone})
				;
				
		var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement:'.conclave_section',
				
				triggerHook:1,
				offset:100,
				
				duration:'100%'
		})
		.setTween(contentsec1)
		.addIndicators({
				name: 'content scene',
				colorTrigger :'pink',
				
				colorStart: 'white',
				colorEnd: 'red'
			})
		.addTo(controller);

		var contentsec2 = new TimelineMax();
		contentsec2.from('.cc',5,{y:'40%', ease:Power0.easeNone})
				;
				
		var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement:'.cs',
				
				triggerHook:1,
				offset:100,
				
				duration:'100%'
		})
		.setTween(contentsec2)
		.addIndicators({
				name: 'content scene',
				colorTrigger :'pink',
				
				colorStart: 'white',
				colorEnd: 'red'
			})
		.addTo(controller);

		var contentsec3 = new TimelineMax();
		contentsec3.from('.cc1',5,{y:'40%', ease:Power0.easeNone})
				;
				
		var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement:'.cs1',
				
				triggerHook:1,
				offset:100,
				
				duration:'100%'
		})
		.setTween(contentsec3)
		.addIndicators({
				name: 'content scene',
				colorTrigger :'pink',
				
				colorStart: 'white',
				colorEnd: 'red'
			})
		.addTo(controller);

		var contentsec4 = new TimelineMax();
		contentsec4.from('.cc2',5,{y:'40%', ease:Power0.easeNone})
				;
				
		var slideParallaxScene = new ScrollMagic.Scene({
				triggerElement:'.cs2',
				
				triggerHook:1,
				offset:100,
				
				duration:'100%'
		})
		.setTween(contentsec4)
		.addIndicators({
				name: 'content scene',
				colorTrigger :'pink',
				
				colorStart: 'white',
				colorEnd: 'red'
			})
		.addTo(controller);

		// loop through each project element
		// $('.conclave').each(function(){

		// 	//build a scene
		// 	var ourScene = new ScrollMagic.Scene({
		// 		triggerElement: this.children[0],
		// 		triggerHook: 1,
				
		// 		duration:480

		// 	})
		// 	.setClassToggle(this,'fade-in')// add class tp project01
		// 	.addIndicators({
		// 		name: 'fade scene',
		// 		colorTrigger :'white',

		// 		colorStart: 'yellow',
		// 		colorEnd: 'red'
		// 	})
		// 	.addTo(controller);

// 		});
		

// 		var tween = TweenMax.staggerFromTo(".content-wrapper", 1, {top: 500}, {top: 0, ease: Back.easeOut}, 0.15);

// 				var timeout;
// 		$('#container').mousemove(function(e){
// 		  if(timeout) clearTimeout(timeout);
// 		  setTimeout(callParallax.bind(null, e), 200);
		  
// 		});

		

 });

} else {
// window width is less than px
}

}



// $(window).load(function() {
  
// TweenLite.set("#rocket", {visibility:"visible"})
// var logo = $(".p1"),
    
  
// 	    tl = new TimelineLite({paused:true, onUpdate:timelineIsUpdating});	
	    	

//     tl.to('.p1', 2, {css:{top:"-50%" }, ease: Power0.easeNone})
//    ;
    
  
// 	$(window).scroll(function(e){
// 		var scrollTop = $(window).scrollTop();
// 		var docHeight = $(document).height();
// 		var winHeight = $(window).height();
// 		var scrollPercent = (scrollTop) / (docHeight - winHeight);

// 		tl.progress( scrollPercent ).pause();
    
// 	});

// 	function timelineIsUpdating() {
// 		console.log('timelineIsUpdating()');
// 	}
// });





