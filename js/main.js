$(document).ready(function($) {
	$('.cart-btn').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-1').fadeIn(0);
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
			$('.popup-fade-1').fadeOut(0);
		}
	});
	
	$('.popup-fade-1').click(function(e) {
		if ($(e.target).closest('.popup-1').length == 0) {
			$(this).fadeOut(0);	
			$("body").removeClass("hidden");				
		}
	});

});

$(document).ready(function($) {
	$('.popup-open-2').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-2').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-2').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-2').fadeOut(0);
		}
	});
	
	$('.popup-fade-2').click(function(e) {
		if ($(e.target).closest('.popup-2').length == 0) {
			$(this).fadeOut(0);		
			$("body").removeClass("hidden");			
		}
	});

	$('.popup-open-3').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-3').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-3').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-3').fadeOut(0);
		}
	});
	
	$('.popup-fade-3').click(function(e) {
		if ($(e.target).closest('.popup-3').length == 0) {
			$(this).fadeOut(0);		
			$("body").removeClass("hidden");			
		}
	});

	$('.popup-open-4').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-4').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-4').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-4').fadeOut(0);
		}
	});
	
	$('.popup-fade-4').click(function(e) {
		if ($(e.target).closest('.popup-4').length == 0) {
			$(this).fadeOut(0);		
			$("body").removeClass("hidden");			
		}
	});

	$('.popup-open-5').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-5').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-5').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-5').fadeOut(0);
		}
	});
	
	$('.popup-fade-6').click(function(e) {
		if ($(e.target).closest('.popup-6').length == 0) {
			$(this).fadeOut(0);		
			$("body").removeClass("hidden");			
		}
	});

	$('.popup-open-6').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-6').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-6').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-6').fadeOut(0);
		}
	});
	
	$('.popup-fade-6').click(function(e) {
		if ($(e.target).closest('.popup-6').length == 0) {
			$(this).fadeOut(0);		
			$("body").removeClass("hidden");			
		}
	});

	$('.popup-open-7').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-7').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-7').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-7').fadeOut(0);
		}
	});
	
	$('.popup-fade-7').click(function(e) {
		if ($(e.target).closest('.popup-7').length == 0) {
			$(this).fadeOut(0);		
			$("body").removeClass("hidden");			
		}
	});

	$('.popup-open-8').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-8').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-8').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-8').fadeOut(0);
		}
	});
	
	$('.popup-fade-8').click(function(e) {
		if ($(e.target).closest('.popup-8').length == 0) {
			$(this).fadeOut(0);		
			$("body").removeClass("hidden");			
		}
	});

	$('.popup-open-9').click(function() {
        $("body").addClass("hidden");
		$('.popup-fade-9').fadeIn(0);
		return false;
	});	
	
	$('.popup-close').click(function() {
        $("body").removeClass("hidden");
		$(this).parents('.popup-fade-9').fadeOut(0);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade-9').fadeOut(0);
		}
	});
	
	$('.popup-fade-9').click(function(e) {
		if ($(e.target).closest('.popup-9').length == 0) {
			$(this).fadeOut(0);		
			$("body").removeClass("hidden");			
		}
	});

});

$('.clean-input').click(function(e) {	
		$(".input-active").removeClass("input-active");			
});


var input = $('#input');

input.on('input', function() {
		var inp = $('#input').val();
		if (inp) {
      $('.clean-input').addClass('input-active');
		} else {
			$('.clean-input').removeClass('input-active');
		}
	});
