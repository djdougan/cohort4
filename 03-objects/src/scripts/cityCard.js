

class CityCard {
    constructor(city) {
        this.name = city.name;
        this.population = city.population;
        this.latitude = city.latitude;
        this.longitude = city.longitude;
    };

    buildCard() {
        // main div
        const divCity = document.createElement('div');
        divCity.className = "city rounded-10";
        // header
        const h2CityName = document.createElement('h2');
        h2CityName.classList.add("cityName");
        h2CityName.appendChild(document.createTextNode(this.name));

        // population
        const divCityInfoRow1 = document.createElement('div');
        const h3cityInfoLabel1 = document.createElement('h3');
        const cityPopInfo = document.createElement('p');
        divCityInfoRow1.classList.add("cityInfoRow")
        h3cityInfoLabel1.classList.add("cityInfoLabel");
        h3cityInfoLabel1.appendChild(document.createTextNode('Population:'));
        cityPopInfo.classList.add("cityNumber");
        cityPopInfo.appendChild(document.createTextNode(this.population));
        divCityInfoRow1.appendChild(h3cityInfoLabel1);
        divCityInfoRow1.appendChild(cityPopInfo);

        // latitude
        const divCityInfoRow2 = document.createElement('div');
        const h3cityInfoLabel2 = document.createElement('h3');
        const cityLatInfo2 = document.createElement('p');
        const span2 = document.createElement('span'); //'\u00B0'
        divCityInfoRow2.classList.add("cityInfoRow")
        h3cityInfoLabel2.classList.add("cityInfoLabel");
        cityLatInfo2.classList.add("cityNumber");

        h3cityInfoLabel2.appendChild(document.createTextNode('Latitude:'));
        cityLatInfo2.appendChild(document.createTextNode(this.latitude));
        span2.textContent = '\u00B0'
        cityLatInfo2.appendChild(span2);
        divCityInfoRow2.appendChild(h3cityInfoLabel2);
        divCityInfoRow2.appendChild(cityLatInfo2);

        // longitude
        const divCityInfoRow3 = document.createElement('div');
        const h3cityInfoLabel3 = document.createElement('h3');
        h3cityInfoLabel3.classList.add("cityInfoLabel");
        divCityInfoRow3.classList.add("cityInfoRow")
        h3cityInfoLabel3.appendChild(document.createTextNode('Longitude:'))
        const cityLongInfo3 = document.createElement('p');
        cityLongInfo3.classList.add("cityNumber")
        cityLongInfo3.appendChild(document.createTextNode(this.longitude))
        const span3 = document.createElement('span'); //'\u00B0'
        span3.textContent = '\u00B0'
        cityLongInfo3.appendChild(span3);
        divCityInfoRow3.appendChild(h3cityInfoLabel3);
        divCityInfoRow3.appendChild(cityLongInfo3);


        // put it together
        divCity.appendChild(h2CityName);
        divCity.appendChild(divCityInfoRow1);
        divCity.appendChild(divCityInfoRow2);
        divCity.appendChild(divCityInfoRow3);
        return divCity;
    }
}




export default CityCard;
