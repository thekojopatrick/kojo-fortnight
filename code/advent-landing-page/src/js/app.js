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

window.sr = ScrollReveal();

// sr.reveal('h1', {
//     delay: 0,
//     duration: 200,
//     origin: 'bottom',
//     distance: '100px'
// });
