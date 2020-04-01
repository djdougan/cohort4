import { City, Community } from './City.js';

import CityCard from './CityCard.js';

const cityList = document.querySelector('#cityList');
const txtCityName = document.querySelector('#txtCityName');
const txtPopulation = document.querySelector('#txtPopulation');
const txtLatitude = document.querySelector('#txtLatitude');
const txtLongitude = document.querySelector('#txtLongitude');
const btnAdd = document.querySelector('#btnAdd');
const btnUpdate = document.querySelector('#btnUpdate');
const btnDelete = document.querySelector('#btnDelete');
const btnMostNorthern = document.querySelector('#btnMostNorthern');
const btnMostSouthern = document.querySelector('#btnMostSouthern');


const cityCard = new CityCard();

cityList.appendChild(
    cityCard.buildCard("Edmonton", 1285711, 51.0447, 114.0719));