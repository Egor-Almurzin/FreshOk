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

  $('.best-offer__list').slick({
    arrows: true,
    dots: false,
  });

    var mixer = mixitup('.products');
});