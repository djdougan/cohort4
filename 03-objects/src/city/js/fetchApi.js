import Community from './Community.js';
import City from './City.js';

// const com = new Community();

const fetchApi = {
    /* GET: /all */
    all: async(url) => {
        try {
            const response = await fetch(url + "all");
            const json = await response.json();
            json.status = response.status;
            json.statusText = response.statusText;
            return json;
        } catch (err) {
            throw err
        }
    },
    /* POST: /add */
    add: async(url, city) => {

        let postObject = {
            method: 'POST',
            body: city.show(), // returns json string
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }; // end postObject
        try {
            const response = await fetch(url + "add", postObject);
            const json = await response.json();
            json.status = response.status;
            json.statusText = response.statusText;
            return json;
        } catch (err) {
            throw err
        }
    },

    /*POST: /read */
    read: async(url, data = {}) => {

        let postObject = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }; // end postObject
        try {
            const response = await fetch(url + "read", postObject);
            const json = await response.json();
            json.status = response.status;
            json.statusText = response.statusText;
            return json;
        } catch (err) {
            throw err;
        }
    },
    /* POST: /delete */
    delete: async(url, data = {}) => {

        let postObject = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }; // end postObject
        try {
            const response = await fetch(url + "delete", postObject);
            const json = await response.json();
            json.status = response.status;
            json.statusText = response.statusText;
            return json;
        } catch (err) {
            throw err;
        }
    },
    /*POST: /update */
    update: async(url, data = {}) => {
        let postObject = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json;"
            }
        }; // end postObject
        try {
            const response = await fetch(url + "update", postObject);
            const json = await response.json();
            json.status = response.status;
            json.statusText = response.statusText;
            return json;
        } catch (err) {
            throw err;
        }
    },

    //GET /save
    save: async(url) => {
        try {
            const response = await fetch(url + "save");
            let data = response.text();
            return data;
        } catch (err) {
            throw err;
        }
    },
    //GET and POST /clear
    clear: async(url = "") => {

        let postObject = {
            method: 'POST',
            body: JSON.stringify({}), // json string
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        };
        try {
            const response = await fetch(url + "clear", postObject);
            const json = await response.json();
            json.status = response.status;
            json.statusText = response.statusText;
            return json;
        } catch (err) {
            throw err;
        }

    }
};

export default fetchApi;