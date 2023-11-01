import FetchApi from "../modules/fetchApi.js";
import setAttributes from "../modules/function.js";

//fonction asynchrone afin de récupérer API fetch
document.addEventListener("DOMContentLoaded", async (e) => {
  //Déclaration des variables
  let burgerMenu = document.getElementById("burgerMenu");
  let divContentConnect = "";
  const userName = document.createElement("input");
  const password = document.createElement("input");
  const btSend = document.createElement("button");
  const formLogin = document.createElement("form");
  const headerElem = document.getElementsByTagName("header")[0]; // élément header

  //API des utilisateurs
  const api = new FetchApi(
    "https://cruth.phpnet.org/epfc/caviste/public/index.php/api/users"
  );
  const response = await api.get(); //response
  const data = await response;
  //console.log(data)
  //gestion de click menu burger
  burgerMenu.addEventListener("click", (e) => {
    //si la div qui qui contient les input n'est pas affichée
    if (!divContentConnect) {
      divContentConnect = document.createElement("div");
      //attribut it à div
      divContentConnect.setAttribute("id", "contentConnect");
      //ajout des attributs
      //username
      setAttributes(userName, {
        id: "userName",
        class: "inputFormConnect",
        type: "text",
        placeholder: "login",
      });
      //password
      setAttributes(password, {
        id: "password",
        class: "inputFormConnect",
        type: "password",
        placeholder: "Mot de passe",
      });

      //bouton
      setAttributes(btSend, { id: "btSend", type: "submit" });
      btSend.innerHTML = "envoyer";
      setAttributes(formLogin, { id: "formConnect" });

      //Ajout des enfant à form
      formLogin.appendChild(userName);
      formLogin.appendChild(password);
      formLogin.appendChild(btSend);

      //ajour des enfant à div
      divContentConnect.appendChild(formLogin);

      headerElem.appendChild(divContentConnect);
      //sinon
    } else {
      divContentConnect.remove();
      divContentConnect = "";
    }
  });
});
