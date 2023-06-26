window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.querySelector(".scroll-to-top");
  if (document.documentElement.scrollTop > 1000) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}
