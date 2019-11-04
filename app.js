// Fetch API Example

// Fetch API From Text File
document.querySelector('#button1').addEventListener('click', getText);

function getText() {
    fetch('data.txt')
        .then(responce => responce.text())
        .then(data => document.querySelector('#output').innerHTML = data)
        .catch(err => document.querySelector('#output').innerHTML = err);
}

// Fetch API From Json File
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

// Fetch API From  API URL
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


// initliaize EasyHTTP Object
const http = new EasyHTTP();

// Get Posts
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

const data = {
    name: 'Jhon',
    username: 'Jhon',
    email: 'Jhon',
}

// Post new User
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Update User
http.put('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));





// initliaize EasyHTTP2 Object
const http2 = new EasyHTTP3();

// Get Posts
http2.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Post new User
http2.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Update User
http2.put('https://jsonplaceholder.typicode.com/users/1', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Delete User
http2.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));