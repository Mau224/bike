'use strict';

//Объявляем переменные
var parent_original = document.querySelector('.header-content__logo-block');
var parent = document.querySelector('.header__logo-block');
var item = document.querySelector('.adaptive-item');

//Слушаем изменение размера экрана
window.addEventListener('resize', move);

//Функция
function move(){
	var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 1024) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[2]);
			item.classList.add('done');
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item, parent_original.children[2]);
			item.classList.remove('done');
		}
	}
}

//Вызываем функцию
move();


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


if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function(element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function() {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}
