let backgroundImage = document.querySelector(".navbar");
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
apiObject = JSON.parse(api);
console.log(api);


fetch(api)
    .then()



function readApi() {

}