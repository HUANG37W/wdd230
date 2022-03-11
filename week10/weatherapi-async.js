
async function getweather() {
    const apiURL =
        'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=i' +
        'mperial&APPID=07407eccd051a7a7b4fc81e187f47771';

    const response  = await fetch(apiURL);
    const data      = await response.json();
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