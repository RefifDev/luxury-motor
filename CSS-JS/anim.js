const slides = document.querySelectorAll('.slide'); /* selec all elements avec la class slide */
let slideIndex = 0; /*dipositive affichée*/
let intervalId; /* sstocke temp*/

initializeSlider(); /* appelle la fonction avant */

function initializeSlider() {
  if (slides.length > 0) { /* aux moin une diapositive */
    slides[slideIndex].classList.add('displaySlide');/* ajoute la 1er diapo a displaySlide= visible */
    intervalId = setInterval(nextSlide, 5000); /* toute les 5s*/
  }
}

function showSlide() {
  if (slideIndex >= slides.length) { /* si arrive aux nb de dia on revient 1er */
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove('displaySlide'); /* on cache tt les diapositives */
  });

  slides[slideIndex].classList.add('displaySlide'); /* affiche la correcte */
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--; /* mes la diapo actuelle a - en zindex*/
  showSlide(); /* a jour l'affichage */
  intervalId = setInterval(nextSlide, 5000);
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex++;
  showSlide();
  intervalId = setInterval(nextSlide, 5000);
}

          