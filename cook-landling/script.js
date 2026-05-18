"use strict";

///////////////////////////////////////
//ADD SHADOW HEADER
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("header--active-shadow")
    : header.classList.remove("header--active-shadow");
};
window.addEventListener("scroll", shadowHeader);

///////////////////////////////////////////////////////////
// Make mobile navigation work (burger-menu)
const btnMobile = document.querySelector(".btn-mobile");
const menu = document.querySelector(".menu");

btnMobile.addEventListener("click", function () {
  /* при клике на бургер */
  menu.classList.toggle("menu--active"); /* Открываем меню */
  btnMobile.classList.toggle("btn-mobile--active"); /* кнопка бургер */
  document.body.style.overflow = "hidden";
});

///////////////////////////////////////
// PAGE NAVIGATION
document.querySelector(".menu__list").addEventListener("click", function (e) {
  //навешиваем на ul слушателя
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("menu__link")) {
    // если мы кликнули на ссылку
    const id = e.target.getAttribute("href"); // узнаем ее данные в атрубте href
    document.querySelector(id).scrollIntoView({ behavior: "smooth" }); // находим элемент с этим данным и скролем плавно
  }
  //  Close mobile naviagtion это для того когда открыто бургер меню
  if (menu.classList.contains("menu--active"))
    // если на навесит класс nav--active
    menu.classList.remove("menu--active"); // убираем его и закрывается бургер меню
  btnMobile.classList.remove(
    "btn-mobile--active",
  ); /* ибираем к кнопке класс для крестика и крестик становится линиями */
  document.body.style.overflow = "auto";
});

////////////////////////////////////////////
// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".menu a[href*=" + sectionId + "]");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("menu__link--active");
    } else {
      sectionsClass.classList.remove("menu__link--active");
    }
  });
}
window.addEventListener("scroll", scrollActive);
