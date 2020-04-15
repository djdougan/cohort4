import City from './City.js';
import Community from './Community.js';
import CityCard from './CityCard.js';
import CityFetch from "../CityFetch.js";
import Overlay from './overlay.js';

const cityList = document.querySelector('#cityList');
const txtCityName = document.querySelector('#txtCityName');
const txtPopulation = document.querySelector('#txtPopulation');
const txtLatitude = document.querySelector('#txtLatitude');
const txtLongitude = document.querySelector('#txtLongitude');
const cityKey = document.querySelector("#cityKey");

// buttons

const btnAdd = document.querySelector('#btnAdd');
const btnPopulation = document.querySelector('#btnPopulation');
const btnUpdate = document.querySelector('#btnUpdate');
const btnTemp = document.querySelector('#btnTemp');
const btnMostNorthern = document.querySelector('#btnMostNorthern');
const btnMostSouthern = document.querySelector('#btnMostSouthern');

const url = 'http://localhost:5000/';

const com = new Community();
var activeCard = new CityCard();

window.addEventListener("load", async(e) => {
    let data = await CityFetch.all(url);
    if (data.status === 200) {
        for (let i = 0; i < data.length; i++) {
            let city = com.createCity(data[i].key, data[i].name, data[i].latitude, data[i].longitude, data[i].population);
            let card = new CityCard();
            let NS = com.whichSphereNS(city.key);
            let EW = com.whichSphereEW(city.key);
            cityList.appendChild(
                card.buildCard(city.key, city.name, city.latitude, city.longitude,
                    city.population, city.howBig(), NS.charAt(0), EW.charAt(0)));
            card.addFunctions(openPopUp, increasePop, decreasePop, deleteCard, cardClick);
        }
    }
    e.preventDefault();
});

btnUpdate.addEventListener('click', async(e) => {
    let city = getTextBoxes();
    let data = await CityFetch.update(url, city);
    if (data.status === 200) {
        data = await CityFetch.save(url);
        activeCard.updateCard(city.key, city.name, city.latitude, city.longitude, city.population);
    }

});

//
btnAdd.addEventListener('click', async(e) => {
    if (isEmptyTextBox()) {
        let data;
        let city = com.createCity(null,
            txtCityName.value,
            txtLatitude.value,
            txtLongitude.value,
            txtPopulation.value);
        let EW = com.whichSphereEW(city.key);
        let NS = com.whichSphereEW(city.key);
        let card = new CityCard();
        cityList.appendChild(
            card.buildCard(city.key, city.name, city.latitude, city.longitude, city.population, city.howBig(), EW.charAt(0), NS.charAt(0))
        );
        data = await CityFetch.add(url, city);
        data = await CityFetch.save(url);
    }
    e.preventDefault();
});

btnMostNorthern.addEventListener('click', async(e) => {
    let city = com.getMostNorthern();
    let ew = com.whichSphereEW(city.key);
    let ns = com.whichSphereNS(city.key);
    console.log(city.key);
    let overLay = new Overlay(document.body);
    overLay.buildOverlay("Most Northern", city.name, city.latitude, city.longitude, city.population, ns, ew);
    // document.body.appendChild(div);
    e.preventDefault();
});

btnMostSouthern.addEventListener('click', async(e) => {
    let city = com.getMostSouthern();
    let ew = com.whichSphereEW(city.key);
    let ns = com.whichSphereNS(city.key);
    console.log(city.key);
    let overLay = new Overlay(document.body);
    overLay.buildOverlay("Most Northrern", city.name, city.latitude, city.longitude, city.population, ns, ew);
    // document.body.appendChild(div);
    e.preventDefault();
});


btnPopulation.addEventListener("click", async(e) => {
    let data = await CityFetch.all(url);
    let population = com.getPopulation();
    let overLay = new Overlay(document.body);
    overLay.buildOverlay("Total Community Population", "All Cities", 0, 0, population);

    e.preventDefault();
});



async function deleteCard(event) {
    const card = event.target.parentElement;
    const parent = card.parentElement;
    const key = parseInt(card.dataset.key);
    let data = await CityFetch.delete(url, { key: key });
    if (data.status === 200) {
        com.deleteCity(key);
        parent.removeChild(card);
        data = await CityFetch.save(url);
    }

}

function cardClick(event) {
    let card = event.target;
    removeAllActiveClass();
    while (!card.classList.contains('city')) {
        card = card.parentElement;
    }
    if (card.classList.contains("city")) {
        card.classList.add("active");
        let index = com.communities.findIndex(c => c.key === parseInt(card.dataset.key));
        fillTextBoxes(com.communities[index]);
    }
    activeCard = card;
    console.log(activeCard);
}

function openPopUp(event) {
    const parent = event.target.parentElement.parentElement;
    const ctrl = parent.querySelector(".adjustPopulation");
    ctrl.classList.remove('hidden');
}

function closePopUp(event) {
    const parent = event.target.parentElement.parentElement;
    const ctrl = parent.querySelector(".adjustPopulation");
    ctrl.classList.add('hidden');
}

async function increasePop(event) {
    const parent = event.target.parentElement.parentElement;
    const ctrl = parent.querySelector(".adjustPopulation input[type='text']");
    const key = parseInt(parent.dataset.key);
    let index = com.communities.findIndex(x => x.key === key);
    let city = com.communities[index];
    if (ctrl.value !== "") {
        city.movedIn(parseInt(ctrl.value));
        let data = await CityFetch.update(url, JSON.parse(city.show()));
        if (data.status === 200) {
            data = await CityFetch.save(url);
        }
    }
    closePopUp(event);
}

async function decreasePop(event) {
    const parent = event.target.parentElement.parentElement;
    const ctrl = parent.querySelector(".adjustPopulation input[type='text']");
    const key = parseInt(parent.dataset.key);
    let index = com.communities.findIndex(x => x.key === key);
    let city = com.communities[index];
    if (ctrl.value !== "") {
        city.movedOut(parseInt(ctrl.value));
        let data = await CityFetch.update(url, JSON.parse(city.show()));
        if (data.status === 200) {
            data = await CityFetch.save(url);
        }
    }
    closePopUp(event);
}


function clearTextBoxes() {
    txtCityName.value = "";
    txtPopulation.value = "";
    txtLatitude.value = "";
    txtLongitude.value = "";
    txtCityName.focus();
}

function fillTextBoxes(city) {
    cityKey.value = city.key;
    txtCityName.value = city.name;
    txtPopulation.value = city.population;
    txtLatitude.value = city.latitude;
    txtLongitude.value = city.longitude;
}

function getTextBoxes() {
    let key = parseInt(cityKey.value);
    let name = txtCityName.value;
    let population = parseInt(txtPopulation.value);
    let latitude = parseInt(txtLatitude.value);
    let longitude = parseInt(txtLongitude.value);
    const city = new City(key, name, latitude, longitude, population);
    return city;
}

function isEmptyTextBox() {
    let result = true;
    // if any of the textBoxes are empty return false
    if (txtCityName.value === "" && txtPopulation.value === "" && txtLatitude.value === "" && txtLongitude.value === "") {
        txtCityName.focus();
        result = false;
    }
    return result;
}

function removeAllActiveClass() {
    let cardArray = Array.from(document.getElementById("cityList").children);
    cardArray.forEach((city) => {
        city.classList.remove('active');
    });
}