let textInput = document.querySelector(".textInput");
let button = document.querySelector(".submitForm");
let inputs = document.querySelector(".input");

button.addEventListener("click", event => {
    event.preventDefault();
    let formData = new FormData(inputs);
    let inputText = formData.get("inputText");
    let inputDate = formData.get("inputDate");

    let newObjectList = {
        inputText,
        inputDate
    };
    console.log(newObjectList);
    dateInput.value = "";
    textInput.value = "";
});

inputs.addEventListener("focusin", () => {
    let calendarPosition = document
        .querySelector(".calendar")
        .getBoundingClientRect().top;
    console.log("cioa");
    window.scrollBy(0, calendarPosition);
});
