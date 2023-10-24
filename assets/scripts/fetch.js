window.addEventListener("DOMContentLoaded", e=>{
    const wineProperties = document.getElementsByClassName("property");
    //requête pour avoir les vins
    fetch("https://cruth.phpnet.org/epfc/caviste/public/index.php/api/wines", {
        //Eventuels headers
    })
    //avoir le résultat en JSON
    .then((response) => response.json())
    //Travailler sur le resultat
    .then((data) => console.log(data))
})