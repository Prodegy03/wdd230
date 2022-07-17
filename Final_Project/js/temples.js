const requestURL = 'https://prodegy03.github.io/wdd230/Final_Project/temples.json';
const cards = document.querySelector('div.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  
  const Temples = jsonObject['Temples'];
  Temples.forEach(displayTemples);
});