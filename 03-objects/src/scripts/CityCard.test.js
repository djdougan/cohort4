import CityCard from './CityCard';
import City from './City';
import Community from './Community';

describe('contains test for cityCard.BuildCard', () => {

    test("Test: BuildCard", () => {
        let city = new City(1, "A", 1, 1, 1);
        let cityCard = new CityCard()
        let div = cityCard.buildCard(city.key, city.name, city.latitude, city.longitude, city.population);
        expect(div).toBeTruthy();

    });
});