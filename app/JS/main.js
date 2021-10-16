$(function(){

  $('.catalog__btn').on('click', function(){
    $('.catalog__list').slideToggle();
  });

  $('.catalog__list a').on('click', function(){
    $('.catalog__list').slideUp('catalog');    
  });

  $(document).on('click', function (e){
		var div = $('.catalog');
		if (!div.is(e.target)
		    && div.has(e.target).length === 0) {
			$('.catalog__list').slideUp();
		}
	});

  $('.catalog__btn').on('click', function() {
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });

  $('.basket-btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });

  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.burger__button').on('click', function() {
    $('.burger__wrap').removeClass('burger--close');
  });

  $('.burger__close').on('click', function() {
    $('.burger__wrap').addClass('burger--close');
  });



  $('.header__search-form-btn').on('click', function(){
    $('.search-form__input, .search-form__button').slideToggle();
  });
  
  $('.best-offer__next').on('click', function() {
    $('.best-offer__list').slick('slickNext');
  });

  $('.best-offer__prev').on('click', function() {
    $('.best-offer__list').slick('slickPrev');
  });

 $('.partners__list').slick({
    arrows: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive:
    [
      {
        breakpoint: 576,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.best-offer__list').slick({
    arrows: false,
    dots: true
  });

 

  var containerEl1 = document.querySelector('[data-ref="mix-1"]');
  var containerEl2 = document.querySelector('[data-ref="mix-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);


});