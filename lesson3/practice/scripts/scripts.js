//const button = document.querySelector('.btn');
const button = document.getElementsByClassName('btn');

console.log(button[1]);

function show() {
    //button.classList.add('newstyle');
    button.classList.toggle('newstyle');
};


button.addEventListener('click', show);

// alternative way to use arrow function 
// button.addEventListener('click', ()=> {button.classList.add('newstyle')});


const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

hamburgerBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}), false;

let w_names = ['Sunday'
, 'Monday', 'Tuesday', 'Wednesday', 'Thursday' , 'Friday', 'Saturday'];
let m_names = ['January' , 'February', 'March', 'April', 'May', 'June', 'July', 'August',
'September', 'October', 'November'
, 'December'];
let mydate = new Date();
console. log(mydate);


let weekname = w_names[mydate.getDay()];
console.log(mydate.getDay());
let monthname = m_names[mydate.getMonth()];

const dateouput = document.querySelector('#date');

dateoutput.textContent = weekname + "," + mydate.getDate() + " " + monthname + " " + mydate. getFullYear();