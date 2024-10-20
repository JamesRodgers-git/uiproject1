fetch("./people.json")
    .then((response) => response.json())
    .then((main) => loadMain(main))
    .catch((err) => console.log("Error :" + err));

function getTextBody(textUrl) {
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
    main = main.members;
    console.log(main);
    for (let i = 0; i < main.length; i++) {
        let name = main[i].name;
        let years = main[i].years;
        let text = main[i].text;
        let url = main[i].image;
        let email = main[i].email;

        // construct the HTML element
        let AddCardImage = document.createElement("div");
        AddCardImage.classList.add("col-4"); // Add Bootstrap class to the column
        AddCardImage.innerHTML = `
        <div class="card shadow-sm border border-primary" style = "height: 800px; margin-top: 50px; margin-bottom: 50px">
        <img src=${url} class="card-img-top img-fluid mx-auto d-block" style="max-height: 80%; object-fit: contain;" alt="..."></img>
        <div class="card-body text-center">
        <p class="card-text"> 
        Name: ${name}<br>
        Years: ${years}<br>
        Email: ${email}<br>
        <strong>${text}</strong></p>
        </div>
        </div>
        `;
        CardImage.appendChild(AddCardImage);
    } // end of for
}
