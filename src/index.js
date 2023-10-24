import FetchApi from "./modules/fetchApi.js";

const api = new FetchApi(
  "http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines"
);

const response = await api.get();

console.log(response);

const data = await response;

// Parcourir les données de l'API
data.forEach((wine) => {
    // Créez un élément de carrousel
    console.log(wine.name);
    const slide = document.createElement("div");
    slide.classList.add("'swiper-slide'");

    // Ajoutez le contenu de l'élément de carrousel
    //getimage ne fonctionne pas
    slide.innerHTML = `
    <article id="product" class="bg-white rounded-lg p-4 flex flex-row ">
      <div id="winePic" class="w-1/6 md:w-1/2 md:pr-4">
        <img src="../src/assets/img/${wine.image}" alt="photo du vin"
          class=" w-full h-full object-contain rounded-lg">
      </div>
      <div class="md:w-1/2 md:pl-4">
        <h2 id="h2Title" class="text-2xl font-bold mb-4">${wine.name}</h2>
        <ul>
          <li class="property" id="country">${wine.country}</li>
          <li class="property" id="grapes">${wine.grapes}</li>
          <li class="property" id="year">${wine.year}</li>
          <li class="property" id="capacity">${wine.capacity}</li>
          <li class="property" id="color">${wine.color}</li>
          <li class="property" id="price">${wine.price}</li>
        </ul>
      </div>
    </article>
  `;
});