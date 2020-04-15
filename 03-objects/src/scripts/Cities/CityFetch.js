import Community from './Community.js';
import City from './City.js';

// const com = new Community();

const CityFetch = {
    /* GET: /all */
    all: async(url) => {
        const response = await fetch(url + "all");
        const json = await response.json();
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
    },
    /* POST: /add */
    add: async(url, city) => {
        try {

            let postObject = {
                method: 'POST',
                body: city.show(), // returns json string
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }; // end postObject
            const response = await fetch(url + "add", postObject);
            const json = await response.json();
            json.status = response.status;
            json.statusText = response.statusText;
            return json;
        } catch (err) {
            console.log(err);
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
        const response = await fetch(url + "read", postObject);
        const json = await response.json();
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
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
        console.log(data);
        const response = await fetch(url + "delete", postObject);
        const json = await response.json();
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
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
        const response = await fetch(url + "update", postObject);
        const json = await response.json();
        json.status = response.status;
        json.statusText = response.statusText;
        return json;
    },

    //GET /save
    save: async(url) => {
        const response = await fetch(url + "save");
        let data = response.text();
        return data;
    },
    //GET and POST /clear
    clear: async(url = "", city = {}) => {

        let postObject = {
            method: 'POST',
            body: JSON.stringify(city), // json string
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
            console.log(err.message);
        }
    }
};


// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }
export default CityFetch;