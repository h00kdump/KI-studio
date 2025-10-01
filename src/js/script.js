// Общая функция для управления модальными окнами
function setupModal(modalId, openBtnId, closeBtnId) {
    const modal = document.querySelector(modalId);
    const openBtn = document.querySelector(openBtnId);
    const closeBtn = document.querySelector(closeBtnId);
    let scrollPosition = 0;
  
    // Открытие модального окна
    openBtn.onclick = function () {
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = "100%";
    };
  
    // Закрытие модального окна
    closeBtn.onclick = function () {
      modal.style.display = "none";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
    };
  
    // Закрытие при клике на затемненную область
    modal.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollPosition);
      }
    };
  }
  
  // Настройка всех модальных окон

  setupModal("#modal-1", "#openModal", "#close");
  setupModal("#modal-2", "#openModal2", "#close2");
  setupModal("#modal-3", "#openModal3", "#close3");
  setupModal("#modal-4", "#openModal4", "#close4");
  setupModal("#modal-5", "#openModal5", "#close5");
  setupModal("#modal-6", "#openModal6", "#close6");
  setupModal("#modal-7", "#openModal7", "#close7");
  setupModal("#modal-8", "#openModal8", "#close8");
  setupModal("#modal-9", "#openModal9", "#close9");
  setupModal("#modal-10", "#openModal10", "#close10");
  setupModal("#modal-11", "#openModal11", "#close11");
  setupModal("#modal-12", "#openModal12", "#close12");
  setupModal("#modal-13", "#openModal13", "#close13");
  setupModal("#modal-14", "#openModal14", "#close14");


/* // Модальные окна с проектами

const modal = document.querySelector('#modal-1');
const modal2 = document.querySelector('#modal-2');
const modal3 = document.querySelector('#modal-3');
const modal4 = document.querySelector('#modal-4');
const modal5 = document.querySelector('#modal-5');
const modal6 = document.querySelector('#modal-6');
const modal7 = document.querySelector('#modal-7');
const modal8 = document.querySelector('#modal-8');
const modal9 = document.querySelector('#modal-9');
const modal10 = document.querySelector('#modal-10');
const modal11 = document.querySelector('#modal-11');
const modal12 = document.querySelector('#modal-12');


const btn = document.querySelector('#openModal');
const btn2 = document.querySelector('#openModal2');
const btn3 = document.querySelector('#openModal3');
const btn4 = document.querySelector('#openModal4');
const btn5 = document.querySelector('#openModal5');
const btn6 = document.querySelector('#openModal6');
const btn7 = document.querySelector('#openModal7');
const btn8 = document.querySelector('#openModal8');
const btn9 = document.querySelector('#openModal9');
const btn10 = document.querySelector('#openModal10');
const btn11 = document.querySelector('#openModal11');
const btn12 = document.querySelector('#openModal12');


const close = document.querySelector('#close');
const close2 = document.querySelector('#close2');
const close3 = document.querySelector('#close3');
const close4 = document.querySelector('#close4');
const close5 = document.querySelector('#close5');
const close6 = document.querySelector('#close6');
const close7 = document.querySelector('#close7');
const close8 = document.querySelector('#close8');
const close9 = document.querySelector('#close9');
const close10 = document.querySelector('#close10');
const close11 = document.querySelector('#close11');
const close12 = document.querySelector('#close12');


// Открытие окна при клике на кнопку
btn.onclick = function() {
    modal.style.display = 'block';
};

btn2.onclick = function() {
    modal2.style.display = 'block';
};

btn3.onclick = function() {
    modal3.style.display = 'block';
};

btn4.onclick = function() {
    modal4.style.display = 'block';
};

btn5.onclick = function() {
    modal5.style.display = 'block';
};

btn6.onclick = function() {
    modal6.style.display = 'block';
};

btn7.onclick = function() {
    modal7.style.display = 'block';
};

btn8.onclick = function() {
    modal8.style.display = 'block';
};

btn9.onclick = function() {
    modal9.style.display = 'block';
};

btn10.onclick = function() {
    modal10.style.display = 'block';
};

btn11.onclick = function() {
    modal11.style.display = 'block';
};

btn12.onclick = function() {
    modal12.style.display = 'block';
};


// Закрытие окна при клике на кнопку "закрыть"
close.onclick = function() {
    modal.style.display = 'none';
};

close2.onclick = function() {
    modal2.style.display = 'none';
};

close3.onclick = function() {
    modal3.style.display = 'none';
};

close4.onclick = function() {
    modal4.style.display = 'none';
};

close5.onclick = function() {
    modal5.style.display = 'none';
};

close6.onclick = function() {
    modal6.style.display = 'none';
};

close7.onclick = function() {
    modal7.style.display = 'none';
};

close8.onclick = function() {
    modal8.style.display = 'none';
};

close9.onclick = function() {
    modal9.style.display = 'none';
};

close10.onclick = function() {
    modal10.style.display = 'none';
};

close11.onclick = function() {
    modal11.style.display = 'none';
};

close12.onclick = function() {
    modal12.style.display = 'none';
};



// Закрытие окна при клике на затемненную область
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}; */


