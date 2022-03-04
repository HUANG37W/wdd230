const requestURL = 'https://raw.githubusercontent.com/HUANG37W/wdd230/main/week9/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['Companies'];
    console.log(businesses[0]);
    cards();
  });
function cards(){
  const card = document.createElement('div');
  card.className = 'company';
  const box = document.querySelector('.cards');
  box.appendChild(card);
}