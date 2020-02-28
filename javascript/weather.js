let backgroundImage = document.querySelector(".navbar").style;
let titleBackground = document.querySelector(".title").style;
let longitudine;
let latitudine;
let displayTemperature = document.querySelector(".weatherTemperature");
let weatherImage = document.querySelector(".weatherImage");
let weatherSection = document.querySelector(".weatherInfo");


let imageChange = {
    Clear: '../immagini/sun.svg',
    Cover: '../immagini/cloudSun.svg',
    Cloudy: '../immagini/cloud.svg',
    Rainy: '../immagini/rain.svg'
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log("HAI DATO I PERMESSI");
        console.log(position);
        longitudine = position.coords.longitude;
        latitudine = position.coords.latitude;
        const key = "074f76e00017c3f922cb5f58cdf8d984";
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}api.openweathermap.org/data/2.5/weather?&units=metric&lat=${latitudine}&lon=${longitudine}&appid=${key}`;
        console.log(api);


        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                const weather = data.weather[0].main;
                console.log(weather);

                displayTemperature.innerHTML = Math.round(data.main.temp_max) + '°C';
                gsap.fromTo(weatherSection, {
                    x: 100
                }, {
                    x: 0
                })

                weatherImage.innerHTML = `<img src="${Object.getOwnPropertyDescriptor(imageChange, weather).value}" alt="">`

            });
    });
}


//  cambia background in base all'ora

let hour = new Date().getHours();
let alba = 8;
let tramonto = 18;
let mid = 14;
let red;
let green;
let blue;
let firstColor;
let secondColor;



if (hour < alba) {
    red = 0;
    green = 0;
    blue = 100 + hour * 10;
    console.log("meno alba");
} else if (hour < mid) {
    red = 60 + (hour - (alba - 1)) * 10;
    green = 120 + (hour - (alba - 1)) * 10;
    blue = 200 + (hour - (alba - 1)) * 2;

    console.log("meno mid");
} else if (hour <= tramonto - 1) {
    red = 50 + (hour - alba) * 7;
    green = 250 - (hour - alba) * 10;
    blue = 250 - (hour - alba) * 5;
    console.log("meno tramonto-1");
} else if (hour <= tramonto) {
    red = 100 + (hour - alba) * 10;
    green = 200 - (hour - alba) * 7;
    blue = 200 - (hour - alba) * 5;

    console.log("meno tramonto");
} else if (hour > tramonto) {
    red = (24 - hour) * 20;
    green = (24 - hour) * 20;
    blue = 100 + (24 - hour) * 10;

    console.log("piu tramonto");
}
console.log(hour);

firstColor = `rgb(${red}, ${green},${blue})`;
secondColor = `rgb(${red + 40}, ${green + 30},${blue - 40})`;
let gradient = `linear-gradient(to right bottom, ${firstColor}, ${secondColor})`;
console.log(firstColor);
console.log(secondColor);

titleBackground.background = gradient;
titleBackground.filter = `drop-shadow(3px 3px 20px ${secondColor})`;
backgroundImage.background = gradient;