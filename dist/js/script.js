
// Модальные окна с проектами

const modal = document.querySelector('#modal-1');
const modal2 = document.querySelector('#modal-2');

const btn = document.querySelector('#openModal');
const btn2 = document.querySelector('#openModal2');

const close = document.querySelector('#close');
const close2 = document.querySelector('#close2');

// Открытие окна при клике на кнопку
btn.onclick = function() {
    modal.style.display = 'block';
};

btn2.onclick = function() {
    modal2.style.display = 'block';
};


// Закрытие окна при клике на кнопку "закрыть"
close.onclick = function() {
    modal.style.display = 'none';
};

close2.onclick = function() {
    modal2.style.display = 'none';
};

// Закрытие окна при клике на затемненную область
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};


