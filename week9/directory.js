const requestURL = 'https://raw.githubusercontent.com/HUANG37W/wdd230/main/week9/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject[''];
    prophets.forEach(displayProphets);
  });

  function displayProphets(prophet) {  
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let img = document.createElement('img');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dob.textContent = `${prophet.birthdate}`;
    pob.textContent = `${prophet.birthplace}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}`);

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

//to clear out cards
//let cards = document.querySelectorAll('.cards')
//cards.forEach((items)=>{
//items.remove();
//})

function changeStyles() {
//changing styles in JS
if (window.innerWidth > 800 && window,innerWidth < 1000){
let change = document.querySelector('.cards');
change.setAttribute('style','background-color: pink; border: 5px solid yellow; display: block;')
 }
}
// event listeners 

window.addEventListener('resize', changeStyles);
//window.addEventListener('load', changeStyles);