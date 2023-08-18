let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});
function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  menuToggle.classList.toggle("active");
}
const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
