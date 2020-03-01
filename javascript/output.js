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
                postElement.classList.add("divisionePost");
                postElement.style.display = "none";
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
                    <div class="elimina">
                        <img src="../immagini/stop.svg" alt="" />
                    </div>
                </div>
            </div>
                `;

                postBox.appendChild(postElement);
            });
        });
    })

    .then(() => {
        let singlePost = document.querySelectorAll(".divisionePost");

        singlePost.forEach((post, index) => {
            console.log("ciao");
            gsap.fromTo(
                post,
                {
                    x: -500
                },
                {
                    x: 0,
                    duration: 0.3,
                    delay: index / 8,
                    display: ""
                }
            );
        });
        body.style.maxWidth = "100vw";
        let positionX = 0;
        singlePost.forEach((post, index) => {
            post.addEventListener("touchstart", () => {
                positionX = Math.round(event.touches[0].clientX);
                console.log(positionX);
            });
            let offset = 0;
            post.addEventListener("touchmove", () => {
                window.scrollTo(0, 0);
                offset = positionX - event.touches[0].clientX;
                if (offset > 50) {
                    deletePost(singlePost, index);
                }
            });
            let cross = document.querySelectorAll(".elimina");
            cross.forEach((cros, index) => {
                cros.addEventListener("click", () => {
                    deletePost(singlePost, index);
                });
            });
        });
    });

function deletePost(singlePost, index) {
    console.log(index);

    gsap.to(singlePost[index], {
        x: -800,
        duration: 0.3
    }).then(() => {
        singlePost[index].style.display = "none";

        for (let a = index + 1; a < singlePost.length; a++) {
            gsap.fromTo(
                singlePost[a],
                {
                    y: 80
                },
                {
                    y: 0,
                    duration: 0.3
                }
            );
        }
    });
}
