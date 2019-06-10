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
    console.log(currentPosition);
    
    if(currentPosition > 200) {
      $("#nav-menu").addClass("custom-navbar");
    } else {
      $("#nav-menu").removeClass("custom-navbar");
    }
    if(currentPosition > 500) {
      $('#nav-menu').addClass("fade");
      if( previousPosition > currentPosition){
        $('#nav-menu').removeClass("fade");
      }else{
        $('#nav-menu').addClass("fade");
      }
    }
    if(currentPosition > 650) {
      $('.camera-img').addClass('fromLeft');
      $('.camera-text').addClass('fromRight');
    }else {
      $('.camera-img').removeClass('fromLeft');
      $('.camera-text').removeClass('fromRight');
    }
    previousPosition = currentPosition;
  });
});
