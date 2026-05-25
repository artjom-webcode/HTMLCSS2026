///////////////////////////////////////
//MOBILE MENU
const navMenu = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");
const navLinks = document.querySelectorAll(".nav__link");

// OPEN MENU
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("nav--show-menu");
    document.body.style.overflow = "hidden";
  });
}

// CLOSE MENU (button)
if (navClose) {
  navClose.addEventListener("click", closeMenu);
}

// CLOSE ON LINK CLICK
navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// CLOSE ON ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// CLOSE FUNCTION
function closeMenu() {
  navMenu.classList.remove("nav--show-menu");
  document.body.style.overflow = "";
}
