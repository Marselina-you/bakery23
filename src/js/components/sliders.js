import Swiper from 'swiper';
//import { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
const sliderActions = document.querySelector('.sliderActions');
const cartSlider = document.querySelector('.cartSlider');
if (sliderActions) {
  const swiper = new Swiper(sliderActions, {
    slidesPerView: 1,
    spaceBetween: 70,
    loop: true,
    autoplay: {
      delay: 3000,
      },
      speed: 1000,


    navigation: {
      nextEl: '.actions-slider-nav__next',
      prevEl: '.actions-slider-nav__prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      }

    }
  });
}

if (cartSlider) {
  const swiper = new Swiper(cartSlider, {
    slidesPerView: 1,
    spaceBetween: 5,
    autoplay: {
      delay: 2000,
    },
    speed: 1000,
    loop: true,
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



