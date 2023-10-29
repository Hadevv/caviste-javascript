import FetchApi from "./fetchApi.js";
import creerSlide from "../index.js";

const inputName = document.getElementById("inputName");
const swiperContainer = document.querySelector(".swiper");

//Event de recherche par nom
inputName.addEventListener("input", (e) => {
  swiperContainer.innerHTML = "";
  const wineName = inputName.value; //la valeur du champs de recherche
  const api = new FetchApi(
    "https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines/search?keyword=" +
      wineName
  );
  const data = api.get();

  //Crée un tableau des objets vins correspondant à la recherche
  data.then((winesTabObj) => {
    console.log(winesTabObj);
    //Pour chaque vin dans le tableau va afficher l'objet vin
    winesTabObj.forEach((wineObject) => {
      //crée une slide
      const slide = creerSlide(wineObject);
      //Ajoute la slide au slider
      //swiperContainer.querySelector(".swiper-wrapper").appendChild(slide);
    });
  });
});
