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


    /* Scroll window */

    const scrollbtn = document.querySelector(".skip-slider span"),
        secondSection = document.querySelector(".about-betheme");

    scrollbtn.addEventListener("click", () => {
        secondSection.scrollIntoView({
            block: "start",
            behavior: 'smooth'
        });
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

    /* ----------- OurLatestWorksPortfolio ----------- */

    const portfolioItems = document.querySelectorAll(".portfolio-item"),
        portfolioParent = document.querySelector(".portfolio-list");
    

    function activeItemElement(i = 0) {
        portfolioItems[i].classList.add("active__portfolio");
    }

    activeItemElement();

    function unactiveItemElemen () {
        portfolioItems.forEach(item => {
            item.classList.remove("active__portfolio");
        });
    }

    // PortfolioFilter

    const portfolioContentParent = document.querySelector(".portfolio-wrap"),
        portfolioContent = document.querySelectorAll(".portfolio-inner-content");
        
    
    function filterPortfolio (name) {
        portfolioContentParent.innerHTML = "";
        portfolioContent.forEach((item) => {
            if (item.getAttribute("data-filter").split(" ").includes(name)) {
                portfolioContentParent.append(item);
            } else if (name == "show all") {
                portfolioContentParent.append(item);
            }
        });
    }

    portfolioParent.addEventListener("click", (e) => {
        portfolioItems.forEach((item, i) => {
            if (item.classList.contains("active__portfolio")) {
                
            } else if (e.target == item){
                unactiveItemElemen();
                activeItemElement(i);
                filterPortfolio(item.textContent);
            }
        });
    });


    /* ----------- OurTeamSlider ----------- */


    new Swiper('.our-team-slider', {
      cssMode: true,
      allowTouchMove: false,
      mousewheel: {
        invert: true
      },
      pagination: {
        el: '.swiper-bullets',
        clickable: true,
      },
      breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        480: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 2,
        }
      }
    });

    /* ----------- Slider ----------- */

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

    /* ----------- Process flow slider ----------- */


    const dots = document.querySelectorAll(".process-flow-icon"),
     sliderProgressBar = document.querySelector(".progress-bar"),
     slideContent = document.querySelectorAll(".slide-content"),
     slideIconsText = document.querySelectorAll(".process-flow-icon p");

    function addActiveClass(i = 0) {
        dots[i].classList.add("progress-bar-icons-active");
    }
    addActiveClass();

    function removeActiveClass () {
        dots.forEach(item => {
            item.classList.remove("progress-bar-icons-active");
        });
    }

    function hideIconText() {
        slideIconsText.forEach(text => {
            text.style.opacity = "0";
        })
    }
    function showIconText(i = 0) {
        slideIconsText[i].style.opacity = "1";
    }
    showIconText();

    function slide(i) {
        slideContent.forEach(slide => {
            slide.style.transform = `translate(-${i * 100}%)`;
        });
    }
    function progressBarSlider(i) {
        sliderProgressBar.style.width = `${i * 33.33333}%`;
    }

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            removeActiveClass();
            addActiveClass(i);
            slide(i);
            progressBarSlider(i);
            if (window.innerWidth <= 480) {
                hideIconText();
                showIconText(i);
            }
        });
    });
    









    
    /* ----------- Parallax and navigation ----------- */

    const parallaxConteiners = document.querySelectorAll(".parallax"),
        parallaxImg = document.querySelectorAll(".parallax-img");
    let scrollPosition = 0;

    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop - document.documentElement.clientHeight, left: rect.left + scrollLeft };
    }

    function scrollSliderImg () {
        parallaxImg.forEach(img => {
            img.style.transform = `translateY(${scrollPosition * 10 / 35}px)`;
        });
    }

    function scrollAnotherImg () {
        parallaxConteiners.forEach(img => {
            let distanceFromElements = offset(img).top;
            if (window.pageYOffset >= distanceFromElements) {
                img.style.cssText = `
                    background-position-y: ${-500 + (window.pageYOffset - distanceFromElements) * 0.5}px;
                `;
            }
        });
    }

    const scrollToTheseElements = document.querySelectorAll('.scrollTo'),
        links = document.querySelectorAll(".list__header .link");

    const linksContainer = [];
    links.forEach(link => linksContainer.push(link));
    linksContainer.splice(3, 4);
    linksContainer.pop();

    function trackScrollPage () {
        let scrollDistance = window.pageYOffset;
        
        scrollToTheseElements.forEach((el, i) => {
            if (el.offsetTop - document.querySelector('header').clientHeight <= scrollDistance) {
                linksContainer.forEach((link) => {
                    if (link.classList.contains("active-li")) {
                        link.classList.remove("active-li");
                    }
                });
                linksContainer[i].classList.add("active-li");
            }
        });
    }
    trackScrollPage();

    function scrollToPage() {
        linksContainer.forEach((link, idx) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                let targetSection = scrollToTheseElements[idx];
                targetSection.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            });
        });
    }
    scrollToPage();


    window.addEventListener('scroll', function() {
        scrollSliderImg();
        scrollAnotherImg();
        trackScrollPage();
    });

    /* ----------- Forms(POST DATA) ----------- */

    const form = document.querySelector("form"),
        parentPrevModal = document.querySelector(".send-data");

    bindPostData(form);

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        return await res.json();
    };

    const messages = {
        success: "✓ Thanks you. The Mailman is on his way!",
        loading: "img/spinner.svg",
        failure: "✘ Verification error. Try again!"
    };

    function bindPostData (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const error = formValidate();
            if (error === 0) {
                
                const statusMessage = document.createElement("img");
                    statusMessage.src = messages.loading;
                    statusMessage.style.cssText = `
                        position: absolute;
                        top: 40%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        opacity: 1;
                    `;
                parentPrevModal.append(statusMessage);

                const formData = new FormData(form);
                const json = JSON.stringify(Object.fromEntries(formData));
                postData("http://localhost:3000/requests", json)
                .then(() => {
                    showThanksModal(messages.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(messages.failure);
                    statusMessage.remove();
                })
                .finally(() => {
                    form.reset();
                });
            }
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.createElement("div");

        prevModalDialog.classList.add("thanks__message");
        prevModalDialog.innerText = message;
        parentPrevModal.append(prevModalDialog);

        setTimeout(() => {
            prevModalDialog.classList.add("hide");
        }, 4500);
    }

    function formValidate() {
        let error = 0;
        let formReq = document.querySelectorAll("._req");

        formReq.forEach(input => {
            input.addEventListener("input", () => {
                formRemoveError(input);
                if (input.classList.contains('email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                    }
                } else if (input.classList.contains('math')) {
                    if (input.value != firstNumber + secondNumber) {
                        formAddError(input);
                    }
                } else {
                    if (input.value === "") {
                        formAddError(input);
                    }
                }
            });
            formRemoveError(input);
            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('math')) {
                if (input.value != firstNumber + secondNumber) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }
        });
        return error;
    }

    function formAddError(input) {
        input.classList.add("error");
    }
    function formRemoveError(input) {
        input.classList.remove("error");
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }


    /* Random numbers */

    const checkedInput = document.querySelector(".check-on-real-human input"),
        firstNumber = Math.floor(Math.random() * 21) + 1,
        secondNumber = Math.floor(Math.random() * 21) + 1;

    function randomNumbers () {
        return `${firstNumber} + ${secondNumber} = ?`;
    }

    checkedInput.setAttribute("placeholder", randomNumbers());

});
