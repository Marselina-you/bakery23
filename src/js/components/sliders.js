import Swiper from 'swiper';
const sliderActions = document.querySelector('.sliderActions');
const cartSlider = document.querySelector('.cartSlider');
if (sliderActions) {
  const swiper = new Swiper(sliderActions, {
    slidesPerView: 2,
    spaceBetween: 70,
    navigation: {
      nextEl: '.actions-slider-nav__next',
      prevEl: '.actions-slider-nav__prev',
    },
  });
}

if (cartSlider) {
  const swiper = new Swiper(cartSlider, {
    slidesPerView: 4,
    spaceBetween: 30,
    //loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}



