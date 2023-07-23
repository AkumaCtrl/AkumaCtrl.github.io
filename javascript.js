const navMenu = document.querySelector('.js-nav-menu');
const toggleButton = document.querySelector('.js-nav-menu-toggle');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});