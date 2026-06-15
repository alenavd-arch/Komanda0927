document.addEventListener('DOMContentLoaded', () => {
    // открываем главную страницу
    showPage('home');

    // запускаем чек-лист
    renderChecklist();

    // кнопка "Вернуться в начало"
    document.getElementById('backToTopBtn')
        ?.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
});