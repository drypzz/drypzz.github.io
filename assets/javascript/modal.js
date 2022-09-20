const open_museuinfo = document.querySelector('#open-details-museuinfo');
const close_museuinfo = document.querySelector('#close-details-museuinfo');
const popup_museuinfo = document.querySelector('#museuinfo');

open_museuinfo.addEventListener('click', () => {
    popup_museuinfo.classList.add('show');
    document.querySelector('body').style = 'overflow: hidden;';
});

close_museuinfo.addEventListener('click', () => {
    popup_museuinfo.classList.remove('show');
    document.querySelector('body').style = 'overflow: auto;';
});

const open_sresra = document.querySelector('#open-details-sresra');
const close_sresra = document.querySelector('#close-details-sresra');
const popup_sresra = document.querySelector('#sresra');

open_sresra.addEventListener('click', () => {
    popup_sresra.classList.add('show');
    document.querySelector('body').style = 'overflow: hidden;';
});

close_sresra.addEventListener('click', () => {
    popup_sresra.classList.remove('show');
    document.querySelector('body').style = 'overflow: auto;';
});

const open_io = document.querySelector('#open-details-io');
const close_io = document.querySelector('#close-details-io');
const popup_io = document.querySelector('#io');

open_io.addEventListener('click', () => {
    popup_io.classList.add('show');
    document.querySelector('body').style = 'overflow: hidden;';
});

close_io.addEventListener('click', () => {
    popup_io.classList.remove('show');
    document.querySelector('body').style = 'overflow: auto;';
});