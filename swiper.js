const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    500: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 1,
    },
  },
});
