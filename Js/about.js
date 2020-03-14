'use strict'
var images = ['attack', 'bleach', 'boku', 'bongu', 'conan', 'death', 'demon', 'durarara', 'hitman', 'hunter', 'naruto', 'onepiece', 'psycho', 'soerdart', 'tokyo'];

function Image(name, path) {
    this.name = name;
    this.path = `img/${name}.jpg`;
    Image.all.push(this);
}
Image.all = [];

var newObj

function creatImgObj() {
    for (var i = 0; i < images.length; i++) {
        newObj = new Image(images[i]);
    }
}
creatImgObj();
console.log('scas', Image.all);

var imageRender = document.getElementById('images');

Image.prototype.renderSection = function() {
    for (var i = 0; i < images.length; i++) {
        var h3E1 = document.createElement('h3');
        imageRender.appendChild(h3E1);
        h3E1.textContent = Image.all[i].name;
        var imageFirst = document.createElement('img');
        imageRender.appendChild(imageFirst);
        imageFirst.setAttribute('src', Image.all[i].path);
        imageFirst.setAttribute('id', Image.all[i].name);

    }
}
newObj.renderSection();


var select = document.getElementById('imgSelected');

function setImages() {
    var imageStorage = JSON.stringify(Image.all);
    localStorage.setItem('imgStore', imageStorage);
}


imageRender.addEventListener('click', selectImage);
var clickNum = 0;

function selectImage(e) {

    if (clickNum < 5) {
        if (event.target.id !== 'images') {

            for (var i = 0; i < images.log; i++) {
                if (event.target.id == image[i]) {
                    var newImgs = document.createElement('img');

                }
            }
            clickNum++
            setImages();
        }
    } else {
        imageRender.removeEventListener('click', selectImage);
        alert('Your clicks ended');

    }
}


function render() {

}
getImages();


function getImages() {
    var newContent = JSON.parse(localStorage.getItem('imgStore'));

    render();
}