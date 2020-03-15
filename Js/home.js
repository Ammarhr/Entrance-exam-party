'use strict'

var upDiv = document.getElementById('bottun1');
var upButton = document.createElement('button');
upDiv.appendChild(upButton);
upButton.textContent = 'Bottom';
upButton.setAttribute('id', 'down');

upDiv.addEventListener('click', toBottom);

function toBottom(event) {
    if (event.target.id == 'down') {
        document.body.scrollTop = 1000;
        document.documentElement.scrollTop = 1000;
    }
}


var downDiv = document.getElementById('bottun2');
var downButton = document.createElement('button');
downDiv.appendChild(downButton);
downButton.textContent = 'Top'
downButton.setAttribute('id', 'top');

downDiv.addEventListener('click', toTop);

function toTop(e) {
    if (event.target.id == 'top') {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

///////////////////////



function Info(name, age) {
    this.name = name;
    this.age = age;
    Info.all.push(this);
}
Info.all = [];

var newArray = [];

function getInfo() {
    var newCon = JSON.parse(localStorage.getItem('setInfo'));
    console.log('vavava', newCon);
    newArray = newCon;
    for (var i = 0; i < Info.all.length; i++) {
        var newObj = new Info(newArray[i].name, newArray[i].age);
    }
}
getInfo();
console.log('const', newArray);

var div3 = document.getElementById('our-result');
var ourTable = document.createElement('ul');
div3.appendChild(ourTable);

function render32() {
    for (var a = 0; a < newArray.length; a++) {
        var liE1 = document.createElement('li');
        ourTable.appendChild(liE1);
        liE1.textContent = `name: ${newArray[a].name} ` + ` age: ${newArray[a].age}`;
    }

}
render32();