const toggleTheme=document.querySelector(".toggle-theme");function scrollUp(){const e=document.getElementById("scroll-up");200<=this.scrollY?e.classList.add("show-scroll"):e.classList.remove("show-scroll")}toggleTheme.addEventListener("click",function(){const e=document.querySelector("html"),s=document.querySelector(".fas");e.classList.toggle("dark"),s.classList.contains("fa-moon")?(s.classList.remove("fa-moon"),s.classList.add("fa-sun")):(s.classList.remove("fa-sun"),s.classList.add("fa-moon"))}),window.addEventListener("scroll",scrollUp);const sr=ScrollReveal({distance:"60px",duration:"2800",reset:!0});sr.reveal(".nav,.header,.features",{origin:"top",interval:100}),sr.reveal(".explore__left",{origin:"left"}),sr.reveal(".explore__right",{origin:"right",interval:100}),sr.reveal(".contact",{origin:"bottom",interval:100});