$(document).ready(function () {
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
$(document).ready(function () {
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

$(document).ready(function () {
  document.querySelectorAll('.education__lesson').forEach(elem => {
    elem.addEventListener('click', function () {
      this.classList.toggle('education__lesson__active');

      const actualContent = this.querySelector('.education__lesson-content');
      if (actualContent) {
        actualContent.classList.toggle('education__lesson-content__active');

        this.querySelector('.closeModal').classList.toggle('closeModal__active');
      }
    });
  });
});

$(document).ready(function () {
  $('[data-modal=consultation]').on('click', function(){
    $('.modal__overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
  $('.modal__overlay, #consultation').fadeOut('slow');
  });
});