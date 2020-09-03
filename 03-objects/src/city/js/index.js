import City from "./City.js";
import Community from "./Community.js";
import Card from "./CityCard.js";
import fetchApi from "./fetchApi.js";
import Overlay from "./overlay.js";

const cityList = document.getElementById("cityList");
const txtCityName = document.getElementById("txtCityName");
const txtPopulation = document.getElementById("txtPopulation");
const txtLatitude = document.getElementById("txtLatitude");
const txtLongitude = document.getElementById("txtLongitude");
const cityKey = document.getElementById("cityKey");
// buttons
const btnNew = document.getElementById("btnNew");
const btnAdd = document.getElementById("btnAdd");
const btnPopulation = document.getElementById("btnPopulation");
const btnUpdate = document.getElementById("btnUpdate");
const btnMostNorthern = document.getElementById("btnMostNorthern");
const btnMostSouthern = document.getElementById("btnMostSouthern");

const url = "http://localhost:5000/";

const com = new Community();

window.addEventListener("load", async (e) => {
  let data = await fetchApi.all(url);
  if (data.status === 200) {
    for (let i = 0; i < data.length; i++) {
      let city = com.createCity(
        data[i].key,
        data[i].name,  
        data[i].latitude,
        data[i].longitude,
        data[i].population
      );
      let card = new Card(city);
      let NS = city.whichSphereNS();
      let EW = city.whichSphereEW();
      cityList.appendChild(
        card.buildCard()
      );
    }
  }
  e.preventDefault();
});

btnNew.addEventListener("click",  (e) => {
  clearTextBoxes();
  btnAdd.disabled = false;
  btnUpdate.disabled = true;
  btnPopulation.disabled = true;
  btnMostNorthern.disabled = true;
  btnMostSouthern.disabled = true;
});

cityList.addEventListener('click', async(e)=>{
  let city
  let card;

  try{
    if (e.target.classList.contains("city")) {
      card = e.target;
      city = card.getCityData();
      txtCityName.value = city.name;
      txtPopulation.value = city.population;
      txtLatitude.value = city.latitude;
      txtLongitude.value = city.longitude;
      cityKey.value = city.key;

    } else if (e.target.classList.contains("btnClose")) {
      card = e.target.parentElement;
      city = card.getCityData();
      const key = parseInt(card.dataset.key);
      let data = await fetchApi.delete(url, { key: key });
      if (data.status === 200) {
        com.deleteCity(key);
        card.deleteCard(e.target);
      }
    } else if (e.target.classList.contains("btnIncrease")) {
      card = e.target.parentElement.parentElement;
      city = card.getCityData();
      let populationChange = card.getPopulation();
      city.movedIn(populationChange);
      let index = com.communities.findIndex((c) => c.key === city.key);
      com.communities[index] = city;
      let data = await fetchApi.update(url, city);
      card.updateCard(city);
      card.closePopUp(card);
    } else if (e.target.classList.contains("btnDecrease")) {
      card = e.target.parentElement.parentElement;
      city = card.getCityData();
      let populationChange = card.getPopulation();
      city.movedOut(populationChange);
      let index = com.communities.findIndex((c) => c.key === city.key);
      com.communities[index] = city;
      let data = await fetchApi.update(url, city);
      card.updateCard(city);
      card.closePopUp(card);
    }
  }catch(e){
    alert(e.message)
  }
})


btnAdd.addEventListener("click", async (e) => {
  if (isEmptyTextBox()) {

    let data;
    let city = com.createCity(
      null,
      txtCityName.value,
      txtLatitude.value,
      txtLongitude.value,
      txtPopulation.value
    );
    let card = new Card(city);
    cityList.appendChild(
      card.buildCard()
    );
    data = await fetchApi.add(url, city);
  }
  btnAdd.disabled = false;
  btnUpdate.disabled = true;
  btnPopulation.disabled = false;
  btnMostNorthern.disabled = false;
  btnMostSouthern.disabled = false;
  e.preventDefault();
});


btnMostNorthern.addEventListener("click", async (e) => {
  let city = com.getMostNorthern();
  let overLay = new Overlay(document.body);
  overLay.buildOverlay(
    "Most Northern",
    city.name,
    city.latitude,
    city.longitude,
    city.population,
    city.whichSphereNS(),
    city.whichSphereEW()
  );
  e.preventDefault();
});

btnMostSouthern.addEventListener("click", async (e) => {
  let city = com.getMostSouthern();
  let overLay = new Overlay(document.body);
  overLay.buildOverlay(
    "Most Southern",
    city.name,
    city.latitude,
    city.longitude,
    city.population,
    city.whichSphereNS(),
    city.whichSphereEW()
  );
  // document.body.appendChild(div);
  e.preventDefault();
});

btnPopulation.addEventListener("click", async (e) => {
  let data = await fetchApi.all(url);
  let population = com.getPopulation();
  let overLay = new Overlay(document.body);
  overLay.buildOverlay(
    "Total Community Population",
    "All Cities",
    0,
    0,
    population
  );

  e.preventDefault();
});




function clearTextBoxes() {
  cityKey.value = "";
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



function isEmptyTextBox() {
  let result = true;
  // if any of the textBoxes are empty return false
  if (
    txtCityName.value === "" &&
    txtPopulation.value === "" &&
    txtLatitude.value === "" &&
    txtLongitude.value === ""
  ) {
    txtCityName.focus();
    result = false;
  }
  return result;
}

function removeAllActiveClass() {
  let cardArray = Array.from(document.getElementById("cityList").children);
  cardArray.forEach((city) => {
    city.classList.remove("active");
  });
}
