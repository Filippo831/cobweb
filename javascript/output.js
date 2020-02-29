const JSON = "../JSON/promemoria.json";
let postBox = document.querySelector(".posts");

fetch(JSON)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(data.days);

        data.days.forEach((day, index) => {
            let dayIndex = index;
            day.forEach((post, index) => {
                let postElement = document.createElement("div");
                console.log("sono qui");

                postElement.innerHTML = `
                <div class="postDiv">
                <div class="lineaSinistra"></div>
                <div class="scritte">
                    <div class="giorno">${post.day}</div>
                    <div class="descrizione">
                        <p>
                        ${post.description}
                        </p>
                    </div>
                </div>
                <div class="modifica">
                    <div class="fatto">
                        <img src="../immagini/tick.svg" alt="" />
                    </div>
                    <div class="elimina">
                        <img src="../immagini/stop.svg" alt="" />
                    </div>
                </div>
            </div>
                `;

                postBox.appendChild(postElement);
            });
        });
    });
