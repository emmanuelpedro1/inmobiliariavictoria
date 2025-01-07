let slideIndex = 0;

const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide img');

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

nextBtn.addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

// Auto-play slides every 5 seconds
setInterval(() => {
    showSlide(slideIndex + 1);
}, 5000);
