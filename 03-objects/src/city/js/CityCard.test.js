import City from './City';
import Card from './CityCard';
import Community from './Community';

describe('contains test for Card.BuildCard', () => {

    test("Test: BuildCard", () => {
        let city = new City(1, "A", 1, 1, 1);
        let card = new Card(city);
        const cityList = document.createElement('div');
        let ca = card.buildCard()
        cityList.appendChild(ca);
        expect(cityList.children.length).toBe(1);
        city.movedIn(10)
        ca.updateCard(city);
        let test = ca.getCityData()
        expect(test.population).toBe(11);
        city.movedOut(1);
        ca.updateCard(city);
        test = ca.getCityData();
        expect(test.population).toBe(10);

    });
});