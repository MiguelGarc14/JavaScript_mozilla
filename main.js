
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if(miSrc === 'images/lobo.png') {
        miImage.setAttribute('src','images/lobo2.png');
    } else {
        miImage.setAttribute('src','images/lobo.png');
    }
}

let myButton = document.querySelector('button');
let myTitle = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name',myName);
        myTitle.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let savedName = localStorage.getItem('name');
    myTitle.textContent = 'Mozilla is cool, ' + savedName;
}

myButton.onclick = function() {
    setUserName();
}