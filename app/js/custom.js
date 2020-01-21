$(document).ready(function() {

	$(".top-menu").on("click",".top-menu__link", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
	});

	$(".general-slider").owlCarousel({
		animateOut: 'fadeOut',
		items: 1,
		nav:true,
		loop:true,
		mouseDrag: false,
		navText: ["<img src='img/arrow-slider.png' alt='' class='general-slider__prev'>", "<img src='img/arrow-slider.png' alt='' class='general-slider__next'>"],
		navContainer: '.general-slider__nav',
    dotsContainer: '.general-slider__dots',
	});

	$('[data-toggle="popover"]').popover();
	$("a[rel^='fancyimg']").fancybox({});

});
