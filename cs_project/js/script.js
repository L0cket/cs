'use strict'

const burger = document.querySelector('.menu_burger');
const menu = document.querySelector('.menu_hidden');

burger.addEventListener('click', () => {
    if(!menu.classList.contains('menu_hidden_active')){
        menu.classList.add('menu_hidden_active');
    } else{
        menu.classList.remove('menu_hidden_active');
    }
});