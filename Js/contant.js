function Info(name, age) {
    this.name = name;
    this.age = age;
    Info.all.push(this);
}
Info.all = [];
var infoForm = document.getElementById('form-set');
var divE1 = document.getElementById('your-info');
var age = document.getElementById('age');
var name = document.getElementById('name');


var newTable = document.createElement('table');
divE1.appendChild(newTable);

var trE1 = document.createElement('tr');
newTable.appendChild(trE1);
trE1.textContent = "name";

var trE2 = document.createElement('tr');
newTable.appendChild(trE2);
trE2.textContent = "age";

var ageArray = [];
infoForm.addEventListener('submit', getInfo);

function getInfo(e) {
    var name = event.target.name.value;
    var age = event.target.age.value;
    var tdE1 = document.createElement('td');
    trE1.appendChild(tdE1);
    tdE1.textContent = name;

    var tdE2 = document.createElement('td');
    trE2.appendChild(tdE2);
    tdE2.textContent = age;
    var newObj = new Info(name, age);
    setInfo();
    console.log('newob', newObj);
    event.preventDefault();
    console.log('bsbs', ageArray);
}

function setInfo() {
    var newInfo = JSON.stringify(Info.all);
    localStorage.setItem('setInfo', newInfo);
}