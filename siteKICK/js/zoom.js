document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.zoom');
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
});
