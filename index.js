const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelector('.carousel-slide');
const slideImages = document.querySelectorAll('.carousel-slide img');
const totalSlides = slideImages.length;
let currentIndex = 0;
let autoSlideInterval;
const slideDuration = 3000; // Tempo em milissegundos para a rotação automática
const pauseDuration = 2000; // Tempo em milissegundos para a pausa ao clicar

function showSlide(index) {
    const slideWidth = slideImages[0].clientWidth;
    slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
    resetAutoSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, slideDuration);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    setTimeout(startAutoSlide, pauseDuration);
}

prevButton.addEventListener('click', () => {
    prevSlide();
    clearInterval(autoSlideInterval); // Pausa a rotação automática ao clicar
});

nextButton.addEventListener('click', () => {
    nextSlide();
    clearInterval(autoSlideInterval); // Pausa a rotação automática ao clicar
});

startAutoSlide();


let btnmenu= document.getElementById('btn-menu')
let menu= document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
