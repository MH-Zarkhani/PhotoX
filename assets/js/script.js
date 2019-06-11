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
    // show or fade navbar menu 
    if (currentPosition > 500) {
      $("#nav-menu").addClass("fade");
      if (previousPosition > currentPosition) {
        $("#nav-menu").removeClass("fade");
      } else {
        $("#nav-menu").addClass("fade");
      }
    }
    // animation for camera 
    if (currentPosition > 650) {
      $(".camera-img").addClass("fromLeft");
      $(".camera-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".camera-text").removeClass("fromRight");
    }
    // animation for pricing card
    console.log(currentPosition);
    
    if (currentPosition > 4500) {
      $(".card-1").addClass("moveFromLeft");
      $(".card-2").addClass("moveFromBottom");
      $(".card-3").addClass("moveFromRight");
    } else {
      $(".card-1").removeClass("moveFromLeft");
      $(".card-2").removeClass("moveFromBottom");
      $(".card-3").removeClass("moveFromRight");
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
