const menuBars = document.querySelector('.menu-bars');
const mobileMenuContainer = document.querySelector('#mobile-menu-container');
const mobileCloseMenu = document.querySelector('#mobile-close-menu');

const mobileNav = document.querySelector('#mobile-menu-container>ul>li>a');

menuBars.addEventListener('click', () => {
  mobileMenuContainer.style.display = 'flex';
});

mobileCloseMenu.addEventListener('click', () => {
  mobileMenuContainer.style.display = 'none';
});

mobileNav.addEventListener('click', () => {
  mobileMenuContainer.style.display = 'none';
});
