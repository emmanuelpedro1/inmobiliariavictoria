
let slideIndex = 0;

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide img');

// Modal elementos
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.querySelector('.close');

// Mostrar una imagen en el carrusel
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    carouselContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Navegación de botones
nextBtn.addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

// Auto-play slides cada 5 segundos
setInterval(() => {
    showSlide(slideIndex + 1);
}, 5000);

// Ampliar imagen al hacer clic
slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = slide.src; // Mostrar la imagen seleccionada
    });
});

// Cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
