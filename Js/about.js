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
    var imageStorage = JSON.stringify(newArray);
    localStorage.setItem('imgStore', imageStorage);
}

var newArray = [];
imageRender.addEventListener('click', selectImage);
var clickNum = 0;

function selectImage(e) {

    if (clickNum < 5) {
        if (event.target.id !== 'images') {

            for (var i = 0; i < images.length; i++) {
                if (event.target.id == images[i]) {
                    var newImgs = document.createElement('img');
                    newImgs.setAttribute('src', `img/${images[i]}.jpg`);
                    if (!newArray.includes(`img/${images[i]}.jpg`)) {
                        newArray.push(`img/${images[i]}.jpg`);
                    }
                    select.appendChild(newImgs);
                    console.log('new', newArray);

                }
            }
            setImages();
        }
    } else {
        imageRender.removeEventListener('click', selectImage);
        alert('Your clicks ended');

    }
}


function render() {
    for (var i = 0; i < images.length; i++) {
        if (newArray2.includes(`img/${images[i]}.jpg`)) {
            var newImgs = document.createElement('img');
            newImgs.setAttribute('src', `img/${images[i]}.jpg`);
            select.appendChild(newImgs);
        }
    }
    ///logic:  
    // if (newArray2.includes("img/attack.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/attack.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/onepiece.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/onepiece.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/bleach.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/bleach.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/naruto.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/naruto.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/conan.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/conan.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/psycho.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/psycho.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/boku.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/boku.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/bongu.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/bongu.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/death.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/death.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/demon.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/demon.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/durarara.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/durarara.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/hitman.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/hitman.jpg");
    //     select.appendChild(newImgs);
    // }
    // if (newArray2.includes("img/hitman.jpg")) {
    //     var newImgs = document.createElement('img');
    //     newImgs.setAttribute('src', "img/hitman.jpg");
    //     select.appendChild(newImgs);
    // }  

}

var newArray2;

function getImages() {
    var newContent = JSON.parse(localStorage.getItem('imgStore'));
    newArray2 = newContent;
    console.log('mylocacl', newArray2);
    if (newContent) {
        render();
    }

}
getImages();