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
let tabName = []; //tableau des noms de vins

//boucle de récupération du nom du vin
for (let i = 0; i < data.length; i++) {
  tabName.push(data[i].name);
}

// crée une slide pour chaque vin
data.forEach((wineObject) => {
  const slide = creerSlide(wineObject); //crée une slide avec les données du vin
  //ajoute la slide à la div swiper-wrapper
  swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
});

newSwiper(swiperContainer); //Initialisation du swiper

/****************************************************************** */
/*     EVENT : CHERCHER PAR NOM                                     */
/******************************************************************* */
inputName.addEventListener("input", (e) => {
  swiperContainer.querySelector(".swiper-wrapper").innerHTML = ""; // Supprimez les slides existantes

  const winesTabFiltre = filterResults(data, inputName.value); // Filtrer les données
  // Créer les slides filtrées
  winesTabFiltre.forEach((wineObject) => {
    const filtreSlide = creerSlide(wineObject);
    swiperContainer.querySelector(".swiper-wrapper").appendChild(filtreSlide);
  });
  //si la valeur de l'input est vide
  if (inputName.value.length === 0) {
    swiperContainer.querySelector(".swiper-wrapper").innerHTML = ""; // Supprimer les slides existantes
    // afficher toutes les slides
    data.forEach((wineObject) => {
      const slide = creerSlide(wineObject);
      swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
    });
  }
});

/************************************************************************************************** */
/*EVENT: CHERCHER PAR COULEUR */
/**************************************************************************************************** */

const colorSelector = document.getElementById("colorSelector");
let colorWanted = ""; //la couleur qu'on souhaite

colorSelector.addEventListener("change", (e) => {
  colorWanted = colorSelector.value;
  swiperContainer.querySelector(".swiper-wrapper").innerHTML = ""; //vider le slider
 
  //Pour chaque vin
  if(colorWanted === "red" || colorWanted === "pink" || colorWanted === "white"){
    for (let wineObject of data) {
      if (wineObject.color === colorWanted) {
        const filtreSlide = creerSlide(wineObject);
        swiperContainer.querySelector(".swiper-wrapper").appendChild(filtreSlide);
      }
    }

  }else if(colorWanted === "color"){
    data.forEach((wineObject) => {
      const slide = creerSlide(wineObject); //crée une slide avec les données du vin
      //ajoute la slide à la div swiper-wrapper
      swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
    });
    //Si la couleur a une autre valeur affiche une alerte
  }else{
    alert("la couleur n'existe pas")

  }
});
