$(document).ready(function() {
    $(".header_main").removeClass("no-js");
    $(".header__burger").removeClass("no-js");
    $(".header__logo-block").removeClass("no-js");
    $(".header__menu").removeClass("no-js");
    $(".header__list").removeClass("no-js");
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.header__link').click(function () {
        $('.header__burger,.header__menu,.header__body').removeClass('active');
        $('body').removeClass('lock');
    });
});

$('#name').on('input', function() {
    $(this).val($(this).val().replace(/^[ 0-9]+$/, ''))
});

$(function () {
    $('#tel').mask('+7 9999999999');
});
