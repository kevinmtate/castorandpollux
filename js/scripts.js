(function() {

  var intro = true;

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
        mainLogoEl.classList.add('fadeout');
      } else {
        topLogoEl.classList.remove('topLogo-visible');
        mainLogoEl.classList.remove('fadeout');
      }
    });

    AOS.init();
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
    var hamburgerNav = document.getElementById('hamburgerNav')
    var firstLine = hamburgerNav.querySelector('.firstLine');
    var middleLine = hamburgerNav.querySelector('.middleLine');
    var lastLine = hamburgerNav.querySelector('.lastLine');
    var navItems = document.querySelectorAll('nav a');

    hamburgerNav.addEventListener('click', function() {
      firstLine.classList.toggle('firstLine-clicked');
      middleLine.classList.toggle('middleLine-clicked');
      lastLine.classList.toggle('lastLine-clicked');
      [...navItems].forEach(function(el, i) {
        setTimeout(function() {
          el.classList.toggle('nav-item-visible');
        }, i * 50)
      });
    });
  }

})();