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
    const swip = new Swiper('.slider-team', {

        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 4000,
        },
        speed: 1500,
        spaceBetween: 100,
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

    $('.burger').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.burger__img').toggleClass('burger--active');
        $('.burger__btn').toggleClass('burger__btn--active');
    });


    $(".menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке

        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });

});
// document.querySelector('#text-link,#img').on('click', function () {
//     document.querySelector('.faq__answer').classList.toggle('faq__answer--active');
//     document.querySelector('#img').classList.toggle('img--active');
// });

