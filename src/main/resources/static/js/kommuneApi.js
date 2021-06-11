let getKommunerAPIRequest = {
    method: "GET",
    headers: {
        "content-type": "application/json"
    },
    redirect: "follow"
}

let body;

let postKommuneRequest = {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: body
}

let kommuneJson = {
    "navn": "",
    "kommunekode": ""
}

let getKommunerAPIUrl = "https://api.dataforsyningen.dk/kommuner";
let postKommuneUrl = "http://localhost:8080/newKommune";



function fetchAllkommuner(){

    fetch(getKommunerAPIUrl, getKommunerAPIRequest)
        .then(response => response.json())
        .then(data => data.forEach(obj => {
            kommuneJson.navn = obj.navn;
            kommuneJson.kommunekode = obj.kode;
            body = JSON.stringify(kommuneJson);
            postKommuneRequest.body = body;
            fetch(postKommuneUrl, postKommuneRequest)
                .catch((error) => console.log(error));
        }))
        .catch((error) => console.log(error));


}
