const requestURL = 'https://raw.githubusercontent.com/HUANG37W/wdd230/main/week9/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });

  function displayCompanies(company) {  
    // Create elements to add to the document
    let card = document.createElement('section');
    let list = document.createElement('section');
    let listH2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    let listAdr = document.createElement('p');
    let listPhn = document.createElement('p');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
    let adr = document.createElement('p');
    let phn = document.createElement('p');
    h2.textContent = `${company.name} ${company.lastname}`;
    adr.textContent = `${company.address}`;
    phn.textContent = `${company.phone}`;
    listH2.textContent = `${company.name} ${company.lastname}`;
    listAdr.textContent = `${company.address}`;
    listPhn.textContent = `${company.phone}`;
    img.setAttribute('src', company.imageurl);
    img.setAttribute('alt', `${company.name} ${company.lastname} ${company.order}`);

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(adr);
    card.appendChild(phn);
    card.appendChild(img);
    list.appendChild(listH2);
    list.appendChild(listAdr);
    list.appendChild(listPhn);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

const cardsButton = document.querySelector(".cards-button");
const listsButton = document.querySelector(".lists-button");

const Cards = document.querySelector(".cards");
const Lists = document.querySelector(".lists");

cardsButton.onclick = function(){
  
}