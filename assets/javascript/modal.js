const open_museuinfo = document.querySelector('#open-details-museuinfo');
const close_museuinfo = document.querySelector('#close-details-museuinfo');
const popup_museuinfo = document.querySelector('#museuinfo');

open_museuinfo.addEventListener('click', () => {
    popup_museuinfo.classList.add('show');
});

close_museuinfo.addEventListener('click', () => {
    popup_museuinfo.classList.remove('show');
});

const open_sresra = document.querySelector('#open-details-sresra');
const close_sresra = document.querySelector('#close-details-sresra');
const popup_sresra = document.querySelector('#sresra');

open_sresra.addEventListener('click', () => {
    popup_sresra.classList.add('show');
});

close_sresra.addEventListener('click', () => {
    popup_sresra.classList.remove('show');
});