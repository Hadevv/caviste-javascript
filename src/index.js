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
  //on récupère la valeur de la couleur selectionnée
  colorWanted = colorSelector.value;
  swiperContainer.querySelector(".swiper-wrapper").innerHTML = ""; // Vider le slider

  //conditions d'affichage
  //si la couleur selectionnée respecte ces 3 couleurs
  if (
    colorWanted === "red" ||
    colorWanted === "pink" ||
    colorWanted === "white"
  ) {
    //on affiche les vins de la couleur selectionnée
    for (let wineObject of data) {
      //si la couleur du vin est égal à la couleur selectionnée
      if (wineObject.color === colorWanted) {
        //on crée une slide avec les données du vin
        const filtreSlide = creerSlide(wineObject);
        swiperContainer
          .querySelector(".swiper-wrapper")
          .appendChild(filtreSlide);
      }
    }
    //si choisi color, on affiche tout les vins
  } else if (colorWanted === "color") {
    //on affiche tout les vins
    data.forEach((wineObject) => {
      const slide = creerSlide(wineObject);
      swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
    });
    //sinon on affiche un message d'erreur
    /**
     * TODO: afficher un message d'erreur
     */
  } else {
    alert("la couleur n'existe pas");
  }
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
console.log(countrySelector.childElementCount);
const tabCountries = [];
countrySelector.addEventListener("click", async (e) => {
  //ajouter tout les vins dans un tableau
  data.forEach((wineObject) => {
    //si le pays n'existe pas dans le tableau, on ajoute le pays dans le tableau
    if (!tabCountries.includes(wineObject.country)) {
      tabCountries.push(wineObject.country);
    }
  });
  //country = nom du Pays
  tabCountries.forEach((country) => {
    //Tant qu'il est plus petit ou égal rajoute les pays
    //CountrySelector = <select>
    if (countrySelector.childElementCount <= tabCountries.length) {
      //Country element = <option></option>
      let countryElement = document.createElement("option"); // on crée un élément
      countryElement.innerHTML = country; // on lui donne la valeur du pays
      countryElement.setAttribute("value", country); // on lui donne un attribut value
      countrySelector.appendChild(countryElement);
    }
  });
});

/********************************************************
 * gestion d'évènement                                   *
 *********************************************************/

let countryWanted = ""; // variable qui contiendra la string du pays selectionné

countrySelector.addEventListener("change", (e) => {
  //on récupère la valeur du pays selectionné
  countryWanted = countrySelector.value;

  swiperContainer.querySelector(".swiper-wrapper").innerHTML = ""; // Vider le slider

  //conditions d'affichage
  //si le pays selectionné est dans le tableau des pays
  if (tabCountries.includes(countryWanted)) {
    //on affiche les vins du pays selectionné
    for (let wineObject of data) {
      //si le pays du vin est égal au pays selectionné
      if (wineObject.country === countryWanted) {
        //on crée une slide avec les données du vin
        const filtreSlide = creerSlide(wineObject);
        swiperContainer
          .querySelector(".swiper-wrapper")
          .appendChild(filtreSlide);
      }
    }
    //si choisi country, on affiche tout les vins
  } else if (countryWanted === "Country") {
    //on affiche tout les vins
    data.forEach((wineObject) => {
      const slide = creerSlide(wineObject);
      swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
    });
    //sinon on affiche un message d'erreur
    /**
     * TODO: afficher un message d'erreur
     */
  } else {
    console.log("country not in the list");
  }
});
