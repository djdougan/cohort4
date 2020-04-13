import Community from './Community.js';
import City from './City.js';

// const com = new Community();

const CityFetch = {
    /* GET: /all */
    all: async(url) => {
        console.log("cityFetch.all");
        postData(url + "delete", "GET");
    },
    /* POST: /add */
    add: async(url, data) => {
        console.log("cityFetch.add");

        postData(url + "add", "POST", data);
    },

    /*POST: /read */
    read: async(url, data = {}) => {
        console.log("cityFetch.read");
        postData(url + "read", "POST", data);
    },
    /* POST: /delete */
    delete: async(url, data = {}) => {
        console.log("cityFetch.delete");
        postData(url + "delete", "POST", data);
    },
    /*POST: /update */
    update: async(url, data = {}) => {
        console.log("cityFetch.update");
        postData(url + "update", "POST", data);
    },

    //GET /save
    save: async(url) => {
        console.log("cityFetch.save");
        postData(url + "save", "GET");
    },
    //GET and POST /clear
    clear: async(url = "", data = {}) => {
        console.log("cityFetch.clear");
        postData(url + "clear", "GET", data);
    }
};
async function postData(url = '', method = "GET", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}
export default CityFetch;