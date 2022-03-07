const requestURL = 'https://raw.githubusercontent.com/HUANG37W/wdd230/main/week9/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['companies'];
    companies.forEach(displayCompanies);
    //console.log(businesses[0]);
    //cards();
  });

  function displayCompanies(company) {  
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    let adr = document.createElement('p');
    let phn = document.createElement('p');
    let img = document.createElement('img');
    h2.textContent = `${company.name} ${company.lastname}`;
    adr.textContent = `${prophet.birthdate}`;
    phr.textContent = `${prophet.birthplace}`;
    img.setAttribute('src', company.imageurl);
    img.setAttribute('alt', `${company.name} ${company.lastname} ${company.order}`);

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(adr);
    card.appendChild(phn);
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
//function cards(){
  //const card = document.createElement('div');
  //card.className = 'company';
  //const box = document.querySelector('.cards');
  //box.appendChild(card);
  //const img = document.createElement('img');
  //img.className = 'company-logo';
  //box.appendChild(img);
//}