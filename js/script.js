"use strict";

new WOW().init();

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
    document.addEventListener('scroll', function() {
        scrollPosition = window.pageYOffset;
        parallaxImg.forEach(item => {
            item.style.transform = `translateY(${scrollPosition * 10 / 40}px)`;
        });
    });


    /* ----------- Slider ----------- */

    // const slider = document.querySelector(".slider"),
    //     sliderWrap = document.querySelector(".slide__wrap"),
    //     slides = document.querySelectorAll(".slider__item"),
    //     slideNumberCurrent = document.querySelector(".slide-number-current"),
    //     slideNumberTotal = document.querySelector(".slide-number-total"),
    //     slideArrowPrev = document.querySelector(".arrow-prev"),
    //     slideArrowNext = document.querySelector(".arrow-next");

    //     let slideIndex = 1,
    //         offset = 0;

    // slider.addEventListener("mousedown", () => {
    //     slider.style.cursor = "grabbing";
    // });
    // slider.addEventListener("mouseup", () => {
    //     slider.style.cursor = "grab";
    // });


    // slideArrowNext.addEventListener("click", () => {
    //     slideIndex++;
    //     if (slideIndex > slides.length) {
    //         slideIndex = slides.length;
    //     } else {
    //         offset += 100;
    //     }

    //     sliderWrap.style.transform = `translateX(-${offset}vw)`;
    //     showNumberSlide();
    // });

    // slideArrowPrev.addEventListener("click", () => {
    //     slideIndex--;
    //     if (slideIndex == slides.length - slides.length) {
    //         slideIndex = 1;
    //     } else {
    //         offset -= 100;
    //     }

    //     sliderWrap.style.transform = `translateX(-${offset}vw)`;
    //     showNumberSlide();
    // });

    // function showNumberSlide () {
    //     slideNumberCurrent.textContent = slideIndex;
    //     slideNumberTotal.textContent = slides.length;
    // }
    // showNumberSlide();


    /* ----------- Slider ----------- */

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
    
});