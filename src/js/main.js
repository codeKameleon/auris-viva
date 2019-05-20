const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const heroHeight = hero.offsetHeight;
const headerHeight = header.offsetHeight;

// Listeners
addEventListener('scroll', () => {
  animateHeader();
});

// Animate Header when scrolling
function animateHeader() {
  const scrollY = window.scrollY;

  if (scrollY > heroHeight - headerHeight) {
    header.classList.add('header-animate');
  } else {
    header.classList.remove('header-animate');
  }
}
