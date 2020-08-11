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
    var starsEl = document.getElementById('starLayer1');
    var headerEl = document.querySelector('header');
    var mainLogoEl = document.getElementById('mainLogo');
    starsEl.style.top = -window.pageYOffset + "px";
    var scrollSpeed = 1;
    var numOfStars = window.innerHeight / 7;

    // layer1
    for (var i = 0; i <= numOfStars; i++) {
      createStar(document.getElementById('starLayer1'), 3);
    }
    // layer2
    for (var i = 0; i <= numOfStars; i++) {
      createStar(document.getElementById('starLayer2'), 1);
    }
    // layer3
    for (var i = 0; i <= numOfStars; i++) {
      createStar(document.getElementById('starLayer3'), 1);
    }

    // document.getElementById('starLayer1').querySelectorAll('.star').forEach(function(star) {
    //   setInterval(function() {
    //     if (star.offsetTop <= -3) {
    //       star.style.top = window.innerHeight + 3 + "px";
    //     } else {
    //       star.style.top = star.offsetTop - 1 + "px";
    //     }
    //   }, 1);
    // });

    // document.getElementById('starLayer2').querySelectorAll('.star').forEach(function(star) {
    //   setInterval(function() {
    //     if (star.offsetTop <= -3) {
    //       star.style.top = window.innerHeight + 3 + "px";
    //     } else {
    //       star.style.top = star.offsetTop - 1 + "px";
    //     }
    //   }, 500);
    // });

    // document.getElementById('starLayer3').querySelectorAll('.star').forEach(function(star) {
    //   setInterval(function() {
    //     if (star.offsetTop <= -3) {
    //       star.style.top = window.innerHeight + 3 + "px";
    //     } else {
    //       star.style.top = star.offsetTop - 1 + "px";
    //     }
    //   }, 100);
    // });
    
  
    // animate on scroll
    var prevYOffset = 0;
    document.addEventListener('scroll', function() {
      //stars
      // if (window.pageYOffset > prevYOffset) {
      //   console.log(starsEl.style.top);
      //   starsEl.style.top = parseInt(starsEl.style.top) - scrollSpeed + 'px';
      // } else {
      //   starsEl.style.top = parseInt(starsEl.style.top) + scrollSpeed + 'px';
      // }
      // prevYOffset = window.pageYOffset;

      // header
      if (window.pageYOffset > 0) {
        headerEl.classList.add('header-visible');
        mainLogoEl.classList.add('fadeout');
      } else {
        headerEl.classList.remove('header-visible');
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
  
  function createStar(layer, sizeMultiplier) {
    var starsEl = document.getElementById('starsContainer');
    var star = document.createElement('div');
    var maxY = starsEl.offsetHeight;
    var maxX = starsEl.offsetWidth;
    var top = Math.floor(Math.random() * Math.floor(maxY));
    var left = Math.floor(Math.random() * Math.floor(maxX));
    var size = Math.random() * Math.floor(sizeMultiplier) + 1;
  
    star.classList.add('star');
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = top + 'px';
    star.style.left = left + 'px';
  
    layer.appendChild(star);
  }

})();