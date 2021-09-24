const forms = [
    document.querySelector('.form-test-drive'),
    document.querySelector('.modal__form')
];

forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let emptyValue = 0,
            data = {};

        for (let { name, value } of form.elements) {
            if (name && value.trim() == "") emptyValue = 1;
            if (name) data[name] = value;
        }

        if (emptyValue) {
            alert('Заполните все поля формы');
        } else {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data)
            }).then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json();
                } else {
                    throw new Error(response.status);
                }
            }).then(data => {
                console.log(data);
                alert('Данные успешно отправлены');
                form.reset();
            }).catch(error => {
                alert(`Произошла ошибка, статус - ${error.message}`);
            });
        }
    });
});