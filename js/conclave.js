
//side rocket animation
$(window).load(function() {
  

var logo = $("#logorc"),
    
  
	    tl = new TimelineLite({paused:true, onUpdate:timelineIsUpdating});	
	    	

    tl.to('#logorc', 2, {css:{top:"-10vh" }, ease: Power0.easeNone})
   ;
    
  
	$(window).scroll(function(e){
		var scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);

		tl.progress( scrollPercent ).pause();
    
	});

	function timelineIsUpdating() {
		console.log('timelineIsUpdating()');
	}
});
