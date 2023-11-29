// window.addEventListener("load", () => {
//     const hamButton = document.querySelector(".ham");
//     const mainNav = document.querySelector(".navigation");
  
//     hamButton.addEventListener(
//       "click",
//       () => {
//         mainNav.classList.toggle("responsive");
//       },
//       false
//     );
//   });

// Update last modified

    function toggleMenu() {
      const mainNav = document.querySelector(".navigation");
      mainNav.classList.toggle("responsive");
    }
  const todayDate = document.getElementById("date");

  const now = new Date();
  const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
  
    todayDate.innerHTML = fullDate;
//winchill calc

// const temp = document.querySelector('#t').textContent;
// const windspeed = document.querySelector('#ws').textContent;

// let chill = Math.round 
// ((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

// const windchill = document.querySelector('#wc')

// windchill.textContent = `Wind chill:             ${chill}`;

async function getweather() {
  const apiURL =
      'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=i' +
      'mperial&APPID=07407eccd051a7a7b4fc81e187f47771';

  const response  = await fetch(apiURL);
  const data      = await response.json();
  const wSpeed = data.wind.speed;
  const wSpeedSpan = document.querySelector('#windspeed');
  wSpeedSpan.innerHTML = "Wind Speed: " + wSpeed.toString() + 'mph';
  const temp = data.main.temp;
  const windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));
  const windChillSpan = document.querySelector('#windchill');
  windChillSpan.innerHTML = "Wind Chill: " + windChill.toString() + '°F';
  console.log(windChill);
  console.log(data);
  const currentTemp   = document.querySelector('#current-temp');
  const weathericon   = document.querySelector('#weathericon');
  const caption       = document.querySelector('figcaption');

  currentTemp.textContent = data.main.temp.toFixed(0);
  let imgsrc  = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let imgalt  = data.weather[0].description;
  imgalt      = imgalt.split(' ').map(capitalize).join(' ');

  currentTemp.textContent = data.main.temp.toFixed(0);
  weathericon.setAttribute('src', imgsrc);
  weathericon.setAttribute('alt', imgalt);
  caption.innerHTML = `Currently: ${imgalt}`;
}

function capitalize(word) {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

window.addEventListener('load', getweather);


//Declaring date variable
let d = new Date();

//Retreiving Year
let year = d.getFullYear();

//Displaying Year
document.getElementById("year").textContent = year;

//Declaring and Assigning lastModified variable
var LastUpdated = document.lastModified;

//Displaying lastModified variable
document.querySelector(
	"#lastmodified"
).textContent = `${document.lastModified}`;


  //const button = document.querySelector('.btn');
//const button = document.getElementsByClassName('btn');

// console.log(button[1]);

// function show() {
//     //button.classList.add('newstyle');
//     button.classList.toggle('newstyle');
// };


// button.addEventListener('click', show);

// // alternative way to use arrow function 
// // button.addEventListener('click', ()=> {button.classList.add('newstyle')});


// const hamburgerBtn = document.querySelector('.ham');
// const navigation = document.querySelector('.navigation');

// hamburgerBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}), false;

// let w_names = ['Sunday'
// , 'Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday'];
// let m_names = ['January' , 'February', 'March', 'April', 'May', 'June', 'July', 'August',
// 'September', 'October', 'November'
// , 'December'];
// let mydate = new Date();
// console. log(mydate);


// let weekname = w_names[mydate.getDay()];
// console.log(mydate.getDay());
// let monthname = m_names[mydate.getMonth()];

// const dateouput = document.querySelector('#date');

// dateoutput.textContent = weekname + "," + mydate.getDate() + " " + monthname + " " + mydate. getFullYear();
  