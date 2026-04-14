(function ($) {
  "use strict";

  function bindHamburger() {
    const $body = $("body");
    const $menuOpener = $(".js-header__opener").not(".js-header__fanzone");
    const $menuNav = $(".menuNav");

    $menuOpener.on("click", function (e) {
      e.stopPropagation();

      const isOpen = $body.hasClass("is-nav-open");

      $(".js-header__fanzone").removeClass("is-open");
      $body.removeClass("is-fanzone-open");

      if (isOpen) {
        $menuOpener.removeClass("is-open");
        $body.removeClass("is-nav-open");
      } else {
        $menuOpener.addClass("is-open");
        $body.addClass("is-nav-open");
      }
    });

    $menuNav.on("click", function (e) {
      e.stopPropagation();
    });

    $(document).on("click", function (e) {
      if (
        $body.hasClass("is-nav-open") &&
        !$(e.target).closest(".menuNav, .js-header__opener").length
      ) {
        $menuOpener.removeClass("is-open");
        $body.removeClass("is-nav-open");
      }
    });
  }

  function bindFanzone() {
    const $body = $("body");
    const $fanzoneBtn = $(".js-header__fanzone");
    const $fanzone = $(".fanzone");
    const $menuOpener = $(".js-header__opener").not(".js-header__fanzone");

    $fanzoneBtn.on("click", function (e) {
      e.stopPropagation();

      const isOpen = $body.hasClass("is-fanzone-open");

      $menuOpener.removeClass("is-open");
      $body.removeClass("is-nav-open");

      if (isOpen) {
        $fanzoneBtn.removeClass("is-open");
        $body.removeClass("is-fanzone-open");
      } else {
        $fanzoneBtn.addClass("is-open");
        $body.addClass("is-fanzone-open");
      }
    });

    $fanzone.on("click", function (e) {
      e.stopPropagation();
    });

    $(document).on("click", function (e) {
      if (
        $body.hasClass("is-fanzone-open") &&
        !$(e.target).closest(".fanzone, .js-header__fanzone").length
      ) {
        $fanzoneBtn.removeClass("is-open");
        $body.removeClass("is-fanzone-open");
      }
    });
  }

  $(function () {
    bindHamburger();
    bindFanzone();
  });
})(jQuery);
