

document.addEventListener("DOMContentLoaded", (e) => {

  const redBtn = document.getElementById("redBtn");
  const form = document.getElementById("form");
  let divInput;
  redBtn.addEventListener("click", (e) => {
    if (!divInput) {
      // Crée la div uniquement si elle n'existe pas déjà
      divInput = document.createElement("div");
      //Crée deux éléments input
      let userName = document.createElement("input");
      let password = document.createElement("input");
      //attributs de grapes
      userName.setAttribute("type", "text");
      userName.setAttribute(
        "class",
        "bg-inputBg h-10 border-2 rounded input w-4/12  sm:w-auto"
      );
      userName.setAttribute("placeholder", "username");
      //Attributs de price
      password.setAttribute("type", "password");
      password.setAttribute(
        "class",
        "bg-inputBg h-10 border-2 rounded input w-4/12 mx-2  sm:w-auto"
      );
      password.setAttribute("placeholder", "password");

      //ajout de grapes à la div
      divInput.appendChild(userName);
      divInput.appendChild(password);
      //Ajout de la div à form
      form.appendChild(divInput);
    } else {
      // Supprime la div si elle existe déjà
      form.removeChild(divInput);
      divInput = null; //Réinitialise la variable divInput
    }
  });
});
