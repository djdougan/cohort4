/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-31 ‏‎20:17:55 
 * Last modified  : 2020-04-02, ‏‎12:27:04 
 *
 * @class Card
 */


class Card {
    /**
     * jsDoc
     * @description
     * @name constructor
     */
    constructor() {

        this.divCity = document.createElement('div'); // Card container
        this.hiddenCityKey = document.createElement('input');
        this.txtH2CityName = document.createElement('h2');
        this.divCityInfoRow1 = document.createElement('div'); // population container
        this.h3cityInfoLabel1 = document.createElement('h3'); // population header
        this.txtCityPopulationInfo1 = document.createElement('p'); // population
        this.btnPopulation = document.createElement('button'); // population

        this.divAdjustPopulation = document.createElement('div');
        this.h3CityPopulationInfo2 = document.createElement('h3'); // population
        this.txtCityPopulationInfo2 = document.createElement('input'); // population
        this.btnIncrease = document.createElement("button");
        this.btnDecrease = document.createElement("button");

        this.divCityInfoRow2 = document.createElement('div'); // latitude container
        this.h3cityInfoLabel2 = document.createElement('h3'); // latitude header
        this.txtCityLatitudeInfo = document.createElement('p'); // latitude 
        // this.span2 = document.createElement('span');  // degree symbol '\u00B0'

        this.divCityInfoRow3 = document.createElement('div'); // Longitude container
        this.h3cityInfoLabel3 = document.createElement('h3'); // longitude header
        this.txtCityLongitudeInfo = document.createElement('p'); // longitude 
        // this.span3 = document.createElement('span'); // degree symbol '\u00B0'

        this.divCityInfoRow4 = document.createElement('div'); // city Type container
        this.h3cityInfoLabel4 = document.createElement('h3'); // city Type header
        this.txtCityType = document.createElement('p'); // "City", "Large Town", "Town"... 
        this.closetBtn = document.createElement('button'); // close button
        return this;
    };

    /**
     * @description builds a card element with city properties
     * @name buildCard
     * @return {HTMLDivElement} -- returns a Div
     */
    buildCard(key, name, latitude, longitude, population, cityType, nsHem, ewHem) {
        // header
        this.divCity.className = "city rounded-10";
        this.divCity.id = name + '_' + key;
        this.hiddenCityKey.setAttribute('type', 'hidden');
        this.hiddenCityKey.id = "key_" + key;
        this.hiddenCityKey.name = 'cityKey';
        this.hiddenCityKey.value = key;

        this.divCity.dataset.city = name;
        this.divCity.dataset.key = key;
        this.txtH2CityName.textContent = name;
        this.txtH2CityName.classList.add('cityName');

        // population
        this.h3cityInfoLabel1.textContent = 'Population:';
        this.txtCityPopulationInfo1.textContent = population.toString();
        this.txtCityPopulationInfo1.classList.add('popInfo');
        this.btnPopulation.textContent = '\u21C5';
        this.btnPopulation.className = 'btnModify';
        this.btnPopulation.title = "Adjust Population";
        this.divCityInfoRow1.appendChild(this.h3cityInfoLabel1);
        this.divCityInfoRow1.appendChild(this.txtCityPopulationInfo1);
        this.divCityInfoRow1.appendChild(this.btnPopulation);

        this.btnIncrease.textContent = "\u2795"; //➕
        this.btnIncrease.title = "Increase Population";
        this.btnDecrease.textContent = "\u2796"; // ➖
        this.btnDecrease.title = "Decrease Population";
        this.h3CityPopulationInfo2.textContent = "Modify Population By:";
        this.divAdjustPopulation.appendChild(this.h3CityPopulationInfo2);
        this.divAdjustPopulation.className = "adjustPopulation hidden";
        this.divAdjustPopulation.appendChild(this.txtCityPopulationInfo2);
        this.txtCityPopulationInfo2.setAttribute("type", "text");
        this.txtCityPopulationInfo2.id = "txt" + name + "Population" + key;
        this.txtCityPopulationInfo2.className = "populationModifier rounded-10";
        this.divAdjustPopulation.appendChild(this.btnIncrease);
        this.divAdjustPopulation.appendChild(this.btnDecrease);


        // latitude
        this.h3cityInfoLabel2.textContent = 'Latitude:';
        this.txtCityLatitudeInfo.textContent = latitude.toString() + '\u00B0' + nsHem; // 12.345°N or -45.546°S
        this.txtCityLatitudeInfo.classList.add('latInfo')
        this.divCityInfoRow2.appendChild(this.h3cityInfoLabel2);
        this.divCityInfoRow2.appendChild(this.txtCityLatitudeInfo);

        // longitude
        this.h3cityInfoLabel3.textContent = 'Longitude:';
        this.txtCityLongitudeInfo.textContent = longitude.toString() + '\u00B0' + ewHem; // 34.567°E or -12.345°W
        this.txtCityLongitudeInfo.classList.add('longInfo');
        this.divCityInfoRow3.appendChild(this.h3cityInfoLabel3);
        this.divCityInfoRow3.appendChild(this.txtCityLongitudeInfo);
        this.closetBtn.className = "btnClose";
        this.closetBtn.textContent = "\u2718"; // "✘"; 
        // city Type Info
        this.h3cityInfoLabel4.textContent = "Type:";
        this.txtCityType.textContent = cityType;
        this.txtCityType.classList.add("typeInfo");
        this.divCityInfoRow4.appendChild(this.h3cityInfoLabel4);
        this.divCityInfoRow4.appendChild(this.txtCityType);
        // put it together
        this.divCity.appendChild(this.hiddenCityKey);
        this.divCity.appendChild(this.divAdjustPopulation);
        this.divCity.appendChild(this.closetBtn);
        this.divCity.appendChild(this.txtH2CityName);
        this.divCity.appendChild(this.divCityInfoRow1);
        this.divCity.appendChild(this.divCityInfoRow2);
        this.divCity.appendChild(this.divCityInfoRow3);
        this.divCity.appendChild(this.divCityInfoRow4);
        return this.divCity;
    };

    updateCardData(key, name, latitude, longitude, population, nsHem, ewHem) {
        let card = document.querySelector(`[data-key="${key}"]`);
        card.querySelector('#txtCityLatitudeInfo').textContent = latitude.toString() + '\u00B0' + nsHem; // 12.345°N or -45.546°S
        card.querySelector('#txtCityLongitudeInfo').textContent = longitude.toString() + '\u00B0' + ewHem; // 34.567°E or -12.345°W
        card.querySelector('#txtCityPopulationInfo1').textContent = population.toString();
        card.querySelector('#txtH2CityName').textContent = name;
    };

    addFunctions(openPopUp, increasePop, decreasePop, closeCard, cardClick) {
        if (this.btnPopulation)
            this.btnPopulation.addEventListener('click', openPopUp);
        if (this.btnIncrease)
            this.btnIncrease.addEventListener('click', increasePop);
        if (this.btnIncrease)
            this.btnDecrease.addEventListener('click', decreasePop);
        if (this.closetBtn)
            this.closetBtn.addEventListener('click', closeCard);
        if (this.divCity)
            this.divCity.addEventListener("click", cardClick);
    }


}


export default Card;