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
    * @param {object} city -- city object.
    */

    constructor(city) {
        this.name = city.name;
        this.population = city.population;
        this.latitude = city.latitude;
        this.longitude = city.longitude;


        this.divCity = document.createElement('div');
        this.h2CityName = document.createElement('h2');
        this.divCityInfoRow1 = document.createElement('div');
        this.h3cityInfoLabel1 = document.createElement('h3');
        this.cityPopInfo = document.createElement('p');
        this.divCityInfoRow2 = document.createElement('div');
        this.h3cityInfoLabel2 = document.createElement('h3');
        this.cityLatInfo2 = document.createElement('p');
        this.span2 = document.createElement('span'); //'\u00B0'
        this.divCityInfoRow3 = document.createElement('div');
        this.h3cityInfoLabel3 = document.createElement('h3');
        this.cityLongInfo3 = document.createElement('p');
        this.span3 = document.createElement('span'); //'\u00B0'
        this.closetBtn = document.createElement('button');
    };

    /**
    * @description builds a card element with city properties
    * @name buildCard
    * @param {string} txtNameId -- textBox CityName to Bind to
    * @param {string} txtLatitudeId -- textBox txtLatitude to Bind to
    * @param {string} txtLongitudeId -- textBox txtLongitude to Bind to
    * @param {string} txtPopulationId -- textBox txtPopulation to Bind to
    * @return {HTMLDivElement} -- returns a Card HTMLDivElement
    */
    buildCard(txtNameId, txtLatitudeId, txtLongitudeId, txtPopulationId) {
        // header
        this.divCity.className = "city rounded-10";
        this.divCity.dataset.city = this.name;
        this.h2CityName.classList.add("cityName");
        this.h2CityName.appendChild(document.createTextNode(this.name));

        // population
        this.divCityInfoRow1.classList.add("cityInfoRow")
        this.h3cityInfoLabel1.classList.add("cityInfoLabel");
        this.h3cityInfoLabel1.appendChild(document.createTextNode('Population:'));
        this.cityPopInfo.classList.add("cityNumber");
        this.cityPopInfo.appendChild(document.createTextNode(this.population));
        this.divCityInfoRow1.appendChild(this.h3cityInfoLabel1);
        this.divCityInfoRow1.appendChild(this.cityPopInfo);

        // latitude
        this.divCityInfoRow2.classList.add("cityInfoRow")
        this.h3cityInfoLabel2.classList.add("cityInfoLabel");
        this.cityLatInfo2.classList.add("cityNumber");

        this.h3cityInfoLabel2.appendChild(document.createTextNode('Latitude:'));
        this.cityLatInfo2.appendChild(document.createTextNode(this.latitude));
        this.span2.textContent = '\u00B0'
        this.cityLatInfo2.appendChild(this.span2);
        this.divCityInfoRow2.appendChild(this.h3cityInfoLabel2);
        this.divCityInfoRow2.appendChild(this.cityLatInfo2);

        // longitude
        this.h3cityInfoLabel3.classList.add("cityInfoLabel");
        this.divCityInfoRow3.classList.add("cityInfoRow")
        this.h3cityInfoLabel3.appendChild(document.createTextNode('Longitude:'))
        this.cityLongInfo3.classList.add("cityNumber")
        this.cityLongInfo3.appendChild(document.createTextNode(this.longitude))
        this.span3.textContent = "°";//;'\u00B0'
        this.cityLongInfo3.appendChild(this.span3);
        this.divCityInfoRow3.appendChild(this.h3cityInfoLabel3);
        this.divCityInfoRow3.appendChild(this.cityLongInfo3);
        this.closetBtn.className = "closeBtn"

        this.closetBtn.textContent = "✘";//\u2717";

        // put it together
        this.divCity.appendChild(this.closetBtn);
        this.divCity.appendChild(this.h2CityName);
        this.divCity.appendChild(this.divCityInfoRow1);
        this.divCity.appendChild(this.divCityInfoRow2);
        this.divCity.appendChild(this.divCityInfoRow3);

        return this.divCity;
    }

    /**
    * @description creates a overlay with information on Most North/South city from Greenwich, England and the Equator.
    * @name createOverlay
    * @param {string} title -- "Most Northern", "Most Southern", "Most Eastern", "Most Western".
    * 
    */
    // createOverlay(title) {

    //     const div = document.createElement('div');
    //     div.id = 'overlay';
    //     const h2 = document.createElement("h2");
    //     div.appendChild(h2);
    //     h2.appendChild(document.createTextNode(title));
    //     const h3 = document.createElement("h3");
    //     div.appendChild(h3);
    //     h3.appendChild(document.createTextNode(this.name));
    //     // latitude
    //     const p1 = document.createElement('p');
    //     div.appendChild(p1);
    //     p1.appendChild(document.createTextNode(`Latitude: ${this.latitude}`));
    //     //
    //     const p2 = document.createElement('p');
    //     div.appendChild(p2);
    //     p2.appendChild(document.createTextNode(`Longitude: ${this.latitude}`));
    //     //
    //     const button = document.createElement("button");
    //     button.textContent = "OK";
    //     div.appendChild(button);
    //     document.body.appendChild(div);
    //     button.addEventListener('click', e => {
    //         document.body.removeChild(e.target.parentElement)
    //     });
    // }

    // /**
    // * @description binds data to textBoxes outside of Card
    // * @name bindTextBoxes
    // * @param {string} txtNameId -- Name of City textBox
    // * @param {string} txtLatitudeId -- Name of Latitude textBox
    // * @param {string} txtLongitudeId -- Name of Longitude textBox
    // * @param {string} txtPopulationId -- Name of Population textBox
    // */
    // bindTextBoxes(txtNameId, txtLatitudeId, txtLongitudeId, txtPopulationId) {
    //     let parent = this.divCity.parentNode;

    //     let cities = Array.from(parent.children);
    //     cities.forEach((city) => {
    //         city.classList.remove('selected');
    //     });
    //     this.divCity.classList.add('selected');
    //     // set values of 
    //     document.getElementById(txtNameId).value = this.name;
    //     document.getElementById(txtLatitudeId).value = this.latitude;
    //     document.getElementById(txtLongitudeId).value = this.longitude;
    //     document.getElementById(txtPopulationId).value = this.population;
    // }
}


export default CityCard;
