document.querySelectorAll(".shortPosts").forEach((slider) => {
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
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
        allowTouchMove: true,
      },
      1240: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
    },
  });
});
