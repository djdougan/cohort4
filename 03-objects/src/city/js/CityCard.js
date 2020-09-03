import City from "./City.js";

class CityCard {
  constructor(city) {
    this.city = city;
    this.divCity = document.createElement("div"); // Card container
    this.hiddenCityKey = document.createElement("input");
    this.txtH2CityName = document.createElement("h2");
    this.divCityInfoRow1 = document.createElement("div"); // population container
    this.h3cityInfoLabel1 = document.createElement("h3"); // population header
    this.txtCityPopulationInfo1 = document.createElement("p"); // population
    this.btnModify = document.createElement("button"); // population

    this.divAdjustPopulation = document.createElement("div");
    this.h3CityPopulationInfo2 = document.createElement("h3"); // population
    this.txtCityPopulationInfo2 = document.createElement("input"); // population
    this.btnIncrease = document.createElement("button");
    this.btnDecrease = document.createElement("button");
    this.btnPopUp = document.createElement("button");

    this.divCityInfoRow2 = document.createElement("div"); // latitude container
    this.h3cityInfoLabel2 = document.createElement("h3"); // latitude header
    this.txtCityLatitudeInfo = document.createElement("p"); // latitude
    // this.span2 = document.createElement('span');  // degree symbol '\u00B0'

    this.divCityInfoRow3 = document.createElement("div"); // Longitude container
    this.h3cityInfoLabel3 = document.createElement("h3"); // longitude header
    this.txtCityLongitudeInfo = document.createElement("p"); // longitude
    // this.span3 = document.createElement('span'); // degree symbol '\u00B0'

    this.divCityInfoRow4 = document.createElement("div"); // city Type container
    this.h3cityInfoLabel4 = document.createElement("h3"); // city Type header
    this.txtCityType = document.createElement("p"); // "City", "Large Town", "Town"...
    this.btnClose = document.createElement("button"); // close button
    this.deleteCard = this.deleteCard.bind(this);
    this.openPopUp = this.openPopUp.bind(this);
  }

