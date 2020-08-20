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

