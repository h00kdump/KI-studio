/* document.addEventListener('DOMContentLoaded', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'footer.html');
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('footer').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}); */


document.addEventListener('DOMContentLoaded', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'footer.html');
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('footer').innerHTML = xhr.responseText;
            initFooterEvents(); // вызываем функцию инициализации событий
        }
    };
    xhr.send();
});