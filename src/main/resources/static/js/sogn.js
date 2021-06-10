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
    let selectedSogn = document.getElementById("selected-sogn-div")
    data.forEach(obj => {
        let sognElement = document.createElement("button");
        sognElement.className = "sogn-element";
        sognElement.onclick = function(){
            let navnInput = document.createElement("input");

            let smittetrykInput = document.createElement("input");

            let nedlukningInput = document.createElement("input");
            nedlukningInput.type = "date";
            nedlukningInput.value = nedlukning;
            console.log(nedlukningInput.value);
            selectedSogn.appendChild(nedlukningInput);


        }

        let sognNavn = document.createElement("p");
        let sogneKode = document.createElement("p");
        let sognKommune = document.createElement("p");
        let sognSmittetryk = document.createElement("p");
        let sognNedlukning = document.createElement("p");

        sognNavn.innerHTML = obj.navn;
        sognNavn.className = "sognnavn";
        sogneKode.innerHTML = "Sognekode: " + obj.sogneKode;
        sognKommune.innerHTML = obj.kommune.navn;
        sognSmittetryk.innerHTML = "Smittetryk: " + obj.smittetryk;

        let nedlukning = obj.nedlukningStart.split("T")[0];
        sognNedlukning.innerHTML = "Lukkes ned pr.: " + nedlukning;

        let date = new Date(obj.nedlukningStart);
        let todayDate = new Date();

        if(todayDate > date){
            sognElement.style.backgroundColor = "red";
        }


        sognElement.appendChild(sognNavn);
        sognElement.appendChild(sogneKode);
        sognElement.appendChild(sognKommune);
        sognElement.appendChild(sognSmittetryk);
        sognElement.appendChild(sognNedlukning);

        sognList.appendChild(sognElement);
    })

}
fetchSogn();