var partner = document.querySelectorAll("a.partner");


popaps();



function popaps() {

  for (n = 0; n < 2; n++) {
    partner[n].addEventListener("click", function(event) {
      event.preventDefault();
      $(function() {
        $('#partner').arcticmodal();
      });
    });
  };
};
