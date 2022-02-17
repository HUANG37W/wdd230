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

const temp = document.querySelector('#t').textContent;
const windspeed = document.querySelector('#ws').textContent;

let chill = Math.round 
((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

const windchill = document.querySelector('#wc')

windchill.textContent = `Wind chill:             ${chill}`;



//Declaring date variable
let d = new Date();

//Retreiving Year
let year = d.getFullYear();

//Displaying Year
document.getElementById("year").textContent = year;

//Declaring and Assigning lastModified variable
var LastUpdated = document.lastModified;

//Displaying lastModified variable
document.getElementById("lastupdated").innerHTML = LastUpdated.toString();


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
  