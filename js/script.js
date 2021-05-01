import filter from './modules/filter';
import forms from './modules/forms';
import header from './modules/header';
import mainSlider from './modules/mainSlider';
import parallaxNavigation from './modules/parallaxNavigation';
import processFlowSlider from './modules/processFlowSlider';
import sliderOurTeam from './modules/sliderOurTeam';

new WOW().init();

document.addEventListener("DOMContentLoaded", () => {
    filter(".portfolio-item", ".portfolio-list");
    forms("form");
    header();
    mainSlider();
    parallaxNavigation(".parallax", ".parallax-img");
    processFlowSlider({
        dotsSelector: ".process-flow-icon",
        progressBar: ".progress-bar",
        slidesSelector: ".slide-content",
        slideIcons: ".process-flow-icon p"
    });
    sliderOurTeam();
});
