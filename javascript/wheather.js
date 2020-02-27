let backgroundImage = document.querySelector(".navbar");
const key = "6370b6fcccf73f8ca1d58861c6f5915e";
let longitudine;
let latitudine;

function getGeoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        console.log("in not supported");
    }
}
function onSuccess(position) {
    alert("ciao");
    console.log("HAI DATO I PERMESSI");
    console.log(position);
    const api = `api.openweathermap.org/data/2.5/weather?lat=${latitudine}&lon=${longitudine}&appid=${key}`;
    console.log(api);
}
function onError() {
    console.log("NON HAI I PERMESSI");
}

window.addEventListener("load", () => {
    getGeoLocation();
});
