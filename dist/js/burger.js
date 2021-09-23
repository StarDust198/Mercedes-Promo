const burger = document.querySelector('.humburger-menu'),
    menu = document.querySelector('.menu'),
    menuLinks = document.querySelectorAll('.menu-list__link');

burger.addEventListener('click', () => {
    burger.classList.toggle('humburger-menu-active');
    menu.classList.toggle('menu-active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (burger.classList.contains('humburger-menu-active')) {
            burger.classList.remove('humburger-menu-active');
            menu.classList.remove('menu-active');
        }
    });
});