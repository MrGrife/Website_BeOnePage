import {scrollbtn} from './header';

function mainSlider() {
    new Swiper(".slider", {
        grabCursor: true,
         navigation: {
             nextEl: ".arrow-next",
             prevEl: '.arrow-prev'
         },
         pagination: {
             el: ".swiper-pagination-fraction",
 
             type: "fraction",
             renderFraction: function (currentClass, totalClass) {
                 return '<div class="' + currentClass + '"></div>' +
                         '<span>/</span>' +
                         '<div class="' + totalClass + '"></div>';
             }
         },
         on: {
             transitionEnd: function () {
                 chekSlidesActive();
             },
         }
     });
     
     const slidesText = document.querySelectorAll(".slider__text");
 
     function chekSlidesActive () {
         slidesText.forEach(slide => {
             if (slide.parentElement.classList.contains("swiper-slide-active")) {
                 slide.style.display = "flex";
             } else {
                 slide.style.display = "none";
             }
         });
     }
     
     /* Hide elements */
 
     window.addEventListener("scroll", () => {
         slidesText.forEach(slide => {
             if (window.pageYOffset > 0) {
                 slide.style.opacity = `${(500 - window.pageYOffset) * 0.002}`;
             }
         });
         if (window.pageYOffset > 0) {
             scrollbtn.style.cssText = `bottom: ${(40 + window.pageYOffset)}px; opacity: ${(300 - window.pageYOffset) * 0.00333};`;
         } else {
             scrollbtn.style.cssText = `bottom: 40px; opacity: 1;`;
         }
     });
}

export default mainSlider;