let wind_speed = document.querySelector('#ws').innerHTML;
let temp = document.querySelector('#t').innerHTML;



let calulateWinchill = function(wind_speed, temp) {
    if (wind_speed >3 && temp <= 50) {
        let wind_chill = (35.74 + (0.6215 * temp))-
        (35.75 * Math.pow(wind_speed,0.16)) + 
        (0.4275*temp*Math.pow(wind_speed,0.16))
        return wind_chill
        
    }else {
        document.getElementById("wc").innerHTML = "Wind Chill: N/A"
    }
}

calulateWinchill(wind_speed, temp)