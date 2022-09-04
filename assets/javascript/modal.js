const open = document.querySelector('#open-details');
const close = document.querySelector('#close-details');
const popup = document.querySelector('.popup');

open.addEventListener('click', () => {
    popup.classList.add('show');
});

close.addEventListener('click', () => {
    popup.classList.remove('show');
});