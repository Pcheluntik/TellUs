var link = document.querySelectorAll("li.profile.auth");
var partner = document.querySelectorAll("a.partner");
var flaer = document.querySelector(".flaer");

popaps();



function popaps() {
  for (i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function(event) {
      event.preventDefault();
      $(function() {
        $('#authorization').arcticmodal();
      });
    });
  };

  for (n = 0; n < 2; n++) {
    partner[n].addEventListener("click", function(event) {
      event.preventDefault();
      $(function() {
        $('#partner').arcticmodal();
      });
    });
  };


    flaer.addEventListener("click", function(event) {
      event.preventDefault();
      $(function() {
        $('#flaer').arcticmodal();
      });
    });



};
