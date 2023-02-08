$(document).ready(function(){
  $('.carousel__inner').slick(
    {
      dots: true,
      infinite: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icon/icon-chevron-prev.svg" class="slick-prev__img"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icon/icon-chevron-next.svg"></button>'
    }
  );
});
$(document).ready(function(){
  $('.carousel__feedback').slick(
    {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1200,
      slidesToShow: 2,
      slidesToScroll: 1
    }
  ); 
}); 