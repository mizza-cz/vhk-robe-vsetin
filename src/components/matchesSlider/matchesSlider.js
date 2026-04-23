document.querySelectorAll(".matchesSlider").forEach((slider) => {
  new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    allowTouchMove: true,
    watchOverflow: true,

    navigation: {
      nextEl: slider.querySelector(".swipe-next"),
      prevEl: slider.querySelector(".swipe-prev"),
    },

    breakpoints: {
      540: {
        slidesPerView: 2,
        spaceBetween: 24,
        allowTouchMove: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
        allowTouchMove: true,
      },
      1313: {
        slidesPerView: 4,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
  });
});
