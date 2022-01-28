//const button = document.querySelector('.btn');
const buttons = document.getElementsByClassName('btn');

console.log(buttons[0]);

function show() {
    //button.classList.add('newstyle');
    //button.classList.toggle('newstyle');
};


button.addEventListener('click', show);

// alternative way to use arrow function 
// button.addEventListener('click', ()=> {button.classList.add('newstyle')});