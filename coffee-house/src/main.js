const header = document.querySelector(".header");
const navBtn = document.querySelector(".btn-nav");

navBtn.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

header.addEventListener("click", (e) => {
  const link = e.target.closest(".nav__link");

  if (!link) return;

  header.classList.remove("nav-open");
});

window.addEventListener("resize", () => header.classList.remove("nav-open"));
