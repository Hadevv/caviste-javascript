// version: 1.0
//probleme de l'image qui ne s'affiche pas dans le carousel 
//probleme avec cors 


// import FetchApi from "./modules/fetchApi.js";
// import filterResults from "./modules/function.js";

// async function getWines() {
//   const api = new FetchApi(
//     "https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines"
//   );
//   const response = await api.get();
//   const data = await response;
//   return data;
// }

// async function createSlide(wine) {
//   const slide = document.createElement("div");
//   slide.classList.add("swiper-slide");

//   slide.innerHTML = `
//     <div id="product" class="bg-white rounded-lg p-4 flex flex-row ">
//       <div id="winePic" class="w-1/6 md:w-1/2 md:pr-4">
        
//       </div>
//       <div class="md:w-1/2 md:pl-4">
//         <h2 id="h2Title" class="text-2xl font-bold mb-4"><span class="math-inline">{wine.name}</h2>
//         <ul>
//           <li class="property" id="country"></span>${wine.country}</li>
//           <li class="property" id="grapes"><span class="math-inline">${wine.grapes}</li>
//           <li class="property" id="year"></span>${wine.year}</li>
//           <li class="property" id="capacity"><span class="math-inline">${wine.capacity}</li>
//           <li class="property" id="color"></span>${wine.color}</li>
//           <li class="property" id="price"><span class="math-inline">${wine.price}</li>
//         </ul>
//       </div>
//     </div>
// `;

//   const imageUrl = `https://cruth.phpnet.org/epfc/caviste/public/pics/${wine.picture}`;
//   const jimpImage = await Jimp.read(imageUrl);
//   const resizedImage = await jimpImage.resize({
//     width: 100,
//     height: 100,
//   });
//   const resizedImageBase64 = await resizedImage.getBufferAsync(Jimp.MIME_JPEG);
//   localStorage.setItem(wine.picture, resizedImageBase64);
  
//   console.log(resizedImageBase64);

//   const resizedImageFromLocalStorage = localStorage.getItem(wine.picture);
//   const winePic = slide.querySelector("#winePic");
//   const img = document.createElement("img");
//   img.src = resizedImageFromLocalStorage;
//   img.alt = "photo du vin";
//   img.classList.add("w-full", "h-full", "object-contain", "rounded-lg");
//   winePic.appendChild(img);

//   return slide;
// }
// async function main() {
//   const wines = await getWines();

//   const swiperContainer = document.querySelector(".swiper");

//   for (const wine of wines) {
//     const slide = await createSlide(wine);
//     swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
//   }

//   const swiper = new Swiper(swiperContainer, {
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }
// main();