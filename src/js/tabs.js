const tabHandlerElems = document.querySelectorAll('[data-tabs-handler]'),
    tabElems = [...document.querySelectorAll('[data-tabs-field]'),
        ...document.querySelectorAll('.section__title.design__title')];

// design-list__item_active

for (let elem of tabHandlerElems) {
    elem.addEventListener('click', () => {
        tabHandlerElems.forEach(item => item.classList.remove('design-list__item_active'));
        elem.classList.add('design-list__item_active');

        tabElems.forEach(content => {
            if (content.dataset.tabsField == elem.dataset.tabsHandler) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });
}