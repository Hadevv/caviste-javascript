const form = document.getElementById("form");
const inputName = document.getElementById("inputName");
const colorSelect = document.getElementById("colorSelect");
const inputDate = document.getElementById("inputDate");
const countrySelect = document.getElementById("countrySelect");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Récupérez les valeurs des champs de recherche
  const name = inputName.value;
  const color = colorSelect.value;
  const date = inputDate.value;
  const country = countrySelect.value;
});

export default function filterResults(results, name, color, date, country) {
  const filteredResults = [];

  for (const wine of results) {
    if (
      (name === "" || wine.name === name) &&
      (color === "" || wine.color === color) &&
      (date === "" || wine.year === date) &&
      (country === "" || wine.country === country)
    ) {
      filteredResults.push(wine);
    }
  }

  return filteredResults;
}
