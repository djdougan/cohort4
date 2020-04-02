

class CityCard {
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

    buildCard(txtName, txtLatitude, txtLongitude, txtPopulation) {
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
        this.span3.textContent = '\u00B0'
        this.cityLongInfo3.appendChild(this.span3);
        this.divCityInfoRow3.appendChild(this.h3cityInfoLabel3);
        this.divCityInfoRow3.appendChild(this.cityLongInfo3);
        this.closetBtn.className = "closeBtn"
        this.closetBtn.textContent = "\u2717";

        this.divCity.addEventListener('click', (e) => {
            this.bindTextBoxes(txtName, txtLatitude, txtLongitude, txtPopulation);

        });

        this.closetBtn.addEventListener('click', this.closeCard);

        // put it together
        this.divCity.appendChild(this.closetBtn);
        this.divCity.appendChild(this.h2CityName);
        this.divCity.appendChild(this.divCityInfoRow1);
        this.divCity.appendChild(this.divCityInfoRow2);
        this.divCity.appendChild(this.divCityInfoRow3);

        return this.divCity;
    }
    closeCard(event) {

        let parent = event.target.parentElement;
        let cityList = parent.parentElement;
        cityList.removeChild(parent);
    }

    bindTextBoxes(txtName, txtLatitude, txtLongitude, txtPopulation) {
        let parent = this.divCity.parentNode;


        let cities = Array.from(parent.children);
        console.log(cities);
        cities.forEach((city) => {
            city.classList.remove('selected');
        });
        this.divCity.classList.add('selected');
        // set values of 
        txtName.value = this.name;
        txtLatitude.value = this.latitude;
        txtLongitude.value = this.longitude;
        txtPopulation.value = this.population;
    }
}





export default CityCard;
