$(function(){

  $('.catalog').on('click', function(){
    $('.catalog__list').slideToggle();
  });

  $('.catalog__list a').on('click', function(){
    $('.catalog__list').slideUp('catalog');    
  });

  // $('.header').not('.catalog, .catalog__list a').on('click', function(){
  //   $('.catalog__list').slideUp('catalog');    
  // });

  $('.best-offer').slick({
    arrows: true,
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
  });

    var mixer = mixitup('.products');
});