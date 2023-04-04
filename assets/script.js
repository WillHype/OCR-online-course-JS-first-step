const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Étape 2 : Ajoutez des Event Listeners sur les flèches 

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

arrowLeft.addEventListener('click', () => {
	console.log('Flèche gauche cliquée');
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	}
	dotSelected(currentSlide);
  });
  
  arrowRight.addEventListener('click', () => {
	console.log('Flèche droite cliquée');
	dotSelected(currentSlide);
	currentSlide++;
	if (currentSlide > slides.length - 1) {
		currentSlide = 0;
	}
	dotSelected(currentSlide);
  });

arrowLeft.addEventListener('mousedown', event => {
	if (event.button === 0) {
	  console.log('Clic gauche sur la flèche gauche');
	} else if (event.button === 2) {
	  console.log('Clic droit sur la flèche gauche');
	}
  });
  
arrowRight.addEventListener('mousedown', event => {
	if (event.button === 0) {
	  console.log('Clic gauche sur la flèche droite');
	} else if (event.button === 2) {
	  console.log('Clic droit sur la flèche droite');
	}
  });

//   Étape 4 : Modifiez le slide au clic sur le bouton

let currentSlide = 0;
const dots = document.querySelectorAll(".dot");
const slide = slides[currentSlide];

function dotSelected(index) {
	if (index == 4){
		index = 0;
	} else if (index < 0){
		index = 3;
	}

	dots.forEach(d => {
		d.classList.remove("dot_selected");
	});
	document.querySelectorAll(".dot")[index].classList.add("dot_selected");
	selectedSlide(index);
};

function selectedSlide(index) {
	document.querySelector("#banner > img").src = `./assets/images/slideshow/${slides[index].image}`;
	document.querySelector("#banner > p").innerHTML = slides[index].tagLine;
}
