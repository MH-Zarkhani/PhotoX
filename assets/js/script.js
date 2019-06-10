$(document).ready(function() {
  // nabar button menu when clicked!
  $(".navbar-toggler").on("click", function() {
    $(this)
      .children()
      .toggleClass("clicked");
  });
  // when scrolled!
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    // navbar-menu when scrolled
    if (position > 200) {
      $("#nav-menu").addClass("custom-navbar");
    } else {
      $("#nav-menu").removeClass("custom-navbar");
    }
  });
});
