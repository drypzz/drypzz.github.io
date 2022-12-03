const open_carousel_th = document.querySelector('#button-4');
const close_carousel_th = document.querySelector('#close-carousel-thyagoof');
const popup_carousel_th = document.querySelector('#carousel-thyagoof');

open_carousel_th.addEventListener('click', () => {
    popup_carousel_th.classList.add('show');
    document.querySelector('body').style = 'overflow: hidden;';
});

close_carousel_th.addEventListener('click', () => {
    popup_carousel_th.classList.remove('show');
    document.querySelector('body').style = 'overflow: auto;';
});

// button 3

const open_carousel_ps = document.querySelector('#button-3');
const close_carousel_ps = document.querySelector('#close-carousel-personal');
const popup_carousel_ps = document.querySelector('#carousel-personal');

open_carousel_ps.addEventListener('click', () => {
    popup_carousel_ps.classList.add('show');
    document.querySelector('body').style = 'overflow: hidden;';
});

close_carousel_ps.addEventListener('click', () => {
    popup_carousel_ps.classList.remove('show');
    document.querySelector('body').style = 'overflow: auto;';
});

// button 2

const open_carousel_pi = document.querySelector('#button-2');
const close_carousel_pi = document.querySelector('#close-carousel-pi');
const popup_carousel_pi = document.querySelector('#carousel-pi');

open_carousel_pi.addEventListener('click', () => {
    popup_carousel_pi.classList.add('show');
    document.querySelector('body').style = 'overflow: hidden;';
});

close_carousel_pi.addEventListener('click', () => {
    popup_carousel_pi.classList.remove('show');
    document.querySelector('body').style = 'overflow: auto;';
});

// button 1

const open_carousel_info = document.querySelector('#button-1');
const close_carousel_info = document.querySelector('#close-carousel-info');
const popup_carousel_info = document.querySelector('#carousel-info');

open_carousel_info.addEventListener('click', () => {
    popup_carousel_info.classList.add('show');
    document.querySelector('body').style = 'overflow: hidden;';
});

close_carousel_info.addEventListener('click', () => {
    popup_carousel_info.classList.remove('show');
    document.querySelector('body').style = 'overflow: auto;';
});