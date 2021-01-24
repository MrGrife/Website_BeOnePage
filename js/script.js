"use strict";

const wow = new WOW({
    offset: 0
});
wow.init();

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header"),
        burgerMenu = document.querySelector(".burger__menu"),
        listHeader = document.querySelector(".list__header"),
        navItems = document.querySelectorAll(".link");


/* ----------- Scroll header and progress bar ----------- */
    window.addEventListener("scroll", () => {
        let pageYOffset = window.pageYOffset;
        if (pageYOffset <= 0) {
            header.classList.remove("active__window");
            navItems.forEach(item => {
                item.classList.remove("link__active");
            });
        } else {
            header.classList.add("active__window");
            navItems.forEach(item => {
                item.classList.add("link__active");
            });
        }
    });
    
    function progressBar () {
        let scroll = document.body.scrollTop || document.documentElement.scrollTop, // Сколько мы проскролили от начала страницы
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight, // Вся высота нашей страницы
            scrolled = scroll / height * 100;
        

        document.querySelector(".progress__bar").style.width = scrolled + '%';
    }
    window.addEventListener("scroll", progressBar);


    /* Scroll window */

    const scrollbtn = document.querySelector(".skip-slider"),
        secondSection = document.querySelector(".about__betheme");

    scrollbtn.addEventListener("click", () => {
        secondSection.scrollIntoView({block: "start",behavior: 'smooth'});
    });
   

/* ----------- Burger menu and media nav ----------- */

    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("burger__active");
    });

    burgerMenu.addEventListener("click", () => {
        listHeader.classList.toggle("active__header");
        if (listHeader.classList.contains("active__header")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    });


    /* ----------- Paralax ----------- */

    let scrollPosition = 0,
    parallaxImg = document.querySelectorAll(".parallax-img");
    window.addEventListener('scroll', function() {
        scrollPosition = window.pageYOffset;
        parallaxImg.forEach(item => {
            item.style.transform = `translateY(${scrollPosition * 10 / 35}px)`;
        });
    });


    /* ----------- Slider ----------- */

    const slider = document.querySelector(".slider");

   new Swiper(".slider", {
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

            touchStart: function () {
                slider.style.cursor = "grabbing";
            },

            touchEnd: function () {
                slider.style.cursor = "grab";
            }
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
            if (pageYOffset > 0) {
                slide.style.opacity = `${(500 - pageYOffset) * 0.002}`;
            }
        });
        if (pageYOffset > 0) {
            scrollbtn.style.cssText = `bottom: ${(40 + pageYOffset)}px; opacity: ${(300 - pageYOffset) * 0.00333};`;
        } else {
            scrollbtn.style.cssText = `bottom: 40px; opacity: 1;`;
        }
    });

    /* ----------- SkillBarAnimation ----------- */

    
});