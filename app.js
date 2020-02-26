let PostArray = [];

//  set the current date
let weekDay = new Date().getUTCDay();
let days = ["LUN", "MAR", "MER", "GIO", "VEN", "SAB", "DOM"];
let monthDay = new Date().getDate();
let dateOutput = document.querySelector(".date");
dateOutput.innerHTML = `${days[weekDay - 1]} ${monthDay}`;

//  set the caledar with appointments
let calendar = document.querySelector(".calendarWeekDays");
days.forEach((day, index) => {
    let newElement = document.createElement("li");
    if (day === days[weekDay - 1]) {
        newElement.style.borderBottom = "white 2px solid";
    }
    newElement.innerHTML = `<h1 class="${days[index]}">${days[index]}</h1>
    <div class="appuntamenti"><div></div></div>`;
    calendar.appendChild(newElement);
});

//  date input suggestions
//  show the suggestions
let dateList = document.querySelector(".listOfDay ul");
days.forEach((day, index) => {
    let newDateElement = document.createElement("li");
    newDateElement.innerHTML = days[index];
    dateList.appendChild(newDateElement);
});

let dateInput = document.querySelector(".dateInput");
let daysList = document.querySelector(".listOfDay");
let daysListUl = document.querySelectorAll(".listOfDayUl li");
let duration = 0.2;
let delayDivision = 15;
dayShowBar();

//  input of the suggestions
daysList.addEventListener("click", () => {
    let position = event.clientY;
    console.log(position);

    daysListUl.forEach((day, index) => {
        let dayPositionTop = day.getBoundingClientRect().top;

        let dayPositionBottom = day.getBoundingClientRect().bottom;

        if (position < dayPositionBottom && position > dayPositionTop) {
            dateInput.value = days[index];
        }
    });
});

//  get things on the form
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
    PostArray.push(newObjectList);
    console.log(newObjectList);
    dateInput.value = "";
    textInput.value = "";
});

function dayShowBar() {
    dateInput.addEventListener("focusin", () => {
        daysListUl.forEach((day, index) => {
            gsap.fromTo(
                day,
                {
                    y: -100,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: duration,
                    delay: index / delayDivision
                }
            );
        });
        gsap.fromTo(
            daysList,
            {
                y: -100,
                opacity: 0,
                display: "block"
            },
            {
                y: 0,
                opacity: 1,
                duration: duration
            }
        );
    });
    dateInput.addEventListener("focusout", () => {
        daysListUl.forEach((day, index) => {
            gsap.fromTo(
                day,
                {
                    y: 0,
                    opacity: 1
                },
                {
                    y: 100,
                    opacity: 0,
                    duration: duration,
                    delay: index / delayDivision
                }
            );
        });
        gsap.fromTo(
            daysList,
            {
                y: 0,
                opacity: 1
            },
            {
                y: 100,
                opacity: 0,
                duration: duration,
                display: "none"
            }
        );
    });
}
