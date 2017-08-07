
var link = document.querySelectorAll("li.profile.auth");
var partner = document.querySelectorAll("a.partner");

popaps();
function popaps() {
for (i = 0; i < link.length; i++) {
  console.log(link[i]);
link[i].addEventListener("click", function(event) {
  event.preventDefault();
  $(function(){
    $('#authorization').arcticmodal();
});
}); };


for (i = 0; i < partner.length; i) {
partner[i].addEventListener("click", function(event) {
  event.preventDefault();
  $(function(){
    $('#partner').arcticmodal();
});
}); };
};
