document.querySelector('#button1').addEventListener('click', getText);

function getText(){
    fetch('data.txt')
        .then(responce => responce.text())
        .then(data  => document.querySelector('#output').innerHTML = data)
        .catch(err => document.querySelector('#output').innerHTML = err);
}

document.querySelector('#button2').addEventListener('click', getJSON);

function getJSON() {
    fetch('custmer.json')
        .then(responce => responce.json())
        .then(data => {
            let output = '';
            data.forEach(post => {
                output += `
                <li>${post.title}</li>
                `;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(err => document.querySelector('#output').innerHTML = err);
}

document.querySelector('#button3').addEventListener('click', getAPI);

function getAPI() {
    fetch('https://api.github.com/users')
        .then(responce => responce.json())
        .then(data => {
            let output = '';
            data.forEach(function (post) {
                output += `
                <li>${post.login}</li>
                `;
            });
            document.querySelector('#output').innerHTML = output;
        })
        .catch(err => document.querySelector('#output').innerHTML = err);
}