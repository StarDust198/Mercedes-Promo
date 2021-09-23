const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]'),
    tabsContentElems = document.querySelectorAll('[data-tabs-field]');

// design-list__item_active

for (let elem of tabsHandlerElems) {
    elem.addEventListener('click', () => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'));
        elem.classList.add('design-list__item_active');

        console.dir(elem.dataset.tabsHandler);

        tabsContentElems.forEach(content => {
            if (content.dataset.tabsField == elem.dataset.tabsHandler) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });
}