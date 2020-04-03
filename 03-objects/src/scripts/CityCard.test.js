import CityCard from './CityCard'
import { City, Community } from './City'

describe('contains test for cityCard.BuildCard', () => {

    test("Test: BuildCard", () => {
        let city = new City("Edmonton", 1285711, 51.0447, 114.0719);
        let cityCard = new CityCard(city)
        let div = cityCard.buildCard();
        expect(div).toBeTruthy();

    });
});


