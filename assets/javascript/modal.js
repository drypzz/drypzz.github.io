const open = document.querySelector('#open-details');
const close = document.querySelector('#close-details');
const modal = document.querySelector('.modal');

open.addEventListener('click', () => {
    modal.classList.add('show');
});

close.addEventListener('click', () => {
    modal.classList.remove('show');
});