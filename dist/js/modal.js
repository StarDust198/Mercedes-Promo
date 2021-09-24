const modalBtns = document.querySelectorAll('.more'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close'),
    overlay = document.querySelector('.overlay');

modalBtns.forEach(btn => btn.addEventListener('click', () => modal
    .classList.remove('hidden')));

modal.addEventListener('click', (event) => {
    if (event.target && (event.target.classList.contains('modal__close') || event
        .target.classList.contains('overlay'))) {
        modal.classList.add('hidden');
    }
});