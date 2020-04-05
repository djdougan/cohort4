/**
 * Copyright (c) 2020
 *
 * @summary Working with objects
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-03-31 ‏‎20:17:55 
 * Last modified  : 2020-04-02, ‏‎12:27:04 
 *
 * @name CityCard
 * @class
 */


class CityCard {
    /**
     * jsDoc
    * @description
    * @name constructor
    * @param {City} city -- city object.
    */
    constructor(city) {

        this.divCity = document.createElement('div'); // Card container
        this.txtH2CityName = document.createElement('h2');
        this.divCityInfoRow1 = document.createElement('div'); // population container
        this.h3cityInfoLabel1 = document.createElement('h3'); // population header
        this.txtCityPopulationInfo = document.createElement('p'); // population
        this.divCityInfoRow2 = document.createElement('div'); // latitude container
        this.h3cityInfoLabel2 = document.createElement('h3'); // latitude header
        this.txtCityLatitudeInfo = document.createElement('p'); // latitude 
        // this.span2 = document.createElement('span');  // degree symbol '\u00B0'

        this.divCityInfoRow3 = document.createElement('div');  // Longitude container
        this.h3cityInfoLabel3 = document.createElement('h3'); // longitude header
        this.txtCityLongitudeInfo = document.createElement('p'); // longitude 
        // this.span3 = document.createElement('span'); // degree symbol '\u00B0'

        this.divCityInfoRow4 = document.createElement('div');  // city Type container
        this.h3cityInfoLabel4 = document.createElement('h3'); // city Type header
        this.txtCityType = document.createElement('p'); // "City", "Large Town", "Town"... 
        this.closetBtn = document.createElement('button'); // close button
    };

    /**
    * @description builds a card element with city properties
    * @name buildCard
    * @return {HTMLDivElement} -- returns a Card HTMLDivElement
    */
    buildCard(name, latitude, longitude, population, cityType, ) {
        // header
        this.divCity.className = "city rounded-10";
        this.divCity.dataset.city = name;
        this.txtH2CityName.textContent = name;

        // population
        this.h3cityInfoLabel1.textContent = 'Population:';
        this.txtCityPopulationInfo.textContent = population.toString();
        this.divCityInfoRow1.appendChild(this.h3cityInfoLabel1);
        this.divCityInfoRow1.appendChild(this.txtCityPopulationInfo);

        // latitude
        this.h3cityInfoLabel2.textContent = 'Latitude:';
        this.txtCityLatitudeInfo.textContent = latitude.toString() + '\u00B0';
        this.divCityInfoRow2.appendChild(this.h3cityInfoLabel2);
        this.divCityInfoRow2.appendChild(this.txtCityLatitudeInfo);

        // longitude
        this.h3cityInfoLabel3.textContent = 'Longitude:';
        this.txtCityLongitudeInfo.textContent = longitude.toString() + '\u00B0';
        this.divCityInfoRow3.appendChild(this.h3cityInfoLabel3);
        this.divCityInfoRow3.appendChild(this.txtCityLongitudeInfo);
        this.closetBtn.className = "closeBtn"
        this.closetBtn.textContent = "✘";//\u2717";
        this.closetBtn.addEventListener('click', e => {
            this.deleteCard();
        });
        // city Type Info
        this.h3cityInfoLabel4.textContent = "Type:";
        this.txtCityType.textContent = cityType;

        // put it together
        this.divCity.appendChild(this.closetBtn);
        this.divCity.appendChild(this.txtH2CityName);
        this.divCity.appendChild(this.divCityInfoRow1);
        this.divCity.appendChild(this.divCityInfoRow2);
        this.divCity.appendChild(this.divCityInfoRow3);
        this.divCity.appendChild(this.divCityInfoRow4);
        return this.divCity;
    }

    /**
    * @description deletes a card element 
    * @name deleteCard
    */
    deleteCard() {
        let parent = this.divCity;
        parent.removeChild(this.divCity);
    }

    /**
    * @description update a card elements with city properties
    * @name updateCard
    * @param {string} name -- name of city
    * @param {number} latitude -- latitude of city
    * @param {number} longitude -- longitude of city
    * @param {number} population -- population of city
    * @param {string} nsHem -- "N" for Northern and "S" for Southern
    * @param {string} ewHem -- "W" for Western and "E" for Eastern
    */
    updateCard(name, latitude, longitude, population, nsHem, ewHem) {
        //'\u00B0'
        this.txtH2CityName.textContent = name;
        this.txtCityLatitudeInfo.textContent = latitude.toString() + '\u00B0' + nsHem; // 12.345°N or -45.546°S
        this.txtCityLongitudeInfo.textContent = longitude.toString() + '\u00B0' + ewHem; // 34.567°E or -12.345°W
        this.txtCityPopulationInfo.textContent = population.toString();
    }



}


export default CityCard;
