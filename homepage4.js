if (Meteor.isClient) {

	$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
			}); 
		});    
	});
	
	
	
	$(document).ready(function(){
		$('#svg1').hover(function(){
			//alert("shit works");
		});
	});
	
	$(document).ready(function() {
		$('#svg1').click(function(){
			$('html, body').animate({scrollTop:$(document).height()/3}, 'slow');
			return false;
		});
	});
	
	
	
	$(document).ready(function(){
		$('#svg2').hover(function(){
			//alert("shit works");
		});
	});
	
	$(document).ready(function() {
		$('#svg2').click(function(){
			$('html, body').animate({scrollTop:$(document).height()/(2/3) }, 'slow');
			return false;
		});
	});
	
	

	
	
	$(window).resize(function() {
	  if ($(this).width() < 400) {
		$('#row-hide').hide();
	  } else {
		$('#row-hide').show();
		}
	});
	

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
