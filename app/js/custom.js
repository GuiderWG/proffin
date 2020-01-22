$(document).ready(function() {

	/* FORM VALIDATION B4 */
  var forms = document.getElementsByClassName('needs-validation');
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
  /*---*/

	/* Top menu scroll to section */
	$(".top-menu").on("click",".top-menu__link", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top - 100;
		$('body,html').animate({scrollTop: top}, 800);
	});
	/*---*/

	/* Top slider */
	$(".general-slider").owlCarousel({
		animateOut: 'fadeOut',
		items: 1,
		nav:true,
		loop:true,
		mouseDrag: false,
		autoplay: true,
		navText: ["<img src='img/arrow-slider.png' alt='' class='general-slider__prev'>", "<img src='img/arrow-slider.png' alt='' class='general-slider__next'>"],
		navContainer: '.general-slider__nav',
    dotsContainer: '.general-slider__dots',
		responsiveClass:true,
    responsive:{
        0:{
          mouseDrag: true,
        },
        600:{
          mouseDrag: true,
        },
        1000:{
          items:1,
        }
    }
	});
	/*---*/

	/* Deals slider */
	$(".deals-slider").owlCarousel({
		items: 4,
		nav:true,
		loop:true,
		margin: 20,
		navText: ["<img src='img/arrow-slider.png' alt='' class='general-slider__prev'>", "<img src='img/arrow-slider.png' alt='' class='general-slider__next'>"],
		navContainer: '.general-slider__nav',
    dotsContainer: '.general-slider__dots',
		responsiveClass:true,
    responsive:{
        0:{
          mouseDrag: true,
        },
        600:{
          mouseDrag: true,
        },
        1000:{
          items:4,
        }
    }
	});
	/*---*/

	$('[data-toggle="popover"]').popover();
	$("a[rel^='fancyimg']").fancybox({});

});
