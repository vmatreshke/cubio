head.ready(function() {

	$('.header__tumblr').click(function(event) {
		$(this).toggleClass('is-on');
		$('.header__balancevalue').fadeToggle();
	});

	$(document).click(function(event) { 
	    if(!$(event.target).closest('.hprofile').length) {
	        if($('.hprofile').hasClass("is-open")) {
	            $('.hprofile').toggleClass('is-open');
	        }
	    }        
	})
	$('.hprofile__accounts').click(function(event) {
		$('.hprofile').toggleClass('is-open');
	});
	$('.hprofile__user').click(function(event) {
		$('.hprofile').addClass('is-open');
	});
	

	$('.header__balance').click(function(event) {
		$('.header__balance').removeClass('is-active');
		$(this).addClass('is-active');
	});

	$('.overlay').height($(document).height() - 70);
	$(window).resize(function(event) {
		$('.overlay').height($(document).height() - 70);
	});

	$('.js-popup').click(function(event) {
		$('.popup').removeClass('is-shown');
		pop = $(this).data('popup');
		$('#'+pop).addClass('is-shown')
		$('.overlay').fadeIn();
		return false;
	});

	$('.popup__close,.overlay').click(function(event) {
		$('.popup').removeClass('is-shown')
		$('.overlay').fadeOut();
	});
});