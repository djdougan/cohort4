import { City, Community } from './City.js';

import CityCard from './CityCard.js';


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

// cityList.addEventListener('click', e => {
// });

btnAdd.addEventListener('click', e => {
    let city = new City(txtCityName.value, txtLatitude.value, txtLongitude.value, txtPopulation.value)
    if (txtCityName.value !== "") {
        makeCard(city.name, city.latitude, city.longitude, city.population);
    }
    clearTextBoxes();
});

btnMostNorthern.addEventListener('click', e => {
    let city = community.getMostNorthern();
    let overlay = new CityCard(city);
    createOverlay("Most Southern", city);
});

btnMostSouthern.addEventListener('click', e => {
    let city = community.getMostSouthern();
    let overlay = new CityCard(city);
    createOverlay("Most Southern", city);
});

btnLoadSeedData.addEventListener("click", (e) => {
    fetch("./data/seedData.json")
        .then(response => response.json())
        .then(json => {
            let cities = json["cities"];

            cities.forEach(city => {
                makeCard(city.name, city.latitude, city.longitude, city.population);
            });
        });
})


btnPopulation.addEventListener("click", e => {
    let population = community.getPopulation();
    const div = document.createElement('div');
    div.id = 'overlay';
    const h2 = document.createElement("h2");
    div.appendChild(h2);
    h2.appendChild(document.createTextNode("Total population"));
    const p = document.createElement('p');
    div.appendChild(p);
    p.appendChild(document.createTextNode(new Intl.NumberFormat('en-us', {
        style: 'decimal',
        "notation": "standard",
    }).format(population)));
    const button = document.createElement("button");
    button.textContent = "OK";
    div.appendChild(button);
    document.body.appendChild(div);
    button.addEventListener('click', e => {
        document.body.removeChild(e.target.parentElement)
    });
});

function makeCard(cityName, latitude, longitude, population) {
    if (cityName !== "") {
        const city = community.createCity(cityName, latitude, longitude, population);
        const cityCard = new CityCard(city);
        const card = cityCard.buildCard(txtCityName.id, txtLatitude.id, txtLongitude.id, txtPopulation.id)
        cityList.appendChild(card);
        card.querySelector('.closeBtn').addEventListener('click', e => {
            community.deleteCity(city.name);
            e.target.parentElement.parentElement.removeChild(e.target.parentElement)
        });
        card.addEventListener("click", e => {
            txtCityName.value = city.name;
            txtLatitude.value = city.latitude;
            txtLongitude.value = city.longitude;
            txtPopulation.value = city.population;

        })
    }

}

function createOverlay(title, city) {
    const div = document.createElement('div');
    div.id = 'overlay';
    const h2 = document.createElement("h2");
    div.appendChild(h2);
    h2.appendChild(document.createTextNode(title));
    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.appendChild(document.createTextNode(city.name));
    // latitude
    const p1 = document.createElement('p');
    div.appendChild(p1);
    p1.appendChild(document.createTextNode(`Latitude: ${city.latitude}`));
    //
    const p2 = document.createElement('p');
    div.appendChild(p2);
    p2.appendChild(document.createTextNode(`Longitude: ${city.latitude}`));
    //
    const button = document.createElement("button");
    button.textContent = "OK";
    div.appendChild(button);
    document.body.appendChild(div);
    button.addEventListener('click', e => {
        document.body.removeChild(e.target.parentElement)
    });
}

function clearTextBoxes() {
    txtCityName.value = "";
    txtPopulation.value = "";
    txtLatitude.value = "";
    txtLongitude.value = "";
    txtCityName.focus();
}