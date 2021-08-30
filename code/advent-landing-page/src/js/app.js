/* -------- DARK LIGHT THEME -------- */
const toggleTheme = document.querySelector(".toggle-theme");

toggleTheme.addEventListener("click", function () {
  const html = document.querySelector("html");
  const icon = document.querySelector(".fas");

  html.classList.toggle("dark");
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

/*------------ SHOW SCROLL UP -----------*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 200 viewport height, add the show-scroll class
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* ------ SCROLL REVEAL ANIMATION --------- */
const sr = ScrollReveal({ distance: "60px", duration: "2800", reset: true });

sr.reveal(`.nav,.header,.features`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.explore__left`, {
  origin: "left",
});

sr.reveal(`.explore__right`, {
  origin: "right",
  interval: 100,
});
sr.reveal(`.contact`, {
  origin: "bottom",
  interval: 100,
});
