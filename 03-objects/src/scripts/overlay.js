
/**
* @description creates a overlay with information on Most North/South city from Greenwich, England and the Equator.
* @name createOverlay
* @param {string} title -- "Most Northern", "Most Southern", "Most Eastern", "Most Western".
* 
*/
createOverlay(title) {

    const div = document.createElement('div');
    div.id = 'overlay';
    const h2 = document.createElement("h2");
    div.appendChild(h2);
    h2.appendChild(document.createTextNode(title));
    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.appendChild(document.createTextNode(this.name));
    // latitude
    const p1 = document.createElement('p');
    div.appendChild(p1);
    p1.appendChild(document.createTextNode(`Latitude: ${this.latitude}`));
    //
    const p2 = document.createElement('p');
    div.appendChild(p2);
    p2.appendChild(document.createTextNode(`Longitude: ${this.latitude}`));
    //
    const button = document.createElement("button");
    button.textContent = "OK";
    div.appendChild(button);
    document.body.appendChild(div);
    button.addEventListener('click', e => {
        document.body.removeChild(e.target.parentElement)
    });
}

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