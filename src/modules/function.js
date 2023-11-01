/**
 * Permet de créer une div contenant les informations d'un vin
 *
 * @param {object} wineObject un objet vin
 * @returns  {HTMLElement} Une div contenant les informations du vin
 */
export function creerSlide(wineObject) {
  const divSlide = document.createElement("div"); //crée une div pour la slide
  divSlide.classList.add("swiper-slide"); //ajoute la classe swiper-slide à la div

  URL = "https://cruth.phpnet.org/epfc/caviste/public/pics/";

  //contenu de la slide
  divSlide.innerHTML = `
    <div class="bg-white rounded-lg p-4 flex flex-row product ">
      <div class="container-btv" class="flex-grow w-full md:pr-4 ">
        <img class="btv " src="${URL + wineObject.picture}" alt="photo du vin">
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

  return divSlide;
}

/**
 * Permet de filtrer les vins en fonction de la valeur de l'input
 *
 * @param {Array} tabWinesObjects Un tableau d'objets de vins
 * @param {string} inputValue La valeur du champs de recherche
 * @returns {Array} Un tableau d'objets de vins filtrés
 */
// fonction de filtrage
export function filterResults(tabWinesObjects, inputValue) {
  const normalizedInput = inputValue.replaceAll(/[â]/g, "a").toLowerCase();

  return tabWinesObjects.filter((wine) => {
    const normalizedWineName = wine.name.replaceAll(/[â]/g, "a").toLowerCase()
    return normalizedWineName.includes(normalizedInput);
  });
}

/**
 * Permet de créer un nouveau swiper
 *
 * @param {HTMLElement} wrapper Le HTML du swiper que l'on souhaite créer
 */
export function newSwiper(wrapper) {
  // Initialisation de Swiper
  const swiper = new Swiper(wrapper, {
    slidesPerView: "auto", //Nombre de slides en dynamique
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}


