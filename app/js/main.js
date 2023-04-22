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

    $('#text-link,#img').on('click', function () {
        $('.faq__answer').toggleClass('faq__answer--active');
        $('#img').toggleClass('img--active');
    });
   
});
// document.querySelector('#text-link,#img').on('click', function () {
//     document.querySelector('.faq__answer').classList.toggle('faq__answer--active');
//     document.querySelector('#img').classList.toggle('img--active');
// });

