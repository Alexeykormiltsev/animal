$(function () {


    const swiper = new Swiper('.slider', {

        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 6000,
        },
        speed: 1500,
        spaceBetween: 120,
        pagination: true,
        navigation: false,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
  
});