'use strict';

const lists = document.querySelectorAll('.feature-sub');
const btns = document.querySelectorAll('.feature__link');

btns.forEach((item, buttonIndex) => {
    item.addEventListener('click', () => {
        lists.forEach((list, listIndex) => {
            listIndex === buttonIndex ? list.classList.toggle('hidden') 
                : list.classList.add('hidden');
        });

        btns.forEach((button) => {
            button === item ? button.classList.toggle('feature__link_active') 
                : button.classList.remove('feature__link_active');
        });
    });
});