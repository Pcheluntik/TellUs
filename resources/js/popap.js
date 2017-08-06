
var popup = document.querySelectorAll(".popup");
var link = $("li.profile");
var body = document.querySelector("body");

link[0].addEventListener("click", function(event) {
  event.preventDefault();
  if (popup[0].classList.contains("close")) {
    body.classList.add("overlay");
    popup[0].classList.remove("close");
    popup[0].classList.add("open");
  }
 /*if (storage_name) {

  }
  if (storage_email) {

  } else {

  }*/
});
/*close.addEventListener("click", function(event) {
  event.preventDefault();
  body.classList.remove("overlay");
  popup.classList.remove("open");
  popup.classList.add("close");
});*/
/*form.addEventListener("submit", function(event) {
  if (!feedback_name.value || !feedback_email.value || !feedback_text.value) {
    event.preventDefault();
    popup.classList.remove("feedback-error");
    popup.offsetWidth = popup.offsetWidth;
    console.log("Заполните все поля, пожалуйста");
    popup.classList.add("feedback-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});*/
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup[0].classList.contains("open")) {
      body.classList.remove("overlay");
      popup[0].classList.remove("open");
      popup[0].classList.add("close");
    }
  }
});
