// Import
import FetchApi from "./modules/fetchApi.js";
import { creerSlide, filterResults, newSwiper } from "./modules/function.js";

// Initialisation de l'API
const api = new FetchApi(
  "http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines"
);
const response = await api.get();
const data = await response;
console.log(data); //Tableau des vins
const swiperContainer = document.querySelector(".swiper"); //L'ensemble du swiper
const inputName = document.getElementById("inputName"); //élément input pour le nom du vin

// crée une slide pour chaque vin
data.forEach((wineObject) => {
  const slide = creerSlide(wineObject); //crée une slide avec les données du vin
  //ajoute la slide à la div swiper-wrapper
  swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
});
//Initialisation du swiper
newSwiper(swiperContainer);

// Écoutez l'événement de recherche
inputName.addEventListener("input", (e) => {
  // Supprimez les slides existantes
  swiperContainer.querySelector(".swiper-wrapper").innerHTML = "";
  // Filtrer les données
  const winesTabFiltre = filterResults(data, inputName.value);
  // Créer les slides filtrées
  winesTabFiltre.forEach((wineObject) => {
    const filtreSlide = creerSlide(wineObject);
    swiperContainer.querySelector(".swiper-wrapper").appendChild(filtreSlide);
  });
  if (inputName.value.length === 0) {
    //si la valeur de l'input est vide
    swiperContainer.querySelector(".swiper-wrapper").innerHTML = ""; // Supprimer les slides existantes
    // afficher toutes les slides
    data.forEach((wineObject) => {
      const slide = creerSlide(wineObject);
      swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
    });
  }
});
