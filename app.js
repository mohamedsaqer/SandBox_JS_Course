document.querySelector('#button1').addEventListener('click', getText);

function getText(){
    fetch('data.txt')
        .then(function(responce){
            return responce.text();
        })
        .then(function(data){
            document.querySelector('#output').innerHTML = data;
        })
        .catch(function(err){
            document.querySelector('#output').innerHTML = err;
        });
}

document.querySelector('#button2').addEventListener('click', getJSON);

function getJSON() {
    fetch('custmer.json')
        .then(function (responce) {
            return responce.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function(post){
                output += `
                <li>${post.title}</li>
                `;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}

document.querySelector('#button3').addEventListener('click', getAPI);

function getAPI() {
    fetch('https://api.github.com/users')
        .then(function (responce) {
            return responce.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (post) {
                output += `
                <li>${post.login}</li>
                `;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(function (err) {
            console.log(err);
        });
}