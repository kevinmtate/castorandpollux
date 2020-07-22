(function() {

  var intro = true;

  document.addEventListener('DOMContentLoaded', function() {
    if (intro) {
      playIntro();
    } 
    else {
      init();
    }

    var navEl = document.getElementById('nav');
    navEl.addEventListener('click', function() {
      console.log('nav click');
    })
  });

  function playIntro() {
    var introEl = document.getElementById('intro');
    var mainEl = document.getElementById('mainContainer');
    var introTiming = 8000;

    introEl.classList.remove('dn');
    mainEl.classList.add('dn');

    setTimeout(function() {
      introEl.classList.add('dn');
      mainEl.classList.remove('dn');
      init();
    }, introTiming);
  }

  function init() {
    initStars();
  }
  
  function initStars() {
    var starsEl = document.getElementById('stars');
    var scrollSpeed = 1;
    var numOfStars = starsEl.offsetHeight / 3;

    for (var i = 0; i <= numOfStars; i++) {
      createStar();
    }
  
    var prevYOffset = 0;
    document.addEventListener('scroll', function() {
      if (window.pageYOffset > prevYOffset) {
        starsEl.style.top = parseInt(stars.style.top) - scrollSpeed + 'px';
      } else {
        starsEl.style.top = parseInt(stars.style.top) + scrollSpeed + 'px';
      }
      prevYOffset = window.pageYOffset;
    });
  }
  
  function createStar() {
    var starsEl = document.getElementById('stars');
    var star = document.createElement('div');
    var maxY = starsEl.offsetHeight;
    var maxX = starsEl.offsetWidth;
    var top = Math.floor(Math.random() * Math.floor(maxY));
    var left = Math.floor(Math.random() * Math.floor(maxX));
    var size = Math.random() * Math.floor(3) + 1;
  
    star.classList.add('bg-white', 'absolute');
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = top + 'px';
    star.style.left = left + 'px';
  
    starsEl.appendChild(star);
  }

})();