import City from './City.js';
import Community from './Community.js';
import CityCard from './CityCard.js';
import CityFetch from "./CityFetch.js";


const cityList = document.querySelector('#cityList');
const txtCityName = document.querySelector('#txtCityName');
const txtPopulation = document.querySelector('#txtPopulation');
const txtLatitude = document.querySelector('#txtLatitude');
const txtLongitude = document.querySelector('#txtLongitude');

// buttons

const btnAdd = document.querySelector('#btnAdd');
const btnPopulation = document.querySelector('#btnPopulation');
const btnLoadSeedData = document.querySelector('#btnLoadSeedData');
const btnMostNorthern = document.querySelector('#btnMostNorthern');
const btnMostSouthern = document.querySelector('#btnMostSouthern');
const community = new Community();

const url = 'http://localhost:5000/';

const com = new Community();
let nextKey = 0;

window.addEventListener("load", async() => {
    let data = await CityFetch.all(url);
    if (data.status === 200) {
        console.log(data.length);
        for (let i = 0; i < data.length; i++) {
            let city = com.createCity(data[i].key, data[i].name, data[i].latitude, data[i].longitude, data[i].population);
            console.log(city);
            let card = new CityCard();
            let NS = com.whichSphereNS(city.key);
            let EW = com.whichSphereEW(city.key);
            cityList.appendChild(
                card.buildCard(city.key, city.name, city.latitude, city.longitude,
                    city.population, city.howBig(), NS.charAt(0), EW.charAt(0)));
            card.closetBtn.addEventListener('click', function(e) { deleteCard(e.target); });
        }
    }
    console.log("DOMContentLoaded")
});

cityList.addEventListener('click', e => {
    console.log("cityList.click")
    let card = e.target;
    if (cityList.children.length !== 0) {
        while (!card.classList.contains('city')) {
            card = card.parentElement;
        }
        if (e.target.classList.contains('btnClose')) {
            //delete the card and remove from collection and server

        }
    }
});

//
btnAdd.addEventListener('click', async e => {
    let city =
        com.createCity(null,
            txtCityName.value,
            txtLatitude.value,
            txtLongitude.value,
            txtPopulation.value);
    let card = new CityCard();
    cityList.appendChild(
        card.buildCard(city.key, city.name, city.latitude, city.longitude, city.population)
    );
    CityFetch.add(url, city);
    CityFetch.save(url);
    console.log("btnAdd");

});

btnMostNorthern.addEventListener('click', e => {

    console.log("btnMostNorthern");
});

btnMostSouthern.addEventListener('click', e => {

    console.log("btnMostSouthern");
});


btnPopulation.addEventListener("click", async() => {
    // debugger;
    let data = await postData(url + 'all');
    console.log(data);
    console.log("btnPopulation");

});

function deleteCard(card) {
    card = card.parentElement;
    let key = parseInt(card.dataset.key);
    com.deleteCity(key);
    CityFetch.delete(url, { key: key });
    CityFetch.save(url);
    cityList.removeChild(card);

}

function clearTextBoxes() {
    txtCityName.value = "";
    txtPopulation.value = "";
    txtLatitude.value = "";
    txtLongitude.value = "";
    txtCityName.focus();
}

// async function fetchAll(url) {
//     let response = await fetch(url + "load");
//     let data = await response.json();
//     return data;
// }