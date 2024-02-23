
const btnBurgerMenu = document.querySelector('.btn-burger-menu');
const burgerMenu = document.querySelector('.burger-menu');
btnBurgerMenu.addEventListener('click', () => {
  burgerMenu.classList.add('show');
});

const btnCloseBurgerMenu = document.querySelector('.burger-menu .close');
btnCloseBurgerMenu.addEventListener('click', () => {
  burgerMenu.classList.remove('show');
});