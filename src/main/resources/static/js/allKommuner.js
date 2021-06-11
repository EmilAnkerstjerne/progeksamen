let getSogneRequest = {
    method: "GET",
    headers: {
        "content-type": "application/json"
    },
    redirect: "follow"
}

let getKommunerUrl = "http://localhost:8080/allKommuner";

function fetchKommuner(){
    fetch(getKommunerUrl, getSogneRequest)
        .then(response => response.json())
        .then(data => buildHTML(data))
        .catch((error) => console.log(error))
}

function buildHTML(data){
    let masterDiv = document.getElementById("master-div");
    data.sort(function(a, b){
        return b.smittetryk-a.smittetryk || a.kommunekode-b.kommunekode;
    });
    data.forEach(obj => {
        let kommuneDetails = document.createElement("div");
        kommuneDetails.className = "kommunedetails";

        let navn = document.createElement("p");
        navn.innerHTML = obj.kommunekode + " " + obj.navn;
        kommuneDetails.appendChild(navn);

        let smittetryk = document.createElement("p");
        smittetryk.innerHTML = "Smittetryk: " + obj.smittetryk;
        kommuneDetails.appendChild(smittetryk);

        masterDiv.appendChild(kommuneDetails);
    })
}

fetchKommuner();