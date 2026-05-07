window.addEventListener('scroll', () => {
    document.querySelectorAll('.karta, #uslugi h2, #kontakt h2, form').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('widoczny');
        }
    });
});
document.querySelector('.scroll-arrow').addEventListener('click', () => {
    document.getElementById('uslugi').scrollIntoView({ behavior: 'smooth' });
});