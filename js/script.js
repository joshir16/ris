/** @format */

// ==============================================================================
// ====================<.... S M O O T H  S C R O L L....>=======================
// ==============================================================================

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

// ==============================================================================
// ============================<....T H E M E....>===============================
// ==============================================================================

const themeSwitch = document.querySelector(".theme__switch");

const themeToggle = function () {
  document.body.classList.toggle("light_theme");
  document.body.classList.toggle("dark_theme");
};

themeSwitch.addEventListener("click", function () {
  if (document.querySelector(".theme__checkbox").checked) {
    themeToggle();
  } else {
    themeToggle();
  }
});

// ==============================================================================
// ==========================<....S L I D E R....>===============================
// ==============================================================================

const slides = document.querySelectorAll(".slides");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".btn_slide-left");
const btnRight = document.querySelector(".btn_slide-right");

let curSlide = 0;

const maxSlide = slides.length - 1;

// NEXT Slide =====================
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

//
const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

// PREV Slide =========================
const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide;
  else curSlide--;

  goToSlide(curSlide);
};

// EVENTS HANDLER =====================
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});
