addEventListener('DOMContentLoaded', init);

function init() {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav .link');
  const btnOpenMenu = document.querySelector('.btn-open-menu');
  const btnCloseMenu = document.querySelector('.btn-close-menu');
  const hero = document.querySelector('.hero');
  const heroHeight = hero.offsetHeight;
  const headerHeight = header.offsetHeight;

  // Listeners
  addEventListener('scroll', () => {
    animateHeader();
  });

  btnOpenMenu.addEventListener('click', openMenu);
  btnCloseMenu.addEventListener('click', closeMenu);
  navLinks.forEach(navLink => navLink.addEventListener('click', closeMenu));
  btn;

  // Animate Header when scrolling
  function animateHeader() {
    const scrollY = window.scrollY;

    if (scrollY > heroHeight - headerHeight) {
      header.classList.add('header-animate');
    } else {
      header.classList.remove('header-animate');
    }
  }

  function openMenu() {
    nav.classList.add('open');
  }

  function closeMenu() {
    nav.classList.remove('open');
  }
}
