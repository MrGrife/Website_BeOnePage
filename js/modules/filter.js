function filter(portfolioSelector, portfolioParentSelector) {
    const portfolioItems = document.querySelectorAll(portfolioSelector),
    portfolioParent = document.querySelector(portfolioParentSelector);


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
}

export default filter;