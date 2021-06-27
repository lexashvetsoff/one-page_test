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

        $('.burger-btn').removeClass('burger-btn--activ');
        $('.burger-btn__item').removeClass('burger-btn__item--activ');
        $('.mobile').removeClass('mobile--activ');
    });

    $('#mob-experience').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 2000);

        $('.burger-btn').removeClass('burger-btn--activ');
        $('.burger-btn__item').removeClass('burger-btn__item--activ');
        $('.mobile').removeClass('mobile--activ');
    });

    $('#mob-js').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 2500);

        $('.burger-btn').removeClass('burger-btn--activ');
        $('.burger-btn__item').removeClass('burger-btn__item--activ');
        $('.mobile').removeClass('mobile--activ');
    });

    $('#mob-about').on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body, html').animate({scrollTop: top}, 3000);

        $('.burger-btn').removeClass('burger-btn--activ');
        $('.burger-btn__item').removeClass('burger-btn__item--activ');
        $('.mobile').removeClass('mobile--activ');
    });


    // Ползунок
    var item1 = 0;
    var item2 = 20;
    var item3 = 50;
    var item4 = 100;

    $("#polzunok").slider({
        animate: "slow",
        range: "min",    
        value: 60,
        slide : function(event, ui) {            
            $("#send-result-polzunok").val(ui.value);    
        }
    });
    $("#send-result-polzunok").val($("#polzunok").slider("value")); 


    // Переход по нажатию на указатель
    $('#item-1').on("click", function(event) {
        event.preventDefault();

        $('#polzunok').slider("value", item1);       
        $("#send-result-polzunok").val(item1);
    });

    $('#item-2').on("click", function(event) {
        event.preventDefault();

        $('#polzunok').slider("value", item2);      
        $("#send-result-polzunok").val(item2);
    });

    $('#item-3').on("click", function(event) {
        event.preventDefault();

        $('#polzunok').slider("value", item3);     
        $("#send-result-polzunok").val(item3);
    });

    $('#item-4').on("click", function(event) {
        event.preventDefault();

        $('#polzunok').slider("value", item4);       
        $("#send-result-polzunok").val(item4);
    });
});
