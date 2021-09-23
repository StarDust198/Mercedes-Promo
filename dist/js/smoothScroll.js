const scrollLinks = [...document.querySelectorAll('.menu-list__link'),
    document.querySelector('.main__scroll')];

scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const ID = event.target.getAttribute('href').substr(1);

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
       });
    });
});