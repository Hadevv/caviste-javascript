document.addEventListener("DOMContentLoaded", (e) => {
  const redBtn = document.getElementById("redBtn");
  const form = document.getElementById("form");
  let divInput;
  redBtn.addEventListener("click", (e) => {
    if (!divInput) {
      // Crée la div uniquement si elle n'existe pas déjà
      divInput = document.createElement("div");
      //Crée deux éléments input
      let grapes = document.createElement("input");
      let price = document.createElement("input");
      //attributs de grapes
      grapes.setAttribute("type", "text");
      grapes.setAttribute(
        "class",
        "bg-inputBg h-10 border-2 rounded input w-4/12  sm:w-auto"
      );
      grapes.setAttribute("placeholder", "Grapes");
      //Attributs de price
      price.setAttribute("type", "number");
      price.setAttribute(
        "class",
        "bg-inputBg h-10 border-2 rounded input w-4/12 mx-2  sm:w-auto"
      );
      price.setAttribute("placeholder", "Price max €");
      

      //ajout de grapes à la div
      divInput.appendChild(grapes);
      divInput.appendChild(price);
      //Ajout de la div à form
      form.appendChild(divInput);
    } else {
      // Supprime la div si elle existe déjà
      form.removeChild(divInput);
      divInput = null; //Réinitialise la variable divInput
    }
  });
});
