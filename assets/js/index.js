/* Toggle Button Function Starts Here */
const sideMenu = document.getElementById('side_menu');
const sideMenuNav = document.getElementById('side_menu_nav');
const toggleButton = document.getElementById('menu_toggle_btn');
const closeButton = document.getElementById('menu_close_btn');

toggleButton.onclick = function () {
  sideMenuNav.style.display = 'block';
  sideMenu.classList.toggle('active');
};

closeButton.onclick = function () {
  sideMenu.classList.toggle('active');
  sideMenuNav.style.display = 'none';
};
