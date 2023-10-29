import FetchApi from "./modules/fetchApi.js";
import filterResults from "./modules/function.js";

const api = new FetchApi(
  "http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines"
);

const response = await api.get();

console.log(response);

const data = await response;



//Fonction de création de slide
/**
 * Crée une slide avec les informations d'un vin
 * 
 * @param {object} wineObject - Objet vin
 * @returns {HTMLElement} slide - Objet slide
 */
export default function creerSlide(wineObject) {
  const slide = document.createElement("div"); //Crée une div pour la slide
  slide.classList.add("swiper-slide"); //Ajoute la classe swiper-slide à la div

  //Contenu de la slide
  slide.innerHTML = `
    <div class="bg-white rounded-lg p-4 flex flex-row product ">
      <div class="container-btv" class="flex-grow w-full md:pr-4 ">
        <img class="btv " src="https://cruth.phpnet.org/epfc/caviste/public/pics/${wineObject.picture}" alt="photo du vin">
      </div>
      <div class="md:w-1/2 md:pl-4">
        <h2 id="h2Title" class="text-2xl font-bold mb-4">${wineObject.name}</h2>
          <ul>
            <li class="property" id="country">${wineObject.country}</li>
            <li class="property" id="grapes">${wineObject.grapes}</li>
            <li class="property" id="year">${wineObject.year}</li>
            <li class="property" id="capacity">${wineObject.capacity}</li>
            <li class="property" id="color">${wineObject.color}</li>
            <li class="property" id="price">${wineObject.price}</li>
          </ul>
      </div>
    </div>
  `;

  return slide;
}

//Crée une div pour le slider
const swiperContainer = document.querySelector(".swiper");
//Pour chaque vin dans le tableau va afficher l'objet vin dans une slide
data.forEach((wine) => {
  const slide = creerSlide(wine);
  swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
});

//Crée le slider
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
