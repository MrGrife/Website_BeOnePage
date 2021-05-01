const scrollbtn = document.querySelector(".skip-slider span");

function header() {
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

    const secondSection = document.querySelector(".about-betheme");

    scrollbtn.addEventListener("click", () => {
        secondSection.scrollIntoView({
            block: "start",
            behavior: 'smooth'
        });
    });
   

    /* Burger menu and media nav */

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
}

export default header;
export {scrollbtn};