// Import 
import FetchApi from "./modules/fetchApi.js";
import { creerSlide, filterResults } from "./modules/function.js";

// Initialisation de l'API
const api = new FetchApi("http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines");
const response = await api.get();
const data = await response;
console.log(data);
const swiperContainer = document.querySelector(".swiper");
const inputName = document.getElementById("inputName");

// Créez la slide par défaut
data.forEach((wineObject) => {
  const defSlide = creerSlide(wineObject);
  swiperContainer.querySelector(".swiper-wrapper").appendChild(defSlide);
});

// Initialisation de Swiper
const swiper = new Swiper(swiperContainer, {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Écoutez l'événement de recherche
inputName.addEventListener("input", (e) => {

  // Vérifiez si la valeur de filtrage est supérieure à 3
  if (inputName.value.length >= 3) {

    // Supprimez les slides existantes
    swiperContainer.querySelector(".swiper-wrapper").innerHTML = "";

    // Filtrez les données
    const winesTabFiltre = filterResults(data, inputName.value);
    console.log(winesTabFiltre);

    // Créez les slides filtrées
    winesTabFiltre.forEach((wineObject) => {
      const slide = creerSlide(wineObject);
      swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
    });
  }
});