  buildCard() {
    // headers
    this.divCity.className = "city rounded-10";
    this.divCity.id = this.city.name + "_" + this.city.key;
    this.hiddenCityKey.setAttribute("type", "hidden");
    this.hiddenCityKey.id = "key_" + this.city.key;
    this.hiddenCityKey.name = "cityKey";
    this.hiddenCityKey.value = this.city.key;

    this.divCity.dataset.city = this.city.name;
    this.divCity.dataset.key = this.city.key;
    this.txtH2CityName.textContent = this.city.name;
    this.txtH2CityName.classList.add("cityName");

    // population
    this.h3cityInfoLabel1.textContent = "Population:";
    this.txtCityPopulationInfo1.textContent = this.city.population.toString();
    this.txtCityPopulationInfo1.classList.add("popInfo");
    this.btnModify.textContent = "\u21C5";
    this.btnModify.className = "btnModify";
    this.btnModify.title = "Adjust Population";
    this.divCityInfoRow1.appendChild(this.h3cityInfoLabel1);
    this.divCityInfoRow1.appendChild(this.txtCityPopulationInfo1);
    this.divCityInfoRow1.appendChild(this.btnModify);

    this.btnIncrease.textContent = "\u2795"; //➕
    this.btnIncrease.title = "Increase Population";
    this.btnIncrease.className = "btnIncrease";
    this.btnDecrease.textContent = "\u2796"; // ➖
    this.btnDecrease.title = "Decrease Population";
    this.btnDecrease.className = "btnDecrease";
    this.btnPopUp.title = "Close Popup";
    this.btnPopUp.textContent = "\u2718"; // "✘";
    this.btnPopUp.className = "btnPopUp";
    this.h3CityPopulationInfo2.textContent = "Modify Population By:";
    this.divAdjustPopulation.appendChild(this.h3CityPopulationInfo2);
    this.divAdjustPopulation.className = "adjustPopulation hidden";
    this.divAdjustPopulation.appendChild(this.txtCityPopulationInfo2);
    this.txtCityPopulationInfo2.setAttribute("type", "number");
    this.txtCityPopulationInfo2.id =
      "txt" + this.city.name + "Population" + this.city.key;
    this.txtCityPopulationInfo2.className = "populationModifier rounded-10";
    this.txtCityPopulationInfo2.setAttribute('min', 0)
    this.divAdjustPopulation.appendChild(
      this.btnIncrease
    );
    this.divAdjustPopulation.appendChild(this.btnDecrease);
    this.divAdjustPopulation.appendChild(this.btnPopUp);

    // latitude
    this.h3cityInfoLabel2.textContent = "Latitude:";
    this.txtCityLatitudeInfo.textContent =
      this.city.latitude.toString() + "\u00B0" + this.city.whichSphereNS(); // 12.345°N or -45.546°S
    this.txtCityLatitudeInfo.classList.add("latInfo");
    this.divCityInfoRow2.appendChild(this.h3cityInfoLabel2);
    this.divCityInfoRow2.appendChild(this.txtCityLatitudeInfo);

    // longitude
    this.h3cityInfoLabel3.textContent = "Longitude:";
    this.txtCityLongitudeInfo.textContent =
      this.city.longitude.toString() + "\u00B0" + this.city.whichSphereEW(); // 34.567°E or -12.345°W
    this.txtCityLongitudeInfo.classList.add("longInfo");
    this.divCityInfoRow3.appendChild(this.h3cityInfoLabel3);
    this.divCityInfoRow3.appendChild(this.txtCityLongitudeInfo);
    this.btnClose.className = "btnClose";
    this.btnClose.textContent = "\u2718"; // "✘";
    // city Type Info
    this.h3cityInfoLabel4.textContent = "Type:";
    this.txtCityType.textContent = this.city.cityType;
    this.txtCityType.classList.add("typeInfo");
    this.divCityInfoRow4.appendChild(this.h3cityInfoLabel4);
    this.divCityInfoRow4.appendChild(this.txtCityType);
    // put it together
    this.divCity.appendChild(this.hiddenCityKey);
    this.divCity.appendChild(this.divAdjustPopulation);
    this.divCity.appendChild(this.btnClose);
    this.divCity.appendChild(this.txtH2CityName);
    this.divCity.appendChild(this.divCityInfoRow1);
    this.divCity.appendChild(this.divCityInfoRow2);
    this.divCity.appendChild(this.divCityInfoRow3);
    this.divCity.appendChild(this.divCityInfoRow4);
    this.btnModify.addEventListener("click", this.openPopUp);
    this.btnPopUp.addEventListener("click", this.closePopUp)
    this.divCity.deleteCard = this.deleteCard.bind(this);
    this.divCity.closePopUp = this.closePopUp.bind(this);
    this.divCity.getCityData = this.getCityData.bind(this);
    this.divCity.updateCard = this.updateCard.bind(this);
    this.divCity.getPopulation = this.getPopulation.bind(this);
    return this.divCity;
  }

  updateCard = (city) => {
    this.city = city;
    this.divCity.id = city.name + "_" + city.key;
    this.hiddenCityKey.id = "key_" + city.key;
    this.hiddenCityKey.value = city.key;
    this.divCity.dataset.city = city.name;
    this.divCity.dataset.key = city.key;
    this.txtH2CityName.textContent = city.name;
    // population
    this.txtCityPopulationInfo1.textContent = city.population.toString();
    this.txtCityPopulationInfo2.id =
      "txt" + city.name + "Population" + city.key;
    // latitude
    this.txtCityLatitudeInfo.textContent =
      city.latitude.toString() + "\u00B0" + city.whichSphereNS(); // 12.345°N or -45.546°S
    // longitude
    this.txtCityLongitudeInfo.textContent =
      city.longitude.toString() + "\u00B0" + city.whichSphereEW(); // 34.567°E or -12.345°W
    // city Type Info
    this.txtCityType.textContent = city.cityType;
    // put it together
  };

  deleteCard = (target) => {
    try {
      let container = this.divCity.parentElement;
      container.removeChild(this.divCity);
    } catch (e) {
      alert(e.message);
      throw e;
    }
    return true;
  };

  getPopulation = () => {
    return parseInt(this.txtCityPopulationInfo2.value) || 0;
  };
  openPopUp(e) {
    const parent = e.target.parentElement.parentElement;
    const ctrl = parent.querySelector(".adjustPopulation");
    ctrl.classList.remove("hidden");
  }
  closePopUp = () => {
    const ctrl = this.divCity.querySelector(".adjustPopulation");
    ctrl.classList.add("hidden");
  };
  getCityData = () => {
    return this.city;
  };
}

export default CityCard;
