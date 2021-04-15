if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

	$(function () {
		$('#modal-open-9').click(function () {
			$('#modal-9').addClass('modal_active');
			$('body').addClass('hidden');
		});
	});

	$('#1').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');

	});
	$('#2').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');

	});
	$('#3').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#4').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#5').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#6').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#7').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#8').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#9').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#10').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#11').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#12').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#13').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#14').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#15').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');

	});
	$('#16').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#17').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
	$('#18').on('click', function() {

		$(".selectPosMobile span").text($(this).text());
		$('.modal').removeClass('modal_active');
		$('body').removeClass('hidden');
	});
}

$(function () {
	$('#cart-btn').click(function () {
	  $('#modal').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close').click(function () {
	  $('#modal').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('.list-1').click(function () {
	  $('#modal-1').addClass('modal_active');
	});

	$('.popup-close1').click(function () {
	  $('#modal-1').removeClass('modal_active');
	});

	$('#modal-1').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-1').removeClass('modal_active');
		}
	});
  });

  $(function () {
	$('#modal-open-1').click(function () {
	  $('#modal-1').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-1').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-1').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-1').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-2').click(function () {
	  $('#modal-2').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-2').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-2').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-2').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('.list-2').click(function () {
	  $('#modal-2').addClass('modal_active');
	});

	$('.popup-close1').click(function () {
	  $('#modal-2').removeClass('modal_active');
	});

	$('#modal-2').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-2').removeClass('modal_active');
		}
	});
  });

  $(function () {
	$('#modal-open-3').click(function () {
	  $('#modal-3').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-3').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-3').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-3').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('.list-3').click(function () {
	  $('#modal-3').addClass('modal_active');
	});

	$('.popup-close1').click(function () {
	  $('#modal-3').removeClass('modal_active');
	});

	$('#modal-3').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-3').removeClass('modal_active');
		}
	});
  });

  $(function () {
	$('#modal-open-4').click(function () {
	  $('#modal-4').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-4').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-4').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-4').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('.list-4').click(function () {
	  $('#modal-4').addClass('modal_active');
	});

	$('.popup-close1').click(function () {
	  $('#modal-4').removeClass('modal_active');
	});

	$('#modal-4').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-4').removeClass('modal_active');
		}
	});
  });

  $(function () {
	$('#modal-open-5').click(function () {
	  $('#modal-5').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-5').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-5').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-5').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-6').click(function () {
	  $('#modal-6').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-6').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-6').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-6').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-7').click(function () {
	  $('#modal-7').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-7').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-7').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-7').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });

  $(function () {
	$('#modal-open-8').click(function () {
	  $('#modal-8').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-8').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-8').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-8').removeClass('modal_active');
	  		$('body').removeClass('hidden');
		}
	});
  });
  $(function () {
	$('#modal-open-9').click(function () {
	  $('#modal-9').addClass('modal_active');
	  $('body').addClass('hidden');
	});

	$('.popup-close1').click(function () {
	  $('#modal-9').removeClass('modal_active');
	  $('body').removeClass('hidden');
	});

	$('#modal-9').mouseup(function (e) {
	  let modalContent = $(".modal__content");
	  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
		$(this).removeClass('modal_active');
		$('body').removeClass('hidden');
	  }
	});
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			$('#modal-9').removeClass('modal_active');
	  		$('body').removeClass('hidden');
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


$(".header__btn").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 50
    }, 800);
});


$(function() {
	$('select').selectric({
		disableOnMobile: false,
		nativeOnMobile: false
	});
  });

  $('.header__btn').on('click', function() {
    var elem = $('#analiz');
    scrollToElement(elem);
  })
