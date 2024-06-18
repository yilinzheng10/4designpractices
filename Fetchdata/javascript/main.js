let data = {
    name: 'Sammy'
}

let fetchData = {
    //'POST'submits data to a server
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
    })
}

fetch(url, fetchData)
    .then(function() {

    });