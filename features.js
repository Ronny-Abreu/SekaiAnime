let currentSlide = 0;
const totalSlides = 4;

document.addEventListener('DOMContentLoaded', function() {
    setupSearch();
    setupFilters();
    startCarousel();
});

//carrusel automático
function startCarousel() {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// slide del carrusel
function changeSlide(direction) {
    const slides = document.querySelectorAll('.hero-slide');
    
    slides[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    if (currentSlide >= totalSlides) currentSlide = 0;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    
    slides[currentSlide].classList.add('active');
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const animeCards = document.querySelectorAll('.anime-card');
        
        animeCards.forEach(card => {
            const title = card.querySelector('.anime-title').textContent.toLowerCase();
            const parent = card.closest('.col-lg-3');
            
            if (title.includes(searchTerm)) {
                parent.style.display = 'block';
            } else {
                parent.style.display = 'none';
            }
        });
    });
}

// filtros busqda
function setupFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const animeCards = document.querySelectorAll('[data-genres]');
            animeCards.forEach(card => {
                const genres = card.getAttribute('data-genres');
                const parent = card;
                
                if (filter === 'all' || genres.includes(filter)) {
                    parent.style.display = 'block';
                } else {
                    parent.style.display = 'none';
                }
            });
        });
    });
}