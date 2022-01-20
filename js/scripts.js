(function() {

  var intro = false;

  document.addEventListener('DOMContentLoaded', function() {
    if (intro) {
      playIntro();
    } 
    else {
      init();
    }
  });
  
  function init() {
    var topLogoEl = document.querySelector('.topLogo');
    var mainLogoEl = document.querySelector('.mainLogo');
  
    // animate on scroll
    document.addEventListener('scroll', function() {
      // header
      if (window.pageYOffset > window.innerHeight / 2) {
        topLogoEl.classList.add('topLogo-visible');
        mainLogoEl.classList.add('hide');
      } else {
        topLogoEl.classList.remove('topLogo-visible');
        mainLogoEl.classList.remove('hide');
      }
    });

    // add show/hide event listener to archived shows
    var shows2021H2El = document.getElementById('shows-2021');
    var shows2021El = shows2021H2El.parentElement.querySelector('.shows-content');
    shows2021H2El.addEventListener('click', function() {
      shows2021El.classList.toggle('dn');
    });

    AOS.init({disable:'mobile'});
    initHamburger();
  }

  function playIntro() {
    var introEl = document.getElementById('intro');
    var mainEl = document.getElementById('mainContainer');
    var skipButton = document.getElementById('skipIntro');
    var introTiming = 10000;

    introEl.classList.remove('dn');
    mainEl.classList.add('dn');

    var timeout = setTimeout(function() {
      endIntro(introEl, mainEl);
    }, introTiming);

    skipButton.addEventListener('click', function(event) {
      event.preventDefault();
      clearTimeout(timeout);
      endIntro(introEl, mainEl);
    });
  }

  function endIntro(introEl, mainEl) {
    introEl.classList.add('dn');
    mainEl.classList.remove('dn');
    init();
  }

  function initHamburger() {
    var hamburgerNav = document.querySelector('.hamburgerNav');
    var firstLine = hamburgerNav.querySelector('.firstLine');
    var middleLine = hamburgerNav.querySelector('.middleLine');
    var lastLine = hamburgerNav.querySelector('.lastLine');
    var navItems = document.querySelectorAll('nav a');
    var nav = document.querySelector('.nav');

    // toggle open/close nav on hamburger nav click
    hamburgerNav.addEventListener('click', function() {
      toggleNav(firstLine, middleLine, lastLine, navItems, nav);
    });

    // togle open/close nav on nav item click
    [...navItems].forEach(function(el) {
      el.addEventListener('click', function() { 
        toggleNav(firstLine, middleLine, lastLine, navItems, nav);
      });
    });
  }

  function toggleNav(firstLine, middleLine, lastLine, navItems, nav) {
    firstLine.classList.toggle('firstLine-clicked');
    middleLine.classList.toggle('middleLine-clicked');
    lastLine.classList.toggle('lastLine-clicked');
    nav.classList.toggle('show');

    // animate nav items
    [...navItems].forEach(function(el, i) {
      setTimeout(function() {
        el.classList.toggle('nav-item-visible');
      }, i * 50);
    });
  }

})();