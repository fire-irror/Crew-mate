document.addEventListener("DOMContentLoaded", function() {
  var header = document.getElementById("nav3");
  var sticky = header.offsetTop;

  window.onscroll = function() {
    if (window.pageYOffset > sticky) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };
});
