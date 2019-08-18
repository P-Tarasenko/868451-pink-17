var header = document.querySelector(".main-header");
var button = document.querySelector(".main-header__button");

header.classList.add("main-header--close-menu");
button.classList.add("main-header__button--show-cross");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  header.classList.toggle("main-header--close-menu");
});
