const btnHeader = document.getElementById("btn-header");
const divMenu = document.getElementById("menu-bar");

function hideMenu() {
  divMenu.style.display = "none";
}
btnHeader.addEventListener("click", () => {
  hideMenu();
});

hamBurger.addEventListener('click', () => {
  divMenu.style.display = 'block';
});

document.addEventListener('mouseup', (e) => {
  if (!menuBarContent.contains(e.target)) {
    hideMenu();
  }
});