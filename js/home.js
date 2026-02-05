const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#site-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });
}