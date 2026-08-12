// 1. Seleccionar los elementos del DOM (Document Object Model)
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// 2. Escuchar el evento 'click' en el botón
themeBtn.addEventListener('click', () => {
    // Alternar la clase 'dark-mode' en el <body>
    body.classList.toggle('dark-mode');

    // Cambiar el texto del botón según el estado
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️ Modo Claro';
    } else {
        themeBtn.textContent = '🌙 Modo Oscuro';
    }
});