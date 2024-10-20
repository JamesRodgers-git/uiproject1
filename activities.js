fetch("./activities.json")
    .then((response) => response.json())
    .then((main) => loadMain(main))
    .catch((err) => console.log("Error :" + err));

function getTextBody(textUrl) {
    var body = "";
    return fetch(textUrl)
        .then((response) => response.text())
        .then((text) => {
            return text;
        })
        .catch((err) => console.log("Error :" + err));
}

async function loadMain(main) {
    let CardImage = document.getElementById("album-container");
    console.log(CardImage);
    main = main.activities;
    console.log(main);
    for (let i = 0; i < main.length; i++) {
        let title = main[i].title;
        let textUrl = main[i].description;
        let url = main[i].image;
        let url2 = main[i].drawing;

        let text_body = await getTextBody(textUrl);

        console.log(text_body);

        // construct the HTML element
        let AddCardImage = document.createElement("div");
        AddCardImage.classList.add("col-4"); // Add Bootstrap class to the column
        AddCardImage.innerHTML = `
        <div class="card shadow-sm border border-primary" style = "height: 800px; margin-top: 50px; margin-bottom: 50px">
        <img src=${url} class="card-img-top" alt="..."></img>
        <div class="card-body text-center">
        <p class="card-text"> <strong>${text_body}</strong></p>
        </div>
        </div>
        `;
        CardImage.appendChild(AddCardImage);
    } // end of for
}
