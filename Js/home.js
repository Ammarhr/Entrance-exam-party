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