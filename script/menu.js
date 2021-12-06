const toggleMenu = () => {

  const menuBtn = document.querySelector('.header__burger'),
    menu = document.querySelector('.header__nav'),
    footerNav = document.querySelector('.footer__nav'),
    body = document.querySelector('body');


  const handlerMenu = () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
  };


  menuBtn.addEventListener('click', handlerMenu);

  const smoothScroll = target => {
    const href = target.getAttribute('href');
    const element = document.querySelector(href);
    window.scrollTo({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
    });
  };



  menu.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;
    if (target.classList.contains('close-btn')) {
      handlerMenu();
    } else {
      target = target.closest('ul>li>a');
      if (target) {
        handlerMenu();
        smoothScroll(target);
      }
    }
  });


  footerNav.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;

    target = target.closest('ul>li>a');
    if (target) {
      smoothScroll(target);
    }

  });



};

toggleMenu();