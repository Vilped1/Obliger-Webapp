import './style.css'
import viteLogo from '/vite.svg'

// // !! Henter objecter fra data-storing
// const fetchDataFromServer = async () => {
//   const response = await fetch("http://localhost:3999/json", {
//       method: 'GET',
//       headers: {
//           "Content-Type": "application/json"
//       }
//   })
//   const result = await response.json()

//   console.log("result", result)
// }
// fetchDataFromServer()
// !!

// !! Legger til i listen fra title input
// document.getElementById("new-project").addEventListener("click", function() {
//   let prodInput = document.getElementById("title").value
//   if(!prodInput) return

//   let newProd = document.createElement("li")
//   newProd.textContent = prodInput

//   document.getElementById("prosjekt-liste").appendChild(newProd);
// })
// !!

// !! Henter data fra data-storage og viser det på skjermen
console.log("Script loading json load.js");

function loadFromJSON() {
  // Henter data fra data.json i mappen public
  fetch("data-storing.json")
    .then((response) => {
      // Konverterer data til json format
      return response.json();
    })
    .then((data) => {
      // Henter ut div med id `data`
      const dataDiv = document.getElementById("prosjekt-liste");
      // Debugging
      console.log("Load from JSON", data);
      // Går igjennom dataen og lager en `p` til hvert element.
      for (const prod of data) {
        const element = document.createElement("p");
        // Legger til verdien koblet til `title` nøkkelen i .json filen
        element.textContent = `${prod.title}`;
        // Legger innholdet til div-en
        dataDiv.appendChild(element);
      }
    });
}
loadFromJSON();
// !!