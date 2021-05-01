function sliderOurTeam() {
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
}

export default sliderOurTeam;