$(document).ready(function() {

  /* Mobile menu */
  var menuLink = $('.mobile-menu-btn'),
      menuLinkActive = $('.mobile-menu-btn_active'),
      mobileMenu = $('.mobile-menu-wrap'),
      mobileMenuLink = $('.mobile-menu__link');

  menuLink.click(function() {
    menuLink.toggleClass('mobile-menu-btn_active');
    mobileMenu.toggleClass('mobile-menu-wrap_active');
  });

  mobileMenuLink.click(function() {
    menuLink.toggleClass('mobile-menu-btn_active');
    mobileMenu.toggleClass('mobile-menu-wrap_active');
  });

  /*----*/

  /* CHOSE Tariff */
  var tariffsBtn = $('.tariffs__btn'),
      tariffsItem = $('.tariffs__item'),
      modal = $('.modal-default'),
      modalValue = $('.modal-default__value'),
      modalPrice = $('.modal-default__price');

  tariffsItem.click(function(e) {
    var target = $(e.target),
        getAttrItem = $(this).attr('data-id');

    if (target.is(tariffsBtn)) {
      modal.attr('id', getAttrItem);

      var getBlockName = $(this).find('.tariffs__name').text(),
          getBlockPrice = $(this).find('.tariffs__price').text();

      modalValue.text(getBlockName);
      modalPrice.text(getBlockPrice);
    }
  });
  /*-----*/

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
		var headerHeight = $(".header").outerHeight(),
        id  = $(this).attr('href'),
				top = $(id).offset().top - headerHeight;
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
		navContainer: '.deals-slider__nav',
    dotsContainer: '.deals-slider__dots',
		responsiveClass:true,
    responsive:{
        0:{
          items:1,
        },
        420:{
          items:2,
        },
        576:{
          items:2,
        },
        768:{
          items:3,
        },
        991:{
          items:4,
        }
    }
	});
	/*---*/

	/* Reviews slider */
	$(".reviews-slider").owlCarousel({
		items: 1,
		nav:true,
		loop:true,
    autoplay: true,
    margin: 20,
		navText: ["<img src='img/arrow-slider.png' alt='' class='general-slider__prev'>", "<img src='img/arrow-slider.png' alt='' class='general-slider__next'>"],
		navContainer: '.reviews-slider__nav',
    dotsContainer: '.reviews-slider__dots',
	});
	/*---*/

  /*YANDEX MAP*/
  var ifmap = document.getElementById('map');
  if (ifmap != null) {
    function init () {
        var myMap = new ymaps.Map('map', {
            center: [53.26552557118136,50.20827832209008],
            controls: [],
            zoom: 17,
                behaviors: ['default', 'scrollZoom']
            }),
            myPlacemark = new ymaps.Placemark([53.26552557118136,50.20827832209008], {
              iconCaption: 'ПрофФинЗащита',
              balloonContent: [
                  '<img style="width:100px;float:left;margin:20px 20px 20px 0;" alt="" src="../img/logo.png">' +
                  '<address>',
                  '<strong>ПрофФинЗащита</strong>',
                  '<br/>',
                  'Адрес: г. Самара, Барбошина поляна, 9-я просека 5-я линия, 114',
                  '</address>'
              ].join('')
            }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: '../img/location-pin.png',
              // Размеры метки.
              iconImageSize: [32, 32],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-2, -22]
            }),

            myCollection = new ymaps.GeoObjectCollection();

        myCollection
            .add(myPlacemark);

        var myBalloonLayout = ymaps.templateLayoutFactory.createClass(

          '<p><strong>$[properties.name]</strong></p>' +
          '<p><strong>Адрес:</strong> $[properties.address]</p>'
        );

        ymaps.layout.storage.add('my#xpertlayout', myBalloonLayout);

        myCollection.options.set({
            balloonContentBodyLayout:'my#xpertlayout',
            balloonMaxWidth: 500
        });

        myMap.geoObjects.add(myCollection);

    }
    ymaps.ready(init);
  }
  /*---*/

	$('[data-toggle="popover"]').popover();
	$("a[rel^='fancyimg']").fancybox({});
  new WOW().init();

});
