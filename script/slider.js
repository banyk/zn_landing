let sliderPricing = new Swiper('.slider-pricing', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slideToClickedSlide: false,

  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: false,
      },
      simulateTouch: false,
    },

    769: {
      slidesPerView: 5,
      direction: 'vertical',
      slidesPerGroup: 1,
      centeredSlides: true,

    },
  },
});

let sliderReviews = new Swiper('.slider-reviews', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  clickable: false,
  simulateTouch: false,

  breakpoints: {
    320: {
      slidesPerView: 1,
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    },
    769: {
      slideToClickedSlide: false,
      slidesPerView: 2,
      direction: 'vertical',
      slidesPerGroup: 1,
      spaceBetween: 20,
    }
  },

});


let sliderCertificates = new Swiper('.certificates__container', {
  // navigation: {
  // 	nextEl: '.swiper-button-next',
  // 	prevEl: '.swiper-button-prev',
  // },
  slideToClickedSlide: false,
  slidesPerView: 3,
  direction: 'horizontal',
  slidesPerGroup: 1,
  // spaceBetween: 20,
  centeredSlides: false,
  loop: true,
});