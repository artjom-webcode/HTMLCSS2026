///////////////////////////////////////
// MOBILE MENU
const btn = document.querySelector(".btn-mobile-nav");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");

btn.addEventListener("click", () => {
  header.classList.toggle("header--active");
  menu.classList.toggle("menu--active");
  //   btn.classList.toggle("nav__toggle--active"); /* кнопка бургер */
  //   document.body.style.overflow = "hidden";
});
