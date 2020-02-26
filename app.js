//  set the current date
let weekDay = new Date().getUTCDay();
let days = ["MON", "TUE", "WEN", "THU", "FRI", "SAT", "SUN"];
let monthDay = new Date().getDate();
let dateOutput = document.querySelector(".date");
dateOutput.innerHTML = `${days[weekDay]} ${monthDay}`;

//  set the caledar with appointments
let calendar = document.querySelector(".calendarWeekDays");
console.log(calendar);

days.forEach((day, index) => {
    let newElement = document.createElement("li");
    newElement.innerHTML = `<h1 class="${days[index]}">${days[index]}</h1>
    <div class="appuntamenti"><div></div></div>`;
    calendar.appendChild(newElement);
});
