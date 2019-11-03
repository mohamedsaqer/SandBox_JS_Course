document.querySelector('#button').addEventListener('click', loadData);

function loadData() {
    // Create XHR Object
    const xhr = new XMLHttpRequest();

    // Open 
    xhr.open('GET', 'data.txt', true);

    // OnLoad
    xhr.onload = function(){
        if(this.status === 200){
            document.querySelector('#output').innerHTML = `<h1> ${this.responseText} </h1>`;
        }
    }

    // Send Request
    xhr.send();
}