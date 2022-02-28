const btnHeader = document.getElementById('btn-header');
const divMenu = document.getElementById('menu-bar');
const hamBurger = document.getElementById('hamburger');
const menuBarContent = document.querySelector('.menu_bar_content');

function hideMenu() {
  divMenu.style.display = 'none';
}
btnHeader.addEventListener('click', () => {
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