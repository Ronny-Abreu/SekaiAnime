// Base de datos de animes
const animesData = {
  "tokyo-ghoul": {
    id: "tokyo-ghoul",
    title: "Tokyo Ghoul",
    category: "Supernatural, Action",
    episodes: "12",
    duration: "24 min",
    studio: "Pierrot",
    followers: "9678",
    status: "En emisión",
    year: "2014",
    rating: "8.7",
    image: "/src/img/TokyoGhoul/tokyo-ghoul-wall.webp",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description:
      "Tokyo Ghoul sigue la historia de Ken Kaneki, un estudiante universitario que se convierte en un medio-ghoul después de un encuentro fatal. Debe aprender a vivir entre el mundo humano y el mundo de los ghouls, criaturas que se alimentan de carne humana. La serie explora temas de identidad, supervivencia y la delgada línea entre la humanidad y la monstruosidad.",
    genres: ["Acción", "Sobrenatural", "Drama"],
    episodes_list: [
      { number: 1, title: "Tragedia", duration: "24 min", watched: true },
      { number: 2, title: "Incubación", duration: "24 min", watched: true },
      { number: 3, title: "Paloma", duration: "24 min", watched: false },
      { number: 4, title: "Cena", duration: "24 min", watched: false },
      { number: 5, title: "Cicatriz", duration: "24 min", watched: false },
    ],
  },
  "one-piece": {
    id: "one-piece",
    title: "One Piece",
    category: "Adventure, Shounen",
    episodes: "1000+",
    duration: "24 min",
    studio: "Toei Animation",
    followers: "15420",
    status: "En emisión",
    year: "1999",
    rating: "9.0",
    image: "/src/img/OnePiece/Luffy-Wallp.webp",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    description:
      "One Piece narra las aventuras de Monkey D. Luffy, un joven pirata que busca el tesoro más grande del mundo conocido como 'One Piece' para convertirse en el próximo Rey de los Piratas. Junto a su tripulación de los Sombreros de Paja, explora el Grand Line enfrentando enemigos poderosos y descubriendo secretos del mundo.",
    genres: ["Aventura", "Comedia", "Acción"],
    episodes_list: [
      { number: 1, title: "Soy Luffy! ¡El hombre que será el Rey de los Piratas!", duration: "24 min", watched: true },
      {
        number: 2,
        title: "¡Aparece el gran espadachín! ¡Pirate Hunter Roronoa Zoro!",
        duration: "24 min",
        watched: true,
      },
      { number: 3, title: "¡Morgan vs. Luffy! ¿Quién es esa chica misteriosa?", duration: "24 min", watched: false },
      { number: 4, title: "El pasado de Luffy! ¡Aparece Shanks el Pelirrojo!", duration: "24 min", watched: false },
      { number: 5, title: "¡Miedo, poder misterioso! ¡Capitán Pirata Buggy!", duration: "24 min", watched: false },
    ],
  },
  "naruto-shippuden": {
    id: "naruto-shippuden",
    title: "Naruto Shippuden",
    category: "Action, Shounen",
    episodes: "500",
    duration: "23 min",
    studio: "Pierrot",
    followers: "12890",
    status: "Finalizado",
    year: "2007",
    rating: "8.9",
    image: "/src/img/NarutoShippuden/NarutoShp-wall.webp",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description:
      "Naruto Shippuden continúa la historia de Naruto Uzumaki después de un entrenamiento de dos años y medio. Ahora más fuerte, busca rescatar a su amigo Sasuke mientras enfrenta la organización criminal Akatsuki que amenaza la paz del mundo ninja. La serie profundiza en el pasado de los personajes y presenta batallas épicas.",
    genres: ["Acción", "Aventura", "Artes Marciales"],
    episodes_list: [
      { number: 1, title: "Regreso a casa", duration: "23 min", watched: true },
      { number: 2, title: "Los Akatsuki se mueven", duration: "23 min", watched: true },
      { number: 3, title: "Los resultados del entrenamiento", duration: "23 min", watched: false },
      { number: 4, title: "El Jinchuriki del Kazekage", duration: "23 min", watched: false },
      { number: 5, title: "Como objetivo", duration: "23 min", watched: false },
    ],
  },
  bleach: {
    id: "bleach",
    title: "Bleach",
    category: "Supernatural, Action",
    episodes: "366",
    duration: "24 min",
    studio: "Pierrot",
    followers: "8945",
    status: "En emisión",
    year: "2004",
    rating: "8.5",
    image: "/src/img/Bleach/bleach-wallp.webp",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    description:
      "Bleach sigue a Ichigo Kurosaki, un adolescente que obtiene poderes de Shinigami (Dios de la Muerte) y debe proteger a los humanos de los espíritus malignos llamados Hollows, mientras descubre secretos sobre el mundo espiritual. La serie combina acción sobrenatural con desarrollo de personajes profundo.",
    genres: ["Acción", "Sobrenatural", "Aventura"],
    episodes_list: [
      { number: 1, title: "El día en que me convertí en shinigami", duration: "24 min", watched: true },
      { number: 2, title: "El trabajo de un shinigami", duration: "24 min", watched: true },
      { number: 3, title: "El hermano mayor y la hermana menor", duration: "24 min", watched: false },
      { number: 4, title: "El loro maldito", duration: "24 min", watched: false },
      { number: 5, title: "Golpea al fantasma invisible", duration: "24 min", watched: false },
    ],
  },
}

