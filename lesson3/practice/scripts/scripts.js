const button = document.querySelector('.btn');

function show() {
    button.classList.add('newstyle');
};

button.addEventListener('click', show);

// alternative way to use arrow function 
// button.addEventListener('click', ()=> {button.classList.add('newstyle')});