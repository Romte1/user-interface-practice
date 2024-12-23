import "./styles.css";
let toggleButton = document.querySelector(".toggleNavBarButton");
let navMenu = document.querySelector(".navMenu");
let body = document.querySelector("body");

function toggleNavBar() {
  if (toggleButton.textContent === "collapse") {
    toggleButton.textContent = "show";
    navMenu.style.display = "none";
    body.style.gridTemplateColumns = "max-content minmax(300px, auto)";
  } else {
    toggleButton.textContent = "collapse";
    navMenu.style.display = "block";
    body.style.gridTemplateColumns = "minmax(100px, 300px) minmax(300px, auto)";
  }
}
toggleButton.addEventListener("click", () => {
  toggleNavBar();
});
