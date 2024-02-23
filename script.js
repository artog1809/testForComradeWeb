function initSlider(sliderLine, sliderDots, sliderImages, sliderWrapper, windowSize) {
  let sliderCount = 0;
  let sliderWidth;
  let containerWidth;

  

  function showSlide() {
    const windowWidth = window.innerWidth;
    containerWidth = document.querySelector('.container').offsetWidth;
    if (windowWidth < windowSize) {
      sliderWidth = sliderWrapper.offsetWidth;
      console.log(sliderWidth)
      sliderImages.forEach(item => {
        item.style.width = sliderWidth + 'px';
        sliderLine.style.width = sliderWidth + 'px';
      });
    } else {
      sliderImages.forEach(item => {
        item.style.width = ''; 
      });
      sliderLine.style.width = ''; 
    }
    rollSlider();
  }

  function rollSlider() {
    if(sliderCount === 0) {
      sliderLine.style.transform = `translateX(${-sliderCount * (sliderWidth + ((containerWidth - sliderWidth)/2))}px)`;
    }
    else {
      sliderLine.style.transform = `translateX(${-sliderCount * (sliderWidth + ((containerWidth - sliderWidth)/2))}px)`
    }
  }

  function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active'));
    sliderDots[index].classList.add('active');
  }

  function handleClick(index) {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  }

  function handleResize() {
    showSlide();
  }

  window.addEventListener('resize', handleResize);

  showSlide();

  sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => handleClick(index));
  });
}

const firstSliderLine = document.querySelector('.blog-cards');
const firstSliderDots = document.querySelectorAll('.blog-card-indicator');
const firstSliderImages = document.querySelectorAll('.blog-card');
const firstSliderWrapper = document.querySelector('.blog-cards-wrapper');
const firstWindowSize = 768

initSlider(firstSliderLine, firstSliderDots, firstSliderImages, firstSliderWrapper, firstWindowSize);

  const secondSliderLine = document.querySelector('.cards-container');
  const secondSliderDots = document.querySelectorAll('.card-indicator');
  const secondSliderImages = document.querySelectorAll('.card');
  const secondSliderWrapper = document.querySelector('.main-cards');
  const secondWindowSize = 630;

initSlider(secondSliderLine, secondSliderDots, secondSliderImages, secondSliderWrapper, secondWindowSize);


const btnBurgerMenu = document.querySelector('.btn-burger-menu');
const burgerMenu = document.querySelector('.burger-menu');
btnBurgerMenu.addEventListener('click', () => {
  burgerMenu.classList.add('show');
});

const btnCloseBurgerMenu = document.querySelector('.burger-menu .close');
btnCloseBurgerMenu.addEventListener('click', () => {
  burgerMenu.classList.remove('show');
});