function processFlowSlider({dotsSelector, progressBar, slidesSelector, slideIcons}) {
    const dots = document.querySelectorAll(dotsSelector),
    sliderProgressBar = document.querySelector(progressBar),
    slideContent = document.querySelectorAll(slidesSelector),
    slideIconsText = document.querySelectorAll(slideIcons);

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
}

export default processFlowSlider;