let getSogneRequest = {
    method: "GET",
    headers: {
        "content-type": "application/json"
    },
    redirect: "follow"
}

let deleteSognRequest = {
    method: "DELETE",
    headers: {
        "content-type": "application/json"
    }
}

let putSognBody;

let putSognRequest = {
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
    body: putSognBody
}

let sognJson = {
    "id": "",
    "sogneKode": "",
    "navn": "",
    "smittetryk": "",
    "nedlukningStart": ""
}



let getSogneUrl = "http://localhost:8080/allSogne";
let putSognUrl = "http://localhost:8080/updateSogn/";
let deleteSognUrl = "http://localhost:8080/deleteSogn/";

function seKommuner(){
    window.location.href = "http://localhost:8080/kommuner"
}


async function fetchSogn(){
    await fetch(getSogneUrl, getSogneRequest)
        .then(response => response.json())
        .then(data => buildHTML(data))
        .catch((error) => console.log(error))
}



function buildHTML(data){
    let sognList = document.getElementById("sogn-list-div");
    let selectedSogn = document.getElementById("selected-sogn-div");
    data.forEach(obj => {
        let sognElement = document.createElement("button");
        sognElement.className = "sogn-element";
        let selected = false;
        sognElement.onclick = function(){
            if(!selected){
                sognElement.style.border = "3px solid black";
                selected = true;
            }else{
                sognElement.style.border = "1px solid black";
                while(selectedSogn.firstChild){
                    selectedSogn.removeChild(selectedSogn.firstChild);
                }
                selected = false;
                return;
            }

            while(selectedSogn.firstChild){
                selectedSogn.removeChild(selectedSogn.firstChild);
            }
            let navnInput = document.createElement("input");
            navnInput.value = obj.navn;
            navnInput.id = "navninput";
            let navnInputLabel = document.createElement("label");
            navnInputLabel.for = "navninput";
            navnInputLabel.innerHTML = "Navn: ";
            selectedSogn.appendChild(navnInputLabel);
            selectedSogn.appendChild(navnInput);
            selectedSogn.appendChild(document.createElement("br"));

            let kodeInput = document.createElement("input");
            kodeInput.value = obj.sogneKode;
            kodeInput.id = "kodeinput";
            let kodeInputLabel = document.createElement("label");
            kodeInputLabel.for = "kodeinput";
            kodeInputLabel.innerHTML = "Sognkode: ";
            selectedSogn.appendChild(kodeInputLabel);
            selectedSogn.appendChild(kodeInput);
            selectedSogn.appendChild(document.createElement("br"));

            let kommunekodeInput = document.createElement("input");
            kommunekodeInput.value = obj.kommune.kommunekode;
            kommunekodeInput.id = "kommunekodeinput";
            let kommunekodeInputLabel = document.createElement("label");
            kommunekodeInputLabel.for = "kommunekodeinput";
            kommunekodeInputLabel.innerHTML = "Kommunekode: ";
            selectedSogn.appendChild(kommunekodeInputLabel);
            selectedSogn.appendChild(kommunekodeInput);
            selectedSogn.appendChild(document.createElement("br"));

            let smittetrykInput = document.createElement("input");
            smittetrykInput.value = obj.smittetryk;
            smittetrykInput.id = "smittetrykinput";
            let smittetrykInputLabel = document.createElement("label");
            smittetrykInputLabel.for = "smittetrykinput";
            smittetrykInputLabel.innerHTML = "Smittetryk: ";
            selectedSogn.appendChild(smittetrykInputLabel);
            selectedSogn.appendChild(smittetrykInput);
            selectedSogn.appendChild(document.createElement("br"));

            let nedlukningInput = document.createElement("input");
            nedlukningInput.type = "date";
            nedlukningInput.value = nedlukning;
            nedlukningInput.id = "nedlukninginput";
            let nedlukningInputLabel = document.createElement("label");
            nedlukningInputLabel.for = "nedlukninginput";
            nedlukningInputLabel.innerHTML = "Nedlukningsdato: ";
            selectedSogn.appendChild(nedlukningInputLabel);
            selectedSogn.appendChild(nedlukningInput);
            selectedSogn.appendChild(document.createElement("br"));

            let nedlukketInput = document.createElement("input");
            nedlukketInput.id = "nedlukket"
            nedlukketInput.type = "checkbox";
            nedlukketInput.checked = obj.nedlukket;
            let nedlukketLabel = document.createElement("label");
            nedlukketLabel.for = "nedlukket";
            nedlukketLabel.innerHTML = "Nedlukket: ";
            selectedSogn.appendChild(nedlukketLabel);
            selectedSogn.appendChild(nedlukketInput);


            selectedSogn.appendChild(document.createElement("br"));

            let saveChangesBtn = document.createElement("button");
            saveChangesBtn.innerHTML = "Gem";
            saveChangesBtn.onclick = function(){
                let kommuneKode = kommunekodeInput.value;
                sognJson.id = obj.id;
                sognJson.navn = navnInput.value;
                sognJson.sogneKode = kodeInput.value;
                sognJson.smittetryk = smittetrykInput.value;
                sognJson.nedlukningStart = nedlukningInput.value;
                sognJson.nedlukket = nedlukketInput.checked;

                putSognBody = JSON.stringify(sognJson);
                putSognRequest.body = putSognBody;

                if(nedlukketInput.checked && nedlukningInput.value || !nedlukketInput.checked) {
                    fetch(putSognUrl + kommuneKode, putSognRequest)
                        .catch((error) => error.log())
                    location.reload();
                }else{
                    alert("Udfyld dato")
                }


            }
            selectedSogn.appendChild(saveChangesBtn);

            let deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Slet";
            deleteBtn.onclick = function(){
                if(confirm("Vil du slette dette sogn?")) {
                    let sognId = obj.id;
                    fetch(deleteSognUrl + sognId, deleteSognRequest)
                        .catch((error) => console.log(error));
                    location.reload();
                }
            }
            selectedSogn.appendChild(deleteBtn);



        }

        let sognNavn = document.createElement("p");
        let sogneKode = document.createElement("p");
        let sognKommune = document.createElement("p");
        let sognSmittetryk = document.createElement("p");
        let sognNedlukning = document.createElement("p");

        sognNavn.innerHTML = obj.navn;
        sognNavn.className = "sognnavn";
        sogneKode.innerHTML = "Sognekode: " + obj.sogneKode;
        sognKommune.innerHTML = obj.kommune.kommunekode + " " + obj.kommune.navn;
        sognSmittetryk.innerHTML = "Smittetryk: " + obj.smittetryk;



        let date = new Date(obj.nedlukningStart);
        let todayDate = new Date();




        sognElement.appendChild(sognNavn);
        sognElement.appendChild(sogneKode);
        sognElement.appendChild(sognKommune);
        sognElement.appendChild(sognSmittetryk);
        let nedlukning;
        if(obj.nedlukket) {
            if(todayDate > date){
                sognElement.style.backgroundColor = "red";
            }
            nedlukning = obj.nedlukningStart.split("T")[0];
            sognNedlukning.innerHTML = "Lukkes ned pr.: " + nedlukning;
            sognElement.appendChild(sognNedlukning);
        }else{
            nedlukning = null;
        }


        sognList.appendChild(sognElement);
        sognList.appendChild(document.createElement("br"));
    })

}
fetchSogn();