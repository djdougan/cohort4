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

});

btnMostNorthern.addEventListener('click', e => {
    let city = community.getMostNorthern();

    const div = document.createElement('div');
    div.id = 'overlay';
    const h2 = document.createElement("h2");
    div.appendChild(h2);
    h2.appendChild(document.createTextNode("Most Northern"));
    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.appendChild(document.createTextNode(city.name));
    const p = document.createElement('p');
    div.appendChild(p);
    p.appendChild(document.createTextNode(city.latitude));
    const button = document.createElement("button");
    button.textContent = "OK";
    div.appendChild(button);
    document.body.appendChild(div);
    button.addEventListener('click', e => {
        document.body.removeChild(e.target.parentElement)
    });
});

btnMostSouthern.addEventListener('click', e => {
    let city = community.getMostSouthern();

    const div = document.createElement('div');
    div.id = 'overlay';
    const h2 = document.createElement("h2");
    div.appendChild(h2);
    h2.appendChild(document.createTextNode("Most Southern"));
    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.appendChild(document.createTextNode(city.name));
    const p = document.createElement('p');
    div.appendChild(p);
    p.appendChild(document.createTextNode(city.latitude));
    const button = document.createElement("button");
    button.textContent = "OK";
    div.appendChild(button);
    document.body.appendChild(div);
    button.addEventListener('click', e => {
        document.body.removeChild(e.target.parentElement)
    });
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
    // p.appendChild(document.createTextNode(new Intl.NumberFormat('en-us', { maximumSignificantDigits: 3 }).format(population)));
    p.appendChild(document.createTextNode(population.toString()));
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
        cityList.appendChild(cityCard.buildCard(txtCityName, txtLatitude, txtLongitude, txtPopulation));
    }

}