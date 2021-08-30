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
