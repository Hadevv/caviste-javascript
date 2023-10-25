import FetchApi from "./modules/fetchApi.js";
import filterResults from "./modules/function.js";

const api = new FetchApi(
  "http://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines"
);

const response = await api.get();

console.log(response);

const data = await response;


function creerSlide(wine) {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  slide.innerHTML = `
    <div id="product" class="bg-white rounded-lg p-4 flex flex-row ">
      <div id="winePic" class="w-1/6 md:w-1/2 md:pr-4">
        <img class="img"src="https://cruth.phpnet.org/epfc/caviste/public/pics/${wine.picture}" alt="photo du vin"
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
    </div>
  `;

  return slide;
}


const swiperContainer = document.querySelector('.swiper');


data.forEach((wine) => {

  const slide = creerSlide(wine);

  swiperContainer.querySelector('.swiper-wrapper').appendChild(slide);

  const img = slide.querySelector('.img');

});

const swiper = new Swiper(swiperContainer, {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

swiper.refresh();