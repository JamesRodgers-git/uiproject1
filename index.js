fetch("./data.json")
    .then((response) => response.json())
    .then((main) => loadMain(main))
    .catch((err) => console.log("Error :" + err));

function loadMain(main) {
    let CardImage = document.getElementById("album-container");
    console.log(CardImage);
    main = main.description;
    console.log(main);
    for (let i = 0; i < main.length; i++) {
        let title = main[i].title;
        let body = main[i].textbody;
        let url = main[i].image;
        console.log(title);
        // construct the HTML element
        let AddCardImage = document.createElement("div");
        AddCardImage.classList.add("container-fluid"); // Add Bootstrap class to the column
        AddCardImage.innerHTML = `
        <div class="row justify-content-center">
        <div class="col-8">
        <div class="card" style="margin-top: 10px; margin-bottom:50px">
        <img src=${url} class="img-fluid mx-auto d-block" alt="..." style="max-width: 70% "></img>
        <div class="card-body text-center">
        <p class="card-text"> <strong>${body}</strong></p>
        </div>
        </div>
        </div>
        </div>
        `;
        CardImage.appendChild(AddCardImage);
    } // end of for
}
