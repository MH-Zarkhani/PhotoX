$(document).ready(function() {
  // nabar button menu when clicked!
  $(".navbar-toggler").on("click", function() {
    $(this)
      .children()
      .toggleClass("clicked");
  });
  // when scrolled!
  let previousPosition = 0;
  $(window).scroll(function() {
    let currentPosition = $(this).scrollTop();
    // navbar-menu when scrolled
    if (currentPosition > 200) {
      $("#nav-menu").addClass("custom-navbar");
    } else {
      $("#nav-menu").removeClass("custom-navbar");
    }
    if (currentPosition > 500) {
      $("#nav-menu").addClass("fade");
      if (previousPosition > currentPosition) {
        $("#nav-menu").removeClass("fade");
      } else {
        $("#nav-menu").addClass("fade");
      }
    }
    if (currentPosition > 650) {
      $(".camera-img").addClass("fromLeft");
      $(".camera-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".camera-text").removeClass("fromRight");
    }
    previousPosition = currentPosition;
  });

  // gallery

  $(".gallery-list-item").on("click", function() {
    // active-item class
    $(this)
      .addClass("active-item")
      .siblings()
      .removeClass("active-item");
    // show selected items
    let value = $(this).attr("data-filter");
    if (value === "all") {
      $(".filter").show(300);
    } else {
      $(".filter")
        .not("." + value)
        .hide(300);
      $(".filter")
        .filter("." + value)
        .show(300);
    }
  });
});
