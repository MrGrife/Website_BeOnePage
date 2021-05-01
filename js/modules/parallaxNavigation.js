function parallaxAndNavigation(parallaxContainerSelector, parallaxImgSelecotr) {
    const parallaxConteiners = document.querySelectorAll(parallaxContainerSelector),
    parallaxImg = document.querySelectorAll(parallaxImgSelecotr);
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
}

export default parallaxAndNavigation;