const element = document.querySelector('#selectCustom');
        const choices = new Choices(element, {
            searchEnabled: false,
            shouldSort: false,
        })

new SimpleBar(document.querySelector('.choices__list--dropdown'));

Array.prototype.forEach.call(
    document.querySelectorAll('.choices__list'),
    el => new SimpleBar()
)