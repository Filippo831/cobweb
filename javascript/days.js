//  set the current date
let weekDay = new Date().getUTCDay();
let days = ["DOM", "LUN", "MAR", "MER", "GIO", "VEN", "SAB"];
let monthDay = new Date().getDate();
let dateOutput = document.querySelector(".date");
dateOutput.innerHTML = `${days[weekDay]} ${monthDay}`;

//  set the caledar with appointments
let calendar = document.querySelector(".calendarWeekDays");
days.forEach((day, index) => {
    let newElement = document.createElement("li");
    if (day === days[weekDay - 1]) {
        newElement.style.borderBottom = "white 2px solid";
    }
    newElement.innerHTML = `<h1 class="${days[index]}">${days[index]}</h1>
    <div class="appuntamenti"></div>`;
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
