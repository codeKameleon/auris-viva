addEventListener('DOMContentLoaded', init);

function init() {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav .link');
  const sectionLinks = document.querySelectorAll('.section-link');
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
  navLinks.forEach(link => link.addEventListener('click', smoothScroll));
  sectionLinks.forEach(link => link.addEventListener('click', smoothScroll));

  // Animate Header when scrolling
  function animateHeader() {
    const scrollY = window.scrollY;

    if (scrollY > heroHeight - headerHeight) {
      header.classList.add('header-animate');
    } else {
      header.classList.remove('header-animate');
    }
  }

  // Handle menu
  function openMenu() {
    nav.classList.add('open');
  }

  function closeMenu() {
    nav.classList.remove('open');
  }

  // Add smooth scroll when cliking on nav link
  function smoothScroll(e) {
    console.log('test');
    const section = document.querySelector(this.hash);
    e.preventDefault();

    window.scrollTo({
      top: section.offsetTop - headerHeight,
      behavior: 'smooth'
    });
  }
}
