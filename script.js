const btnHeader = document.getElementById("btn-header");
const divMenu = document.getElementById("menu-bar");
function hideMenu() {
  divMenu.style.display = "none";
}
btnHeader.addEventListener("click", () => {
  hideMenu();
});
