let postSognRequest = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: ""
}

let sognPostJson = {
    "sogneKode": "",
    "navn": "",
    "smittetryk": "",
}


let postSognUrl = "http://localhost:8080/newSogn/";

function postSogn(){
    sognPostJson.navn = document.getElementById("sogn-navn").value;
    sognPostJson.sogneKode = document.getElementById("sogn-kode").value;
    let kommunekode = document.getElementById("kommune-kode").value;
    sognPostJson.smittetryk = document.getElementById("smittetryk").value;

    postSognRequest.body = JSON.stringify(sognPostJson);

    fetch(postSognUrl+kommunekode, postSognRequest)
        .catch((error) => console.log(error))

    location.reload();
}