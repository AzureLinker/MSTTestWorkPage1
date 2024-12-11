document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const stickyOffset = header.offsetHeight / 2; // Положение хедера относительно верха страницы

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > stickyOffset) {
            header.classList.add('sticky'); // Добавляем класс, когда скролл ниже начального положения хедера
        } else {
            header.classList.remove('sticky'); // Убираем класс при возврате вверх
        }
    });
});