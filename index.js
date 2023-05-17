const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navBar.classList.add("open");
});

document.body.addEventListener("click", () => {
  if (navBar.classList.contains("open")) {
    navBar.classList.remove("open");
  }
});

navBar.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (navBar.classList.contains("open")) {
    navBar.classList.remove("open");
  }
});
