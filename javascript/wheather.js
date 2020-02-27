let backgroundImage = document.querySelector(".navbar");
const key = "6370b6fcccf73f8ca1d58861c6f5915e";
let longitudine;
let latitudine;
document.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log("HAI DATO I PERMESSI");
            console.log(position);
        });
    } else {
        console.log("in not supported");
    }
});
