


class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    };
    show() {
        // creates a single string with the 4 attributes 
        // since property.name is a string, number catenation will result in string
        let result = this.name + ", " + this.latitude + ", " + this.longitude + ", " + this.population;
        return result;
    }
    movedIn(increase) {
        // receives a number that will be added to the city’s population 
        if (!isNaN(increase)) {
            this.population += parseInt(increase);
        }
        return this.population;
    }
    movedOut(decrease) {
        // receives a number that will be subtracted from the city’s population
        if (!isNaN(decrease)) {
            this.population -= parseInt(decrease);
        }
        return this.population;

    }
    howBig() {
        let result = "";

        if (this.population > 100000) {
            // City – a population > 100,000
            result = "City";
        } else if (this.population >= 20000 && this.population <= 100000) {
            // Large town – a large town has a population of 20, 000 to 100,000
            result = "Large Town";
        } else if (this.population >= 1000 && this.population < 20000) {
            // Town – a town has a population of 1, 000 to 20,000
            result = "Town";
        } else if (this.population > 100 && this.population < 1000) {
            // Village – larger than a hamlet but smaller than a town
            result = "Village";
        } else if (this.population > 1 && this.population < 100) {
            // Hamlet – population 1 - 100
            result = "Hamlet";
        }

        return result;

    };
}


class Community {
    constructor() {
        this.communities = [];
    }

    createCity(name, latitude, longitude, population) {
        let city = new City(name, latitude, longitude, population);
        this.communities.push(city);
        return this.communities;
    }

    deleteCity(name) {
        let city = this.communities.filter(x => x.name === name);
        let index = this.communities.findIndex(x => x.name === name)
        this.communities.splice(index, 1);
        return this.communities;
    }
    whichSphere(city) {
        //Northern Hemisphere or Southern 
        let community = this.communities.find(c => c.name === city);
        if (community.latitude > 0) {
            return "Northern Hemisphere";
        } else {
            return "Southern Hemisphere";
        }
        return "";
    }
    getMostNorthern() {
        let highestLatitude = Math.max.apply(Math, this.communities.map(function (city) { return city.latitude; }))
        return this.communities.find(city => city.latitude === highestLatitude);
    }
    getMostSouthern() {

        let highestLatitude = Math.min.apply(Math, this.communities.map(function (city) { return city.latitude; }))
        return this.communities.find(city => city.latitude === highestLatitude);
    }
    getPopulation() {
        //total for all
        let results = 0;
        let length = this.communities.length;
        let index;
        for (index = 0; index < length; index++) {
            results += this.communities[index].population;
        }
        return results;
    }


}
export { City, Community };