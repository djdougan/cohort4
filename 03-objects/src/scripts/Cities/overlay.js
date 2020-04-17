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
    buildOverlay(title = "Title", name = "name", latitude = 0, longitude = 0, population = 0, nsHem = "", ewHem = "") {
        this.overlayDiv.id = 'overlay';
        const container = document.createElement('div');
        if (title !== "") {
            const h2 = document.createElement("h2");
            container.appendChild(h2);
            h2.textContent = title;
        }
        if (name !== "") {
            const h3 = document.createElement("h3");
            container.appendChild(h3);
            h3.textContent = name;
        }
        // latitude
        if (latitude !== 0) {
            const p1 = document.createElement('p');
            container.appendChild(p1);
            p1.textContent = `Latitude: ${latitude}` + '\u00B0' + (nsHem === "Northern Hemisphere" ? "N" : "S"); // 12.345°N or -45.546°S;;
        }
        if (longitude !== 0) {
            const p2 = document.createElement('p');
            container.appendChild(p2);
            p2.textContent = `Longitude: ${longitude}` + '\u00B0' + (ewHem === "Western Hemisphere" ? "W" : "E"); // 34.567°E or -12.345°W 
        }
        if (population !== 0) {
            const p3 = document.createElement('p');
            container.appendChild(p3);
            p3.textContent = `population: ~${population}`;
        }
        const btnClose = document.createElement("button");
        btnClose.textContent = "Close";
        container.appendChild(btnClose);

        this.overlayDiv.appendChild(container);
        this.parent.appendChild(this.overlayDiv);
        btnClose.addEventListener('click', e => {
            this.closeOverLay();
        });
    }
    closeOverLay() {
        this.parent.removeChild(this.overlayDiv)
    }

}
export default Overlay;