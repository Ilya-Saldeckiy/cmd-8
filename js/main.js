$(document).ready(function($) {
	$('.popup-open').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-1').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-1').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-1').fadeOut();
		}
	});
	
	$('.popup-fade-1').click(function(e) {
		if ($(e.target).closest('.popup-1').length == 0) {
			$(this).fadeOut();	
			$("body").removeClass("hidden");				
		}
	});

});

$(document).ready(function($) {
	$('.popup-open-2').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-2').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-2').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-2').fadeOut();
		}
	});
	
	$('.popup-fade-2').click(function(e) {
		if ($(e.target).closest('.popup-2').length == 0) {
			$(this).fadeOut();		
			$("body").removeClass("hidden");			
		}
	});

});

$(document).ready(function($) {
	$('.popup-open-3').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-3').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-3').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-3').fadeOut();
		}
	});
	
	$('.popup-fade-3').click(function(e) {
		if ($(e.target).closest('.popup-3').length == 0) {
			$(this).fadeOut();		
			$("body").removeClass("hidden");			
		}
	});

});

$(document).ready(function($) {
	$('.popup-open-4').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-4').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-4').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-4').fadeOut();
		}
	});
	
	$('.popup-fade-4').click(function(e) {
		if ($(e.target).closest('.popup-4').length == 0) {
			$(this).fadeOut();		
			$("body").removeClass("hidden");			
		}
	});

});

$(document).ready(function($) {
	$('.popup-open-5').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-5').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-5').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-5').fadeOut();
		}
	});
	
	$('.popup-fade-5').click(function(e) {
		if ($(e.target).closest('.popup-5').length == 0) {
			$(this).fadeOut();		
			$("body").removeClass("hidden");			
		}
	});

});

$(document).ready(function($) {
	$('.popup-open-6').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-6').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-6').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-6').fadeOut();
		}
	});
	
	$('.popup-fade-6').click(function(e) {
		if ($(e.target).closest('.popup-6').length == 0) {
			$(this).fadeOut();		
			$("body").removeClass("hidden");			
		}
	});

});

$(document).ready(function($) {
	$('.popup-open-7').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-7').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-7').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-7').fadeOut();
		}
	});
	
	$('.popup-fade-7').click(function(e) {
		if ($(e.target).closest('.popup-7').length == 0) {
			$(this).fadeOut();		
			$("body").removeClass("hidden");			
		}
	});

});

$(document).ready(function($) {
	$('.popup-open-10').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-10').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-10').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-10').fadeOut();
		}
	});
	
	$('.popup-fade-10').click(function(e) {
		if ($(e.target).closest('.popup-10').length == 0) {
			$(this).fadeOut();		
			$("body").removeClass("hidden");			
		}
	});

});