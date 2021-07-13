/** @format */

let closeNavbar = document.querySelector(".navbar");
let container = document.querySelector(".container");

let uncheck = function () {
  document.getElementById("nav_toggle").checked = false;
};

closeNavbar.addEventListener("click", uncheck);
container.addEventListener("click", uncheck);

// -----------------------------------------------------------------

document.querySelector(".navbar-list").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navbar-list-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// =========================================================================

let sun = document.querySelector(".theme__icon--light");
let moon = document.querySelector(".theme__icon--dark");

moon.addEventListener("click", function () {
  moon.classList.toggle("tog_theme");
  sun.classList.toggle("tog_theme");
  document.body.classList.toggle("light_theme");
  document.body.classList.toggle("dark_theme");
});

sun.addEventListener("click", function () {
  moon.classList.toggle("tog_theme");
  sun.classList.toggle("tog_theme");
  document.body.classList.toggle("light_theme");
  document.body.classList.toggle("dark_theme");
});
