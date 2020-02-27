let backgroundImage = document.querySelector(".navbar");
const key = "6370b6fcccf73f8ca1d58861c6f5915e";

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        console.log("HAI DATO I PERMESSI");

        navigator.geolocation.getCurrentPosition(position => {
            let longitudine = position.coords.longitude;
            let latitudine = position.coords.latitude;
            console.log(longitudine, latitudine);

            const api = `api.openweathermap.org/data/2.5/weather?lat=${latitudine}&lon=${longitudine}&appid=${key}`;
            console.log(api);
        });
    } else {
        console.log("NON HO I PERMESSI");
    }
});
