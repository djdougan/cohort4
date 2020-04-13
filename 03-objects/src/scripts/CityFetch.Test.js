import CityFetch from './CityFetch';
import City from './City';
import Community from "./Community";

global.fetch = require('node-fetch');

const url = 'http://localhost:5000/';

test('Test if CityFetch works', async() => {

    let com = new Community();
    com.createCity(1, "A", 1, 1, 1);
    com.createCity(2, "B", 2, 2, 2);
    com.createCity(3, "C", 3, 3, 3);
    com.createCity(4, "D", -1, -1, 1);

    // clear server
    let data = await CityFetch.clear(url);
    expect(data.status).toEqual(200);

    // server should have no data
    data = await CityFetch.all(url);
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    // add first city to server
    data = await CityFetch.add(url, com.communities[0]);
    expect(data.status).toEqual(200);
    // there should be only one
    data = await CityFetch.all(url);
    expect(data.length).toEqual(1);
    expect(data[0].name).toBe("A");

    data = await CityFetch.add(url, com.communities[1]);
    expect(data.status).toEqual(200);
    // there should be 2 
    data = await CityFetch.all(url);
    expect(data.status).toEqual(200);
    expect(data.length).toEqual(2);
    expect(data[1].name).toBe("B");
    // add a third
    data = await CityFetch.add(url, com.communities[2]);
    expect(data.status).toEqual(200);
    // there should be 3 
    data = await CityFetch.all(url);
    expect(data.status).toEqual(200);
    expect(data.length).toEqual(3);
    expect(data[2].name).toBe("C");

    // get city by Key and only one record is returned
    data = await CityFetch.read(url, { key: 2 });
    expect(data.status).toEqual(200);
    expect(data[0].name).toBe("B");
    expect(data.length).toEqual(1);

    // Test Update "Change 'B' to Y"
    data[0].name = "Y";
    data = await CityFetch.update(url, data[0]);
    expect(data.status).toEqual(200);
    data = await CityFetch.read(url, { key: 2 });
    console.log(data[0]);
    expect(data[0].key).toBe(2);
    expect(data[0].name).toBe("Y");
    expect(data[0].latitude).toBe(2);
    expect(data[0].longitude).toBe(2);
    expect(data.length).toEqual(1);

    // Test delete
    // there is 3 records
    data = await CityFetch.all(url);
    expect(data.status).toEqual(200);
    expect(data.length).toBe(3);
    // delete 1 record
    data = await CityFetch.delete(url, { key: 2 });
    expect(data.status).toEqual(200);
    // there should only be 2
    data = await CityFetch.all(url);
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);

    // Test Save
    data = await CityFetch.save(url);
    data = await CityFetch.all(url);
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);






});