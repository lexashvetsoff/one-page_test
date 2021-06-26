$(document).ready(function() {
    // Мобильное меню
    var burger = $('.burger-btn');
    burger.on("click", mobileMenu);

    function mobileMenu() {
        $('.burger-btn').toggleClass('burger-btn--activ');
        $('.burger-btn__item').toggleClass('burger-btn__item--activ');
        $('.mobile').toggleClass('mobile--activ');
    }

    // Прокрутка
    $('#btn-info').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 1500);
    });

    $('#btn-experience').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 2000);
    });

    $('#btn-js').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 2500);
    });

    $('#btn-about').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 3000);
    });

    $('#mob-info').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 1500);
    });

    $('#mob-experience').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 2000);
    });

    $('#mob-js').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 2500);
    });

    $('#mob-about').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 3000);
    });
});

// input range для хром, яндекс, опера
function rangeInput() {
    var value = $('.range').val();
    console.log(value);  

    $('.range').css({'background': '-webkit-linear-gradient(left, #435993 0%, #435993 '+value+'%, #e9e9e9 '+value+'%, #e9e9e9 100%)'});
}