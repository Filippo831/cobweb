let backgroundImage = document.querySelector(".navbar").style;
let titleBackground = document.querySelector(".title").style;
const key = "6370b6fcccf73f8ca1d58861c6f5915e";
let longitudine;
let latitudine;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        console.log("HAI DATO I PERMESSI");
        console.log(position);
        longitudine = position.coords.longitude;
        latitudine = position.coords.latitude;
        const api = `api.openweathermap.org/data/2.5/weather?lat=${latitudine}&lon=${longitudine}&appid=${key}`;
        console.log(api);
    });
} else {
    console.log("in not supported");
}
/*
apiObject = JSON.parse(api);
console.log(api);

fetch(api).then();

function readApi() {}
*/
//  cambia background in base all'ora

// let hour = new Date().getHours();
let hour = 10;
let alba = 8;
let tramonto = 18;
let mid = 14;
let red;
let green;
let blue;
let firstColor;
let secondColor;

if (hour <= alba) {
    red = 0;
    green = 0;
    blue = 100 + hour * 10;
    console.log("meno alba");
} else if (hour < mid) {
    red = (hour - alba) * 20;
    green = (hour - alba) * 30;
    blue = 100 + (hour - alba) * 20;

    console.log("meno mid");
} else if (hour <= tramonto - 1) {
    red = 50 + (hour - alba) * 12;
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
console.log(red, green, blue);
console.log(hour);

firstColor = `rgb(${red}, ${green},${blue})`;
secondColor = `rgb(${red + 30}, ${green + 20},${blue - 20})`;
let gradient = `linear-gradient(to right bottom, ${firstColor}, ${secondColor})`;

titleBackground.background = gradient;
backgroundImage.background = gradient;
