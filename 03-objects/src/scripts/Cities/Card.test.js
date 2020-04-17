import City from './City';
import Card from './Card';
import Community from './Community';

describe('contains test for Card.BuildCard', () => {

    test("Test: BuildCard", () => {
        let city = new City(1, "A", 1, 1, 1);
        let card = new Card();

        let div = card.buildCard(city.key, city.name, city.latitude, city.longitude, city.population);
        expect(div).toBeTruthy();

    });
});