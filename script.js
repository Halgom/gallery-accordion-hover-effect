const galleryItems = document.querySelectorAll('.gallery .gallery-item');

galleryItems.forEach(el => {
    el.addEventListener('mouseenter', accordionEffect);
});

function accordionEffect(event) {
    galleryItems.forEach(el => {
        el.classList.remove('active');
    });
    event.target.classList.add('active');
}