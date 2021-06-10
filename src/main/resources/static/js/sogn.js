console.log("Herrow");

let getSogneRequest = {
    method: "GET",
    headers: {
        "content-type": "application/json"
    },
    redirect: "follow"
}

let getSogneUrl = "http://localhost:8080/allSogne";


let postSognUrl;

async function fetchSogn(){
    await fetch(getSogneUrl, getSogneRequest)
        .then(response => response.json())
        .then(data => buildHTML(data))
        .catch((error) => console.log(error))
}

function buildHTML(data){
    let sognList = document.getElementById("sogn-list-div");
    data.forEach(obj => {
        console.log("ajasjdn")
        let sognElement = document.createElement("button");

        let sognNavn = document.createElement("p");
        let sogneKode = document.createElement("p");
        let sognKommune = document.createElement("p");
        let sognSmittetryk = document.createElement("p");
        let sognNedlukning = document.createElement("p");

        sognNavn.innerHTML = obj.navn;
        sogneKode.innerHTML = obj.sogneKode;
        sognKommune.innerHTML = obj.kommune.navn;
        sognSmittetryk.innerHTML = obj.smittetryk;
        sognNedlukning.innerHTML = obj.nedlukningStart;

        sognElement.appendChild(sognNavn);
        sognElement.appendChild(sogneKode);
        sognElement.appendChild(sognKommune);
        sognElement.appendChild(sognSmittetryk);
        sognElement.appendChild(sognNedlukning);

        sognList.appendChild(sognElement);
    })

}
fetchSogn();