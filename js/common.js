head.ready(function() {

	$('.header__tumblr').click(function(event) {
		$(this).toggleClass('is-on');
		$('.header__balancevalue').fadeToggle();
	});

	$('.hprofile__user').click(function(event) {
		$('.hprofile').toggleClass('is-open');
	});

	$('.header__balance').click(function(event) {
		$('.header__balance').removeClass('is-active');
		$(this).addClass('is-active');
	});

});