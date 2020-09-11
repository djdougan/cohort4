import fetchApi from "./fetchApi";
import City from "./City";
import Community from "./Community";

global.fetch = require("node-fetch");

const url = "http://localhost:5000/";

test("Test if fetchApi works", async () => {
  let com = new Community();
  com.createCity("A", 1, 1, 1, 1);
  com.createCity("B", 2, 2, 2, 2);
  com.createCity("C", 3, 3, 3, 3);
  com.createCity("D", -1, -1, 1, 4);

  // clear server
  let data = await fetchApi.clear(url);
  expect(data.status).toEqual(200);

  // server should have no data
  data = await fetchApi.all(url);
  expect(data.status).toEqual(200);
  expect(data.length).toBe(0);

  // add first city to server
  data = await fetchApi.add(url, com.communities[0]);
  expect(data.status).toEqual(200);
  // there should be only one
  data = await fetchApi.all(url);
  expect(data.length).toEqual(1);
  expect(data[0].name).toBe("A");

  data = await fetchApi.add(url, com.communities[1]);
  expect(data.status).toEqual(200);
  // there should be 2
  data = await fetchApi.all(url);
  expect(data.status).toEqual(200);
  expect(data.length).toEqual(2);
  expect(data[1].name).toBe("B");
  // add a third
  data = await fetchApi.add(url, com.communities[2]);
  expect(data.status).toEqual(200);
  // there should be 3
  data = await fetchApi.all(url);
  expect(data.status).toEqual(200);
  expect(data.length).toEqual(3);
  expect(data[2].name).toBe("C");

  // get city by Key and only one record is returned
  data = await fetchApi.read(url, { key: 2 });
  expect(data.status).toEqual(200);
  expect(data[0].name).toBe("B");
  expect(data.length).toEqual(1);

  // Test Update "Change 'B' to Y"
  data[0].name = "Y";
  data = await fetchApi.update(url, data[0]);
  expect(data.status).toEqual(200);
  data = await fetchApi.read(url, { key: 2 });
  expect(data[0].key).toBe(2);
  expect(data[0].name).toBe("Y");
  expect(data[0].latitude).toBe(2);
  expect(data[0].longitude).toBe(2);
  expect(data.length).toEqual(1);

  // Test delete
  // there is 3 records
  data = await fetchApi.all(url);
  expect(data.status).toEqual(200);
  expect(data.length).toBe(3);
  // delete 1 record
  data = await fetchApi.delete(url, { key: 2 });
  expect(data.status).toEqual(200);
  // there should only be 2
  data = await fetchApi.all(url);
  expect(data.status).toEqual(200);
  expect(data.length).toBe(2);

  // Test Save
  data = await fetchApi.save(url);
  data = await fetchApi.all(url);
  expect(data.status).toEqual(200);
  expect(data.length).toBe(2);
});
