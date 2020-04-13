/**
 * Copyright (c) 2020
 *
 * @summary Creates a overlay with information about a city
 * @author Douglas J Dougan djdougan@gmail.com
 * @summary Competency 100D exercise at https://www.evolveu.ca/
 * Created at     : 2020-04-01 ‏‎20:17:55
 * Last modified  : 2020-04-02, ‏‎12:27:04
 *
 * @class Overlay
 */
class Overlay {

    constructor(parent) {
        this.parent = parent;
        this.overlayDiv = document.createElement('div');
    }
    /**
    * @description creates a overlay with information on Most North/South city from Greenwich, England and the Equator.
    * @name buildOverlay
    * @param {string} title -- "Population","Most Northern", "Most Southern", "Most Eastern", "Most Western".
    * @param {string} name -- name of city
    * @param {number} latitude -- latitude of city
    * @param {number} longitude -- longitude of city
    * @param {number} population -- population of city
    * @param {string} nsHem -- "N" for Northern and "S" for Southern
    * @param {string} ewHem -- "W" for Western and "E" for Eastern
    * 
    */
    buildOverlay(title, name, latitude, longitude, population, nsHem, ewHem) {
        this.overlayDiv.id = 'overlay';
        const h2 = document.createElement("h2");
        this.overlayDiv.appendChild(h2);
        h2.textContent = title;
        const h3 = document.createElement("h3");
        this.overlayDiv.appendChild(h3);
        h3.textContent = name;
        // latitude
        const p1 = document.createElement('p');
        this.overlayDiv.appendChild(p1);
        p1.textContent = `Latitude: ${latitude}` + '\u00B0' + nsHem; // 12.345°N or -45.546°S;;
        //
        const p2 = document.createElement('p');
        this.overlayDiv.appendChild(p2);
        p2.textContent = `Longitude: ${longitude}` + '\u00B0' + ewHem; // 34.567°E or -12.345°W 
        const p3 = document.createElement('p');
        this.overlayDiv.appendChild(p3);
        p2.textContent = `population: ${population}`;


        const btnClose = document.createElement("button");
        btnClose.textContent = "Close";
        this.overlayDiv.appendChild(btnClose);

        this.parent.appendChild(this.overlayDiv);
        btnClose.addEventListener('click', e => {
            this.closeOverLay();
        });
    }
    closeOverLay() {
        this.parent.remove(this.overlayDiv)
    }

}