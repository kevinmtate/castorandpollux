(function() {

  var playIntro = true;
  
  document.addEventListener('DOMContentLoaded', function() {
    if (playIntro) {
      var intro = new Intro(document.getElementById('intro'), document.getElementById('mainContainer'), 10000);
      intro.play();

      document.getElementById('skipIntro').addEventListener('click', function(event) {
        event.preventDefault();
        intro.end(event.target);
      });
    }
    else {
      var app = new App();
      var hamburgerNav = new Hamburger(document.querySelector('.hamburgerNav'), true);

      AOS.init();
      app.init();
      hamburgerNav.init();
    }
  });

  function Hamburger(el, show) {
    this.el = el;
    this.show = show;

    this.animate = function() {
      this.el.querySelector('.firstLine').classList.toggle('firstLine-clicked');
      this.el.querySelector('.middleLine').classList.toggle('middleLine-clicked');
      this.el.querySelector('.lastLine').classList.toggle('lastLine-clicked');
    }

    this.toggleNav = function(offset) {
      document.querySelector('.nav-content').classList.toggle('nav-content-visible');
      [...document.querySelectorAll('nav a')].forEach(function(el, i) {
        setTimeout(function() {
          el.classList.toggle('nav-item-visible');
        }, i * offset)
      });
    }

    this.init = function() {
      var _this = this;
      this.el.addEventListener('click', function() {
        _this.animate();
        _this.toggleNav(50);
      });
    }
  }

  function Intro(introEl, mainEl, duration) {
    this.introEl = introEl;
    this.mainEl = mainEl;
    this.duration = duration;
    this.timeout = null;

    this.play = function() {
      console.log(mainEl);
      this.introEl.classList.remove('dn');
      this.mainEl.classList.add('dn');

      this.timeout = setTimeout(function() {
        this.end();
      }, this.duration);
    }

    this.removeTimeout = function() {
      clearTimeout(this.timeout);
    }

    this.end = function() {
      this.removeTimeout();
      this.introEl.classList.add('dn');
      this.mainEl.classList.remove('dn');
      // init(); ///////
    }

  }

  function App() {

    this.init = function() {
      var topLogoEl = document.querySelector('.topLogo');
      var mainLogoEl = document.querySelector('.mainLogo');
      var backToTop = document.querySelector('.backToTop');
    
      // animate on scroll
      document.addEventListener('scroll', function() {
        // header
        if (window.pageYOffset > window.innerHeight / 2) {
          topLogoEl.classList.add('topLogo-visible');
          mainLogoEl.classList.add('fadeout');
          backToTop.classList.add('backToTop-visible');
        } else {
          topLogoEl.classList.remove('topLogo-visible');
          mainLogoEl.classList.remove('fadeout');
          backToTop.classList.remove('backToTop-visible');
        }
      });
    }
  }

})();
