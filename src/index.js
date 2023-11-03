// Import
import FetchApi from "./modules/fetchApi.js";
//Importe les fonctions
import {
  creerSlide,
  newSwiper,
  getData,
  createMultiElements,
  dataFilter,
  getMinMax,
  textFilter,
} from "./modules/function.js";
import noUiSlider from "../../node_modules/nouislider/dist/nouislider.min.mjs";

// Initialisation de l'API
const api = new FetchApi(
  "http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines"
);
const response = await api.get();
const data = await response;
console.log(data); //Tableau des vins
let swiperContainer = document.querySelector(".swiper"); //L'ensemble du swiper
const inputName = document.getElementById("inputName"); //élément input pour le nom du vin

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
  textFilter(inputName, data);
});

/************************************************************************************************** */
/*EVENT: CHERCHER PAR COULEUR */
/**************************************************************************************************** */

const colorSelector = document.getElementById("colorSelector");
const tabColors = getData(data, "color"); // tableau des couleurs
createMultiElements(tabColors, "option", colorSelector);

colorSelector.addEventListener("change", (e) => {
  let colorWanted = colorSelector.value; //la couleur qu'on souhaite
  dataFilter(tabColors, colorWanted, data);
});

/************************************************************************************************** */
/*EVENT: CHERCHER PAR ANNEE */
/**************************************************************************************************** */

/************************************************************************************************** */
/*EVENT: CHERCHER PAR PAYS */
/**************************************************************************************************** */

/********************************************************
 * Ajout des vins dans la <select> de manière dynamique *
 *********************************************************/
const countrySelector = document.getElementById("countrySelect");
//récupère le nom de tout les pays
let tabCountries = getData(data, "country");
//crée plusieurs élément que l'on souhaite
createMultiElements(tabCountries, "option", countrySelector);
/********************************************************
 * gestion d'évènement                                   *
 *********************************************************/
let countryWanted = ""; // variable qui contiendra la string du pays selectionné
countrySelector.addEventListener("change", (e) => {
  //on récupère la valeur du pays selectionné
  countryWanted = countrySelector.value;
  dataFilter(tabCountries, countryWanted, data);
});

/************************************************************************************************** */
/*EVENT: CHERCHER PAR TRANCHE DE PRIX */
/**************************************************************************************************** */
let tabPrice = []; // le tableau des prix
//ajouter tout les prix dans un tableau
data.forEach((wineObject) => {
  tabPrice.push(parseFloat(wineObject.price));
});
let tabMinAndMAx = getMinMax(tabPrice);

// variables DOM
const priceMin = document.getElementById("priceMin");
const priceMax = document.getElementById("priceMax");
const slide = document.getElementById("line"); // div slider

priceMin.innerHTML = tabMinAndMAx[0] + "€";
priceMax.innerHTML = tabMinAndMAx[1] + "€";

//création du slider
noUiSlider.create(slide, {
  start: [tabMinAndMAx[0], tabMinAndMAx[1]],
  connect: true,
  range: {
    min: tabMinAndMAx[0],
    max: tabMinAndMAx[1],
  },
});

//ajout d'evenement au moment où on slide
slide.noUiSlider.on("slide", (e) => {
  swiperContainer.querySelector(".swiper-wrapper").innerHTML = ""; // Vider le slider
  //boucle d'affichage des vins
  for (let wineObject of data) {
    //condition de de tri
    if (
      parseFloat(wineObject.price) > slide.noUiSlider.get()[0] &&
      parseFloat(wineObject.price) < slide.noUiSlider.get()[1]
    ) {
      const filtreSlide = creerSlide(wineObject);
      swiperContainer.querySelector(".swiper-wrapper").appendChild(filtreSlide);
    }
  }
  priceMin.innerHTML = slide.noUiSlider.get()[0] + "€";
  priceMax.innerHTML = slide.noUiSlider.get()[1] + "€";
  console.log(slide.noUiSlider.get());
});
