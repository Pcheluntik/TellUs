$(document).ready(function() {
  if ($("body").scrollTop() > 150) {

    $(".nav-pannel").css("position", "fixed");
    $(".nav-pannel").addClass("special");
    $(".nav-pannel").css("animation-name", "opas");
    $(".nav-pannel").css("animation-duration", "1s");
    $(".nav-pannel").css("background-color", "#fff");
    $(".nav-pannel").css("z-index", "45");
    $(".nav-pannel").css("box-shadow", "0px 0px 13px 3px rgba(0,0,0,0.44)");
  }
  $(window).scroll(function() {
    if ($("body").scrollTop() > 150) {

      $(".nav-pannel").css("position", "fixed");
      $(".nav-pannel").css("animation-name", "opas");
      $(".nav-pannel").css("animation-duration", "1s");
      $(".nav-pannel").addClass("special");
      $(".search").css("margin-top", "159px");
      $(".nav-pannel").css("background-color", "#fff");
      $(".nav-pannel").css("z-index", "45");
      $(".nav-pannel").css("box-shadow", "0px 0px 13px 3px rgba(0,0,0,0.44)");
    } else {
      if ($("body").scrollTop() < 10) {
        $(".nav-pannel").css("position", "relative");
        $(".nav-pannel").removeClass("special");
        $(".nav-pannel").css("background-color", "transparent");
        $(".nav-pannel").css("z-index", "45");
        $(".nav-pannel").css("box-shadow", "none");
        $(".nav-pannel").css("animation-name", "none");
        $(".nav-pannel").css("animation-duration", "1s");
      }
    }
  });


  var menu = document.querySelector(".mobile-menu");
  
  menu.addEventListener("click", function(event) {
    event.preventDefault();
    $(function() {
      $('#mobile-menu').arcticmodal();
    });
  });


});