// Variables globales
let currentSlideFullscreen = 0
let currentSlide = 0;
const totalSlides = 4;
const totalSlidesFullscreen = 4
const favorites = JSON.parse(localStorage.getItem("favorites")) || []

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("anime-details.html")) {
    loadAnimeDetails()
  } else {
    setupSearch()
    setupFilters()
    startCarouselFullscreen()
    updateFavoriteButtons()
    startCarousel()
    setupMobileMenuClose()
    setupMobileMenuClose()
  }
})

// Funciones del carrusel fullscreen
function startCarouselFullscreen() {
  setInterval(() => {
    changeSlideFullscreen(1)
  }, 7000)
}

function changeSlideFullscreen(direction) {
  const slides = document.querySelectorAll(".hero-slide-fullscreen")
  const indicators = document.querySelectorAll(".indicator")

  slides[currentSlideFullscreen].classList.remove("active")
  indicators[currentSlideFullscreen].classList.remove("active")

  currentSlideFullscreen += direction
  if (currentSlideFullscreen >= totalSlidesFullscreen) currentSlideFullscreen = 0
  if (currentSlideFullscreen < 0) currentSlideFullscreen = totalSlidesFullscreen - 1

  slides[currentSlideFullscreen].classList.add("active")
  indicators[currentSlideFullscreen].classList.add("active")
}

function goToSlide(slideIndex) {
  const slides = document.querySelectorAll(".hero-slide-fullscreen")
  const indicators = document.querySelectorAll(".indicator")

  slides[currentSlideFullscreen].classList.remove("active")
  indicators[currentSlideFullscreen].classList.remove("active")

  currentSlideFullscreen = slideIndex

  slides[currentSlideFullscreen].classList.add("active")
  indicators[currentSlideFullscreen].classList.add("active")
}

// Funciones de búsqueda y filtros
function setupSearch() {
  const searchInput = document.getElementById("searchInput")
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchTerm = this.value.toLowerCase()
      const animeCards = document.querySelectorAll(".anime-card")

      animeCards.forEach((card) => {
        const title = card.querySelector(".anime-title").textContent.toLowerCase()
        const parent = card.closest(".col-lg-3")

        if (title.includes(searchTerm)) {
          parent.style.display = "block"
        } else {
          parent.style.display = "none"
        }
      })
    })
  }
}

function setupFilters() {
  const filterButtons = document.querySelectorAll("[data-filter]")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")

      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      const animeCards = document.querySelectorAll("[data-genres]")
      animeCards.forEach((card) => {
        const genres = card.getAttribute("data-genres")
        const parent = card

        if (filter === "all" || genres.includes(filter)) {
          parent.style.display = "block"
        } else {
          parent.style.display = "none"
        }
      })
    })
  })
}

// Funciones de favoritos
function toggleFavorite(animeId) {
  const index = favorites.indexOf(animeId)

  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(animeId)
  }

  localStorage.setItem("favorites", JSON.stringify(favorites))
  updateFavoriteButtons()

  const anime = animesData[animeId]
  const message = favorites.includes(animeId)
    ? `${anime.title} agregado a favoritos`
    : `${anime.title} removido de favoritos`

  showNotification(message)
}

function updateFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll(".btn-favorite-square")

  favoriteButtons.forEach((button) => {
    const animeId = button.getAttribute("data-anime")
    const icon = button.querySelector("i")

    if (favorites.includes(animeId)) {
      button.classList.add("active")
      icon.className = "far fa-star"
    } else {
      button.classList.remove("active")
      icon.className = "far fa-star"
    }
  })
}

