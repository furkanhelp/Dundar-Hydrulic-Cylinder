// const burgerMenu = document.querySelector(".fa-solid");
// const hiddenMenu = document.querySelector(".menu-section");

// burgerMenu.addEventListener("click", function () {
//   hiddenMenu.classList.toggle("shown");
// });


//  NAVBAR

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};


 navTogglers.forEach((toggler) => {
   toggler.addEventListener("click", toggleNavbar);
});
// addEventOnElements(navTogglers, "click", toggleNavbar);




//  HEADER  BACK TOP BTN
 

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("activee");
    backTopBtn.classList.add("activee");
    hideHeader();
  } else {
    header.classList.remove("activee");
    backTopBtn.classList.remove("activee");
  }
});



// const swiper = new Swiper(".swiper", {
//   direction: "horizontal",
//   loop: "infinite",

//   // Pagination
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });




  // HERO SLIDER


const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);



//  Auto slide
 
let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);





//  PARALLAX EFFECT
 

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }
});

grecaptcha.ready(function() {
  grecaptcha.execute('6LfM_vUeAAAAAFdYSO8peBBSnevtF7WuzgefvPB9', {
          action: 'action_name'
      })
      .then(function(token) {
          var recaptchaCevabi = document.getElementById('recaptchaCevabi');
          recaptchaCevabi.value = token;
      });
});





// Button On Click Functions

function redirectToContact() {

  window.location.href = "contact.html";
}
function redirectToContact2() {
  window.location.href = "contacttr.html";
}

// Helmet

var express =require('express');
 var app =express();
 var helmet =require('helmet');
 ​
 app.use(helmet());


 app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "script-src": ["'self'", "securecoding.com"],
      "style-src": null,
    },
  })
 );

 app.use(
  helmet.expectCt({
    maxAge: 96400,
    enforce: true,
    reportUri: "https://securecoding.com/report",
  })
 );

 app.use(
  helmet.dnsPrefetchControl({
    allow: true,
  })
 );


 app.use(
  helmet.frameguard({
    action: "deny",
  })
 );

 app.use(helmet.hidePoweredBy());

 app.use(
  helmet.hsts({
    maxAge: 123456,
    includeSubDomains: false,
  })
 );

 app.use(helmet.ieNoOpen());

 app.use(helmet.noSniff());

 app.use(
  helmet.referrerPolicy({
    policy: ["origin", "unsafe-url"],
  })
 );

 app.use(helmet.xssFilter());