
document.querySelector('#first-item').addEventListener('click', function () {
    document.querySelector('.item-1').classList.add('delete-item')
})

document.querySelector('#second-item').addEventListener('click', function () {
    document.querySelector('.item-2').classList.add('delete-item')
})

document.querySelector('#three-item').addEventListener('click', function () {
    document.querySelector('.item-3').classList.add('delete-item')
})


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn__second-modal').forEach(function(tabs){
        tabs.addEventListener('click', function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.text-btn').forEach(function(tabContent) {
                tabContent.classList.remove('active-btn-modal')
            })

            document.querySelector(`[data-target='${path}']`).classList.add('active-btn-modal')
        })
    })
})

$('.btn__second-modal').click(function(){
    const path = event.currentTarget.dataset.path
    $(this).addClass('btn__is-active');
    $('.btn__second-modal').not(this).removeClass('btn__is-active');
})