function showNotification(message) {
  // Elemento de notificación
  const notification = document.createElement("div")
  notification.className = "notification"
  notification.textContent = message
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  document.body.appendChild(notification)

  // Mostrar notificación
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

function goToAnimeDetails(animeId) {
  window.location.href = `anime-details.html?anime=${animeId}`
}

function watchAnime(animeId) {
  window.location.href = `anime-details.html?anime=${animeId}`
}

// Funciones para la página de detalles
function loadAnimeDetails() {
  const urlParams = new URLSearchParams(window.location.search)
  const animeId = urlParams.get("anime")

  if (!animeId || !animesData[animeId]) {
    window.location.href = "index.html"
    return
  }

  const anime = animesData[animeId]

  document.getElementById("pageTitle").textContent = `${anime.title} - Sekai Anime`

  document.getElementById("animeTitle").textContent = anime.title
  document.getElementById("animeYear").textContent = anime.year
  document.getElementById("animeStatus").textContent = anime.status
  document.getElementById("animeRating").textContent = anime.rating
  document.getElementById("animePoster").src = anime.image
  document.getElementById("animePoster").alt = anime.title
  document.getElementById("animeDescription").textContent = anime.description

  document.getElementById("animeEpisodes").textContent = anime.episodes
  document.getElementById("animeDuration").textContent = anime.duration
  document.getElementById("animeStudio").textContent = anime.studio
  document.getElementById("animeFollowers").textContent = anime.followers

  // Géneros
  const genresContainer = document.getElementById("animeGenres")
  genresContainer.innerHTML = ""
  anime.genres.forEach((genre) => {
    const genreTag = document.createElement("span")
    genreTag.className = "genre-tag"
    genreTag.textContent = genre
    genresContainer.appendChild(genreTag)
  })

  loadEpisodes(anime.episodes_list)

  setupDetailButtons(animeId)

  const detailsBg = document.querySelector(".details-bg")
  detailsBg.style.backgroundImage = `url('${anime.image}')`
}

function loadEpisodes(episodes) {
  const episodesList = document.getElementById("episodesList")
  episodesList.innerHTML = ""

  episodes.forEach((episode) => {
    const episodeItem = document.createElement("div")
    episodeItem.className = "episode-item"
    episodeItem.innerHTML = `
            <div class="episode-number">${episode.number}</div>
            <div class="episode-info">
                <div class="episode-title">${episode.title}</div>
                <div class="episode-meta">Duración: ${episode.duration}</div>
            </div>
            <div class="episode-status ${episode.watched ? "status-watched" : "status-not-watched"}">
                ${episode.watched ? "VISTO" : "NO VISTO"}
            </div>
        `

    episodeItem.addEventListener("click", () => {
      playEpisode(episode.number)
    })

    episodesList.appendChild(episodeItem)
  })
}

function setupDetailButtons(animeId) {
  const watchBtn = document.getElementById("watchBtn")
  const favoriteBtn = document.getElementById("favoriteBtn")

  watchBtn.addEventListener("click", () => {
    playEpisode(1)
  })

  favoriteBtn.addEventListener("click", () => {
    toggleFavoriteDetail(animeId)
  })

  updateDetailButtons(animeId)
}

function updateDetailButtons(animeId) {
  const favoriteBtn = document.getElementById("favoriteBtn")
  const favoriteIcon = favoriteBtn.querySelector("i")

  if (favorites.includes(animeId)) {
    favoriteBtn.classList.add("active")
    favoriteIcon.className = "far fa-star me-2"
    favoriteBtn.innerHTML = '<i class="far fa-star me-2"></i>En Favoritos'
  } else {
    favoriteBtn.classList.remove("active")
    favoriteIcon.className = "far fa-star me-2"
    favoriteBtn.innerHTML = '<i class="far fa-star me-2"></i>Agregar a Favoritos'
  }
}

function toggleFavoriteDetail(animeId) {
  toggleFavorite(animeId)
  updateDetailButtons(animeId)
}

function playEpisode(episodeNumber) {
  showNotification(`Reproduciendo episodio ${episodeNumber}`)
}

function getAnimeData(animeId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(animesData[animeId])
    }, 500)
  })
}

function getRandomAnime() {
  const animeIds = Object.keys(animesData)
  const randomId = animeIds[Math.floor(Math.random() * animeIds.length)]

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(animesData[randomId])
    }, 500)
  })
}

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  })
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = this.getAttribute("href")
      if (document.querySelector(target)) {
        smoothScroll(target)
      }
    })
  })
})

// Auth Modal Functions
function toggleAuthModal() {
  const modal = document.getElementById("authModal")
  modal.classList.toggle("show")

  document.addEventListener("click", (event) => {
    if (!modal.contains(event.target) && !document.getElementById("profileBtn").contains(event.target)) {
      modal.classList.remove("show")
    }
  })
}

function switchToRegister() {
  document.getElementById("loginForm").style.display = "none"
  document.getElementById("registerForm").style.display = "block"
}

function switchToLogin() {
  document.getElementById("registerForm").style.display = "none"
  document.getElementById("loginForm").style.display = "block"
}

function togglePassword(inputId) {
  const input = document.getElementById(inputId)
  const icon = input.nextElementSibling.querySelector("i")

  if (input.type === "password") {
    input.type = "text"
    icon.classList.remove("fa-eye")
    icon.classList.add("fa-eye-slash")
  } else {
    input.type = "password"
    icon.classList.remove("fa-eye-slash")
    icon.classList.add("fa-eye")
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.getElementById("authModal").classList.remove("show")
  }
})

function setupMobileMenuClose() {
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbar = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
    
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        const isToggleButton = event.target.closest('.navbar-toggler');
        
        if (!isClickInsideNav && !isToggleButton && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
}

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

function setupMobileMenuClose() {
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const profileBtn = document.getElementById('profileBtn');
    const navbar = document.querySelector('.navbar-collapse');
    
    // Función para cerrar el menú
    function closeMenu() {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    }
    
    // Cerrar menú al hacer clic en cualquier enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    if (profileBtn) {
        profileBtn.addEventListener('click', function() {
            closeMenu();
        });
    }
    
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        const isToggleButton = event.target.closest('.navbar-toggler');
        
        if (!isClickInsideNav && !isToggleButton && navbarCollapse.classList.contains('show')) {
            closeMenu();
        }
    });
}