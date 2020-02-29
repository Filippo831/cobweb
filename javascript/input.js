const JSON = '../JSON/promemoria.json'
let textInput = document.querySelector(".textInput");
let button = document.querySelector(".submitForm");
button.addEventListener("click", event => {
    event.preventDefault();
    let inputs = document.querySelector(".input");
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



    fetch(JSON).then(response => {
        return response.json()
    }).then(data => {
        console.log(data);
        data.
    })
});