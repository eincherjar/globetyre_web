document.addEventListener("DOMContentLoaded", () => {
  // scroll-up
  var btn = $("#button-scroll-up");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("scroll-up-show");
    } else {
      btn.removeClass("scroll-up-show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
  });
});
