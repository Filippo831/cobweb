let textInput = document.querySelector(".textInput");
let button = document.querySelector(".submitForm");
const API_URL = "http://localhost:5000/post";

button.addEventListener("click", event => {
    event.preventDefault();
    let inputs = document.querySelector(".input");
    let formData = new FormData(inputs);
    let inputText = formData.get("inputText");
    let inputDate = formData.get("inputDate");

    const newObjectList = {
        inputText,
        inputDate
    };

    console.log(newObjectList);
    dateInput.value = "";
    textInput.value = "";

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newObjectList),
        headers: {
            "content-type": "application/json"
        }
    });
});

inputs.addEventListener("focusin", () => {
    let calendarPosition = document
        .querySelector(".calendar")
        .getBoundingClientRect().top;
    console.log("cioa");
    window.scrollBy(0, calendarPosition);
});
