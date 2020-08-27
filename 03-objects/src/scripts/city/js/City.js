
class City {


    constructor(key, name, latitude, longitude, population) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }


    show() {
        // creates a single string with the 4 attributes 
        // since property.name is a string, number catenation will result in string
        let result = JSON.stringify({ "key": this.key, "name": this.name, "latitude": this.latitude, "longitude": this.longitude, "population": this.population });
        return result;
    }


    movedIn(increase) {
        let moveIn = 0;
        try {
            // if this is a number
            if (!isNaN(increase)) {
                //
                if (Number.isInteger(increase)) {
                    moveIn = increase;
                } else {
                    moveIn = parseInt(increase);
                }
            } else {
                throw new Error(`The value ${increase} is not a valid number.`);
            }
        } catch (err) {
            throw err
        }
        this.population += moveIn;
        return this.population;
    }

    movedOut(decrease) {
        let moveOut = 0;
        try {
            // if this is a number
            if (!isNaN(decrease)) {
                if (Number.isInteger(decrease)) {
                    moveOut = decrease;
                } else {
                    moveOut = parseInt(decrease);
                }
            } else {
                throw new Error(`
            The value $ { decrease }
            is not a valid number.
            `);
            }
        } catch (err) {
            throw err
        }
        this.population -= moveOut;
        return this.population;
    }


    howBig() {
        let result = '';

        if (this.population > 100000) {
            // City – a population > 100,000
            result = 'City';
        } else if (this.population >= 20000 && this.population <= 100000) {
            // Large town – a large town has a population of 20, 000 to 100,000
            result = 'Large Town';
        } else if (this.population >= 1000 && this.population < 20000) {
            // Town – a town has a population of 1, 000 to 20,000
            result = 'Town';
        } else if (this.population > 100 && this.population < 1000) {
            // Village – larger than a hamlet but smaller than a town
            result = 'Village';
        } else if (this.population > 0 && this.population < 100) {
            // Hamlet – population 1 - 100
            result = 'Hamlet';
        }

        return result;

    };
}

export default City;