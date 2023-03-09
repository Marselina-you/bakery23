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
    slidesPerView: 1,
    spaceBetween: 5,
    //loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });
}



