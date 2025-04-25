
document.addEventListener('DOMContentLoaded', function() {
    // Загружаем футер
    loadFooter();
    
    // Инициализируем тему
    initTheme();
});

function loadFooter() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'footer.html');
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('footer').innerHTML = xhr.responseText;
            
            // После загрузки футера вешаем обработчики
            setupThemeToggle();

        }
    };
    xhr.send();
}

// ===== ТЕМА =====
function initTheme() {
    // Применяем сохранённую тему сразу при загрузке
    if(localStorage.getItem('theme')) {
        document.documentElement.setAttribute("theme", "dark");
    }
}

function setupThemeToggle() {
    const toggleBtn = document.querySelector("#toggle-theme");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", toggleTheme);
    }
}

function toggleTheme() {
    if(document.documentElement.hasAttribute("theme")) {
        document.documentElement.removeAttribute("theme");
        localStorage.removeItem('theme');
    } else {
        document.documentElement.setAttribute("theme", "dark");
        localStorage.setItem('theme', 'dark');
    }
}

