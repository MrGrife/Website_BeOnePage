"use strict";
new WOW().init();

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header"),
        burgerMenu = document.querySelector(".burger__menu"),
        listHeader = document.querySelector(".list__header");


/* ----------- Scroll header ----------- */
    window.addEventListener("scroll", () => {
        let pageYOffset = window.pageYOffset;
        if (pageYOffset <= 0) {
            header.classList.remove("active__window");
        } else {
            header.classList.add("active__window");
        }
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
});