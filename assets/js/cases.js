// assets/js/carousel.js
let slideIndex = 0;
const slides = document.getElementsByClassName('carousel-img');
const totalSlides = slides.length;

// Initially show the first image
showSlides(slideIndex);

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex >= totalSlides) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = totalSlides - 1; }
  showSlides(slideIndex);
}

function showSlides(n) {
  Array.from(slides).forEach(slide => {
    slide.style.display = 'none';
  });
  slides[n].style.display = 'block';
}
