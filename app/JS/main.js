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


  $('.best-offer__next').on('click', function() {
    $('.best-offer__list').slick('slickNext');
  });

  $('.best-offer__prev').on('click', function() {
    $('.best-offer__list').slick('slickPrev');
  });

  // $('.basket-btn').on('click', function() {
  //   $('.rightside-menu').removeClass('rightside-menu--close');
  // });

  // $('.rightside-menu__close').on('click', function() {
  //   $('.rightside-menu').addClass('rightside-menu--close');
  // });

    $('.basket-btn').on('click', function() {
    $('.rightside-menu').removeClass('rightside-menu--close');
  });

  $('.rightside-menu__close').on('click', function() {
    $('.rightside-menu').addClass('rightside-menu--close');
  });

  $('.best-offer__list').slick({
    arrows: false,
    dots: false,
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