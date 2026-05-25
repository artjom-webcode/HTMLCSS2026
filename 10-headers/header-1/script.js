"use strict";
///////////////////////////////////////
//ADD SHADOW HEADER
const header = document.querySelector(".header");
const shadowHeader = () => {
  header.classList.toggle("header--active-shadow", window.scrollY >= 50);
};
window.addEventListener("scroll", shadowHeader);

///////////////////////////////////////
// MOBILE MENU
const btn = document.querySelector(".nav__toggle");
const menu = document.querySelector(".nav");

btn.addEventListener("click", () => {
  menu.classList.toggle("nav--active"); /* Открываем меню */
  btn.classList.toggle("nav__toggle--active"); /* кнопка бургер */
  document.body.style.overflow = "hidden";
});
